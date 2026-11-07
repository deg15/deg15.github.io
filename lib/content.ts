import type { Brand } from '@/components/site/brand-logo';

export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];

export const routes = {
  es: { home: '/', privacy: '/privacidad/', llms: '/llms.txt' },
  en: { home: '/en/', privacy: '/en/privacy/', llms: '/en/llms.txt' },
} as const;

const months = {
  es: [
    'Ene.',
    'Feb.',
    'Mar.',
    'Abr.',
    'May.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dic.',
  ],
  en: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
};
/** «2020-06» → «Jun. 2020» / «Jun 2020». */
export function formatMonth(locale: Locale, isoMonth: string) {
  const [year, month] = isoMonth.split('-').map(Number);
  return `${months[locale][month - 1]} ${year}`;
}

type Job = {
  company: string;
  brand: Brand;
  period: string;
  location: string;
  role: string;
  detail: string;
  roles: { title: string; dates: string; text: string }[];
  technologies: string[];
};

const es = {
  locale: 'es' as Locale,
  htmlLang: 'es',
  ogLocale: 'es_ES',
  inLanguage: 'es-ES',
  meta: {
    title: 'David Egea García — CTO de Zogic Studio · IA & Data Engineer',
    description:
      'Ingeniero informático, CTO y cofundador de Zogic Studio e IA & Data Engineer en Hawkers. Más de diez años conectando datos, tecnología y negocio. Cartagena, España.',
    ogAlt:
      'David Egea García — CTO y cofundador de Zogic Studio · IA & Data Engineer en Hawkers',
  },
  person: {
    jobTitle: ['CTO y cofundador', 'IA & Data Engineer'],
    knowsAbout: [
      'Ingeniería de datos',
      'Business Intelligence',
      'Inteligencia artificial',
      'Desarrollo de software',
    ],
  },
  studioUrl: 'https://zogicstudio.com/',
  studioProjectsUrl: 'https://zogicstudio.com/proyectos',
  studioProjectUrl: (slug: string) =>
    `https://zogicstudio.com/proyectos/${slug}`,
  common: {
    skip: 'Saltar al contenido',
    homeLabel: 'David Egea García, inicio',
    switchLabel: 'EN',
    switchAria: 'Read in English',
    switchLang: 'en',
    nav: [
      { href: '#capacidades', label: 'Lo que hago' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#formacion', label: 'Formación' },
      { href: '#zogic', label: 'Zogic Studio' },
    ],
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    footerNav: 'Secciones',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    menuDescription: 'Secciones del portfolio personal de David Egea García.',
    menuFoot: 'SOFTWARE, DATOS & IA · CARTAGENA',
    newTab: '(se abre en una pestaña nueva)',
  },
  hero: {
    eyebrow: 'DAVID EGEA GARCÍA / INGENIERO INFORMÁTICO',
    location: 'CARTAGENA, ESPAÑA',
    title: ['Software.', 'Datos.', 'Criterio.'],
    lead: 'Soy David Egea García. Conecto ingeniería, datos e inteligencia artificial para convertir problemas complejos en',
    leadStrong: 'soluciones que tienen sentido.',
    cta: 'Hablemos en LinkedIn',
    explore: 'Explora lo que hago',
    portraitAlt: 'Retrato de David Egea García',
    captionStudio: 'CTO y cofundador de',
    captionHawkers: 'IA & Data Engineer en Hawkers',
    years: ['Años conectando', 'tecnología y negocio.'],
    currentEyebrow: 'ACTUALMENTE EN',
    currentRole: ['IA & Data', 'Engineer'],
    studioEyebrow: 'CTO Y COFUNDADOR',
    studioLine: 'Webs, IA y software con código propio.',
    careerStrip: ['PARTE DE', 'MI RECORRIDO'],
    careerAria: 'Ver mi experiencia en',
    exploreExperience: 'Explorar mi experiencia',
  },
  capabilities: {
    eyebrow: 'LO QUE PUEDO APORTAR',
    title: ['Distintas herramientas.', 'Una misma intención.'],
    intro:
      'Entender lo que necesitas. Conectar las piezas. Construir algo que te sirva.',
    bottom: 'Del primer «¿y si…?» a algo que funciona.',
    cta: 'Hablemos de tu reto',
    exampleLabel: 'Por ejemplo',
    productUrl: 'tu-herramienta.app',
    productStatus: 'en producción',
    dataOutput: 'Una visión común',
    aiInput: 'Contexto',
    aiOutput: 'Acción',
    aiCaption: 'CONECTAR → AUTOMATIZAR',
    services: [
      {
        id: 'datos',
        category: 'DATA & ANALYTICS',
        title: 'Datos que ayudan a decidir.',
        description:
          'Conectar fuentes, dar sentido a la información y hacer que llegue a quien la necesita. Del pipeline al cuadro de mando.',
        tools: ['SQL', 'Python', 'Snowflake', 'MicroStrategy'],
        example: 'De datos dispersos a una visión común del negocio.',
        outcome: 'Ingeniería de datos · Business intelligence · Reporting',
      },
      {
        id: 'producto',
        category: 'SOFTWARE & PRODUCTO',
        title: 'Software pensado para usarse.',
        description:
          'Aplicaciones web y herramientas a medida. Unir una arquitectura sólida con una experiencia clara, desde la idea hasta el despliegue.',
        tools: ['TypeScript', 'Next.js', 'React', 'Vercel'],
        example: 'De un proceso que no encaja a una herramienta propia.',
        outcome: 'Producto digital · Aplicaciones web · Integraciones',
      },
      {
        id: 'ia',
        category: 'INTELIGENCIA ARTIFICIAL',
        title: 'IA con una tarea que resolver.',
        description:
          'Automatizar trabajo repetitivo e integrar inteligencia artificial donde aporta valor: procesos internos, tratamiento de datos y herramientas conectadas.',
        tools: ['Python', 'LLMs', 'Agentes IA', 'APIs'],
        example: 'De tareas repetitivas a procesos que trabajan contigo.',
        outcome: 'Automatización · IA aplicada · Flujos de trabajo',
      },
    ],
  },
  experience: {
    eyebrow: ['TRAYECTORIA', 'PROFESIONAL'],
    title: ['El criterio se construye', 'con experiencia.'],
    intro:
      'Del desarrollo de aplicaciones al liderazgo de proyectos. De los datos a la IA aplicada.',
    current: {
      eyebrow: 'MI ETAPA ACTUAL',
      period: 'DIC. 2017 — ACTUALIDAD',
      role: 'IA & Data Engineer',
      location: 'ELCHE, ESPAÑA',
      art: ['Python', 'Claude API', 'Playwright', 'Snowflake'],
      lead: ['De los datos', 'a la IA aplicada.'],
      paragraphs: [
        'Desde 2017 formo parte del equipo de Hawkers. Empecé en ingeniería de datos y business intelligence, y hoy mi foco es la IA aplicada: sistemas que automatizan trabajo real para distintos departamentos.',
        'IA aplicada a la web: monitorización diaria del rendimiento, validación automática de las promociones antes de publicarlas y seguimiento de cómo aparece la marca en los asistentes de IA. Y herramientas específicas para distintos departamentos.',
        'Un principio guía ese trabajo: la IA extrae y propone; el código determinista decide.',
      ],
      tags: [
        'IA aplicada',
        'QA automation',
        'Data Engineering',
        'Business Intelligence',
      ],
      flow: 'DATOS → IA → DECISIONES',
      linkedin: 'Mi experiencia en LinkedIn',
    },
    noteLabel: 'LA HISTORIA CONTINÚA',
    note: 'En paralelo, dirijo la tecnología de Zogic Studio',
    jobs: [
      {
        company: 'Cívica Software',
        brand: 'civica',
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
        brand: 'capgemini',
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
        brand: 'bitec',
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
        brand: 'ticarum',
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
        brand: 'sabic',
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
        brand: 'vilvite',
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
    ] as Job[],
  },
  about: {
    eyebrow: 'LA PERSONA DETRÁS',
    title: ['Entender primero.', 'Construir después.', 'Cuidar siempre.'],
    location: 'Cartagena, España.',
    symbol: ['SIEMPRE', 'APRENDIENDO.'],
    lead: 'Soy ingeniero informático. Y, sobre todo, alguien a quien le gusta entender cómo funcionan las cosas.',
    paragraphs: [
      'Mi recorrido empezó en el desarrollo de aplicaciones, pasó por la consultoría y me llevó a especializarme en datos. En Capgemini aprendí a abordar proyectos de principio a fin. En Cívica sumé liderazgo y contacto directo con el cliente. En Hawkers he profundizado en la conexión entre tecnología y negocio.',
      'Hoy ese recorrido se reparte entre la IA aplicada en Hawkers y Zogic Studio, donde construimos webs, automatizaciones y productos que ya están en producción. Sigo aprendiendo, probando y haciéndome preguntas.',
    ],
    principle:
      'Que la solución esté bien pensada, se pueda mantener y le sirva de verdad a alguien.',
  },
  education: {
    eyebrow: 'FORMACIÓN & CERTIFICACIONES',
    title: ['Una base sólida.', 'Siempre en evolución.'],
    intro:
      'La formación pone los cimientos. La curiosidad se encarga del resto.',
    items: [
      {
        school: 'Universidad de Murcia',
        brand: 'universidad-murcia' as Brand,
        title: 'Grado en Ingeniería Informática',
        dates: '2010 — 2015',
        detail: 'Especialidad en Sistemas de Información.',
      },
      {
        school: 'Wrocław University of Science and Technology',
        brand: 'wroclaw' as Brand,
        title: 'Computer Science · Erasmus',
        dates: '2014 — 2015',
        detail: 'Estancia internacional en Polonia.',
      },
      {
        school: 'CIFP Carlos III',
        brand: 'cifp-carlos-iii' as Brand,
        title: 'Técnico Superior en Desarrollo de Aplicaciones Informáticas',
        dates: '2008 — 2010',
        detail: 'El comienzo de mi formación en desarrollo de software.',
      },
    ],
    certifications: {
      eyebrow: 'APRENDER ES PARTE DEL TRABAJO',
      title: ['11 certificaciones.', 'La misma curiosidad.'],
      featureDate: 'DataCamp · Obtenida en marzo de 2026',
      open: 'Explorar las 11 certificaciones',
      close: 'Cerrar certificaciones',
      note: 'Certificaciones obtenidas a lo largo de mi trayectoria, incluidas las históricas. Las fechas indican su expedición, no su vigencia actual.',
      linkedin: 'Ver credenciales en LinkedIn',
    },
  },
  studio: {
    eyebrow: 'MI ESTUDIO',
    title: ['De las ganas de crear', 'a productos en producción.'],
    paragraphs: [
      'Soy CTO y cofundador de Zogic Studio, el estudio digital que dirijo junto a Jesús Javier Pedreño desde Cartagena. Nacimos en la era de la IA y trabajamos en remoto para toda España y Europa.',
      'Hacemos auditorías SEO y GEO, webs a medida, automatizaciones con IA y software a medida, siempre con código propio y sin plantillas. Yo me ocupo de la tecnología: arquitectura, desarrollo e IA.',
    ],
    cta: 'Conocer Zogic Studio',
    markTop: 'ESTUDIO DIGITAL · CARTAGENA',
    markAria: 'Visitar Zogic Studio',
    markBottom: ['Dos cofundadores.', 'Código propio.'],
    projectsEyebrow: 'PROYECTOS EN PRODUCCIÓN',
    projectsAll: 'Ver todos los proyectos',
    projects: {
      klep: {
        type: 'Plataforma SaaS',
        text: 'Agenda, reservas, bonos, clientes y facturación VeriFactu para centros de entrenamiento y fisioterapia.',
      },
      'summum-sports-lab': {
        type: 'Página web',
        text: 'Web de captación para un centro deportivo de Cartagena.',
      },
      'fundacion-neurocultura': {
        type: 'Página web',
        text: 'Web institucional de una fundación dedicada a la atención a las adicciones.',
      },
      'porra-mundial-26': {
        type: 'Web app',
        text: 'Porras privadas entre amigos para el Mundial 2026.',
      },
    } as Record<string, { type: string; text: string }>,
  },
  contact: {
    eyebrow: 'LA SIGUIENTE CONVERSACIÓN',
    place: 'CARTAGENA · CONECTADO AL MUNDO',
    title: ['Las buenas ideas', 'empiezan', 'hablando.'],
    text: '¿Tienes un proyecto, un reto con tus datos o una idea a la que dar forma? Cuéntamelo en LinkedIn.',
    cta: 'Hablemos en LinkedIn',
  },
  footer: {
    top: 'Volver arriba',
    tagline: 'Software, datos y curiosidad.',
    privacy: 'Privacidad',
  },
  privacy: {
    title: 'Privacidad · David Egea García',
    description:
      'Información sobre el uso de datos en el portfolio personal de David Egea García.',
    back: 'Volver al portfolio',
    eyebrow: 'DAVID EGEA GARCÍA / INFORMACIÓN SOBRE DATOS',
    heading: ['Tu privacidad,', 'con claridad.'],
  },
};

export type Content = typeof es;

const en: Content = {
  locale: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  inLanguage: 'en-GB',
  meta: {
    title: 'David Egea García — CTO of Zogic Studio · AI & Data Engineer',
    description:
      'Computer engineer, CTO & Co-founder of Zogic Studio and AI & Data Engineer at Hawkers. Over ten years connecting data, technology and business. Cartagena, Spain.',
    ogAlt:
      'David Egea García — CTO & Co-founder of Zogic Studio · AI & Data Engineer at Hawkers',
  },
  person: {
    jobTitle: ['CTO & Co-founder', 'AI & Data Engineer'],
    knowsAbout: [
      'Data engineering',
      'Business Intelligence',
      'Artificial intelligence',
      'Software development',
    ],
  },
  studioUrl: 'https://zogicstudio.com/en',
  studioProjectsUrl: 'https://zogicstudio.com/en/proyectos',
  studioProjectUrl: (slug: string) =>
    `https://zogicstudio.com/en/proyectos/${slug}`,
  common: {
    skip: 'Skip to content',
    homeLabel: 'David Egea García, home',
    switchLabel: 'ES',
    switchAria: 'Leer en español',
    switchLang: 'es',
    nav: [
      { href: '#capacidades', label: 'What I do' },
      { href: '#experiencia', label: 'Experience' },
      { href: '#sobre-mi', label: 'About' },
      { href: '#formacion', label: 'Education' },
      { href: '#zogic', label: 'Zogic Studio' },
    ],
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Sections',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuDescription: 'Sections of David Egea García’s personal portfolio.',
    menuFoot: 'SOFTWARE, DATA & AI · CARTAGENA',
    newTab: '(opens in a new tab)',
  },
  hero: {
    eyebrow: 'DAVID EGEA GARCÍA / COMPUTER ENGINEER',
    location: 'CARTAGENA, SPAIN',
    title: ['Software.', 'Data.', 'Sense.'],
    lead: 'I’m David Egea García. I bring together engineering, data and artificial intelligence to turn complex problems into',
    leadStrong: 'solutions that make sense.',
    cta: 'Let’s talk on LinkedIn',
    explore: 'See what I do',
    portraitAlt: 'Portrait of David Egea García',
    captionStudio: 'CTO & Co-founder of',
    captionHawkers: 'AI & Data Engineer at Hawkers',
    years: ['Years connecting', 'technology and business.'],
    currentEyebrow: 'CURRENTLY AT',
    currentRole: ['AI & Data', 'Engineer'],
    studioEyebrow: 'CTO & CO-FOUNDER',
    studioLine: 'Websites, AI and software, built in-house.',
    careerStrip: ['PART OF', 'MY JOURNEY'],
    careerAria: 'See my experience at',
    exploreExperience: 'Explore my experience',
  },
  capabilities: {
    eyebrow: 'WHAT I BRING',
    title: ['Different tools.', 'One intention.'],
    intro:
      'Understand what you need. Connect the pieces. Build something that works for you.',
    bottom: 'From the first “what if…?” to something that works.',
    cta: 'Tell me about your challenge',
    exampleLabel: 'For example',
    productUrl: 'your-tool.app',
    productStatus: 'live',
    dataOutput: 'A shared view',
    aiInput: 'Context',
    aiOutput: 'Action',
    aiCaption: 'CONNECT → AUTOMATE',
    services: [
      {
        id: 'datos',
        category: 'DATA & ANALYTICS',
        title: 'Data that helps you decide.',
        description:
          'Connecting sources, making sense of information and getting it to the people who need it. From the pipeline to the dashboard.',
        tools: ['SQL', 'Python', 'Snowflake', 'MicroStrategy'],
        example: 'From scattered data to a shared view of the business.',
        outcome: 'Data engineering · Business intelligence · Reporting',
      },
      {
        id: 'producto',
        category: 'SOFTWARE & PRODUCT',
        title: 'Software built to be used.',
        description:
          'Web applications and bespoke tools. Solid architecture with a clear experience, from the idea to deployment.',
        tools: ['TypeScript', 'Next.js', 'React', 'Vercel'],
        example: 'From a process that doesn’t fit to a tool of your own.',
        outcome: 'Digital product · Web applications · Integrations',
      },
      {
        id: 'ia',
        category: 'ARTIFICIAL INTELLIGENCE',
        title: 'AI with a job to do.',
        description:
          'Automating repetitive work and adding artificial intelligence where it adds value: internal processes, data handling and connected tools.',
        tools: ['Python', 'LLMs', 'AI agents', 'APIs'],
        example: 'From repetitive tasks to processes that work with you.',
        outcome: 'Automation · Applied AI · Workflows',
      },
    ],
  },
  experience: {
    eyebrow: ['PROFESSIONAL', 'EXPERIENCE'],
    title: ['Judgement is built', 'through experience.'],
    intro:
      'From application development to project leadership. From data to applied AI.',
    current: {
      eyebrow: 'WHERE I AM NOW',
      period: 'DEC 2017 — PRESENT',
      role: 'AI & Data Engineer',
      location: 'ELCHE, SPAIN',
      art: ['Python', 'Claude API', 'Playwright', 'Snowflake'],
      lead: ['From data', 'to applied AI.'],
      paragraphs: [
        'I have been part of the Hawkers team since 2017. I started in data engineering and business intelligence; today my focus is applied AI: systems that automate real work for different departments.',
        'Applied AI for the website: daily performance monitoring, automated validation of promotions before they go live and tracking how the brand appears in AI assistants. And purpose-built tools for different departments.',
        'One principle guides that work: AI extracts and suggests; deterministic code decides.',
      ],
      tags: [
        'Applied AI',
        'QA automation',
        'Data Engineering',
        'Business Intelligence',
      ],
      flow: 'DATA → AI → DECISIONS',
      linkedin: 'My experience on LinkedIn',
    },
    noteLabel: 'THE STORY CONTINUES',
    note: 'In parallel, I lead technology at Zogic Studio',
    jobs: [
      {
        company: 'Cívica Software',
        brand: 'civica',
        period: '2016 — 2017',
        location: 'Granada',
        role: 'Project Leader & Senior BI Consultant',
        detail:
          'Business intelligence consulting and project management for Banco Mare Nostrum and Unicaja. Analytical models, dashboards and a direct relationship with the client.',
        roles: [
          {
            title: 'Project Leader',
            dates: 'Jun 2017 — Dec 2017',
            text: 'Project planning, team and task management, the MicroStrategy roadmap and server deployment. Designing and delivering training for internal staff and clients.',
          },
          {
            title: 'Senior BI Consultant',
            dates: 'Dec 2016 — Dec 2017',
            text: 'Requirements gathering, reporting, dashboards and financial data validation for BMN and Unicaja.',
          },
        ],
        technologies: ['MicroStrategy', 'Teradata SQL', 'PostgreSQL'],
      },
      {
        company: 'Capgemini',
        brand: 'capgemini',
        period: '2015 — 2016',
        location: 'Murcia',
        role: 'BI Consultant',
        detail:
          'Consultant at the Business Intelligence Centre of Excellence. Projects for Gas Natural Fenosa, from analysis and Data Mart design to ETL processes and reporting.',
        roles: [
          {
            title: 'BI Consultant',
            dates: 'Oct 2015 — Dec 2016',
            text: 'Technical and functional designs, new Data Marts, ongoing maintenance and incident resolution. An end-to-end view of data.',
          },
        ],
        technologies: ['MicroStrategy', 'Oracle', 'ETL', 'Data Warehousing'],
      },
      {
        company: 'Bitec',
        brand: 'bitec',
        period: '2015',
        location: 'Murcia',
        role: 'ERP Developer',
        detail:
          'Extracurricular internship and training as a technical consultant in Microsoft Dynamics NAV.',
        roles: [
          {
            title: 'ERP Developer',
            dates: 'Jun 2015 — Sep 2015',
            text: 'Business Intelligence Technology. Development on the Microsoft Dynamics NAV ERP.',
          },
        ],
        technologies: ['Microsoft Dynamics NAV'],
      },
      {
        company: 'TICARUM',
        brand: 'ticarum',
        period: '2014',
        location: 'Murcia',
        role: 'Support Technician',
        detail:
          'Hardware and software support for administrative, service, teaching and research staff at the University of Murcia.',
        roles: [
          {
            title: 'Support Technician',
            dates: 'Apr 2014 — Jul 2014',
            text: 'Support for administrative and academic staff at the University of Murcia.',
          },
        ],
        technologies: ['Technical support', 'Hardware & software'],
      },
      {
        company: 'SABIC Innovative Plastics',
        brand: 'sabic',
        period: '2010',
        location: 'Alhama de Murcia',
        role: 'Application Developer',
        detail:
          'Full development of a module complementing the corporate ERP, in a Europe-wide project.',
        roles: [
          {
            title: 'Application Developer',
            dates: 'May 2010 — Aug 2010',
            text: 'Customer Claim Portal project. Recognised for performance and commitment to its rollout.',
          },
        ],
        technologies: ['Application development', 'ERP'],
      },
      {
        company: 'VilVite',
        brand: 'vilvite',
        period: '2010',
        location: 'Norway',
        role: 'Erasmus internship · Animation development',
        detail:
          'My first international experience, within the Erasmus internship programme, developing animations with Adobe Flash.',
        roles: [
          {
            title: 'Erasmus Internship',
            dates: 'Mar 2010 — Apr 2010',
            text: 'A stay in Norway that brought together development, teamwork and English.',
          },
        ],
        technologies: ['Adobe Flash', 'English'],
      },
    ],
  },
  about: {
    eyebrow: 'THE PERSON BEHIND IT',
    title: ['Understand first.', 'Build next.', 'Care always.'],
    location: 'Cartagena, Spain.',
    symbol: ['ALWAYS', 'LEARNING.'],
    lead: 'I’m a computer engineer. And, above all, someone who likes to understand how things work.',
    paragraphs: [
      'My path started in application development, went through consulting and led me to specialise in data. At Capgemini I learned to run projects end to end. At Cívica I added leadership and direct client contact. At Hawkers I have gone deeper into connecting technology and business.',
      'Today that path is split between applied AI at Hawkers and Zogic Studio, where we build websites, automations and products that are already live. I keep learning, experimenting and asking questions.',
    ],
    principle:
      'A solution should be well thought out, maintainable and genuinely useful to someone.',
  },
  education: {
    eyebrow: 'EDUCATION & CERTIFICATIONS',
    title: ['A solid foundation.', 'Always evolving.'],
    intro: 'Education lays the foundations. Curiosity takes care of the rest.',
    items: [
      {
        school: 'Universidad de Murcia',
        brand: 'universidad-murcia',
        title: 'BSc in Computer Engineering',
        dates: '2010 — 2015',
        detail: 'Specialisation in Information Systems.',
      },
      {
        school: 'Wrocław University of Science and Technology',
        brand: 'wroclaw',
        title: 'Computer Science · Erasmus',
        dates: '2014 — 2015',
        detail: 'International exchange in Poland.',
      },
      {
        school: 'CIFP Carlos III',
        brand: 'cifp-carlos-iii',
        title: 'Higher National Diploma in Computer Application Development',
        dates: '2008 — 2010',
        detail: 'Where my software development training began.',
      },
    ],
    certifications: {
      eyebrow: 'LEARNING IS PART OF THE JOB',
      title: ['11 certifications.', 'The same curiosity.'],
      featureDate: 'DataCamp · Earned in March 2026',
      open: 'Explore all 11 certifications',
      close: 'Close certifications',
      note: 'Certifications earned throughout my career, including historical ones. Dates show when they were issued, not whether they are currently valid.',
      linkedin: 'See credentials on LinkedIn',
    },
  },
  studio: {
    eyebrow: 'MY STUDIO',
    title: ['From wanting to build', 'to products that are live.'],
    paragraphs: [
      'I am CTO & Co-founder of Zogic Studio, the digital studio I run with Jesús Javier Pedreño from Cartagena. We were born in the age of AI and work remotely across Spain and Europe.',
      'We do SEO and GEO audits, custom websites, AI automation and custom software, always with our own code and no templates. I lead the technology: architecture, development and AI.',
    ],
    cta: 'Discover Zogic Studio',
    markTop: 'DIGITAL STUDIO · CARTAGENA',
    markAria: 'Visit Zogic Studio',
    markBottom: ['Two co-founders.', 'Our own code.'],
    projectsEyebrow: 'PROJECTS IN PRODUCTION',
    projectsAll: 'See all projects',
    projects: {
      klep: {
        type: 'SaaS platform',
        text: 'Scheduling, bookings, session passes, clients and VeriFactu invoicing for training and physiotherapy centres.',
      },
      'summum-sports-lab': {
        type: 'Website',
        text: 'A lead-generation website for a sports centre in Cartagena.',
      },
      'fundacion-neurocultura': {
        type: 'Website',
        text: 'The institutional website of a foundation dedicated to addiction care.',
      },
      'porra-mundial-26': {
        type: 'Web app',
        text: 'Private prediction pools among friends for the 2026 World Cup.',
      },
    },
  },
  contact: {
    eyebrow: 'THE NEXT CONVERSATION',
    place: 'CARTAGENA · CONNECTED TO THE WORLD',
    title: ['Good ideas', 'start with a', 'conversation.'],
    text: 'Do you have a project, a data challenge or an idea you want to shape? Tell me about it on LinkedIn.',
    cta: 'Let’s talk on LinkedIn',
  },
  footer: {
    top: 'Back to top',
    tagline: 'Software, data and curiosity.',
    privacy: 'Privacy',
  },
  privacy: {
    title: 'Privacy · David Egea García',
    description:
      'How data is handled on David Egea García’s personal portfolio.',
    back: 'Back to the portfolio',
    eyebrow: 'DAVID EGEA GARCÍA / ABOUT YOUR DATA',
    heading: ['Your privacy,', 'made clear.'],
  },
};

export const content: Record<Locale, Content> = { es, en };
