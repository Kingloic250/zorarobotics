import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { nameEn: 'Home', nameFr: 'Accueil', to: '/' },
    { nameEn: 'About', nameFr: 'À Propos', to: '/about' },
    { nameEn: 'Solutions', nameFr: 'Solutions', to: '/solutions' },
    { nameEn: 'Robots', nameFr: 'Robots', to: '/robots' },
    { nameEn: 'Partnerships', nameFr: 'Partenariats', to: '/partnerships' },
    { nameEn: 'News', nameFr: 'Actualités', to: '/news' },
    { nameEn: 'Contact', nameFr: 'Contact', to: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-4',
        isScrolled ? 'glass-panel border-t-0 border-x-0' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/logo.jpeg"
            alt="ZoraBots Africa"
            className="h-10 w-auto"
          />
          <span className="font-sans text-lg font-extrabold tracking-tighter text-white uppercase hidden sm:block">
            ZoraBots <span className="text-cyan">Africa</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-[10px] font-mono font-medium tracking-widest transition-colors cursor-pointer uppercase',
                  location.pathname === link.to
                    ? 'text-cyan'
                    : 'text-gray-400 hover:text-cyan'
                )}
              >
                {language === 'en' ? link.nameEn : link.nameFr}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer text-[10px] font-mono font-bold tracking-widest text-cyan hover:text-white transition-colors uppercase border border-cyan/30 px-3 py-1.5"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <Link to="/contact">
            <Button variant="outline" size="sm" className="px-5 py-2 uppercase tracking-[0.2em] font-bold text-[10px]">
              {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="cursor-pointer text-[10px] font-mono font-bold tracking-widest text-cyan border border-cyan/30 px-2 py-1"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button className="cursor-pointer text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-5 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-lg font-medium transition-colors cursor-pointer uppercase tracking-widest',
                location.pathname === link.to
                  ? 'text-cyan'
                  : 'text-white/70 hover:text-white'
              )}
            >
              {language === 'en' ? link.nameEn : link.nameFr}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="secondary" size="md" glow className="w-full">
              {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
};
