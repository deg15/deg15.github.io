import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/site/privacy-page';
import { content } from '@/lib/content';
import { alternates, pageOpenGraph, pageTwitter } from '@/lib/seo';

const t = content.en.privacy;
export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: alternates('en', 'privacy'),
  openGraph: pageOpenGraph('en', 'privacy', t.title, t.description),
  twitter: pageTwitter(t.title, t.description),
};
export default function Privacy() {
  return <PrivacyPage locale="en" />;
}
