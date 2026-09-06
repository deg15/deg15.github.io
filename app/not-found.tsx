import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return (
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
      <Link className="button-primary" href="/">
        <ArrowLeft size={17} />
        Volver al inicio
      </Link>
    </main>
  );
}
