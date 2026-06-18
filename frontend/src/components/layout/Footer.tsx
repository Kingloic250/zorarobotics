import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function XIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Linkedin, url: 'https://rw.linkedin.com/company/zorabots-africa', label: 'LinkedIn' },
  { icon: XIcon, url: 'https://x.com/zorabots', label: 'X' },
  { icon: Facebook, url: 'https://www.facebook.com/WeAreZoraBots/', label: 'Facebook' },
  { icon: Instagram, url: 'https://www.instagram.com/zorabots_africa/', label: 'Instagram' },
  { icon: Youtube, url: 'https://www.youtube.com/channel/UC6FWjluEyNztGFmWrlEzQcw', label: 'YouTube' },
];

export const Footer = () => {
  const { language } = useLanguage();

  const quickLinks = [
    { nameEn: 'Home', nameFr: 'Accueil', to: '/' },
    { nameEn: 'About', nameFr: 'À Propos', to: '/about' },
    { nameEn: 'Our Journey', nameFr: 'Notre Parcours', to: '/journey' },
    { nameEn: 'Programs', nameFr: 'Programmes', to: '/programs' },
    { nameEn: 'Solutions', nameFr: 'Solutions', to: '/solutions' },
    { nameEn: 'Robots', nameFr: 'Robots', to: '/robots' },
    { nameEn: 'Partnerships', nameFr: 'Partenariats', to: '/partnerships' },
    { nameEn: 'News', nameFr: 'Actualités', to: '/news' },
    { nameEn: 'Contact', nameFr: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="py-20 border-t border-border bg-card relative overflow-hidden backdrop-blur-md">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpeg"
                alt="Zorarobotics Africa"
                className="h-10 w-auto"
              />
              <span className="font-sans text-lg font-extrabold tracking-tighter text-foreground uppercase">
                Zorarobotics <span className="text-accent">Africa</span>
              </span>
            </Link>
            <p className="text-muted-fg text-xs font-mono uppercase tracking-widest leading-relaxed max-w-xs">
              {language === 'en'
                ? 'Pioneering AI and Robotics in Rwanda and across the continent.'
                : 'Pionniers de l\'IA et de la Robotique au Rwanda et sur tout le continent.'}
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">
              {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-fg hover:text-accent transition-colors text-[10px] font-mono uppercase tracking-widest"
                  >
                    {language === 'en' ? link.nameEn : link.nameFr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">
              {language === 'en' ? 'Contact' : 'Contact'}
            </h4>
            <ul className="space-y-4">
              <li className="text-muted-fg text-[10px] font-mono uppercase tracking-widest">
                KG 8 Avenue, 31 Kigali
              </li>
              <li className="text-muted-fg text-[10px] font-mono uppercase tracking-widest">
                Kigali City, Rwanda
              </li>
              <li>
                <a href="tel:+250788303027" className="text-muted-fg hover:text-accent transition-colors text-[10px] font-mono uppercase tracking-widest">
                  +250 788 303 027
                </a>
              </li>
              <li>
                <a href="mailto:Zorarobotics@gmail.com" className="text-muted-fg hover:text-accent transition-colors text-[10px] font-mono tracking-widest">
                  zorarobotics@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6 uppercase tracking-[0.2em] text-[10px] font-mono">
              {language === 'en' ? 'Follow Us' : 'Suivez-Nous'}
            </h4>
            <p className="text-muted-fg text-[10px] font-mono uppercase tracking-widest mb-6">
              {language === 'en' ? 'Stay connected for the latest in robotics.' : 'Restez connecté pour les dernières novations en robotique.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all text-muted-fg"
                  title={item.label}
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-fg text-[10px] font-mono uppercase tracking-widest">
            &copy; 2026 Zorarobotics Africa Ltd. All Rights Reserved.
          </p>
          <span className="text-muted-fg text-[10px] font-mono uppercase tracking-widest">
            {language === 'en' ? 'Kigali, Rwanda' : 'Kigali, Rwanda'}
          </span>
        </div>
      </div>
    </footer>
  );
};
