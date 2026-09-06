import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Asterisk,
  Fingerprint,
  MapPin,
} from 'lucide-react';
import { Navigation } from '@/components/site/navigation';
import { ExperienceList } from '@/components/site/experience-list';
import { Certifications } from '@/components/site/certifications';
import { Contact } from '@/components/site/contact';
import { Motion } from '@/components/site/motion';
import { BrandLogo, type Brand } from '@/components/site/brand-logo';
import { ServiceVisual } from '@/components/site/service-visual';
import { education, profile, services } from '@/lib/profile';

export const metadata: Metadata = { alternates: { canonical: '/' } };
const educationBrands: Brand[] = [
  'universidad-murcia',
  'wroclaw',
  'cifp-carlos-iii',
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navigation />
      <main id="contenido">
        <section id="inicio" className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-top">
            <p className="eyebrow">
              <span className="signal" /> DAVID EGEA / INGENIERO INFORMÁTICO
            </p>
            <span className="hero-location mono">
              <MapPin size={13} /> CARTAGENA, ESPAÑA
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                Software.
                <br />
                Datos.
                <br />
                <em>Criterio.</em>
                <Asterisk
                  className="hero-asterisk"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </h1>
              <p className="hero-description">
                Soy David Egea. Conecto ingeniería, datos e inteligencia
                artificial para convertir problemas complejos en{' '}
                <strong>soluciones que tienen sentido.</strong>
              </p>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablemos en LinkedIn <ArrowUpRight size={19} />
                </a>
                <a className="text-link" href="#capacidades">
                  Explora lo que hago <ArrowDown size={17} />
                </a>
              </div>
            </div>
            <figure className="portrait-block">
              <div className="portrait-frame">
                <Image
                  src="/images/david-egea.webp"
                  alt="Retrato de David Egea García"
                  width={810}
                  height={1085}
                  preload
                  sizes="(max-width: 700px) 90vw, 430px"
                />
              </div>
              <span className="portrait-note">
                <Asterisk size={24} />
                <span>
                  Curiosidad constante.
                  <br />
                  Los pies en la tierra.
                </span>
              </span>
              <figcaption>
                <span>
                  David Egea García
                  <small>
                    Ingeniero informático · CTO & cofundador de Zogic
                  </small>
                </span>
                <span className="portrait-signature" aria-hidden="true">
                  de.
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="hero-bento">
            <a className="bento-ten" href="#experiencia">
              <span className="bento-number">
                10<span>+</span>
              </span>
              <span>
                Años conectando
                <br />
                tecnología y negocio.
              </span>
              <ArrowUpRight size={19} />
            </a>
            <a className="bento-current" href="#hawkers">
              <div>
                <span className="eyebrow">
                  <span className="signal" /> ACTUALMENTE EN
                </span>
                <BrandLogo brand="hawkers" />
              </div>
              <span>
                Data Engineer
                <br />& Analyst
              </span>
              <ArrowUpRight size={20} />
            </a>
            <a className="bento-studio" href="#zogic">
              <span className="eyebrow">TAMBIÉN CONSTRUYENDO</span>
              <span className="bento-studio-title">
                <BrandLogo brand="zogic" decorative /> Zogic Studio{' '}
                <ArrowUpRight size={19} />
              </span>
              <span>Un estudio propio. Nuevas posibilidades.</span>
            </a>
          </div>
          <div className="career-strip">
            <span className="mono">
              PARTE DE
              <br />
              MI RECORRIDO
            </span>
            <div className="career-brands">
              {(['civica', 'capgemini', 'sabic', 'ticarum'] as const).map(
                (brand) => (
                  <a
                    key={brand}
                    href="#experiencia"
                    aria-label={'Ver mi experiencia en ' + brand}
                  >
                    <BrandLogo brand={brand} decorative />
                  </a>
                ),
              )}
            </div>
            <a
              className="round-link"
              href="#experiencia"
              aria-label="Explorar mi experiencia"
            >
              <ArrowDown size={20} />
            </a>
          </div>
        </section>

        <section
          id="capacidades"
          className="capabilities-section section wrap"
          aria-labelledby="capabilities-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">
                <span className="section-number">01</span> LO QUE PUEDO APORTAR
              </p>
              <h2 id="capabilities-title">
                Distintas herramientas.
                <br />
                <em>Una misma intención.</em>
              </h2>
            </div>
            <p>
              Entender lo que necesitas. Conectar las piezas. Construir algo que
              te sirva.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article
                className={'service-card service-' + service.id}
                key={service.id}
                data-reveal
              >
                <div className="service-card-top">
                  <span className="mono">
                    {service.number} /{' '}
                    {service.id === 'datos'
                      ? 'DATA & ANALYTICS'
                      : service.id === 'producto'
                        ? 'SOFTWARE & PRODUCTO'
                        : 'INTELIGENCIA ARTIFICIAL'}
                  </span>
                  <ArrowUpRight size={22} />
                </div>
                <ServiceVisual kind={service.id} />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tools">
                    {service.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="capabilities-bottom">
            <span>Del primer «¿y si…?» a algo que funciona.</span>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablemos de tu reto <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section
          id="experiencia"
          className="experience-section section"
          aria-labelledby="experience-title"
        >
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">
                  <span className="section-number">02</span> TRAYECTORIA
                  PROFESIONAL
                </p>
                <h2 id="experience-title">
                  El criterio se construye
                  <br />
                  <em>con experiencia.</em>
                </h2>
              </div>
              <p>
                Del desarrollo de aplicaciones al liderazgo de proyectos. De los
                datos a las decisiones de negocio.
              </p>
            </div>
            <article id="hawkers" className="hawkers-feature" data-reveal>
              <div className="hawkers-feature-top">
                <span className="eyebrow">
                  <span className="signal" /> MI ETAPA ACTUAL
                </span>
                <span className="mono">DIC. 2017 — ACTUALIDAD</span>
              </div>
              <div className="hawkers-feature-grid">
                <div className="hawkers-identity">
                  <h3>
                    <BrandLogo brand="hawkers" />
                  </h3>
                  <p>Data Engineer & Analyst</p>
                  <span className="mono">ELCHE, ESPAÑA</span>
                  <div className="hawkers-art" aria-hidden="true">
                    <span>SQL</span>
                    <span>Python</span>
                    <span>Snowflake</span>
                    <span>MicroStrategy</span>
                  </div>
                </div>
                <div className="hawkers-story">
                  <p className="hawkers-lead">
                    Una mirada cada vez
                    <br />
                    más completa.
                  </p>
                  <p>
                    Desde 2017 formo parte del equipo de Hawkers. Mi trabajo en
                    datos conecta la parte técnica con lo que el negocio
                    necesita entender y decidir.
                  </p>
                  <p>
                    Una trayectoria que reúne ingeniería de datos, analítica e
                    inteligencia artificial, con una base sólida en SQL, Python,
                    Snowflake y MicroStrategy.
                  </p>
                  <div className="tags">
                    <span>Data Engineering</span>
                    <span>Business Intelligence</span>
                    <span>IA aplicada</span>
                  </div>
                </div>
              </div>
              <div className="hawkers-bottom">
                <span className="mono">DATOS → INFORMACIÓN → DECISIONES</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi experiencia en LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
            <ExperienceList />
            <div className="experience-note">
              <span className="mono">LA HISTORIA CONTINÚA</span>
              <a href="#zogic">
                También estoy construyendo algo propio <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="sobre-mi"
          className="about-section section wrap"
          aria-labelledby="about-title"
        >
          <div className="about-grid">
            <div data-reveal>
              <p className="eyebrow">
                <span className="section-number">03</span> LA PERSONA DETRÁS
              </p>
              <h2 id="about-title">
                Entender primero.
                <br />
                Construir después.
                <br />
                <em>Cuidar siempre.</em>
              </h2>
              <div className="about-location">
                <MapPin size={17} />
                <span>Cartagena, junto al Mediterráneo.</span>
              </div>
              <div className="about-symbol" aria-hidden="true">
                <Asterisk strokeWidth={0.8} />
                <span className="mono">
                  SIEMPRE
                  <br />
                  APRENDIENDO.
                </span>
              </div>
            </div>
            <div className="about-copy" data-reveal>
              <p className="about-lead">
                Soy ingeniero informático. Y, sobre todo, alguien a quien le
                gusta entender cómo funcionan las cosas.
              </p>
              <p>
                Mi recorrido empezó en el desarrollo de aplicaciones, pasó por
                la consultoría y me llevó a especializarme en datos. En
                Capgemini aprendí a abordar proyectos de principio a fin. En
                Cívica sumé liderazgo y contacto directo con el cliente. En
                Hawkers he profundizado en la conexión entre tecnología y
                negocio.
              </p>
              <p>
                Hoy esa experiencia convive con las posibilidades de la
                inteligencia artificial y las ganas de construir productos
                propios. Sigo aprendiendo, probando y haciéndome preguntas.
              </p>
              <div className="principle">
                <Fingerprint size={30} strokeWidth={1.3} />
                <p>
                  Que la solución esté bien pensada, se pueda mantener y le
                  sirva de verdad a alguien.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="formacion"
          className="education-section section wrap"
          aria-labelledby="education-title"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">
                <span className="section-number">04</span> FORMACIÓN &
                CERTIFICACIONES
              </p>
              <h2 id="education-title">
                Una base sólida.
                <br />
                <em>Siempre en evolución.</em>
              </h2>
            </div>
            <p>
              La formación pone los cimientos. La curiosidad se encarga del
              resto.
            </p>
          </div>
          <div className="education-grid">
            <div className="academic-list">
              {education.map((item, i) => (
                <article className="academic-item" key={item.school}>
                  <div className="academic-logo">
                    <BrandLogo brand={educationBrands[i]} decorative />
                  </div>
                  <div>
                    <span className="mono">{item.dates}</span>
                    <h3>{item.title}</h3>
                    <p className="school-name">{item.school}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <Certifications />
          </div>
        </section>

        <section
          id="zogic"
          className="studio-section wrap"
          aria-labelledby="studio-title"
        >
          <div className="studio-panel" data-reveal>
            <div className="studio-intro">
              <p className="eyebrow">
                <span className="section-number">05</span> UN PROYECTO PROPIO
              </p>
              <h2 id="studio-title">
                De las ganas de crear
                <br />
                <em>a crear algo nuestro.</em>
              </h2>
              <p>
                Soy CTO y cofundador de Zogic, el estudio que estoy impulsando
                junto a Jesús Javier Pedreño. Un espacio para llevar esa
                experiencia a nuevos productos digitales y automatizaciones.
              </p>
              <a
                className="button-primary"
                href={profile.studio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer Zogic Studio <ArrowUpRight size={19} />
              </a>
            </div>
            <a
              className="studio-mark"
              href={profile.studio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Zogic Studio"
            >
              <span className="studio-mark-top mono">
                ESTUDIO DIGITAL INDEPENDIENTE <ArrowUpRight size={20} />
              </span>
              <div className="studio-brand-lockup">
                <BrandLogo brand="zogic" decorative />
                <span>
                  Zogic<span>Studio</span>
                </span>
              </div>
              <span className="studio-mark-bottom">
                <span>
                  Dos personas.
                  <br />
                  Ganas de construir.
                </span>
                <ArrowRight size={28} />
              </span>
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="site-footer wrap">
        <div className="footer-top">
          <a className="brand" href="#inicio">
            <span className="wordmark" aria-hidden="true">
              de<span>.</span>
            </span>
            <span className="brand-name">David Egea García</span>
          </a>
          <a className="back-to-top" href="#inicio">
            Volver arriba <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 David Egea García</span>
          <span>Software, datos y curiosidad.</span>
          <div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <Link href="/privacidad/">Privacidad</Link>
          </div>
        </div>
      </footer>
      <Motion />
    </>
  );
}
