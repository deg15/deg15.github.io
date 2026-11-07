import type { Metadata } from 'next';
import { HomePage } from '@/components/site/home-page';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { alternates: alternates('en', 'home') };
export default function Home() {
  return <HomePage locale="en" />;
}
