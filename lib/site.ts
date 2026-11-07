export const siteOrigin = new URL(
  process.env.SITE_URL || 'https://deg15.github.io',
).origin;
export const isProduction = process.env.NODE_ENV === 'production';
