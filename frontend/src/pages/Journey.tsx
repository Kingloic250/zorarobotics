import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { useLanguage } from '../context/LanguageContext';

const timeline = [
  { year: 'Oct 2019', en: 'Telmet Belgium meets President Kagame at Rwanda Day, Bonn', fr: 'Telmet Belgique rencontre le Président Kagame au Rwanda Day, Bonn' },
  { year: 'Nov 2019', en: 'Zora Robotics Ltd announced as Rwanda\'s first robotics company', fr: 'Zora Robotics Ltd annoncée comme première entreprise de robotique au Rwanda' },
  { year: 'Jan 2020', en: 'Operations begin in Kigali; first Zora Shop opens', fr: 'Début des opérations à Kigali; première Zora Shop ouverte' },
  { year: 'May 2020', en: '5 anti-epidemic robots deployed with UNDP & Govt of Rwanda', fr: '5 robots anti-épidémiques déployés avec le PNUD et le Gouvernement du Rwanda' },
  { year: 'Sep 2021', en: 'Partnership with Rwanda Ministry of Education for STEM', fr: 'Partenariat avec le Ministère de l\'Éducation du Rwanda pour les STIM' },
  { year: '2023–24', en: 'Represented at Rwanda Day Washington D.C.; East Africa expansion', fr: 'Représenté au Rwanda Day à Washington D.C.; expansion en Afrique de l\'Est' },
  { year: 'Ongoing', en: 'Partnerships with UNDP, Ministries, Youth Robotics Club & more', fr: 'Partenariats avec le PNUD, Ministères, Youth Robotics Club et plus' },
];

export const JourneyPage = () => {
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
          <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'Our Journey // 02' : 'Notre Parcours // 02'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Our Journey' : 'Notre Parcours'}
          </h2>
          <p className="text-muted text-lg font-light">
            {language === 'en'
              ? 'From our founding to today — tracking the milestones that define Zora Robotics Ltd.'
              : 'De notre fondation à aujourd\'hui les étapes qui définissent Zora Robotics Ltd.'}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px border-border hidden md:block" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  <GlassCard className="p-6 group hover:border-accent/30 transition-all duration-500">
                    <span className="text-accent font-mono text-sm font-bold block mb-2">{item.year}</span>
                    <p className="text-muted text-sm font-light leading-relaxed">
                      {language === 'en' ? item.en : item.fr}
                    </p>
                  </GlassCard>
                </div>
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex-shrink-0 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};