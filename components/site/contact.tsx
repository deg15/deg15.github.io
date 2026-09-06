import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/lib/profile';

export function Contact() {
  return (
    <section
      id="contacto"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-panel">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="signal" /> LA SIGUIENTE CONVERSACIÓN
          </p>
          <span className="mono">CARTAGENA · CONECTADO AL MUNDO</span>
        </div>
        <div className="contact-grid">
          <h2 id="contact-title">
            Las buenas ideas
            <br />
            empiezan <em>hablando.</em>
          </h2>
          <div className="contact-copy">
            <p>
              ¿Tienes un proyecto, un reto con tus datos o una idea a la que dar
              forma? Cuéntamelo en LinkedIn.
            </p>
            <a
              className="button-primary linkedin-cta"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkedin-mark" aria-hidden="true">
                in
              </span>{' '}
              Hablemos en LinkedIn <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
