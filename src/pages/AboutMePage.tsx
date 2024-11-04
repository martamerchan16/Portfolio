import { useTranslation } from "react-i18next";
import MARTA from '../assets/MARTA.jpg';

const AboutMePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="about-me" className="h-screen bg-customPurple flex flex-col items-center justify-center">
            <h1 className="text-white text-xl md:text-4xl mb-3 pt-10 text-center">{t("aboutMe")}</h1>

            <div className="text-white flex flex-col md:flex-row items-center justify-center space-x-6">
                {/* Contenedor para la foto y el botón */}
                <div className="flex flex-col items-center">
                    <div className="border-container">
                        <div className="image-content">
                            <img src={MARTA} alt="Marta Merchán Dos Santos" className="photo" />
                        </div>
                    </div>
                    <button className="mb-9 px-10 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                        Descargar CV
                    </button>
                </div>

                <div className="text-lg md:text-xl text-center md:text-left max-w-lg mt-4 md:mt-0">
                    <p>{t("myDescription1")}</p>
                    <p className="mt-4">{t("myDescription2")}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMePage;
