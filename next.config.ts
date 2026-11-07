import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  devIndicators: false,
  images: { unoptimized: true },
  // Un layout raíz por idioma (app/(es), app/(en)): la 404 vive en
  // app/global-not-found.tsx.
  experimental: { globalNotFound: true },
};
export default nextConfig;
