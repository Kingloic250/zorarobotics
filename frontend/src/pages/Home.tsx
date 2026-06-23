import { motion } from 'motion/react';
import { Hero } from '../components/sections/Hero';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, HeartPulse, Factory, Building2, Shield } from 'lucide-react';
import undpLogo from '../assets/logos/UNDP.png';
import educLogo from '../assets/logos/download.jpg';
import healthLogo from '../assets/logos/MINSANTE.png';
import ictLogo from '../assets/logos/MINICT.png';
import withinTechLogo from '../assets/logos/WithinTech.png';
import amaliTechLogo from '../assets/logos/AmaliTech.png';

const sectors = [
  { icon: GraduationCap, nameEn: 'Education', nameFr: 'Éducation', to: '/solutions' },
  { icon: HeartPulse, nameEn: 'Healthcare', nameFr: 'Santé', to: '/solutions' },
  { icon: Factory, nameEn: 'Industry & Mining', nameFr: 'Industrie & Mines', to: '/solutions' },
  { icon: Building2, nameEn: 'Retail & Hospitality', nameFr: 'Commerce & Hôtellerie', to: '/solutions' },
  { icon: Shield, nameEn: 'Security', nameFr: 'Sécurité', to: '/solutions' },
];

const featuredRobots = [
  { name: 'NAO', sectorEn: 'Education & Research', sectorFr: 'Éducation & Recherche', image: '/images/NAO Robot.jpg' },
  { name: 'Cruzr', sectorEn: 'Retail & Healthcare', sectorFr: 'Commerce & Santé', image: '/images/Cruzr Robot.jpg' },
  { name: 'Adibot', sectorEn: 'Healthcare & Security', sectorFr: 'Santé & Sécurité', image: '/images/Adibot.jpg' },
  { name: 'Spot', sectorEn: 'Mining, Security & Industry', sectorFr: 'Mines, Sécurité & Industrie', image: '/images/Spot Robot.jpg' },
];

export const Home = () => {
  const { language } = useLanguage();

  return (
    <>
      <Hero />

      {/* Sectors Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Our Sectors // 02' : 'Nos Secteurs // 02'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
                {language === 'en' ? 'Sectors We Transform' : 'Secteurs Que Nous Transformons'}
              </h2>
              <p className="text-muted text-lg font-light">
                {language === 'en'
                  ? 'Deploying advanced AI and robotics solutions across Africa.'
                  : 'Déploiement de solutions avancées d\'IA et de robotique à travers l\'Afrique.'}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.nameEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={sector.to}>
                  <GlassCard className="text-center py-10 h-full group cursor-pointer">
                    <sector.icon size={32} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      {language === 'en' ? sector.nameEn : sector.nameFr}
                    </h3>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button variant="outline" size="md" className="flex items-center gap-2 mx-auto">
                {language === 'en' ? 'View All Sectors' : 'Voir Tous les Secteurs'}
                <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Robots */}
      <section className="py-24 bg-card">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Featured Robots // 03' : 'Robots Vedettes // 03'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter">
                {language === 'en' ? 'Our Robot Fleet' : 'Notre Flotte de Robots'}
              </h2>
              <p className="text-muted-fg text-lg font-light uppercase tracking-[0.1em]">
                {language === 'en' ? 'Discover our range of advanced humanoid and service robots.' : 'Découvrez notre gamme de robots humanoïdes et de service avancés.'}
              </p>
            </motion.div>
            <Link to="/robots">
              <Button variant="outline" size="md">
                {language === 'en' ? 'View Full Catalog' : 'Voir le Catalogue'}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRobots.map((robot, i) => (
              <motion.div
                key={robot.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <GlassCard className="p-0 overflow-hidden group hover:border-accent/30 transition-all duration-500 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={robot.image}
                      alt={robot.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 scale-105 group-hover:scale-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight mb-1 uppercase text-foreground">{robot.name}</h3>
                    <p className="text-[10px] font-mono text-muted-fg uppercase tracking-widest">
                      {language === 'en' ? robot.sectorEn : robot.sectorFr}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 border-y border-border overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold">
            {language === 'en' ? 'Trusted By // 04' : 'Approuvé Par // 04'}
          </span>
        </div>
        <div className="relative marquee-section">
          <div className="marquee-track">
            <div className="flex gap-24 items-center shrink-0">
              <img src={undpLogo} alt="UNDP" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={educLogo} alt="Ministry of Education Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={healthLogo} alt="Ministry of Health Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={ictLogo} alt="Ministry of ICT Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={withinTechLogo} alt="WithinTech" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={amaliTechLogo} alt="AmaliTech" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="flex gap-24 items-center shrink-0">
              <img src={undpLogo} alt="UNDP" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={educLogo} alt="Ministry of Education Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={healthLogo} alt="Ministry of Health Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={ictLogo} alt="Ministry of ICT Rwanda" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={withinTechLogo} alt="WithinTech" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
              <img src={amaliTechLogo} alt="AmaliTech" className="h-16 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
