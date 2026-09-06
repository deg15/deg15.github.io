import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const linkedin = 'https://www.linkedin.com/in/davidegeagarcia/';
async function noOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
}

test('trayectoria completa, tres estudios y once certificaciones históricas', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Software.');
  await expect(page.locator('#hawkers')).toContainText('DIC. 2017');
  await expect(page.locator('#hawkers')).toContainText(
    'Data Engineer & Analyst',
  );
  for (const company of [
    'Cívica Software',
    'Capgemini',
    'Bitec',
    'TICARUM',
    'SABIC Innovative Plastics',
    'VilVite',
  ]) {
    const button = page.getByRole('button', { name: new RegExp(company) });
    await button.click();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
  }
  await expect(page.locator('.job-role')).toHaveCount(7);
  await expect(page.locator('.academic-item')).toHaveCount(3);
  await page
    .getByRole('button', { name: 'Explorar las 11 certificaciones' })
    .click();
  await expect(page.locator('.certificate-list li')).toHaveCount(11);
  await expect(page.locator('.certificate-list')).toContainText(
    'Analytics Architect',
  );
  await expect(page.locator('.certificate-list')).toContainText('Jun. 2020');
  await expect(page.locator('.certificate-list')).toContainText(
    'Oracle Database SQL Certified Expert',
  );
  await expect(page.locator('.certification-note')).toContainText(
    'no su vigencia actual',
  );
  await expect(page.locator('body')).not.toContainText('SOHO');
  await expect(
    page.getByRole('link', { name: 'Conocer Zogic Studio' }),
  ).toHaveAttribute('href', 'https://zogicstudio.com/');
  expect(errors).toEqual([]);
});

test('contacto exclusivo por LinkedIn, sin correo ni formulario', async ({
  page,
}) => {
  const posts: string[] = [];
  page.on('request', (request) => {
    if (request.method() === 'POST') posts.push(request.url());
  });
  await page.goto('/');
  await expect(
    page.locator('form, input, textarea, a[href^="mailto:"], a[href^="tel:"]'),
  ).toHaveCount(0);
  const contactLinks = page.locator(
    '.hero-actions .button-primary, .nav-contact, .mobile-contact, #contacto a, .capabilities-bottom a',
  );
  expect(await contactLinks.count()).toBe(5);
  for (const link of await contactLinks.all()) {
    await expect(link).toHaveAttribute('href', linkedin);
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
  await page.goto('/privacidad/');
  await expect(page.locator('a[href^="mailto:"], form')).toHaveCount(0);
  await expect(page.locator('main')).toContainText(
    'no recoge mensajes ni datos mediante formularios',
  );
  await expect(
    page.getByRole('link', { name: 'Contactar sobre privacidad' }),
  ).toHaveAttribute('href', linkedin);
  expect(posts).toEqual([]);
});

test('los 14 logos se sirven localmente y las imágenes visibles se cargan', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await page
    .getByRole('button', { name: 'Explorar las 11 certificaciones' })
    .click();
  const sources = await page
    .locator('img[src^="/logos/"]')
    .evaluateAll((images) => [
      ...new Set(images.map((image) => image.getAttribute('src')!)),
    ]);
  expect(sources).toHaveLength(14);
  for (const source of sources) {
    const response = await request.get(source);
    expect(response.status(), source).toBe(200);
    expect(response.headers()['content-type'], source).toMatch(/^image\//);
    expect((await response.body()).byteLength, source).toBeGreaterThan(100);
  }
  for (const section of [
    '#inicio',
    '#capacidades',
    '#experiencia',
    '#formacion',
    '#zogic',
  ]) {
    await page.locator(section).scrollIntoViewIfNeeded();
    for (const img of await page.locator(section + ' img').all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty('complete', true);
      expect(
        await img.evaluate((image) => (image as HTMLImageElement).naturalWidth),
      ).toBeGreaterThan(0);
    }
  }
});

test('móvil: anclas, teclado, foco del menú y adaptación de 320 a 1440 px', async ({
  page,
}) => {
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await noOverflow(page);
    await page
      .getByRole('button', { name: 'Explorar las 11 certificaciones' })
      .click();
    await noOverflow(page);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Abrir menú' });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    await expect(page.getByRole('dialog').locator(':focus')).toBeVisible();
  }
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole('navigation', { name: 'Navegación móvil' })
    .getByRole('link', { name: 'Formación', exact: true })
    .click();
  await expect(page).toHaveURL(/#formacion$/);
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page.locator('#education-title')).toBeInViewport();
});

