import { ChevronDown } from 'lucide-react';
import type { Content } from '@/lib/content';
import { BrandLogo } from '@/components/site/brand-logo';

// <details> nativo: el contenido está en el HTML (buscadores, LLMs, lectores
// sin JavaScript) y se despliega sin hidratar React.
export function ExperienceList({
  jobs,
}: {
  jobs: Content['experience']['jobs'];
}) {
  return (
    <div className="experience-list">
      {jobs.map((job) => (
        <details className="experience-item" key={job.company}>
          <summary className="experience-trigger">
            <span className="experience-date mono">{job.period}</span>
            <span className="experience-logo">
              <BrandLogo brand={job.brand} decorative />
            </span>
            <span className="experience-company">
              {job.company}
              <span>{job.role}</span>
            </span>
            <span className="experience-location mono">{job.location}</span>
            <ChevronDown
              className="experience-chevron"
              size={16}
              aria-hidden="true"
            />
          </summary>
          <div className="experience-detail">
            <p className="job-intro">{job.detail}</p>
            {job.roles.map((role) => (
              <div className="job-role" key={role.title}>
                <h4>{role.title}</h4>
                <span className="mono">{role.dates}</span>
                <p>{role.text}</p>
              </div>
            ))}
            <div className="tags">
              {job.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
