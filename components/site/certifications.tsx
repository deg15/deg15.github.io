import { ArrowDown, ArrowUpRight, Award } from 'lucide-react';
import { certifications, issuerBrand, profile } from '@/lib/profile';
import { formatMonth, type Content, type Locale } from '@/lib/content';
import { BrandLogo } from '@/components/site/brand-logo';

export function Certifications({
  t,
  locale,
}: {
  t: Content['education']['certifications'];
  locale: Locale;
}) {
  return (
    <div className="certifications">
      <div className="certifications-heading">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h3>
            {t.title[0]}
            <br />
            {t.title[1]}
          </h3>
        </div>
        <Award size={38} strokeWidth={1} aria-hidden="true" />
      </div>
      <div className="certification-brands">
        <BrandLogo brand="datacamp" />
        <BrandLogo brand="microstrategy" />
        <BrandLogo brand="oracle" />
      </div>
      <div className="certification-feature">
        <BrandLogo brand="datacamp" decorative />
        <div>
          <h4>Data Engineer</h4>
          <p>{t.featureDate}</p>
        </div>
        <span className="mono">2026</span>
      </div>
      <details className="certificate-details">
        <summary className="certificate-toggle">
          <span className="when-closed">{t.open}</span>
          <span className="when-open">{t.close}</span>
          <ArrowDown size={18} aria-hidden="true" />
        </summary>
        <div id="certification-list">
          <p className="certification-note">{t.note}</p>
          <ol className="certificate-list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <BrandLogo brand={issuerBrand[cert.issuer]} decorative />
                <div>
                  <h4>{cert.name}</h4>
                  <p>{cert.issuer}</p>
                </div>
                <span className="mono">{formatMonth(locale, cert.date)}</span>
              </li>
            ))}
          </ol>
          <a
            className="text-link"
            href={profile.certificationsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.linkedin} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </details>
    </div>
  );
}
