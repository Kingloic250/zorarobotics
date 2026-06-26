import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      const duration = 1500;
      const startTime = performance.now();
      const frame = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        if (ref.current) ref.current.textContent = `${Math.floor(eased * end)}${suffix}`;
        if (t < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    }
  }, [inView, end, suffix, started]);

  return <span ref={ref} className="text-3xl font-bold text-foreground block">0{suffix}</span>;
};

export const Hero = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const play = () => { el.play().catch(() => {}); };
    play();
    el.addEventListener('timeupdate', () => { if (el.currentTime >= 50) el.currentTime = 0; });
    const retry = () => { play(); document.removeEventListener('click', retry); };
    document.addEventListener('click', retry, { once: true });
    return () => { document.removeEventListener('click', retry); };
  }, []);

  const content = {
    en: {
      badge: 'Pioneering AI & Robotics v1.0',
      headline1: 'Bringing the World\'s Most',
      headlineSpan: 'Advanced Humanoid Robots',
      headline2: 'to Africa.',
      description: 'Zora Robotics ltd pioneering AI and Robotics solutions in Rwanda and across the continent, transforming Healthcare, Education, mining Industry and much more.',
      cta1: 'Explore Our Robots',
      cta2: 'Partner With Us',
      scroll: 'Scroll to Discover',
    },
    fr: {
      badge: 'Pionnier de l\'IA et de la Robotique v1.0',
      headline1: 'Introduire les Robots Humano\u00efdes',
      headlineSpan: 'les Plus Avanc\u00e9s au Monde',
      headline2: 'en Afrique.',
      description: 'Zora Robotics Pionniers de l\'IA et de la Robotique au Rwanda et sur tout le continent, transformant la Sant\u00e9, l\u2019\u00c9ducation, l\u2019Industrie et bien plus encore.',
      cta1: 'D\u00e9couvrez Nos Robots',
      cta2: 'Devenez Partenaire',
      scroll: 'D\u00e9couvrez Plus',
    },
  };

  const c = content[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/videos/adibot-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent" />
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-accent" />
              <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] font-medium">
                {c.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[0.95] tracking-tight text-foreground">
              {c.headline1} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan to-[#007075] italic inline-block" style={{ backgroundSize: '120% 100%', backgroundPosition: '50% 0' }}>{c.headlineSpan}</span>
              <br /> {c.headline2}
            </h1>

            <p className="text-base md:text-lg text-muted mb-12 max-w-2xl leading-relaxed font-light">
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
                <Button variant="outline" size="lg" className="px-10 border-border text-foreground hover:bg-accent hover:text-white uppercase text-sm tracking-widest font-bold">
                  {c.cta2}
                </Button>
              </Link>
            </div>

            <div className="mt-16 hidden lg:flex justify-between items-end border-t border-border pt-8">
              <div className="grid grid-cols-3 gap-16">
                <div className="space-y-1">
                  <span className="text-3xl font-bold text-foreground block">2019</span>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-mono">{language === 'en' ? 'Founded in Rwanda' : 'Fond\u00e9 au Rwanda'}</span>
                </div>
                <div className="space-y-1">
                  <CountUp end={11} suffix="+" />
                  <span className="text-[10px] uppercase tracking-widest text-accent font-mono">{language === 'en' ? 'Robot Models' : 'Mod\u00e8les de Robots'}</span>
                </div>
                <div className="space-y-1">
                  <CountUp end={5} suffix="+" />
                  <span className="text-[10px] uppercase tracking-widest text-accent font-mono">{language === 'en' ? 'Countries Reached' : 'Pays Atteints'}</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] text-muted-fg uppercase tracking-widest font-bold">{c.scroll}</span>
              <ChevronDown className="text-accent w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};