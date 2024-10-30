import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-4 md:left-1/2 md:transform md:-translate-x-1/2 backdrop-blur-md text-white z-50 shadow-lg py-2 px-8 rounded-lg w-auto">
            <div className="container mx-auto flex justify-between items-center">

                {/* Icono de menú hamburguesa solo visible en móviles */}
                <div className="md:hidden absolute left-4"> {/* Icono a la izquierda solo en móviles */}
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menú para pantallas grandes (centrado en versión web) */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <a href="#home" className="text-xl relative hover:text-gray-300 transition-all before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[2px] before:bg-gray-300 before:transition-all before:duration-300 hover:before:w-full">
                            {t("home")}
                        </a>
                    </li>
                    <li>
                        <a href="#about-me" className="text-xl relative hover:text-gray-300 transition-all before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[2px] before:bg-gray-300 before:transition-all before:duration-300 hover:before:w-full">
                            {t("aboutMe")}
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-xl relative hover:text-gray-300 transition-all before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[2px] before:bg-gray-300 before:transition-all before:duration-300 hover:before:w-full">
                            {t("skills")}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-xl relative hover:text-gray-300 transition-all before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[2px] before:bg-gray-300 before:transition-all before:duration-300 hover:before:w-full">
                            {t("projects")}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-xl relative hover:text-gray-300 transition-all before:content-[''] before:absolute before:left-0 before:bottom-[-4px] before:w-0 before:h-[2px] before:bg-gray-300 before:transition-all before:duration-300 hover:before:w-full">
                            {t("contact")}
                        </a>
                    </li>
                </ul>
            </div>

            {/* Menú desplegable en versión móvil */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center backdrop-blur-md py-4 space-y-4 mt-4 rounded-lg">
                    <li><a href="#home" onClick={closeMenu} className="hover:text-gray-300 transition-all">{t("home")}</a></li>
                    <li><a href="#about-me" onClick={closeMenu} className="hover:text-gray-300 transition-all">{t("aboutMe")}</a></li>
                    <li><a href="#skills" onClick={closeMenu} >{t("skills")}</a></li>
                    <li><a href="#projects" onClick={closeMenu} className="hover:text-gray-300 transition-all">{t("projects")}</a></li>
                    <li><a href="#contact" onClick={closeMenu} className="hover:text-gray-300 transition-all">{t("contact")}</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
