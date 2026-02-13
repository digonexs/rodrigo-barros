import { 
  SiJavascript, SiSpringboot, SiSpring, SiSpringsecurity, 
  SiHibernate, SiPostgresql, SiMongodb, SiDocker, SiGit, SiGithub, 
  SiJenkins, SiJunit5, SiJsonwebtokens, SiAmazon, 
  SiScrumalliance, SiBootstrap, SiHtml5, SiCss3
} from "react-icons/si";
import { FaJava, FaCode, FaServer, FaDatabase, FaMicrosoft } from "react-icons/fa";

export interface Experience {
  id: string;
  role: { pt: string; en: string; es: string };
  company: { pt: string; en: string; es: string };
  period: { pt: string; en: string; es: string };
  description: { pt: string[]; en: string[]; es: string[] };
}

export interface Project {
  id: string;
  title: { pt: string; en: string; es: string };
  description: { pt: string; en: string; es: string };
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Certificate {
  id: string;
  title: { pt: string; en: string; es: string };
  issuer: string;
  date: string;
  url?: string;
}

export interface Skill {
  name: string;
  icon: any;
  category: "backend" | "frontend" | "devops" | "other";
}

export const skills: Skill[] = [
  { name: "Java", icon: FaJava, category: "backend" },
  { name: "Spring Boot", icon: SiSpringboot, category: "backend" },
  { name: "Spring Data", icon: SiSpring, category: "backend" },
  { name: "Spring Security", icon: SiSpringsecurity, category: "backend" },
  { name: "REST APIs", icon: FaServer, category: "backend" },
  { name: "Microservices", icon: FaServer, category: "backend" },
  { name: "Clean Arch", icon: FaCode, category: "backend" },
  { name: "DDD", icon: FaCode, category: "backend" },
  { name: "JPA / Hibernate", icon: SiHibernate, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
  { name: "MongoDB", icon: SiMongodb, category: "backend" },
  { name: "Docker", icon: SiDocker, category: "devops" },
  { name: "Git", icon: SiGit, category: "devops" },
  { name: "GitHub", icon: SiGithub, category: "devops" },
  { name: "CI/CD", icon: SiJenkins, category: "devops" },
  { name: "Jenkins", icon: SiJenkins, category: "devops" },
  { name: "JUnit / TDD", icon: SiJunit5, category: "backend" },
  { name: "JWT / OAuth2", icon: SiJsonwebtokens, category: "backend" },
  { name: "AWS", icon: SiAmazon, category: "devops" },
  { name: "Azure", icon: FaMicrosoft, category: "devops" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend" },
  { name: "Scrum", icon: SiScrumalliance, category: "other" },
];

export const experience: Experience[] = [
  {
    id: "1",
    role: { pt: "Engenheiro de Software", en: "Software Engineer", es: "Ingeniero de Software" },
    company: { pt: "Hypeone | NEOBPO (Projeto Comgás)", en: "Hypeone | NEOBPO (Comgás Project)", es: "Hypeone | NEOBPO (Proyecto Comgás)" },
    period: { pt: "Set 2024 - Atual", en: "Sep 2024 - Present", es: "Sep 2024 - Actualidad" },
    description: {
      pt: [
        "Atuação na evolução do GetDoc, plataforma de gestão de processos e workflow.",
        "Desenvolvimento e manutenção de soluções em ambiente monolítico com base em DDD.",
        "Trabalho com Java 8+, JSF, PrimeFaces, Hibernate, PostgreSQL, Docker, Jenkins e GitLab.",
        "Participação ativa nos ritos do Scrum."
      ],
      en: [
        "Working on the evolution of GetDoc, a process management and workflow platform.",
        "Development and maintenance of monolithic solutions based on DDD.",
        "Working with Java 8+, JSF, PrimeFaces, Hibernate, PostgreSQL, Docker, Jenkins, and GitLab.",
        "Active participation in Scrum ceremonies."
      ],
      es: [
        "Trabajando en la evolución de GetDoc, una plataforma de gestión de procesos y flujo de trabajo.",
        "Desarrollo y mantenimiento de soluciones monolíticas basadas en DDD.",
        "Trabajando con Java 8+, JSF, PrimeFaces, Hibernate, PostgreSQL, Docker, Jenkins y GitLab.",
        "Participación activa en ceremonias Scrum."
      ]
    }
  },
  {
    id: "2",
    role: { pt: "Desenvolvedor de Software", en: "Software Developer", es: "Desarrollador de Software" },
    company: { pt: "Foursys (Projeto Banco Bradesco)", en: "Foursys (Bradesco Bank Project)", es: "Foursys (Proyecto Banco Bradesco)" },
    period: { pt: "Fev 2023 - Set 2024", en: "Feb 2023 - Sep 2024", es: "Feb 2023 - Sep 2024" },
    description: {
      pt: [
        "Desenvolvimento e manutenção de sistema CRM de grande impacto com integração ao mainframe (COBOL).",
        "Entrega de mais de 60 funcionalidades em produção.",
        "Redução de 66% dos bugs identificados durante testes.",
        "Impacto em mais de 6.000 agências e 20.000 usuários."
      ],
      en: [
        "Development and maintenance of a high-impact CRM system integrated with mainframe (COBOL).",
        "Delivered over 60 features to production.",
        "Reduced bugs identified during testing by 66%.",
        "Impacted over 6,000 branches and 20,000 users."
      ],
      es: [
        "Desarrollo y mantenimiento de un sistema CRM de alto impacto integrado con mainframe (COBOL).",
        "Entrega de más de 60 funcionalidades en producción.",
        "Reducción del 66% de los errores identificados durante las pruebas.",
        "Impacto en más de 6.000 sucursales y 20.000 usuarios."
      ]
    }
  },
  {
    id: "3",
    role: { pt: "Desenvolvedor de Software Trainee", en: "Software Developer Trainee", es: "Desarrollador de Software Trainee" },
    company: { pt: "Foursys", en: "Foursys", es: "Foursys"},
    period: { pt: "Nov 2021 - Fev 2023", en: "Nov 2021 - Feb 2023", es: "Nov 2021 - Feb 2023" },
    description: {
      pt: [
        "Programa de treinamento focado em Design Thinking, Scrum, UX/UI, lógica.",
        "Atuação como Full Stack Trainee em projeto do Banco Bradesco.",
        "Desenvolvimento com Java 8+, JavaScript, Bootstrap, HTML e CSS."
      ],
      en: [
        "Training program focused on Design Thinking, Scrum, UX/UI, logic.",
        "Worked as Full Stack Trainee on a Banco Bradesco project.",
        "Development with Java 8+, JavaScript, Bootstrap, HTML, and CSS."
      ],
      es: [
        "Programa de capacitación enfocado en Design Thinking, Scrum, UX/UI, lógica.",
        "Actuación como Full Stack Trainee en proyecto del Banco Bradesco.",
        "Desarrollo con Java 8+, JavaScript, Bootstrap, HTML y CSS."
      ]
    }
  }
];

export const education = [
  {
    institution: "FIAP",
    degree: {
      pt: "Pós-Graduação em Arquitetura e Desenvolvimento Java",
      en: "Postgraduate Degree in Java Architecture and Development",
      es: "Posgrado en Arquitectura y Desarrollo Java"
    },
    period: "2026 - 2026"
  },
  {
    institution: "Universidade de Mogi das Cruzes (UMC)",
    degree: {
      pt: "Graduação em Análise e Desenvolvimento de Sistemas",
      en: "Degree in Systems Analysis and Development",
      es: "Licenciatura en Análisis y Desarrollo de Sistemas"
    },
    period: "2019 - 2020"
  }
];

export const certifications: Certificate[] = [
  {
    id: "az900",
    title: { pt: "Microsoft Certified: Azure Fundamentals (AZ-900)", en: "Microsoft Certified: Azure Fundamentals (AZ-900)", es: "Microsoft Certified: Azure Fundamentals (AZ-900)" },
    issuer: "Microsoft",
    date: "2024" 
  }
];

export const projects: Project[] = [
  {
    id: "1",
    image: "portfolio-pessoal.png",
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio", es: "Portafolio Personal" },
    description: {
      pt: "Site de portfólio pessoal moderno e responsivo com internacionalização e modo escuro.",
      en: "Modern and responsive personal portfolio website with internationalization and dark mode.",
      es: "Sitio web de portafolio personal moderno y receptivo con internacionalización y modo oscuro."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "i18next"],
    github: "https://github.com/digonexs/rodrigo-barros",
    demo: "#"
  },
  {
    id: "2",
    image: "lading-page-cidai.png",
    title: { pt: "Landing Page CIDAI", en: "Landing Page CIDAI", es: "Landing Page CIDAI" },
    description: {
      pt: "Landing page do projeto social CIDAI com sistema de cadastro, envio automático de mensagens via WhatsApp ao responsável e emissão de certificados.",
      en: "Landing page for the CIDAI social project with a registration system, automatic WhatsApp message delivery to the responsible party, and certificate issuance.",
      es: "Landing page del proyecto social CIDAI con sistema de registro, envío automático de mensajes por WhatsApp al responsable y emisión de certificados."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/digonexs/cidai-project",
    demo: "https://cidai-project.vercel.app/"
  },
  {
    id: "3",
    image: "routineflow.png",
    title: { pt: "RoutineFlow", en: "RoutineFlow", es: "RoutineFlow" },
    description: {
      pt: "Aplicação web mobile-first para rastreamento de hábitos e rotinas semanais. O app permite que usuários criem tarefas recorrentes para cada dia da semana, acompanhem seu progresso diário e visualizem sua consistência através de um mapa de calor interativo.",
      en: "Mobile-first web application for tracking habits and weekly routines. The app allows users to create recurring tasks for each day of the week, track their daily progress, and visualize their consistency through an interactive heatmap.",
      es: "Aplicación web mobile-first para el seguimiento de hábitos y rutinas semanales. La app permite a los usuarios crear tareas recurrentes para cada día de la semana, seguir su progreso diario y visualizar su constancia a través de un mapa de calor interactivo."
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "Framer Motion", "Shadcn/UI"],
    github: "https://github.com/digonexs/routineflow",
    demo: "https://routineflow-sepia.vercel.app/"
  },
];