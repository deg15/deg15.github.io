'use client';
import { useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { certifications, profile } from '@/lib/profile';
import { BrandLogo } from '@/components/site/brand-logo';
export function Certifications() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="certifications">
      <div className="certifications-heading">
        <div>
          <p className="eyebrow">APRENDER ES PARTE DEL TRABAJO</p>
          <h3>
            11 certificaciones.
            <br />
            La misma curiosidad.
          </h3>
        </div>
        <Award size={38} strokeWidth={1} />
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
          <p>DataCamp · Obtenida en marzo de 2026</p>
        </div>
        <span className="mono">2026</span>
      </div>
      <Button
        className="certificate-toggle"
        variant="ghost"
        aria-expanded={expanded}
        aria-controls="certification-list"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded
          ? 'Cerrar certificaciones'
          : 'Explorar las 11 certificaciones'}
        {expanded ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
      </Button>
      <div id="certification-list" hidden={!expanded}>
        <p className="certification-note">
          Certificaciones obtenidas a lo largo de mi trayectoria, incluidas las
          históricas. Las fechas indican su expedición, no su vigencia actual.
        </p>
        <ol className="certificate-list">
          {certifications.map((cert) => (
            <li key={cert.name}>
              <BrandLogo
                brand={
                  cert.issuer === 'DataCamp'
                    ? 'datacamp'
                    : cert.issuer === 'Oracle'
                      ? 'oracle'
                      : 'microstrategy'
                }
                decorative
              />
              <div>
                <h4>{cert.name}</h4>
                <p>{cert.issuer}</p>
              </div>
              <span className="mono">{cert.date}</span>
            </li>
          ))}
        </ol>
        <a
          className="text-link"
          href={profile.certificationsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver credenciales en LinkedIn <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
