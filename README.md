# David Egea — web personal

Portfolio en español de David Egea García. Next.js 16, React 19 y exportación estática para GitHub Pages. Contacto exclusivo por LinkedIn.

## Desarrollo y comprobación

Node.js 24 LTS y npm. No se necesitan claves ni servicios externos.

```sh
npm ci
npm run dev
```

Para comprobar exactamente los archivos que se publicarán:

```sh
npm run build
npm run start
```

Vista previa: http://localhost:4173. El build genera `out/`, incluida la imagen social PNG, los logos, las fuentes locales, sitemap, robots y la página 404. Las Google Fonts se descargan durante la compilación; el visitante las recibe desde el propio sitio.

```sh
npm run lint
npm run typecheck
npm test
```

Las pruebas usan Chrome en local y Chromium en CI. En GitHub Actions se instala el navegador automáticamente. Se comprueban contenido, logos, LinkedIn, teclado, accesibilidad WCAG, tamaños de 320 a 1440 px, SEO, 404 y contenido sin JavaScript. Ejecutar el build antes de los tests.

## Contenido

- `lib/profile.ts`: trayectoria, estudios, certificaciones y enlaces.
- `app/page.tsx` y `app/globals.css`: composición visual y estilos.
- `public/logos/`: marcas locales; [procedencia](docs/logos.md).
- `scripts/generate-social.mjs`: imagen social, regenerada antes de cada build.
- [Contenido y fuentes](docs/contenido-y-fuentes.md) · [Decisiones de diseño](docs/diseno.md).
- [Publicación en GitHub Pages](docs/github-pages.md).

La dirección pública configurada es `https://deg15.github.io/`. `SITE_URL` permite cambiar el origen en una compilación futura. Este proyecto usa la raíz del dominio, sin prefijo de repositorio.
