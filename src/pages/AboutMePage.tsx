import { useTranslation } from "react-i18next";
import MARTA from '../assets/MARTA.jpg';
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const AboutMePage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    // Cambia la clave cada vez que el idioma cambia para reiniciar la animación
    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [i18n.resolvedLanguage]);

    return (
        <section id="about-me" className="min-h-screen bg-customPurple flex flex-col items-center justify-center p-4">
            <h1 className="text-white text-xl md:text-4xl mb-3 pt-10 text-center">{t("aboutMe")}</h1>

            <div className="text-white flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
                {/* Contenedor para la foto y el botón */}
                <div className="flex flex-col items-center">
                    <div className="border-container">
                        <div className="image-content">
                            <img src={MARTA} alt="Marta Merchán Dos Santos" className="photo w-56 md:w-96 h-auto" />
                        </div>
                    </div>
                    <button className="mt-4 mb-9 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-sm md:text-base">
                        DESCARGAR CV
                    </button>
                </div>

                <div className="text-base md:text-xl text-center md:text-left max-w-sm md:max-w-lg mt-4 md:mt-0">
                    <TypeAnimation
                        key={key} // Clave única para forzar la reanimación
                        sequence={[
                            `${t("myDescription1")}\n\n${t("myDescription2")}`, // Escribe todo el texto con salto de línea
                            0 // Pausa final para detener la animación
                        ]}
                        wrapper="div"
                        speed={90}
                        style={{ whiteSpace: 'pre-line' }} // Asegura que los saltos de línea se muestren
                        repeat={0} // No repetir la animación
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMePage;
