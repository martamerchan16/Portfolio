import Navbar from './components/Navbar';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// Importa las imágenes de las banderas
import spainFlag from './assets/espana.png';
import usaFlag from './assets/estados-unidos.png';

const App: React.FC = () => {

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Función para cambiar el idioma y la bandera
  const toggleLanguage = () => {
    if (currentLanguage === 'es') {
      i18n.changeLanguage('en');
      setCurrentLanguage('en');
    } else {
      i18n.changeLanguage('es');
      setCurrentLanguage('es');
    }
  };

  return (
    <div>
      {/* Selector de idioma con imagen de bandera */}
      <div className="h-8 fixed top-4 right-4 z-50 shadow-lg rounded-xl">
        <button onClick={toggleLanguage}>
          {currentLanguage === 'es' ? (
            <img src={spainFlag} alt="Spanish Flag" className="w-9 h-8 object-cover rounded-xl shadow-lg" />
          ) : (
            <img src={usaFlag} alt="USA Flag" className="w-9 h-8 object-cover rounded-xl shadow-lg" />
          )}
        </button>
      </div>

      <Navbar />
      <HomePage />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
};

export default App;
