export const profile = {
  name: 'David Egea García',
  linkedin: 'https://www.linkedin.com/in/davidegeagarcia/',
  certificationsUrl:
    'https://www.linkedin.com/in/davidegeagarcia/details/certifications/',
  studio: 'https://zogicstudio.com/',
};

export const experience = [
  {
    company: 'Cívica Software',
    period: '2016 — 2017',
    location: 'Granada',
    role: 'Project Leader & Senior BI Consultant',
    detail:
      'Consultoría de business intelligence y dirección de proyectos para Banco Mare Nostrum y Unicaja. Modelos analíticos, cuadros de mando y una relación directa con el cliente.',
    roles: [
      {
        title: 'Project Leader',
        dates: 'Jun. 2017 — Dic. 2017',
        text: 'Planificación de proyectos, gestión de equipo y tareas, roadmap de MicroStrategy e implantación de servidores. Diseño e impartición de formación para personal interno y clientes.',
      },
      {
        title: 'Senior BI Consultant',
        dates: 'Dic. 2016 — Dic. 2017',
        text: 'Toma de requisitos, reporting, cuadros de mando y validación de datos financieros para BMN y Unicaja.',
      },
    ],
    technologies: ['MicroStrategy', 'Teradata SQL', 'PostgreSQL'],
  },
  {
    company: 'Capgemini',
    period: '2015 — 2016',
    location: 'Murcia',
    role: 'BI Consultant',
    detail:
      'Consultor en el Centro de Excelencia de Business Intelligence. Proyectos para Gas Natural Fenosa, desde el análisis y el diseño de Data Marts hasta los procesos ETL y el reporting.',
    roles: [
      {
        title: 'BI Consultant',
        dates: 'Oct. 2015 — Dic. 2016',
        text: 'Diseños técnicos y funcionales, desarrollo de nuevos Data Marts, mantenimiento evolutivo y resolución de incidencias. Una visión del dato de principio a fin.',
      },
    ],
    technologies: ['MicroStrategy', 'Oracle', 'ETL', 'Data Warehousing'],
  },
  {
    company: 'Bitec',
    period: '2015',
    location: 'Murcia',
    role: 'Desarrollador ERP',
    detail:
      'Prácticas extracurriculares y capacitación como consultor técnico en Microsoft Dynamics NAV.',
    roles: [
      {
        title: 'Desarrollador ERP',
        dates: 'Jun. 2015 — Sep. 2015',
        text: 'Business Intelligence Technology. Desarrollo sobre el ERP Microsoft Dynamics NAV.',
      },
    ],
    technologies: ['Microsoft Dynamics NAV'],
  },
  {
    company: 'TICARUM',
    period: '2014',
    location: 'Murcia',
    role: 'Técnico de soporte',
    detail:
      'Soporte de hardware y software al personal de administración, servicios, docencia e investigación de la Universidad de Murcia.',
    roles: [
      {
        title: 'Técnico de soporte',
        dates: 'Abr. 2014 — Jul. 2014',
        text: 'Atención a los miembros del PAS y PDI de la Universidad de Murcia.',
      },
    ],
    technologies: ['Soporte técnico', 'Hardware & software'],
  },
  {
    company: 'SABIC Innovative Plastics',
    period: '2010',
    location: 'Alhama de Murcia',
    role: 'Desarrollador de aplicaciones',
    detail:
      'Desarrollo completo de un módulo complementario al ERP corporativo, en un proyecto de alcance europeo.',
    roles: [
      {
        title: 'Desarrollador de aplicaciones',
        dates: 'May. 2010 — Ago. 2010',
        text: 'Proyecto Customer Claim Portal. Reconocimiento por el rendimiento y la dedicación a su implantación.',
      },
    ],
    technologies: ['Desarrollo de aplicaciones', 'ERP'],
  },
  {
    company: 'VilVite',
    period: '2010',
    location: 'Noruega',
    role: 'Prácticas Erasmus · Desarrollo de animaciones',
    detail:
      'Primera experiencia internacional dentro del programa Erasmus Prácticas, desarrollando animaciones con tecnología Adobe Flash.',
    roles: [
      {
        title: 'Erasmus Internship',
        dates: 'Mar. 2010 — Abr. 2010',
        text: 'Una estancia en Noruega que unió desarrollo, trabajo en equipo e inglés.',
      },
    ],
    technologies: ['Adobe Flash', 'Inglés'],
  },
];

