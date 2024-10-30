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
            fullStack: "FullStack Developer"
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
            fullStack: "Desarrolladora FullStack"
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
