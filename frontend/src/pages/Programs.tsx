import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, HeartPulse, Factory, Building2, Shield } from 'lucide-react';

const programs = [
  { icon: GraduationCap, titleEn: 'STEM Education', titleFr: 'Éducation STIM', descEn: 'Integrating robotics into school curricula across Rwanda to inspire the next generation of innovators.', descFr: 'Intégration de la robotique dans les programmes scolaires à travers le Rwanda pour inspirer la prochaine génération d\'innovateurs.' },
  { icon: HeartPulse, titleEn: 'Healthcare Robotics', titleFr: 'Robotique de Santé', descEn: 'Deploying disinfection, telepresence, and companion robots in hospitals and clinics.', descFr: 'Déploiement de robots de désinfection, de télépresence et d\'accompagnement dans les hôpitaux et cliniques.' },
  { icon: Building2, titleEn: 'Hospitality & Retail', titleFr: 'Hôtellerie & Commerce', descEn: 'Service robots for hotels, restaurants, and retail — from concierge to delivery.', descFr: 'Robots de service pour hôtels, restaurants et commerces — du concierge à la livraison.' },
  { icon: Factory, titleEn: 'Industrial Automation', titleFr: 'Automatisation Industrielle', descEn: 'Collaborative robots for manufacturing, assembly, and precision tasks in industrial settings.', descFr: 'Robots collaboratifs pour la fabrication, l\'assemblage et les tâches de précision en milieu industriel.' },
  { icon: Shield, titleEn: 'Security & Inspection', titleFr: 'Sécurité & Inspection', descEn: 'Rugged robots for hazardous environment inspection, security patrol, and data collection.', descFr: 'Robots robustes pour l\'inspection en environnements dangereux, la patrouille de sécurité et la collecte de données.' },
];

export const ProgramsPage = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'Our Programs // 03' : 'Nos Programmes // 03'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Our Programs' : 'Nos Programmes'}
          </h2>
          <p className="text-gray-400 text-lg font-light">
            {language === 'en'
              ? 'Zorarobotics Africa delivers tailored robotics and AI programs across key sectors.'
              : 'Zorarobotics Africa propose des programmes de robotique et d\'IA adaptés aux secteurs clés.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full p-8 group hover:border-cyan/30 transition-all duration-500">
                <p.icon size={32} className="text-cyan mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                  {language === 'en' ? p.titleEn : p.titleFr}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {language === 'en' ? p.descEn : p.descFr}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};