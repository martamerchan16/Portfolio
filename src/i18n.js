import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones
const resources = {
    en: {
        translation: {
            home: 'Home',
            aboutMe: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
            hello: "Hello! I'm Marta Merchán",
            fullStack: "FullStack Developer",
            myDescription1: "I am Marta Merchán, a Full Stack web developer passionate about creating innovative technological solutions that address complex problems efficiently. My experience in administrative management has given me a solid understanding of organization and teamwork, skills that, together with my knowledge in various web technologies, allow me to provide effective solutions and work collaboratively.",
            myDescription2: "In my free time, I enjoy activities such as paddle tennis, which has taught me the importance of strategy and collaboration, qualities that I also apply in my professional life. I am motivated by working in dynamic teams, where continuous learning and innovation are fundamental pillars."
        },
    },

    es: {
        translation: {
            home: 'Inicio',
            aboutMe: 'Sobre Mí',
            skills: 'Tecnologías',
            projects: 'Proyectos',
            contact: 'Contacto',
            hello: "¡Hola! Soy Marta Merchán",
            fullStack: "Desarrolladora FullStack",
            myDescription1: "Me presento, soy Marta Merchán, desarrolladora web Full Stack apasionada por crear soluciones tecnológicas innovadoras que aborden problemas complejos de forma eficiente. Mi experiencia en gestión administrativa me ha brindado una sólida comprensión de la organización y el trabajo en equipo, habilidades que, junto con mi conocimiento en diversas tecnologías web, me permiten aportar soluciones efectivas y trabajar de manera colaborativa.",
            myDescription2: "En mi tiempo libre, disfruto de actividades como el pádel, que me ha enseñado la importancia de la estrategia y la colaboración, cualidades que aplico también en mi vida profesional. Me motiva trabajar en equipos dinámicos, donde el aprendizaje continuo y la innovación sean pilares fundamentales."
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
