import Image from 'next/image';
import Link from 'next/link';
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
import { CurrentYear } from '@/components/site/current-year';
import { BrandLogo, brandName } from '@/components/site/brand-logo';
import { ServiceVisual } from '@/components/site/service-visual';
import { content, routes, type Locale } from '@/lib/content';
import { profile, zogicProjects } from '@/lib/profile';
import { profileJsonLd } from '@/lib/seo';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
const careerBrands = ['civica', 'capgemini', 'sabic', 'ticarum'] as const;

export function HomePage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const other = locale === 'es' ? 'en' : 'es';
  const { hero, capabilities, experience, about, education, studio } = t;
  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.common.skip}
      </a>
      <Navigation t={t.common} switchHref={routes[other].home} />
      <main id="contenido" tabIndex={-1}>
        <section id="inicio" className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-top">
            <p className="eyebrow">
              <span className="signal" /> {hero.eyebrow}
            </p>
            <span className="hero-location mono">
              <MapPin size={13} aria-hidden="true" /> {hero.location}
            </span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">
                {hero.title[0]}
                <br />
                {hero.title[1]}
                <br />
                <em>{hero.title[2]}</em>
                <Asterisk
                  className="hero-asterisk"
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </h1>
              <p className="hero-description">
                {hero.lead} <strong>{hero.leadStrong}</strong>
              </p>
              <div className="hero-actions">
                <a
                  className="button-primary"
                  href={profile.linkedin}
                  {...external}
                >
                  {hero.cta} <ArrowUpRight size={19} aria-hidden="true" />
                </a>
                <a className="text-link" href="#capacidades">
                  {hero.explore} <ArrowDown size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
            <figure className="portrait-block">
              <div className="portrait-frame">
                <Image
                  src="/images/david-egea.webp"
                  alt={hero.portraitAlt}
                  width={860}
                  height={860}
                  preload
                  sizes="(max-width: 700px) 90vw, 430px"
                />
              </div>
              <figcaption>
                <span>
                  {profile.name}
                  <small>
                    <span>
                      {hero.captionStudio}{' '}
                      <a href={t.studioUrl} {...external}>
                        Zogic Studio
                      </a>
                    </span>{' '}
                    ·{' '}
                    <span>
                      {hero.captionHawkers}{' '}
                      <a href={profile.hawkers} {...external}>
                        Hawkers
                      </a>
                    </span>
                  </small>
                </span>
                <span className="portrait-signature" aria-hidden="true">
                  deg.
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
                {hero.years[0]}
                <br />
                {hero.years[1]}
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="bento-current" href="#hawkers">
              <div>
                <span className="eyebrow">
                  <span className="signal" /> {hero.currentEyebrow}
                </span>
                <BrandLogo brand="hawkers" />
              </div>
              <span>
                {hero.currentRole[0]} <br />
                {hero.currentRole[1]}
              </span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a className="bento-studio" href="#zogic">
              <span className="eyebrow">{hero.studioEyebrow}</span>
              <span className="bento-studio-title">
                <BrandLogo brand="zogic" decorative /> Zogic Studio{' '}
                <ArrowUpRight size={19} aria-hidden="true" />
              </span>
              <span>{hero.studioLine}</span>
            </a>
          </div>
          <div className="career-strip">
            <span className="mono">
              {hero.careerStrip[0]}
              <br />
              {hero.careerStrip[1]}
            </span>
            <div className="career-brands">
              {careerBrands.map((brand) => (
                <a
                  key={brand}
                  href="#experiencia"
                  aria-label={hero.careerAria + ' ' + brandName(brand)}
                >
                  <BrandLogo brand={brand} decorative />
                </a>
              ))}
            </div>
            <a
              className="round-link"
              href="#experiencia"
              aria-label={hero.exploreExperience}
            >
              <ArrowDown size={20} aria-hidden="true" />
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
                <span className="section-number">01</span>{' '}
                {capabilities.eyebrow}
              </p>
              <h2 id="capabilities-title">
                {capabilities.title[0]}
                <br />
                <em>{capabilities.title[1]}</em>
              </h2>
            </div>
            <p>{capabilities.intro}</p>
          </div>
          <div className="services-grid">
            {capabilities.services.map((service, i) => (
              <article
                className={'service-card service-' + service.id}
                key={service.id}
                data-reveal
              >
                <div className="service-card-top">
                  <span className="mono">
                    0{i + 1} / {service.category}
                  </span>
                </div>
                <ServiceVisual kind={service.id} t={capabilities} />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p className="service-example">
                    <span>{capabilities.exampleLabel}:</span> {service.example}
                  </p>
                  <div className="service-tools">
                    {service.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                  <p className="service-outcome mono">{service.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="capabilities-bottom">
            <span>{capabilities.bottom}</span>
            <a className="text-link" href={profile.linkedin} {...external}>
              {capabilities.cta} <ArrowUpRight size={17} aria-hidden="true" />
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
                  <span className="section-number">02</span>{' '}
                  {experience.eyebrow[0]} {experience.eyebrow[1]}
                </p>
                <h2 id="experience-title">
                  {experience.title[0]}
                  <br />
                  <em>{experience.title[1]}</em>
                </h2>
              </div>
              <p>{experience.intro}</p>
            </div>
            <article id="hawkers" className="hawkers-feature" data-reveal>
              <div className="hawkers-feature-top">
                <span className="eyebrow">
                  <span className="signal" /> {experience.current.eyebrow}
                </span>
                <span className="mono">{experience.current.period}</span>
              </div>
              <div className="hawkers-feature-grid">
                <div className="hawkers-identity">
                  <h3>
                    <BrandLogo brand="hawkers" />
                  </h3>
                  <p>{experience.current.role}</p>
                  <span className="mono">{experience.current.location}</span>
                  <div className="hawkers-art" aria-hidden="true">
                    {experience.current.art.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="hawkers-story">
                  <p className="hawkers-lead">
                    {experience.current.lead.join(' ')}
                  </p>
                  {experience.current.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="tags">
                    {experience.current.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hawkers-bottom">
                <span className="mono">{experience.current.flow}</span>
                <a href={profile.linkedin} {...external}>
                  {experience.current.linkedin}{' '}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
            <ExperienceList jobs={experience.jobs} />
            <div className="experience-note">
              <span className="mono">{experience.noteLabel}</span>
              <a href="#zogic">
                {experience.note} <ArrowDown size={16} aria-hidden="true" />
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
                <span className="section-number">03</span> {about.eyebrow}
              </p>
              <h2 id="about-title">
                {about.title[0]}
                <br />
                {about.title[1]}
                <br />
                <em>{about.title[2]}</em>
              </h2>
              <div className="about-location">
                <MapPin size={17} aria-hidden="true" />
                <span>{about.location}</span>
              </div>
              <div className="about-symbol" aria-hidden="true">
                <Asterisk strokeWidth={0.8} />
                <span className="mono">
                  {about.symbol[0]}
                  <br />
                  {about.symbol[1]}
                </span>
              </div>
            </div>
            <div className="about-copy" data-reveal>
              <p className="about-lead">{about.lead}</p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="principle">
                <Fingerprint size={30} strokeWidth={1.3} aria-hidden="true" />
                <p>{about.principle}</p>
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
                <span className="section-number">04</span> {education.eyebrow}
              </p>
              <h2 id="education-title">
                {education.title[0]}
                <br />
                <em>{education.title[1]}</em>
              </h2>
            </div>
            <p>{education.intro}</p>
          </div>
          <div className="education-grid">
            <div className="academic-list">
              {education.items.map((item) => (
                <article className="academic-item" key={item.school}>
                  <div className="academic-logo">
                    <BrandLogo brand={item.brand} decorative />
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
            <Certifications t={education.certifications} locale={locale} />
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
                <span className="section-number">05</span> {studio.eyebrow}
              </p>
              <h2 id="studio-title">
                {studio.title[0]}
                <br />
                <em>{studio.title[1]}</em>
              </h2>
              {studio.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a className="button-primary" href={t.studioUrl} {...external}>
                {studio.cta} <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <a
              className="studio-mark"
              href={t.studioUrl}
              {...external}
              aria-label={studio.markAria}
            >
              <span className="studio-mark-top mono">
                {studio.markTop} <ArrowUpRight size={20} aria-hidden="true" />
              </span>
              <div className="studio-brand-lockup">
                <BrandLogo brand="zogic" decorative />
                <span>
                  Zogic<span>Studio</span>
                </span>
              </div>
              <span className="studio-mark-bottom">
                <span>
                  {studio.markBottom[0]}
                  <br />
                  {studio.markBottom[1]}
                </span>
                <ArrowRight size={28} aria-hidden="true" />
              </span>
            </a>
            <div className="studio-projects">
              <div className="studio-projects-top">
                <h3 className="eyebrow">{studio.projectsEyebrow}</h3>
                <a
                  className="text-link"
                  href={t.studioProjectsUrl}
                  {...external}
                >
                  {studio.projectsAll}{' '}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <ul>
                {zogicProjects.map((project) => (
                  <li key={project.slug}>
                    <a href={t.studioProjectUrl(project.slug)} {...external}>
                      <span className="mono">
                        {studio.projects[project.slug].type}
                      </span>
                      <strong>
                        {project.name}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </strong>
                      <span>{studio.projects[project.slug].text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Contact t={t.contact} />
      </main>
      <footer className="site-footer wrap">
        <div className="footer-top">
          <a className="brand" href="#inicio">
            <span className="wordmark" aria-hidden="true">
              deg<span>.</span>
            </span>
            <span className="brand-name">{profile.name}</span>
          </a>
          <a className="back-to-top" href="#inicio">
            {t.footer.top} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <nav
          id="secciones"
          className="footer-nav"
          aria-label={t.common.footerNav}
        >
          {t.common.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>
            © <CurrentYear buildYear={new Date().getFullYear()} />{' '}
            {profile.name}
          </span>
          <span>{t.footer.tagline}</span>
          <div>
            <a href={profile.linkedin} {...external}>
              LinkedIn <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <Link href={routes[locale].privacy}>{t.footer.privacy}</Link>
          </div>
        </div>
      </footer>
      <Motion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd(locale)).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
    </>
  );
}
