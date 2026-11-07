import { content, formatMonth, routes, type Locale } from '@/lib/content';
import { certifications, profile, zogicProjects } from '@/lib/profile';
import { siteOrigin } from '@/lib/site';

// llms.txt (https://llmstxt.org): resumen en Markdown para asistentes de IA,
// generado desde el mismo contenido que la web para que nunca se desincronice.
export function llmsTxt(locale: Locale) {
  const t = content[locale];
  const es = locale === 'es';
  const home = `${siteOrigin}${routes[locale].home}`;
  const other = `${siteOrigin}${routes[es ? 'en' : 'es'].llms}`;
  const line = (label: string, value: string) => `- **${label}**: ${value}`;
  return [
    `# ${profile.name} (${profile.shortName})`,
    '',
    `> ${t.meta.description}`,
    '',
    es
      ? `Datos clave: ${t.person.jobTitle[0]} de [Zogic Studio](${t.studioUrl}) e ${t.person.jobTitle[1]} en Hawkers Group. Ingeniero informático con más de 10 años de experiencia. Cartagena, España. Contacto: LinkedIn (${profile.linkedin}). Web: ${home}`
      : `Key facts: ${t.person.jobTitle[0]} of [Zogic Studio](${t.studioUrl}) and ${t.person.jobTitle[1]} at Hawkers Group. Computer engineer with over 10 years of experience. Cartagena, Spain. Contact: LinkedIn (${profile.linkedin}). Website: ${home}`,
    '',
    es ? '## Puestos actuales' : '## Current roles',
    '',
    line(
      `Zogic Studio — ${t.person.jobTitle[0]}`,
      `${t.studio.paragraphs.join(' ')} ${t.studioUrl}`,
    ),
    line(
      `Hawkers Group — ${t.experience.current.role} (${t.experience.current.period})`,
      t.experience.current.paragraphs.join(' '),
    ),
    '',
    es ? '## Lo que hago' : '## What I do',
    '',
    ...t.capabilities.services.map((s) =>
      line(
        s.title.replace(/\.$/, ''),
        `${s.description} ${s.outcome}. ${s.tools.join(', ')}.`,
      ),
    ),
    '',
    es
      ? '## Proyectos de Zogic Studio en producción'
      : '## Zogic Studio projects in production',
    '',
    ...zogicProjects.map(
      (p) =>
        `- [${p.name}](${t.studioProjectUrl(p.slug)}): ${t.studio.projects[p.slug].type}. ${t.studio.projects[p.slug].text}`,
    ),
    '',
    es ? '## Trayectoria anterior' : '## Previous experience',
    '',
    ...t.experience.jobs.map((j) =>
      line(`${j.company} — ${j.role} (${j.period}, ${j.location})`, j.detail),
    ),
    '',
    es ? '## Formación' : '## Education',
    '',
    ...t.education.items.map((e) =>
      line(`${e.title} — ${e.school}`, `${e.dates}. ${e.detail}`),
    ),
    '',
    es ? '## Certificaciones' : '## Certifications',
    '',
    ...certifications.map(
      (c) => `- ${c.name} — ${c.issuer} (${formatMonth(locale, c.date)})`,
    ),
    '',
    es ? '## Enlaces' : '## Links',
    '',
    `- [${es ? 'Web personal' : 'Personal website'}](${home})`,
    `- [LinkedIn](${profile.linkedin})`,
    `- [Zogic Studio](${t.studioUrl})`,
    `- [${es ? 'English version' : 'Versión en español'}](${other})`,
    '',
  ].join('\n');
}
