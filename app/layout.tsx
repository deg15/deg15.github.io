import type { Metadata, Viewport } from 'next';
import { Manrope, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import {
  siteOrigin,
  siteTitle,
  siteDescription,
  isProduction,
} from '@/lib/site';
import { profile } from '@/lib/profile';
import './globals.css';
const sans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  variable: '--font-ibm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
const serif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: { default: siteTitle, template: '%s' },
  description: siteDescription,
  applicationName: 'David Egea',
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: 'es_ES',
    type: 'website',
    siteName: 'David Egea',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: isProduction, follow: isProduction },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
};
export const viewport: Viewport = {
  themeColor: '#f4f2ed',
  width: 'device-width',
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: siteOrigin,
    image: `${siteOrigin}/images/david-egea.webp`,
    jobTitle: 'Data Engineer & Analyst',
    worksFor: { '@type': 'Organization', name: 'Hawkers Group' },
    sameAs: [profile.linkedin],
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Universidad de Murcia' },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Wrocław University of Science and Technology',
      },
    ],
    knowsAbout: [
      'Ingeniería de datos',
      'Business Intelligence',
      'Inteligencia artificial',
      'Desarrollo de software',
    ],
  };
  return (
    <html lang="es">
      <body className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
