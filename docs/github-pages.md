# Publicación en GitHub Pages

Cuenta: `deg15`. Repositorio público creado: [deg15/deg15.github.io](https://github.com/deg15/deg15.github.io). Remoto local `origin` configurado por SSH mediante el alias `github.com-personal`, autenticado como `deg15`. Dirección prevista: https://deg15.github.io/.

La web está configurada con `output: 'export'`, imágenes sin optimizador de servidor y rutas con barra final. GitHub sirve exclusivamente `out/`. No necesita Node.js, backend ni variables secretas en producción.

## Flujo

`.github/workflows/pages.yml` se ejecuta cuando David sube cambios a `main` o mediante **Run workflow**. Instala dependencias con el lockfile, ejecuta lint, build, TypeScript y las siete pruebas de navegador. Solo después publica el artefacto en el entorno `github-pages`.

Las acciones oficiales usadas son checkout v7, setup-node v7, configure-pages v6, upload-pages-artifact v5 y deploy-pages v5; sus versiones se consultaron en los repositorios oficiales.

En GitHub, **Settings → Pages → Build and deployment → Source** ya está configurado como **GitHub Actions** (`build_type: workflow`, comprobado mediante API). El primer push a `main` inicia la publicación; el sitio estará disponible cuando finalice correctamente el job de despliegue.

## Control de la publicación

David ha autorizado expresamente el commit inicial, el push y la publicación en esta sesión. Esta autorización corresponde a este despliegue; no cambia las preferencias generales sobre otros repositorios. Tras subir el commit inicial, comprobar la ejecución verde en **Actions** y abrir la URL pública, la página de privacidad y una URL inexistente para verificar el 404.

Estado previo al primer push, comprobado el 6 de septiembre de 2026: repositorio público vacío, rama predeterminada `main`, Pages con `build_type: workflow`, HTTPS activado y `status: null`. No se ha realizado ningún commit ni push. Localmente pasan lint, TypeScript, build y las siete pruebas de Playwright; se ha revisado la presentación en escritorio, móvil y el menú en horizontal. La ejecución en GitHub Actions y la comprobación del dominio público quedan pendientes del primer push.

Si se publica bajo otra cuenta o con dominio propio, cambiar `SITE_URL` en el workflow y revisar `lib/site.ts`. Para una web de proyecto bajo `/nombre-repositorio/` haría falta adaptar también el prefijo de rutas y assets; la configuración actual corresponde a la web personal raíz.

Fuentes: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [plantilla oficial Next.js](https://github.com/nextjs/deploy-github-pages/blob/main/.github/workflows/deploy.yml) y guía de exportación de la versión de Next.js instalada.
