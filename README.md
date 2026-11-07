# David Egea García — web personal

Portfolio de David Egea García, CTO y cofundador de [Zogic Studio](https://zogicstudio.com/) e IA & Data Engineer en Hawkers. En español (`/`) e inglés (`/en/`). Next.js 16, React 19 y exportación estática para GitHub Pages. Contacto exclusivo por LinkedIn.

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

Vista previa: http://localhost:4173. El build genera `out/`: las dos versiones de la web, las imágenes sociales PNG, los logos, las fuentes locales, `llms.txt` y `en/llms.txt`, sitemap con hreflang, robots y la 404 bilingüe. No necesita red: las fuentes están en `app/fonts/`.

```sh
npm run lint
npm run typecheck
npm test
```

Las pruebas usan Chrome en local y Chromium en CI. En GitHub Actions se instala el navegador automáticamente. Se comprueban contenido, logos, LinkedIn, teclado, accesibilidad WCAG, tamaños de 320 a 1920 px, SEO e identidad (ProfilePage/Person enlazada con Zogic Studio), las dos versiones de idioma, `llms.txt`, 404 y contenido sin JavaScript. Ejecutar el build antes de los tests.

## Contenido

- `lib/content.ts`: todos los textos en español e inglés (el tipo obliga a que los dos idiomas tengan las mismas claves).
- `lib/profile.ts`: datos sin idioma: enlaces, certificaciones, proyectos de Zogic y fechas de la ficha ProfilePage (`contentDates.modified`, actualizar al cambiar contenido).
- `lib/seo.ts` y `lib/llms.ts`: metadatos, hreflang, JSON-LD y `llms.txt`, generados desde el mismo contenido.
- `components/site/home-page.tsx` y `app/globals.css`: composición visual y estilos.
- `app/(es)` y `app/(en)/en`: un layout raíz por idioma (`<html lang>` correcto); la 404 está en `app/global-not-found.tsx`.
- `public/logos/`: marcas locales; [procedencia](docs/logos.md).
- `scripts/generate-social.mjs`: imágenes sociales de los dos idiomas, regeneradas antes de cada build con las fuentes de `scripts/assets/fonts/`.
- [Contenido y fuentes](docs/contenido-y-fuentes.md) · [Decisiones de diseño](docs/diseno.md).
- [Publicación en GitHub Pages](docs/github-pages.md).

La dirección pública configurada es `https://deg15.github.io/`. `SITE_URL` permite cambiar el origen en una compilación futura. Este proyecto usa la raíz del dominio, sin prefijo de repositorio.
