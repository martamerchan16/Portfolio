import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importamos iconos de react-icons

const HomePage: React.FC = () => {

    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center text-center bg-custom-gradient animate-gradient-move-diagonal"
        >

            {/* Texto central */}
            <div className="text-white mt-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("hello")}</h1>
                <p className="m-8 text-3xl md:text-5xl">{t("fullStack")}</p>
            </div>

            {/* Iconos circulares */}
            <div className="flex space-x-11 mt-10">
                <a
                    href="https://github.com/martamerchan16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-purple-900 hover:bg-purple-700 hover:text-white transition-all shadow-md"
                >
                    <FaGithub size={32} />
                </a>
                <a
                    href="https://linkedin.com/in/martamerchan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-blue-700 hover:bg-blue-500 hover:text-white transition-all shadow-md"
                >
                    <FaLinkedin size={32} />
                </a>
                {/* <a
                    href="/path-to-your-cv.pdf"
                    download
                    className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-gray-800 hover:bg-gray-600 hover:text-white transition-all shadow-md"
                >
                    <FaFileAlt size={32} /> TODO: NO SE SI QUITARLO
                </a> */}
            </div>
        </section>
    )
};

export default HomePage;