test('accesibilidad WCAG en escritorio, historial expandido y menú móvil', async ({
  page,
}) => {
  await page.goto('/');
  const scan = async () =>
    new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
  expect((await scan()).violations).toEqual([]);
  await page.getByRole('button', { name: /Cívica Software/ }).click();
  await page
    .getByRole('button', { name: 'Explorar las 11 certificaciones' })
    .click();
  expect((await scan()).violations).toEqual([]);
  await page.setViewportSize({ width: 390, height: 844 });
  expect((await scan()).violations).toEqual([]);
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  expect((await scan()).violations).toEqual([]);
});

test('exportación estática: SEO público, imagen social, privacidad y 404', async ({
  page,
  request,
}) => {
  await page.goto('/');
  await expect(page).toHaveTitle('David Egea García — Software, datos & IA');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://deg15.github.io/',
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    'content',
    'index, follow',
  );
  const broken = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((a) => a.getAttribute('href'))
        .filter((href) => href && !document.getElementById(href.slice(1))),
    );
  expect(broken).toEqual([]);
  const social = await page
    .locator('meta[property="og:image"]')
    .getAttribute('content');
  const socialURL = new URL(social!);
  expect(socialURL.origin).toBe('https://deg15.github.io');
  expect(socialURL.pathname).toMatch(/\.png$/);
  const socialResult = await request.get(socialURL.pathname + socialURL.search);
  expect(socialResult.status()).toBe(200);
  expect(socialResult.headers()['content-type']).toContain('image/png');
  expect((await request.get('/apple-icon.png')).status()).toBe(200);
  expect((await request.get('/favicon.ico')).status()).toBe(200);
  expect((await request.get('/robots.txt')).status()).toBe(200);
  expect(await (await request.get('/sitemap.xml')).text()).toContain(
    'https://deg15.github.io/privacidad/',
  );
  // Comprueba los recursos que necesita la página; .nojekyll es un marcador
  // de despliegue y GitHub Pages no tiene por qué servirlo públicamente.
  for (const [selector, attribute, contentType] of [
    ['script[src^="/_next/"]', 'src', /javascript/],
    ['link[rel="stylesheet"][href^="/_next/"]', 'href', /text\/css/],
  ] as const) {
    const asset = await page.locator(selector).first().getAttribute(attribute);
    expect(asset).toBeTruthy();
    const result = await request.get(asset!);
    expect(result.status()).toBe(200);
    expect(result.headers()['content-type']).toMatch(contentType);
    expect((await result.body()).length).toBeGreaterThan(0);
  }
  await page.getByRole('link', { name: 'Privacidad', exact: true }).click();
  await expect(page).toHaveURL(/\/privacidad\/$/);
  await expect(page.locator('h1')).toContainText('Tu privacidad');
  const missing = await page.goto('/no-existe');
  expect(missing?.status()).toBe(404);
  await page.getByRole('link', { name: 'Volver al inicio' }).click();
  await expect(page.locator('h1')).toContainText('Software.');
});

test('sin JavaScript siguen disponibles el contenido principal y LinkedIn', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL || 'http://localhost:4173');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('#hawkers')).toContainText(
    'Data Engineer & Analyst',
  );
  await expect(page.locator('.academic-item')).toHaveCount(3);
  await expect(page.locator('#contacto a')).toHaveAttribute('href', linkedin);
  await context.close();
});
