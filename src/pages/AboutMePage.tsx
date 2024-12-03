import { useTranslation } from "react-i18next";
import MARTA from '../assets/MARTA.jpg';
import { motion } from "framer-motion";

const AboutMePage: React.FC = () => {
    const { t } = useTranslation();

    // Variantes de animación
    const variants = {
        hidden: { opacity: 0, y: 50 }, // Estado inicial (invisible y desplazado hacia abajo)
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeInOut" }, // Transición suave
        }),
    };

    return (
        <motion.section
            id="about-me"
            className="min-h-screen bg-customPurple flex flex-col items-center justify-center p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Animación ocurre cada vez que el elemento entra/sale
        >
            {/* Título animado */}
            <motion.h1
                className="text-white text-3xl md:text-4xl mb-3 pt-10 text-center"
                custom={0.1} // Sin retraso para el título
                variants={variants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: false, amount: 0.2 }}
            >
                {t("aboutMe")}
            </motion.h1>

            {/* Contenido animado */}
            <div className="text-white flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
                {/* Contenedor para la foto */}
                <motion.div
                    className="flex flex-col items-center"
                    custom={0.2} // Retraso para la imagen
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className="border-container">
                        <div className="image-content">
                            <img src={MARTA} alt="Marta Merchán Dos Santos" className="photo" />
                        </div>
                    </div>

                    {/* Botón debajo de la imagen */}
                    <motion.button
                        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-sm md:text-base"
                        custom={0.4} // Retraso para el botón
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, ease: "easeInOut" },
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        DESCARGAR CV
                    </motion.button>
                </motion.div>

                {/* Contenedor para los párrafos a la derecha */}
                <motion.div
                    className="text-base md:text-xl text-center md:text-left max-w-sm md:max-w-lg mt-4 md:mt-0 flex flex-col space-y-4"
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.p custom={0.6} className="mb-4" variants={variants}>
                        {t("myDescription1")}
                    </motion.p>
                    <motion.p custom={0.8} variants={variants}>
                        {t("myDescription2")}
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AboutMePage;
