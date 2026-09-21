import type { Category } from './projects';

export type Lang = 'es' | 'en';

export interface SkillCategory {
  label: { es: string; en: string };
  skills: string[];
}

export interface ExperienceItem {
  title: { es: string; en: string };
  context: { es: string; en: string };
  items: { es: string; en: string }[];
}

export interface EducationItem {
  degree: { es: string; en: string };
  institution: { es: string; en: string };
  year: { es: string; en: string };
}

export interface Translation {
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    viewProjects: string;
    knowMe: string;
    photoPlaceholder: string;
    logoPlaceholder: string;
  };
  livingPortfolio: {
    label: string;
  };
  projectsSection: {
    title: string;
    subtitle: string;
    filters: Record<'all' | Category, string>;
    viewProject: string;
    brandsLabel: string;
    freelanceLabel: string;
    freelanceSubtitle: string;
  };
  projectDetail: {
    back: string;
    description: string;
    role: string;
    category: string;
    tools: string;
    process: string;
    gallery: string;
    result: string;
    year: string;
  };
  about: {
    title: string;
    bio: string;
    strengthsTitle: string;
  };
  strengths: string[];
  experience: {
    title: string;
    subtitle: string;
  };
  experienceItems: ExperienceItem[];
  education: {
    title: string;
    subtitle: string;
  };
  educationItems: EducationItem[];
  skills: {
    title: string;
    subtitle: string;
    toolsNote: string;
  };
  skillCategories: SkillCategory[];
  contact: {
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    emailLabel: string;
    socialPlaceholder: string;
    instagramLabel: string;
    whatsappLabel: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy Santiago.',
      role: 'Creativo Multimedia',
      description:
        'Creo y desarrollo propuestas visuales, contenido y experiencias multimedia que transforman ideas en proyectos.',
      viewProjects: 'VER PROYECTOS',
      knowMe: 'CONÓCEME',
      photoPlaceholder: '[MI FOTOGRAFÍA]',
      logoPlaceholder: '[LOGO PERSONAL]',
    },
    livingPortfolio: {
      label: 'Living Portfolio',
    },
    projectsSection: {
      title: 'PROYECTOS',
      subtitle:
        'Una selección de proyectos en los que he participado, desarrollado o formado parte.',
      filters: {
        all: 'TODOS',
        design: 'DISEÑO',
        audiovisual: 'AUDIOVISUAL',
        '3d': '3D',
        digital: 'DIGITAL',
        freelance: 'FREELANCE',
      },
      viewProject: 'Ver proyecto',
      brandsLabel: 'MARCAS',
      freelanceLabel: 'PROYECTOS FREELANCE',
      freelanceSubtitle: 'Proyectos independientes de diseño, 3D y producción audiovisual.',
    },
    projectDetail: {
      back: 'Volver',
      description: 'Descripción',
      role: 'Mi rol',
      category: 'Categoría',
      tools: 'Herramientas',
      process: 'Proceso',
      gallery: 'Galería',
      result: 'Resultado final',
      year: 'Año',
    },
    about: {
      title: 'SOBRE MÍ',
      bio:
        'Creativo multimedia con enfoque en diseño, comunicación visual y desarrollo de contenido. Transformo ideas en propuestas visuales atractivas, innovadoras y funcionales — combinando creatividad, criterio estético y atención al detalle. Proactivo, adaptable y orientado a resultados, con interés constante por aprender y asumir nuevos retos.',
      strengthsTitle: 'Fortalezas',
    },
    strengths: [
      'Creatividad e innovación',
      'Atención al detalle',
      'Adaptabilidad',
      'Trabajo en equipo',
      'Proactividad',
      'Orientación a resultados',
      'Aprendizaje constante',
    ],
    experience: {
      title: 'EXPERIENCIA',
      subtitle: 'Trayectoria en diseño, contenido y producción multimedia.',
    },
    experienceItems: [
      {
        title: { es: 'Diseño automotriz — Jeep / Fiat / RAM', en: '' },
        context: {
          es: 'Diseño y desarrollo de piezas publicitarias y contenido gráfico para marcas automotrices.',
          en: '',
        },
        items: [
          { es: 'Diseño de piezas publicitarias', en: '' },
          { es: 'Contenido gráfico para redes sociales', en: '' },
          { es: 'Campañas digitales y key visuals', en: '' },
          { es: 'Conceptualización gráfica y material corporativo', en: '' },
          { es: 'Adaptación de campañas a distintos formatos', en: '' },
          { es: 'Desarrollo de propuestas visuales enfocadas en atributos de producto', en: '' },
          { es: 'Photoshop, Illustrator y After Effects', en: '' },
        ],
      },
      {
        title: { es: 'Proyectos freelance', en: '' },
        context: {
          es: 'Gestión independiente de proyectos de diseño, 3D y producción audiovisual.',
          en: '',
        },
        items: [
          { es: 'Diseño gráfico y modelado 3D', en: '' },
          { es: 'Contenido multimedia', en: '' },
          { es: 'Producción audiovisual: preproducción, producción y postproducción', en: '' },
          { es: 'Gestión independiente de proyectos', en: '' },
        ],
      },
    ],
    education: {
      title: 'EDUCACIÓN',
      subtitle: 'Formación académica y continúa.',
    },
    educationItems: [
      {
        degree: { es: 'Tecnología en Producción Multimedia', en: 'Multimedia Production Technology' },
        institution: { es: 'SENA', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: 'Desarrollo de Habilidades Digitales para la Construcción de Contenido Digital', en: 'Digital Skills Development for Digital Content Creation' },
        institution: { es: 'SENA', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: 'Desarrollo de Habilidades, Principios y Valores para la Vida y el Trabajo', en: 'Development of Skills, Principles and Values for Life and Work' },
        institution: { es: 'SENA', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: 'Formación en Inglés con Enfoque en Industria Audiovisual', en: 'English Training with Audiovisual Industry Focus' },
        institution: { es: 'Centro Colombo Americano', en: 'Colombo Americano Center' },
        year: { es: '', en: '' },
      },
    ],
    skills: {
      title: 'HABILIDADES',
      subtitle: 'Las herramientas son medios para desarrollar soluciones creativas.',
      toolsNote: 'Herramientas',
    },
    skillCategories: [
      {
        label: { es: 'Diseño', en: '' },
        skills: ['Photoshop', 'Illustrator', 'Dirección de arte', 'Composición', 'Tipografía', 'Color', 'Identidad visual'],
      },
      {
        label: { es: 'Audiovisual', en: '' },
        skills: ['After Effects', 'Preproducción', 'Producción', 'Postproducción', 'Edición'],
      },
      {
        label: { es: '3D', en: '' },
        skills: ['Modelado 3D', 'Desarrollo visual', 'Experiencias 3D'],
      },
      {
        label: { es: 'Creatividad', en: '' },
        skills: ['Conceptualización', 'Creatividad e innovación', 'Atención al detalle', 'Adaptabilidad', 'Trabajo en equipo'],
      },
    ],
    contact: {
      title: '¿TIENES UNA IDEA?',
      subtitle: 'Hagámosla realidad.',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      submit: 'ENVIAR MENSAJE',
      sending: 'Enviando...',
      success: 'Mensaje enviado. Te responderé pronto.',
      error: 'Hubo un error. Inténtalo de nuevo.',
      emailLabel: 'Email',
      socialPlaceholder: '[AGREGAR LINK]',
      instagramLabel: 'Instagram',
      whatsappLabel: 'WhatsApp',
    },
    footer: {
      tagline: 'Creativo Multimedia',
      rights: '© 2026',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Santiago.",
      role: 'Multimedia Creative',
      description:
        'I create and develop visual proposals, content, and multimedia experiences that transform ideas into projects.',
      viewProjects: 'VIEW PROJECTS',
      knowMe: 'GET TO KNOW ME',
      photoPlaceholder: '[MY PHOTO]',
      logoPlaceholder: '[PERSONAL LOGO]',
    },
    livingPortfolio: {
      label: 'Living Portfolio',
    },
    projectsSection: {
      title: 'PROJECTS',
      subtitle:
        'A selection of projects I have participated in, developed, or been part of.',
      filters: {
        all: 'ALL',
        design: 'DESIGN',
        audiovisual: 'AUDIOVISUAL',
        '3d': '3D',
        digital: 'DIGITAL',
        freelance: 'FREELANCE',
      },
      viewProject: 'View project',
      brandsLabel: 'BRANDS',
      freelanceLabel: 'FREELANCE PROJECTS',
      freelanceSubtitle: 'Independent design, 3D, and audiovisual production projects.',
    },
    projectDetail: {
      back: 'Back',
      description: 'Description',
      role: 'My role',
      category: 'Category',
      tools: 'Tools',
      process: 'Process',
      gallery: 'Gallery',
      result: 'Final result',
      year: 'Year',
    },
    about: {
      title: 'ABOUT ME',
      bio:
        'Multimedia creative focused on design, visual communication, and content development. I transform ideas into attractive, innovative, and functional visual proposals — combining creativity, aesthetic judgment, and attention to detail. Proactive, adaptable, and results-oriented, with a constant drive to learn and take on new challenges.',
      strengthsTitle: 'Strengths',
    },
    strengths: [
      'Creativity & innovation',
      'Attention to detail',
      'Adaptability',
      'Teamwork',
      'Proactivity',
      'Results orientation',
      'Constant learning',
    ],
    experience: {
      title: 'EXPERIENCE',
      subtitle: 'Track record in design, content, and multimedia production.',
    },
    experienceItems: [
      {
        title: { es: '', en: 'Automotive design — Jeep / Fiat / RAM' },
        context: {
          es: '',
          en: 'Design and development of advertising pieces and graphic content for automotive brands.',
        },
        items: [
          { es: '', en: 'Advertising piece design' },
          { es: '', en: 'Graphic content for social media' },
          { es: '', en: 'Digital campaigns and key visuals' },
          { es: '', en: 'Graphic conceptualization and corporate materials' },
          { es: '', en: 'Campaign adaptation across formats' },
          { es: '', en: 'Visual proposals focused on product attributes' },
          { es: '', en: 'Photoshop, Illustrator, and After Effects' },
        ],
      },
      {
        title: { es: '', en: 'Freelance projects' },
        context: {
          es: '',
          en: 'Independent management of design, 3D, and audiovisual production projects.',
        },
        items: [
          { es: '', en: 'Graphic design and 3D modeling' },
          { es: '', en: 'Multimedia content' },
          { es: '', en: 'Audiovisual production: pre-production, production, and post-production' },
          { es: '', en: 'Independent project management' },
        ],
      },
    ],
    education: {
      title: 'EDUCATION',
      subtitle: 'Academic and ongoing formation.',
    },
    educationItems: [
      {
        degree: { es: '', en: 'Multimedia Production Technology' },
        institution: { es: '', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: '', en: 'Digital Skills Development for Digital Content Creation' },
        institution: { es: '', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: '', en: 'Development of Skills, Principles and Values for Life and Work' },
        institution: { es: '', en: 'SENA' },
        year: { es: '', en: '' },
      },
      {
        degree: { es: '', en: 'English Training with Audiovisual Industry Focus' },
        institution: { es: '', en: 'Colombo Americano Center' },
        year: { es: '', en: '' },
      },
    ],
    skills: {
      title: 'SKILLS',
      subtitle: 'Tools are means to develop creative solutions.',
      toolsNote: 'Tools',
    },
    skillCategories: [
      {
        label: { es: '', en: 'Design' },
        skills: ['Photoshop', 'Illustrator', 'Art direction', 'Composition', 'Typography', 'Color', 'Visual identity'],
      },
      {
        label: { es: '', en: 'Audiovisual' },
        skills: ['After Effects', 'Pre-production', 'Production', 'Post-production', 'Editing'],
      },
      {
        label: { es: '', en: '3D' },
        skills: ['3D modeling', 'Visual development', '3D experiences'],
      },
      {
        label: { es: '', en: 'Creativity' },
        skills: ['Conceptualization', 'Creativity & innovation', 'Attention to detail', 'Adaptability', 'Teamwork'],
      },
    ],
    contact: {
      title: 'GOT AN IDEA?',
      subtitle: "Let's make it happen.",
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      submit: 'SEND MESSAGE',
      sending: 'Sending...',
      success: 'Message sent. I will get back to you soon.',
      error: 'Something went wrong. Please try again.',
      emailLabel: 'Email',
      socialPlaceholder: '[ADD LINK]',
      instagramLabel: 'Instagram',
      whatsappLabel: 'WhatsApp',
    },
    footer: {
      tagline: 'Multimedia Creative',
      rights: '© 2026',
    },
  },
};
