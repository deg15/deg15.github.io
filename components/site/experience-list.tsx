'use client';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { experience } from '@/lib/profile';
import { BrandLogo, type Brand } from '@/components/site/brand-logo';
const jobBrands: Brand[] = [
  'civica',
  'capgemini',
  'bitec',
  'ticarum',
  'sabic',
  'vilvite',
];
export function ExperienceList() {
  return (
    <Accordion className="experience-list" multiple>
      {experience.map((job, i) => (
        <AccordionItem value={job.company} key={job.company}>
          <AccordionTrigger className="experience-trigger">
            <span className="experience-date mono">{job.period}</span>
            <span className="experience-logo">
              <BrandLogo brand={jobBrands[i]} decorative />
            </span>
            <span className="experience-company">
              {job.company}
              <span>{job.role}</span>
            </span>
            <span className="experience-location mono">{job.location}</span>
          </AccordionTrigger>
          <AccordionContent className="experience-detail">
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
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
