import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Slider from "react-slick"; // Importamos react-slick
import "slick-carousel/slick/slick.css"; // Estilos básicos de slick
import "slick-carousel/slick/slick-theme.css"; // Tema opcional
import ReactIcon from "../assets/React.svg"
import JavaScriptIcon from "../assets/JavaScript.svg"
import TypeScriptIcon from "../assets/TypeScript.svg"
import BootstrapIcon from "../assets/Bootstrap.svg"
import CSSIcon from "../assets/CSS3.svg"
import HTMLIcon from "../assets/HTML5.svg"
import NodeIcon from "../assets/Node.js.svg"
import MongoDBIcon from "../assets/MongoDB.svg"
import VSCodeIcon from "../assets/Visual Studio Code (VS Code).svg"
import GitIcon from "../assets/Git.svg"
import GitHubIcon from "../assets/GitHub.svg"
import PostmanIcon from "../assets/Postman.svg"
import ReactBootstrapIcon from "../assets/React Bootstrap.svg"
import TailwindIcon from "../assets/Tailwind CSS.svg"


const SkillsPage: React.FC = () => {
    const { t } = useTranslation();

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeInOut" },
        }),
    };

    // Configuración del carrusel
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6, // Cantidad de íconos visibles al mismo tiempo
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 200,
        responsive: [
            {
                breakpoint: 768, // Pantallas pequeñas
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480, // Pantallas muy pequeñas
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const icons = [
        { src: ReactIcon, alt: "React" },
        { src: JavaScriptIcon, alt: "JavaScript" },
        { src: TypeScriptIcon, alt: "TypeScript" },
        { src: BootstrapIcon, alt: "Bootstrap" },
        { src: CSSIcon, alt: "CSS3" },
        { src: HTMLIcon, alt: "HTML5" },
        { src: NodeIcon, alt: "Node.js" },
        { src: MongoDBIcon, alt: "MongoDB" },
        { src: VSCodeIcon, alt: "VS Code" },
        { src: GitIcon, alt: "Git" },
        { src: GitHubIcon, alt: "GitHub" },
        { src: PostmanIcon, alt: "Postman" },
        { src: ReactBootstrapIcon, alt: "React Bootstrap" },
        { src: TailwindIcon, alt: "Tailwind CSS" },
    ];

    return (
        <motion.section
            id="skills"
            className="min-h-screen bg-customPurple flex flex-col items-center justify-center p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {/* Título */}
            <motion.h1
                className="text-white text-3xl md:text-4xl mb-6 text-center"
                custom={0.1}
                variants={variants}
            >
                {t("skills")}
            </motion.h1>

            {/* Descripción */}
            <motion.p
                className="text-white text-base md:text-lg text-center max-w-2xl mb-8"
                custom={0.2}
                variants={variants}
            >
                {t("skillsText")}
            </motion.p>

            {/* Carrusel */}
            <motion.div
                className="w-full max-w-5xl"
                custom={0.4}
                variants={variants}
            >
                <Slider {...settings}>
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center w-24 h-32 mx-auto space-y-2"
                        >
                            {/* Ícono */}
                            <div className="flex justify-center items-center w-16 h-16 mx-auto">
                                <img src={icon.src} alt={icon.alt} className="w-12 h-12 mx-auto" />
                            </div>
                            {/* Nombre de la tecnología */}
                            <h6 className="text-white text-center text-sm md:text-base">
                                {icon.alt}
                            </h6>
                        </div>

                    ))}
                </Slider>
            </motion.div>

        </motion.section>
    );
};

export default SkillsPage;
