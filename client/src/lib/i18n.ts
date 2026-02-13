import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
        resume: "Resume"
      },
      hero: {
        name: "Rodrigo de Barros",
        role: "Software Engineer",
        description: "Software Engineer driven by curiosity. I enjoy working and learning with complex systems, always seeking well-thought-out, reliable, and easy-to-evolve solutions. I believe that good engineering is born from the combination of solid technique, clear communication, and continuous collaboration.",
        cta_projects: "View Projects",
        cta_contact: "Contact Me"
      },
      about: {
        title: "About Me",
        description: "I am a Full Stack Software Developer with over 3 years of experience, graduating in Systems Analysis and Development from the University of Mogi das Cruzes (UMC). I have worked on large-scale projects in the financial (Bradesco) and corporate (Comgás) sectors, always focusing on robust, secure, and scalable solutions, applying software development best practices and integration between front-end and back-end.",
        location: "São Paulo, Brazil",
        stats: {
          years: "Years Experience",
          features: "Features Delivered",
          certified: "Microsoft Certified"
        }
      },
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and methodologies I work with"
      },
      experience: {
        title: "Professional Experience",
        education_title: "Education",
        certifications_title: "Certifications",
        present: "Present"
      },
      projects: {
        title: "Featured Projects",
        view_code: "View Code",
        demo: "Live Demo"
      },
      contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
        placeholders: {
          name: "Your name",
          email: "you@example.com",
          message: "Hi, I'd like to discuss a project..."
        }
      },
      footer: {
        rights: "All rights reserved.",
        developed_by: "Developed by"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        skills: "Competências",
        experience: "Experiência",
        projects: "Projetos",
        certifications: "Certificados",
        contact: "Contato",
        resume: "Currículo"
      },
      hero: {
        name: "Rodrigo de Barros",
        role: "Engenheiro de Software",
        description: "Engenheiro de Software movido por curiosidade. Gosto de trabalhar e aprender com sistemas complexos, buscando sempre soluções bem pensadas, confiáveis e fáceis de evoluir. Acredito que boa engenharia nasce da combinação entre técnica sólida, comunicação clara e colaboração contínua.",
        cta_projects: "Ver Projetos",
        cta_contact: "Entrar em Contato"
      },
      about: {
        title: "Sobre Mim",
        description: "Sou Desenvolvedor de Software Full Stack com mais de 3 anos de experiência, graduado em Análise e Desenvolvimento de Sistemas pela Universidade de Mogi das Cruzes (UMC). Atuei no desenvolvimento de projetos de grande escala nos setores financeiro (Bradesco) e corporativo (Comgás), sempre com foco em soluções robustas, seguras e escaláveis, aplicando boas práticas de desenvolvimento de software e integração entre front-end e back-end.",
        location: "São Paulo, Brasil",
        stats: {
          years: "Anos de Experiência",
          features: "Features Entregues",
          certified: "Certificado Microsoft"
        }
      },
      skills: {
        title: "Competências Técnicas",
        subtitle: "Tecnologias e metodologias com as quais trabalho"
      },
      experience: {
        title: "Experiência Profissional",
        education_title: "Formação",
        certifications_title: "Certificações",
        present: "Atual"
      },
      projects: {
        title: "Projetos em Destaque",
        view_code: "Ver Código",
        demo: "Ver Demo"
      },
      contact: {
        title: "Entre em Contato",
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar Mensagem",
        success: "Mensagem enviada com sucesso!",
        error: "Algo deu errado. Tente novamente.",
        placeholders: {
          name: "Seu nome",
          email: "seuemail@exemplo.com",
          message: "Olá, gostaria de discutir um projeto..."
        }
      },
      footer: {
        rights: "Todos os direitos reservados.",
        developed_by: "Desenvolvido por"
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: "Sobre Mí",
        skills: "Habilidades",
        experience: "Experiencia",
        projects: "Proyectos",
        certifications: "Certificaciones",
        contact: "Contacto",
        resume: "Currículum"
      },
      hero: {
        name: "Rodrigo de Barros",
        role: "Ingeniero de Software",
        description: "Ingeniero de Software movido por la curiosidad. Me gusta trabajar y aprender con sistemas complejos, buscando siempre soluciones bien pensadas, confiables y fáciles de evolucionar. Creo que la buena ingeniería nace de la combinación de una técnica sólida, una comunicación clara y una colaboración continua.",
        cta_projects: "Ver Proyectos",
        cta_contact: "Contactar"
      },
      about: {
        title: "Sobre Mí",
        description: "Soy Desarrollador de Software Full Stack con más de 3 años de experiencia, graduado en Análisis y Desarrollo de Sistemas por la Universidad de Mogi das Cruzes (UMC). He trabajado en proyectos de gran escala en los sectores financiero (Bradesco) y corporativo (Comgás), siempre enfocado en soluciones robustas, seguras y escalables, aplicando buenas prácticas de desarrollo de software e integración entre front-end y back-end.",
        location: "País Vasco, Brasil",
        stats: {
          years: "Años de Experiencia",
          features: "Features Entregadas",
          certified: "Certificado Microsoft"
        }
      },
      skills: {
        title: "Habilidades Técnicas",
        subtitle: "Tecnologías y metodologías con las que trabajo"
      },
      experience: {
        title: "Experiencia Profesional",
        education_title: "Formación",
        certifications_title: "Certificaciones",
        present: "Actualidad"
      },
      projects: {
        title: "Proyectos Destacados",
        view_code: "Ver Código",
        demo: "Ver Demo"
      },
      contact: {
        title: "Ponerse en Contacto",
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        send: "Enviar Mensaje",
        success: "¡Mensaje enviado con éxito!",
        error: "Algo salió mal. Inténtalo de nuevo.",
        placeholders: {
          name: "Tu nombre",
          email: "tucorreo@ejemplo.com",
          message: "Hola, me gustaría hablar sobre un proyecto..."
        }
      },
      footer: {
        rights: "Todos los derechos reservados.",
        developed_by: "Desarrollado por"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
