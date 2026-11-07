import type { MetadataRoute } from 'next';
import { routes } from '@/lib/content';
import { contentDates } from '@/lib/profile';
import { siteOrigin } from '@/lib/site';
export const dynamic = 'force-static';

const url = (path: string) => `${siteOrigin}${path}`;
export default function sitemap(): MetadataRoute.Sitemap {
  return (['home', 'privacy'] as const).flatMap((page) =>
    (['es', 'en'] as const).map((locale) => ({
      url: url(routes[locale][page]),
      lastModified: contentDates.modified,
      changeFrequency: page === 'home' ? 'monthly' : 'yearly',
      priority: page === 'home' ? (locale === 'es' ? 1 : 0.8) : 0.2,
      alternates: {
        languages: {
          es: url(routes.es[page]),
          en: url(routes.en[page]),
          'x-default': url(routes.es[page]),
        },
      },
    })),
  );
}
