import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { fontVariables } from '@/lib/fonts';
import './globals.css';

// Con un layout raíz por idioma, la 404 global es bilingüe.
export const metadata: Metadata = {
  title: 'Página no encontrada · Page not found — David Egea García',
  robots: { index: false },
};
export default function GlobalNotFound() {
  return (
    <html lang="es">
      <body className={fontVariables}>
        <main className="legal-page wrap">
          <p className="eyebrow">404 / POR AQUÍ NO ERA</p>
          <h1>
            Un pequeño
            <br />
            <em>desvío.</em>
          </h1>
          <p>
            Esta página no existe. Mi trayectoria, lo que hago y las formas de
            contactar conmigo están en el portfolio.
          </p>
          <p lang="en">
            This page doesn’t exist. You’ll find my experience, what I do and
            how to reach me in the portfolio.
          </p>
          <div className="not-found-actions">
            <Link className="button-primary" href="/">
              <ArrowLeft size={17} aria-hidden="true" />
              Volver al inicio
            </Link>
            <Link className="text-link" href="/en/" hrefLang="en" lang="en">
              English version
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
