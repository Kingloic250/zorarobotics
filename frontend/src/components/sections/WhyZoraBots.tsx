import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { useLanguage } from '../../context/LanguageContext';

export const WhyZorarobotics = () => {
  const { language } = useLanguage();

  const items = [
    {
      titleEn: 'First in Africa',
      titleFr: 'Premier en Afrique',
      descEn: 'First company to deploy service humanoid robots across Africa.',
      descFr: 'Première entreprise à déployer des robots humanoïdes de service en Afrique.',
    },
    {
      titleEn: 'Local + Global',
      titleFr: 'Local + Mondial',
      descEn: 'Belgian-backed, Rwanda-headquartered, continent-wide reach.',
      descFr: 'Soutenu par la Belgique, basé au Rwanda, avec une portée continentale.',
    },
    {
      titleEn: 'Proven Track Record',
      titleFr: 'Parcours Éprouvé',
      descEn: 'UNDP, Government, and private sector deployments across East Africa.',
      descFr: 'Déploiements avec le PNUD, le Gouvernement et le secteur privé en Afrique de l\'Est.',
    },
    {
      titleEn: 'ZBOS Platform',
      titleFr: 'Plateforme ZBOS',
      descEn: 'One OS for all robot types — physical, virtual, and VR.',
      descFr: 'Un OS pour tous les types de robots — physiques, virtuels et VR.',
    },
    {
      titleEn: 'Local Value Addition',
      titleFr: 'Valeur Ajoutée Locale',
      descEn: 'Robots assembled and customized in Rwanda.',
      descFr: 'Robots assemblés et personnalisés au Rwanda.',
    },
    {
      titleEn: 'Impact-Driven',
      titleFr: 'Axé sur l\'Impact',
      descEn: 'Aligned with Rwanda Vision 2050 and Africa\'s ICT agenda.',
      descFr: 'Aligné sur la Vision 2050 du Rwanda et l\'agenda TIC de l\'Afrique.',
    },
    {
      titleEn: 'Job Creation',
      titleFr: 'Création d\'Emplois',
      descEn: 'Creating 40–60 local tech jobs in Rwanda.',
      descFr: 'Création de 40 à 60 emplois tech locaux au Rwanda.',
    },
  ];

  return (
    <section id="why-zorabots" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-cyan/5 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Why Zorarobotics // 06
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
              {language === 'en' ? 'Why Zorarobotics Africa' : 'Pourquoi Zorarobotics Africa'}
            </h2>
            <p className="text-gray-400 text-lg font-light">
              {language === 'en'
                ? 'What sets us apart in Africa\'s emerging robotics landscape.'
                : 'Ce qui nous distingue dans le paysage émergent de la robotique en Afrique.'}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full text-center">
                <h3 className="text-lg font-bold mb-3 text-white uppercase tracking-wider">
                  {language === 'en' ? item.titleEn : item.titleFr}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {language === 'en' ? item.descEn : item.descFr}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
