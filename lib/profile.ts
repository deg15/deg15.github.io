// Datos que no dependen del idioma. Los textos traducibles viven en lib/content.ts.
export const profile = {
  name: 'David Egea García',
  shortName: 'David Egea',
  linkedin: 'https://www.linkedin.com/in/davidegeagarcia/',
  certificationsUrl:
    'https://www.linkedin.com/in/davidegeagarcia/details/certifications/',
  studio: 'https://zogicstudio.com/',
  hawkers: 'https://www.hawkersco.com/',
  studioOrganizationId: 'https://zogicstudio.com/#organization',
};

// Fechas de la ficha ProfilePage (schema.org). Actualizar dateModified al
// cambiar el contenido visible.
export const contentDates = { created: '2026-09-05', modified: '2026-11-07' };

export const certifications: {
  name: string;
  issuer: 'DataCamp' | 'MicroStrategy / Strategy' | 'Oracle';
  date: string; // AAAA-MM
}[] = [
  { name: 'Data Engineer', issuer: 'DataCamp', date: '2026-03' },
  {
    name: 'Analytics Architect',
    issuer: 'MicroStrategy / Strategy',
    date: '2020-06',
  },
  {
    name: 'System Administrator',
    issuer: 'MicroStrategy / Strategy',
    date: '2020-05',
  },
  { name: 'Developer', issuer: 'MicroStrategy / Strategy', date: '2020-05' },
  { name: 'Architect', issuer: 'MicroStrategy / Strategy', date: '2020-05' },
  {
    name: 'Data Scientist',
    issuer: 'MicroStrategy / Strategy',
    date: '2020-05',
  },
  { name: 'Analyst', issuer: 'MicroStrategy / Strategy', date: '2020-04' },
  {
    name: 'Oracle Data Integrator 12c Certified Implementation Specialist',
    issuer: 'Oracle',
    date: '2016-12',
  },
  {
    name: 'MicroStrategy 10 Certified Analyst (MCA)',
    issuer: 'MicroStrategy / Strategy',
    date: '2016-11',
  },
  {
    name: 'Oracle Database 11g Data Warehousing Certified Implementation Specialist',
    issuer: 'Oracle',
    date: '2016-07',
  },
  {
    name: 'Oracle Database SQL Certified Expert',
    issuer: 'Oracle',
    date: '2016-05',
  },
];

export const issuerBrand = {
  DataCamp: 'datacamp',
  'MicroStrategy / Strategy': 'microstrategy',
  Oracle: 'oracle',
} as const;

// Proyectos de Zogic Studio en producción (fuente: https://zogicstudio.com/llms.txt).
export const zogicProjects = [
  { slug: 'klep', name: 'Klep' },
  { slug: 'summum-sports-lab', name: 'Summum Sports Lab' },
  { slug: 'fundacion-neurocultura', name: 'Fundación Neurocultura' },
  { slug: 'porra-mundial-26', name: 'Porra Mundial 26' },
] as const;
