import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export const NotFound = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-gray-400 font-light mb-2">
          {language === 'en' ? 'Page not found' : 'Page non trouvée'}
        </p>
        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">
          {language === 'en' ? 'The page you are looking for does not exist.' : 'La page que vous cherchez n\'existe pas.'}
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            {language === 'en' ? 'Back to Home' : 'Retour à l\'Accueil'}
          </Button>
        </Link>
      </div>
    </div>
  );
};
