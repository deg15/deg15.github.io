import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/site/privacy-page';
import { content } from '@/lib/content';
import { alternates, pageOpenGraph, pageTwitter } from '@/lib/seo';

const t = content.es.privacy;
export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: alternates('es', 'privacy'),
  openGraph: pageOpenGraph('es', 'privacy', t.title, t.description),
  twitter: pageTwitter(t.title, t.description),
};
export default function Privacy() {
  return <PrivacyPage locale="es" />;
}