export const education = [
  {
    school: 'Universidad de Murcia',
    title: 'Grado en Ingeniería Informática',
    dates: '2010 — 2015',
    detail: 'Especialidad en Sistemas de Información.',
  },
  {
    school: 'Wrocław University of Science and Technology',
    title: 'Computer Science · Erasmus',
    dates: '2014 — 2015',
    detail: 'Estancia internacional en Polonia.',
  },
  {
    school: 'CIFP Carlos III',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Informáticas',
    dates: '2008 — 2010',
    detail: 'El comienzo de mi formación en desarrollo de software.',
  },
];

export const certifications = [
  { name: 'Data Engineer', issuer: 'DataCamp', date: 'Mar. 2026' },
  {
    name: 'Analytics Architect',
    issuer: 'MicroStrategy / Strategy',
    date: 'Jun. 2020',
  },
  {
    name: 'System Administrator',
    issuer: 'MicroStrategy / Strategy',
    date: 'May. 2020',
  },
  { name: 'Developer', issuer: 'MicroStrategy / Strategy', date: 'May. 2020' },
  { name: 'Architect', issuer: 'MicroStrategy / Strategy', date: 'May. 2020' },
  {
    name: 'Data Scientist',
    issuer: 'MicroStrategy / Strategy',
    date: 'May. 2020',
  },
  { name: 'Analyst', issuer: 'MicroStrategy / Strategy', date: 'Abr. 2020' },
  {
    name: 'Oracle Data Integrator 12c Certified Implementation Specialist',
    issuer: 'Oracle',
    date: 'Dic. 2016',
  },
  {
    name: 'MicroStrategy 10 Certified Analyst (MCA)',
    issuer: 'MicroStrategy / Strategy',
    date: 'Nov. 2016',
  },
  {
    name: 'Oracle Database 11g Data Warehousing Certified Implementation Specialist',
    issuer: 'Oracle',
    date: 'Jul. 2016',
  },
  {
    name: 'Oracle Database SQL Certified Expert',
    issuer: 'Oracle',
    date: 'May. 2016',
  },
];

export const services = [
  {
    id: 'datos',
    number: '01',
    title: 'Datos que ayudan a decidir.',
    description:
      'Conectar fuentes, dar sentido a la información y hacer que llegue a quien la necesita. Del pipeline al cuadro de mando.',
    tools: ['SQL', 'Python', 'Snowflake', 'MicroStrategy'],
    example: 'De datos dispersos a una visión común del negocio.',
    outcome: 'Ingeniería de datos · Business intelligence · Reporting',
  },
  {
    id: 'producto',
    number: '02',
    title: 'Software pensado para usarse.',
    description:
      'Aplicaciones web y herramientas a medida. Unir una arquitectura sólida con una experiencia clara, desde la idea hasta el despliegue.',
    tools: ['TypeScript', 'Next.js', 'React', 'Vercel'],
    example: 'De un proceso que no encaja a una herramienta propia.',
    outcome: 'Producto digital · Aplicaciones web · Integraciones',
  },
  {
    id: 'ia',
    number: '03',
    title: 'IA con una tarea que resolver.',
    description:
      'Automatizar trabajo repetitivo e integrar inteligencia artificial donde aporta valor: procesos internos, tratamiento de datos y herramientas conectadas.',
    tools: ['Python', 'LLMs', 'Agentes IA', 'APIs'],
    example: 'De tareas repetitivas a procesos que trabajan contigo.',
    outcome: 'Automatización · IA aplicada · Flujos de trabajo',
  },
];
