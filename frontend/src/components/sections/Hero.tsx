import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Pioneering AI & Robotics v1.0',
      headline1: 'Bringing the World\'s Most',
      headlineSpan: 'Advanced Humanoid Robots',
      headline2: 'to Africa.',
      description: 'ZoraBots Africa — Pioneering AI and Robotics in Rwanda and across the continent, transforming Healthcare, Education, Industry and more.',
      cta1: 'Explore Our Robots',
      cta2: 'Partner With Us',
      scroll: 'Scroll to Discover',
      sideLabel: 'RWANDA\'S ROBOTICS PIONEER — EST 2019',
    },
    fr: {
      badge: 'Pionnier de l\'IA et de la Robotique v1.0',
      headline1: 'Introduire les Robots Humanoïdes',
      headlineSpan: 'les Plus Avancés au Monde',
      headline2: 'en Afrique.',
      description: 'ZoraBots Africa — Pionniers de l\'IA et de la Robotique au Rwanda et sur tout le continent, transformant la Santé, l\'Éducation, l\'Industrie et bien plus encore.',
      cta1: 'Découvrez Nos Robots',
      cta2: 'Devenez Partenaire',
      scroll: 'Découvrez Plus',
      sideLabel: 'PIONNIER DE LA ROBOTIQUE AU RWANDA — EST 2019',
    },
  };

  const c = content[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_robotics_lab_1779118111692.png"
          alt="ZoraBots Africa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/80 via-transparent to-transparent" />
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-cyan" />
              <span className="text-cyan font-mono text-[10px] uppercase tracking-[0.3em] font-medium">
                {c.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[0.95] tracking-tight text-white">
              {c.headline1} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan to-[#007075] italic">{c.headlineSpan}</span>
              <br /> {c.headline2}
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
              {c.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link to="/robots">
                <Button variant="primary" size="lg" className="px-10 flex items-center group">
                  {c.cta1}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-10 border-white/20 text-white hover:bg-white/5 uppercase text-sm tracking-widest font-bold">
                  {c.cta2}
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 hidden lg:flex justify-between items-end border-t border-white/5 pt-8"
            >
              <div className="grid grid-cols-3 gap-16">
                <div className="space-y-1">
                  <span className="text-3xl font-bold text-white block">2019</span>
                  <span className="text-[10px] uppercase tracking-widest text-cyan font-mono">{language === 'en' ? 'Founded in Rwanda' : 'Fondé au Rwanda'}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-bold text-white block">8+</span>
                  <span className="text-[10px] uppercase tracking-widest text-cyan font-mono">{language === 'en' ? 'Robot Models' : 'Modèles de Robots'}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-bold text-white block">5+</span>
                  <span className="text-[10px] uppercase tracking-widest text-cyan font-mono">{language === 'en' ? 'Countries Reached' : 'Pays Atteints'}</span>
                </div>
              </div>

              <div className="cursor-pointer">
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{c.scroll}</span>
                  <ChevronDown className="text-cyan w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold [writing-mode:vertical-rl] rotate-180">
          {c.sideLabel}
        </span>
      </div>
    </section>
  );
};
