import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/profile';
export const metadata: Metadata = {
  title: 'Privacidad · David Egea',
  description:
    'Información sobre el uso de datos en el portfolio personal de David Egea.',
  alternates: { canonical: '/privacidad/' },
  openGraph: {
    title: 'Privacidad · David Egea',
    description:
      'Información sobre el uso de datos en el portfolio personal de David Egea.',
  },
  twitter: {
    title: 'Privacidad · David Egea',
    description:
      'Información sobre el uso de datos en el portfolio personal de David Egea.',
  },
};
export default function Privacy() {
  return (
    <main className="legal-page wrap">
      <Link href="/" className="text-link">
        <ArrowLeft size={16} />
        Volver al portfolio
      </Link>
      <p className="eyebrow">DAVID EGEA / INFORMACIÓN SOBRE DATOS</p>
      <h1>
        Tu privacidad,
        <br />
        <em>con claridad.</em>
      </h1>
      <p>
        Esta web es el portfolio personal de David Egea García. Para cualquier
        consulta sobre tus datos puedes contactar conmigo a través de{' '}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <h2>Al visitar esta web</h2>
      <p>
        La web no incorpora publicidad, herramientas de analítica ni cookies
        propias. El alojamiento puede procesar datos técnicos de las
        solicitudes, como la dirección IP, para servir la página y mantener su
        seguridad.
      </p>
      <h2>Al contactar conmigo</h2>
      <p>
        Esta web no recoge mensajes ni datos mediante formularios. Los botones
        de contacto abren mi perfil de LinkedIn. La conversación se realiza en
        esa plataforma, sujeta a sus condiciones y política de privacidad.
      </p>
      <h2>Al seguir enlaces externos</h2>
      <p>
        LinkedIn y Zogic tienen sus propias políticas de privacidad. GitHub
        Pages, el servicio de alojamiento de esta web, puede registrar datos
        técnicos de las solicitudes. Puedes consultar la{' '}
        <a
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noopener noreferrer"
        >
          declaración de privacidad de GitHub
        </a>
        .
      </p>
      <a
        className="text-link"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar sobre privacidad <ArrowUpRight size={16} />
      </a>
      <p className="legal-date mono">ACTUALIZADO EL 5 DE SEPTIEMBRE DE 2026</p>
    </main>
  );
}
