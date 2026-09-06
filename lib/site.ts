export const siteOrigin = new URL(
  process.env.SITE_URL || 'https://deg15.github.io',
).origin;
export const isProduction = process.env.NODE_ENV === 'production';
export const siteTitle = 'David Egea — Software, datos & IA';
export const siteDescription =
  'Ingeniero informático, Data Engineer & Analyst en Hawkers y cofundador de Zogic. Más de diez años conectando datos, tecnología y negocio. Cartagena, España.';
