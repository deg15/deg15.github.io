import type { Viewport } from 'next';
import { fontVariables } from '@/lib/fonts';
import { rootMetadata } from '@/lib/seo';
import '../globals.css';

export const metadata = rootMetadata('en');
export const viewport: Viewport = {
  themeColor: '#f4f2ed',
  width: 'device-width',
  initialScale: 1,
};
export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
