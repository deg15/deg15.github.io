import type { MetadataRoute } from 'next';
import { siteOrigin, isProduction } from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(isProduction ? { allow: '/' } : { disallow: '/' }),
    },
    ...(isProduction ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
