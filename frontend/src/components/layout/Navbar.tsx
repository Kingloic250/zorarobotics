import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutOpen(false);
  }, [location]);

  const navLinks = [
    { nameEn: 'Home', nameFr: 'Accueil', to: '/' },
    { nameEn: 'Solutions', nameFr: 'Solutions', to: '/solutions' },
    { nameEn: 'Robots', nameFr: 'Robots', to: '/robots' },
    { nameEn: 'Partnerships', nameFr: 'Partenariats', to: '/partnerships' },
    { nameEn: 'News', nameFr: 'Actualités', to: '/news' },
    { nameEn: 'Contact', nameFr: 'Contact', to: '/contact' },
  ];

  const aboutLabel = language === 'en' ? 'About' : 'À Propos';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-4',
        isScrolled ? 'glass-panel border-t-0 border-x-0' : 'backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Zorarobotics Africa"
            className="h-10 w-auto"
          />
          <span className="font-sans text-lg font-extrabold tracking-tighter text-foreground uppercase hidden sm:block">
            Zorarobotics
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {/* Home */}
            <Link
              to="/"
              className={cn(
                'text-[10px] font-mono font-medium tracking-widest transition-colors cursor-pointer uppercase',
                location.pathname === '/' ? 'text-accent' : 'text-muted hover:text-accent'
              )}
            >
              {language === 'en' ? 'Home' : 'Accueil'}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span
                className={cn(
                  'flex items-center gap-1 text-[10px] font-mono font-medium tracking-widest transition-colors cursor-pointer uppercase',
                  location.pathname.startsWith('/about') || location.pathname.startsWith('/journey') || location.pathname.startsWith('/programs')
                    ? 'text-accent'
                    : 'text-muted hover:text-accent'
                )}
              >
                {aboutLabel}
                <ChevronDown size={10} className={cn('transition-transform', aboutOpen && 'rotate-180')} />
              </span>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute top-full left-0 mt-2 w-48 backdrop-blur-xl border border-border/30 p-2 space-y-1"
                  >
                    <Link
                      to="/about"
                      onClick={() => setAboutOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors',
                        location.pathname === '/about' ? 'text-accent' : 'text-muted hover:text-accent hover:bg-accent/10'
                      )}
                    >
                      {language === 'en' ? 'About Us' : 'À Propos'}
                    </Link>
                    <Link
                      to="/journey"
                      onClick={() => setAboutOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors',
                        location.pathname === '/journey' ? 'text-accent' : 'text-muted hover:text-accent hover:bg-accent/10'
                      )}
                    >
                      {language === 'en' ? 'Our Journey' : 'Notre Parcours'}
                    </Link>
                    <Link
                      to="/programs"
                      onClick={() => setAboutOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-[10px] font-mono tracking-widest uppercase transition-colors',
                        location.pathname === '/programs' ? 'text-accent' : 'text-muted hover:text-accent hover:bg-accent/10'
                      )}
                    >
                      {language === 'en' ? 'Programs' : 'Programmes'}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.filter(l => l.to !== '/').map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-[10px] font-mono font-medium tracking-widest transition-colors cursor-pointer uppercase',
                  location.pathname === link.to
                    ? 'text-accent'
                    : 'text-muted hover:text-accent'
                )}
              >
                {language === 'en' ? link.nameEn : link.nameFr}
              </Link>
            ))}
          </div>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer text-[10px] font-mono font-bold tracking-widest text-accent hover:text-foreground transition-colors uppercase border border-accent/30 px-3 py-1.5"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-muted hover:text-accent transition-colors"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/contact">
            <Button variant="outline" size="sm" className="px-5 py-2 uppercase tracking-[0.2em] font-bold text-[10px]">
              {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-muted hover:text-accent transition-colors"
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="cursor-pointer text-[10px] font-mono font-bold tracking-widest text-accent border border-accent/30 px-2 py-1"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button className="cursor-pointer text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 backdrop-blur-xl border-b border-border/30 p-6 flex flex-col gap-5 md:hidden"
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
              'text-lg font-medium transition-colors cursor-pointer uppercase tracking-widest',
              location.pathname === '/' ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
            )}
          >
            {language === 'en' ? 'Home' : 'Accueil'}
          </Link>
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={cn(
                'flex items-center gap-2 text-lg font-medium transition-colors cursor-pointer uppercase tracking-widest w-full text-left',
                location.pathname.startsWith('/about') || location.pathname.startsWith('/journey') || location.pathname.startsWith('/programs') ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {aboutLabel}
              <ChevronDown size={14} className={cn('transition-transform', aboutOpen && 'rotate-180')} />
            </button>
            {aboutOpen && (
              <div className="ml-4 mt-3 space-y-3 border-l border-border pl-4">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-muted hover:text-accent transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'About Us' : 'À Propos'}
                </Link>
                <Link
                  to="/journey"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-muted hover:text-accent transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'Our Journey' : 'Notre Parcours'}
                </Link>
                <Link
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm text-muted hover:text-accent transition-colors uppercase tracking-widest"
                >
                  {language === 'en' ? 'Programs' : 'Programmes'}
                </Link>
              </div>
            )}
          </div>
          {navLinks.filter(l => l.to !== '/').map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-lg font-medium transition-colors cursor-pointer uppercase tracking-widest',
                location.pathname === link.to
                  ? 'text-accent'
                  : 'text-foreground/70 hover:text-foreground'
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
