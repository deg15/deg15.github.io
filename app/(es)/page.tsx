import type { Metadata } from 'next';
import { HomePage } from '@/components/site/home-page';
import { alternates } from '@/lib/seo';

export const metadata: Metadata = { alternates: alternates('es', 'home') };
export default function Home() {
  return <HomePage locale="es" />;
}
