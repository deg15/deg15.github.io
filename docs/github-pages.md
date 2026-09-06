# Publicación en GitHub Pages

Cuenta: `deg15`. Repositorio público: [deg15/deg15.github.io](https://github.com/deg15/deg15.github.io). Remoto local `origin` configurado por SSH mediante el alias `github.com-personal`, autenticado como `deg15`. Web publicada: https://deg15.github.io/.

La web está configurada con `output: 'export'`, imágenes sin optimizador de servidor y rutas con barra final. GitHub sirve exclusivamente `out/`. No necesita Node.js, backend ni variables secretas en producción.

## Flujo

`.github/workflows/pages.yml` se ejecuta cuando David sube cambios a `main` o mediante **Run workflow**. Instala dependencias con el lockfile, ejecuta lint, build, TypeScript y las siete pruebas de navegador. Solo después publica el artefacto en el entorno `github-pages`.

Las acciones oficiales usadas son checkout v7, setup-node v7, configure-pages v6, upload-pages-artifact v5 y deploy-pages v5; sus versiones se consultaron en los repositorios oficiales.

En GitHub, **Settings → Pages → Build and deployment → Source** está configurado como **GitHub Actions** (`build_type: workflow`, comprobado mediante API). Cada push a `main` inicia una nueva publicación.

## Control de la publicación

David ha autorizado expresamente el commit inicial, el push y la publicación en esta sesión. Esta autorización corresponde a este despliegue; no cambia las preferencias generales sobre otros repositorios.

Publicación inicial del 6 de septiembre de 2026: commit `5888e2c`, subido a `main`, y [ejecución de GitHub Actions completada](https://github.com/deg15/deg15.github.io/actions/runs/34020605927). Pasan lint, TypeScript, build y las siete pruebas de Playwright en CI. La URL pública responde con HTTP 200 y HTTPS; se ha revisado visualmente en escritorio y móvil.

Para comprobar el sitio publicado: `BASE_URL=https://deg15.github.io npm test`. La prueba de exportación verifica que GitHub sirve el JavaScript y CSS de `/_next/`; no exige una URL pública para el marcador `.nojekyll`.

Si se publica bajo otra cuenta o con dominio propio, cambiar `SITE_URL` en el workflow y revisar `lib/site.ts`. Para una web de proyecto bajo `/nombre-repositorio/` haría falta adaptar también el prefijo de rutas y assets; la configuración actual corresponde a la web personal raíz.

Fuentes: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [plantilla oficial Next.js](https://github.com/nextjs/deploy-github-pages/blob/main/.github/workflows/deploy.yml) y guía de exportación de la versión de Next.js instalada.
