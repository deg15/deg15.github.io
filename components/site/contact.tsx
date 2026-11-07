import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/profile';
import type { Content } from '@/lib/content';

export function Contact({ t }: { t: Content['contact'] }) {
  return (
    <section
      id="contacto"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-panel">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="signal" /> {t.eyebrow}
          </p>
          <span className="mono">{t.place}</span>
        </div>
        <div className="contact-grid">
          <h2 id="contact-title">
            {t.title[0]}
            <br />
            {t.title[1]} <em>{t.title[2]}</em>
          </h2>
          <div className="contact-copy">
            <p>{t.text}</p>
            <a
              className="button-primary linkedin-cta"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin-mark" aria-hidden="true">
                in
              </span>{' '}
              {t.cta} <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
