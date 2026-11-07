import { Fragment } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { content, routes, type Locale } from '@/lib/content';
import { profile } from '@/lib/profile';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
const githubPrivacy =
  'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';

const body = {
  es: {
    intro: [
      'Esta web es el portfolio personal de David Egea García. Para cualquier consulta sobre tus datos puedes contactar conmigo a través de',
    ],
    sections: [
      [
        'Al visitar esta web',
        'La web no incorpora publicidad, herramientas de analítica ni cookies propias. Las fuentes y las imágenes se sirven desde el propio sitio, sin llamadas a terceros. El alojamiento puede procesar datos técnicos de las solicitudes, como la dirección IP, para servir la página y mantener su seguridad.',
      ],
      [
        'Al contactar conmigo',
        'Esta web no recoge mensajes ni datos mediante formularios. Los botones de contacto abren mi perfil de LinkedIn. La conversación se realiza en esa plataforma, sujeta a sus condiciones y política de privacidad.',
      ],
    ],
    externalTitle: 'Al seguir enlaces externos',
    external:
      'LinkedIn y Zogic Studio tienen sus propias políticas de privacidad. GitHub Pages, el servicio de alojamiento de esta web, puede registrar datos técnicos de las solicitudes. Puedes consultar la',
    githubLink: 'declaración de privacidad de GitHub',
    contact: 'Contactar sobre privacidad',
    updated: 'ACTUALIZADO EL 7 DE NOVIEMBRE DE 2026',
  },
  en: {
    intro: [
      'This website is David Egea García’s personal portfolio. For any question about your data you can contact me on',
    ],
    sections: [
      [
        'When you visit this website',
        'The website has no advertising, no analytics tools and no first-party cookies. Fonts and images are served from the site itself, with no third-party requests. The hosting provider may process technical request data, such as your IP address, to serve the page and keep it secure.',
      ],
      [
        'When you contact me',
        'This website does not collect messages or data through forms. The contact buttons open my LinkedIn profile. The conversation takes place on that platform, subject to its terms and privacy policy.',
      ],
    ],
    externalTitle: 'When you follow external links',
    external:
      'LinkedIn and Zogic Studio have their own privacy policies. GitHub Pages, the service hosting this website, may log technical request data. You can read the',
    githubLink: 'GitHub privacy statement',
    contact: 'Contact me about privacy',
    updated: 'UPDATED ON 7 NOVEMBER 2026',
  },
};

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = content[locale].privacy;
  const b = body[locale];
  return (
    <main className="legal-page wrap">
      <Link href={routes[locale].home} className="text-link">
        <ArrowLeft size={16} aria-hidden="true" />
        {t.back}
      </Link>
      <p className="eyebrow">{t.eyebrow}</p>
      <h1>
        {t.heading[0]}
        <br />
        <em>{t.heading[1]}</em>
      </h1>
      <p>
        {b.intro[0]}{' '}
        <a href={profile.linkedin} {...external}>
          LinkedIn
        </a>
        .
      </p>
      {b.sections.map(([title, text]) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </Fragment>
      ))}
      <h2>{b.externalTitle}</h2>
      <p>
        {b.external}{' '}
        <a href={githubPrivacy} {...external}>
          {b.githubLink}
        </a>
        .
      </p>
      <a className="text-link" href={profile.linkedin} {...external}>
        {b.contact} <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <p className="legal-date mono">{b.updated}</p>
    </main>
  );
}
