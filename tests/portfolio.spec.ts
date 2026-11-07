import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const linkedin = 'https://www.linkedin.com/in/davidegeagarcia/';
const certificationsToggle = (
  page: Page,
  label = 'Explorar las 11 certificaciones',
) => page.locator('summary.certificate-toggle', { hasText: label });
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
  await expect(page.locator('#hawkers')).toContainText('IA & Data Engineer');
  for (const company of [
    'Cívica Software',
    'Capgemini',
    'Bitec',
    'TICARUM',
    'SABIC Innovative Plastics',
    'VilVite',
  ]) {
    const item = page.locator('details.experience-item', { hasText: company });
    await item.locator('summary').click();
    await expect(item).toHaveAttribute('open', '');
  }
  await expect(page.locator('.job-role')).toHaveCount(7);
  await expect(page.locator('.academic-item')).toHaveCount(3);
  await certificationsToggle(page).click();
  await expect(page.locator('.certificate-list li')).toHaveCount(11);
  await expect(page.locator('.certificate-list')).toBeVisible();
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
  await certificationsToggle(page).click();
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

test('móvil: anclas, teclado, foco del menú y adaptación de 320 a 1920 px', async ({
  page,
}) => {
  for (const width of [320, 360, 390, 768, 900, 901, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/en/');
    await noOverflow(page);
    await page.goto('/');
    await noOverflow(page);
    await certificationsToggle(page).click();
    await page.locator('details.experience-item summary').first().click();
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

test('el salto al contenido mueve el foco y Zogic es accesible en ambos menús', async ({
  page,
}) => {
  for (const width of [390, 901, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(
      page.getByRole('link', { name: 'Saltar al contenido' }),
    ).toBeFocused();
    await page.keyboard.press('Enter');
    const main = page.locator('#contenido');
    await expect(main).toBeFocused();
    await expect(main).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Tab');
    await expect(page.locator('.hero-actions .button-primary')).toBeFocused();

    const mobile = width <= 900;
    if (mobile) await page.getByRole('button', { name: 'Abrir menú' }).click();
    const navigation = page.getByRole('navigation', {
      name: mobile ? 'Navegación móvil' : 'Navegación principal',
    });
    await navigation
      .getByRole('link', { name: 'Zogic Studio', exact: true })
      .click();
    await expect(page).toHaveURL(/#zogic$/);
    await expect(page.locator('#studio-title')).toBeInViewport();
    if (mobile) await expect(page.getByRole('dialog')).not.toBeVisible();
    await noOverflow(page);
  }
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
  await page
    .locator('details.experience-item', { hasText: 'Cívica Software' })
    .locator('summary')
    .click();
  await certificationsToggle(page).click();
  expect((await scan()).violations).toEqual([]);
  await page.goto('/en/');
  expect((await scan()).violations).toEqual([]);
  await page.goto('/');
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
  await expect(page).toHaveTitle(
    'David Egea García — CTO de Zogic Studio · IA & Data Engineer',
  );
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
  // Identidad coherente con zogicstudio.com (Person ↔ #organization).
  const profilePage = JSON.parse(
    (await page
      .locator('script[type="application/ld+json"]')
      .textContent()) as string,
  );
  expect(profilePage).toMatchObject({
    '@type': 'ProfilePage',
    '@id': 'https://deg15.github.io/#profilepage',
    url: 'https://deg15.github.io/',
    inLanguage: 'es-ES',
  });
  const person = profilePage.mainEntity;
  expect(person).toMatchObject({
    '@type': 'Person',
    '@id': 'https://deg15.github.io/#person',
    name: 'David Egea García',
    alternateName: 'David Egea',
    url: 'https://deg15.github.io/',
    image: 'https://deg15.github.io/images/david-egea.webp',
    jobTitle: ['CTO y cofundador', 'IA & Data Engineer'],
    sameAs: [linkedin],
  });
  expect(person.worksFor[0]).toEqual({
    '@type': 'Organization',
    '@id': 'https://zogicstudio.com/#organization',
    name: 'Zogic Studio',
    url: 'https://zogicstudio.com/',
  });
  expect(person.worksFor[1]).toEqual({
    '@type': 'Organization',
    name: 'Hawkers Group',
    url: 'https://www.hawkersco.com/',
  });
  for (const [lang, href] of [
    ['es', 'https://deg15.github.io/'],
    ['en', 'https://deg15.github.io/en/'],
    ['x-default', 'https://deg15.github.io/'],
  ])
    await expect(
      page.locator(`link[rel="alternate"][hreflang="${lang}"]`),
    ).toHaveAttribute('href', href);
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    'content',
    'https://deg15.github.io/',
  );
  await expect(page.locator('.studio-projects a')).toHaveCount(5);
  await expect(
    page.locator(
      '.studio-projects a[href="https://zogicstudio.com/proyectos/klep"]',
    ),
  ).toContainText('Klep');
  await expect(page.locator('.footer-bottom')).toContainText(
    `© ${new Date().getFullYear()} David Egea García`,
  );
  await expect(
    page.locator(
      '.portrait-block figcaption a[href="https://zogicstudio.com/"]',
    ),
  ).toHaveText('Zogic Studio');
  await expect(
    page.locator(
      '.portrait-block figcaption a[href="https://www.hawkersco.com/"]',
    ),
  ).toHaveText('Hawkers');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /CTO y cofundador de Zogic Studio e IA & Data Engineer en Hawkers/,
  );
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
  const sitemap = await (await request.get('/sitemap.xml')).text();
  for (const url of ['/', '/privacidad/', '/en/', '/en/privacy/'])
    expect(sitemap).toContain(`<loc>https://deg15.github.io${url}</loc>`);
  for (const [path, heading] of [
    ['/llms.txt', '# David Egea García (David Egea)'],
    ['/en/llms.txt', 'CTO & Co-founder of [Zogic Studio]'],
  ]) {
    const llms = await request.get(path);
    expect(llms.status(), path).toBe(200);
    expect(await llms.text(), path).toContain(heading);
  }
  // El original de 1,7 MB ya no se publica.
  expect((await request.get('/images/david-egea.png')).status()).toBe(404);
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

test('versión en inglés: idioma, metadatos, identidad y navegación entre idiomas', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .getByRole('navigation', { name: 'Navegación principal' })
    .getByRole('link', { name: 'Read in English' })
    .click();
  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveTitle(
    'David Egea García — CTO of Zogic Studio · AI & Data Engineer',
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://deg15.github.io/en/',
  );
  await expect(page.locator('#hawkers')).toContainText('AI & Data Engineer');
  await expect(page.locator('.portrait-block figcaption')).toContainText(
    'CTO & Co-founder of Zogic Studio',
  );
  const profilePage = JSON.parse(
    (await page
      .locator('script[type="application/ld+json"]')
      .textContent()) as string,
  );
  expect(profilePage.inLanguage).toBe('en-GB');
  expect(profilePage.mainEntity['@id']).toBe('https://deg15.github.io/#person');
  expect(profilePage.mainEntity.jobTitle).toEqual([
    'CTO & Co-founder',
    'AI & Data Engineer',
  ]);
  await certificationsToggle(page, 'Explore all 11 certifications').click();
  await expect(page.locator('.certificate-list')).toContainText('Jun 2020');
  await expect(
    page.locator(
      '.studio-projects a[href="https://zogicstudio.com/en/proyectos/klep"]',
    ),
  ).toBeVisible();
  await page.getByRole('link', { name: 'Privacy', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/privacy\/$/);
  await expect(page.locator('h1')).toContainText('Your privacy');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await noOverflow(page);
  await page.getByRole('link', { name: 'Back to the portfolio' }).click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Leer en español' })
    .click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('sin JavaScript siguen disponibles el contenido principal y LinkedIn', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(process.env.BASE_URL || 'http://localhost:4173');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('#hawkers')).toContainText('IA & Data Engineer');
  await expect(page.locator('.academic-item')).toHaveCount(3);
  await expect(page.locator('#contacto a')).toHaveAttribute('href', linkedin);
  // Los desplegables nativos funcionan y su contenido ya está en el HTML.
  const civica = page.locator('details.experience-item', {
    hasText: 'Cívica Software',
  });
  await civica.locator('summary').click();
  await expect(civica.locator('.job-role').first()).toBeVisible();
  await certificationsToggle(page).click();
  await expect(page.locator('.certificate-list li')).toHaveCount(11);
  await expect(page.locator('.certificate-list')).toBeVisible();
  await expect(page.locator('.studio-projects li')).toHaveCount(4);
  // En móvil, sin JavaScript, el menú lleva a la navegación del pie.
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('link', { name: 'Abrir menú' }).click();
  await expect(page).toHaveURL(/#secciones$/);
  const sections = page.getByRole('navigation', { name: 'Secciones' });
  await expect(sections).toBeInViewport();
  await sections.getByRole('link', { name: 'Formación', exact: true }).click();
  await expect(page).toHaveURL(/#formacion$/);
  await expect(page.locator('#education-title')).toBeInViewport();
  await context.close();
});
