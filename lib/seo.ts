import type { Metadata } from 'next';
import { content, routes, type Locale } from '@/lib/content';
import { contentDates, profile } from '@/lib/profile';
import { siteOrigin, isProduction } from '@/lib/site';

export const personId = `${siteOrigin}/#person`;

/** Metadatos compartidos por cada layout raíz (uno por idioma). */
export function rootMetadata(locale: Locale): Metadata {
  const t = content[locale];
  return {
    metadataBase: new URL(siteOrigin),
    title: { default: t.meta.title, template: '%s' },
    description: t.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: `${siteOrigin}/` }],
    creator: profile.name,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: routes[locale].home,
      locale: t.ogLocale,
      alternateLocale: locale === 'es' ? 'en_GB' : 'es_ES',
      type: 'profile',
      siteName: profile.name,
      firstName: 'David',
      lastName: 'Egea García',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: { index: isProduction, follow: isProduction },
    icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  };
}

/** canonical + hreflang de una página que existe en los dos idiomas. */
export function alternates(locale: Locale, page: 'home' | 'privacy') {
  return {
    canonical: routes[locale][page],
    languages: {
      es: routes.es[page],
      en: routes.en[page],
      'x-default': routes.es[page],
    },
  };
}

/** ProfilePage con la Person de David (misma @id en los dos idiomas). */
export function profileJsonLd(locale: Locale) {
  const t = content[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteOrigin}${routes[locale].home}#profilepage`,
    url: `${siteOrigin}${routes[locale].home}`,
    name: t.meta.title,
    inLanguage: t.inLanguage,
    dateCreated: contentDates.created,
    dateModified: contentDates.modified,
    mainEntity: {
      '@type': 'Person',
      '@id': personId,
      name: profile.name,
      alternateName: profile.shortName,
      url: `${siteOrigin}/`,
      image: `${siteOrigin}/images/david-egea.webp`,
      jobTitle: t.person.jobTitle,
      worksFor: [
        {
          '@type': 'Organization',
          '@id': profile.studioOrganizationId,
          name: 'Zogic Studio',
          url: profile.studio,
        },
        { '@type': 'Organization', name: 'Hawkers Group' },
      ],
      sameAs: [profile.linkedin],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Universidad de Murcia' },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Wrocław University of Science and Technology',
        },
      ],
      knowsAbout: t.person.knowsAbout,
    },
  };
}

/** Open Graph completo para una página interior (Next no fusiona el del layout). */
export function pageOpenGraph(
  locale: Locale,
  page: 'home' | 'privacy',
  title: string,
  description: string,
) {
  return {
    title,
    description,
    url: routes[locale][page],
    locale: content[locale].ogLocale,
    alternateLocale: locale === 'es' ? 'en_GB' : 'es_ES',
    siteName: profile.name,
    type: 'website' as const,
  };
}

/** Twitter/X: la página interior reemplaza el objeto del layout entero. */
export function pageTwitter(title: string, description: string) {
  return { card: 'summary_large_image' as const, title, description };
}
