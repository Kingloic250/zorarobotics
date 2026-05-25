import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { Building, Globe, Handshake, Shield, GraduationCap, HeartPulse, Microscope } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PartnershipsPage = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-linear-to-l from-cyan/5 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'Partnerships // 05' : 'Partenariats // 05'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Our Partners & Impact' : 'Nos Partenaires & Impact'}
          </h2>
          <p className="text-gray-400 text-lg font-light">
            {language === 'en'
              ? 'Collaborating with governments, international organizations, and private sector leaders to drive Africa\'s robotics revolution.'
              : 'Collaborant avec les gouvernements, les organisations internationales et les leaders du secteur privé pour conduire la révolution robotique en Afrique.'}
          </p>
        </motion.div>

        {/* Government Partners */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Building size={24} className="text-cyan" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              {language === 'en' ? 'Government Partners' : 'Partenaires Gouvernementaux'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { en: 'Ministry of Education', fr: 'Ministère de l\'Éducation' },
              { en: 'Ministry of Health', fr: 'Ministère de la Santé' },
              { en: 'Ministry of ICT & Innovation', fr: 'Ministère des TIC & Innovation' },
              { en: 'Rwanda Mines Board', fr: 'Office des Mines du Rwanda' },
            ].map((partner) => (
              <div key={partner.en}>
                <GlassCard className="text-center py-8 group">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? partner.en : partner.fr}
                  </h4>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* International Partners */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Globe size={24} className="text-cyan" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              {language === 'en' ? 'International Partners' : 'Partenaires Internationaux'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { en: 'UNDP Rwanda Accelerator Lab', fr: 'PNUD Rwanda Accelerator Lab' },
              { en: 'UNDP Kenya (Ministry of Health)', fr: 'PNUD Kenya (Ministère de la Santé)' },
              { en: 'Digital Transformation Center Rwanda', fr: 'Centre de Transformation Numérique Rwanda' },
            ].map((partner) => (
              <div key={partner.en}>
                <GlassCard className="text-center py-8 group">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? partner.en : partner.fr}
                  </h4>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Private & Academic */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <Handshake size={24} className="text-cyan" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              {language === 'en' ? 'Private & Academic Partners' : 'Partenaires Privés & Académiques'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { en: 'WithinTechRwanda', fr: 'WithinTechRwanda' },
              { en: 'AmaliTech Kigali', fr: 'AmaliTech Kigali' },
              { en: 'Rwanda ICT Chamber', fr: 'Chambre des TIC du Rwanda' },
              { en: 'University of Aberdeen', fr: 'Université d\'Aberdeen' },
            ].map((partner) => (
              <div key={partner.en}>
                <GlassCard className="text-center py-8 group">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {language === 'en' ? partner.en : partner.fr}
                  </h4>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <Shield size={24} className="text-cyan" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
              {language === 'en' ? 'Key Impact Stories' : 'Histoires d\'Impact'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: HeartPulse,
                titleEn: 'COVID-19 Response',
                titleFr: 'Réponse COVID-19',
                descEn: '5 anti-epidemic robots deployed across Rwanda\'s treatment centers and Kigali International Airport — a first for Africa.',
                descFr: '5 robots anti-épidémiques déployés dans les centres de traitement et à l\'Aéroport de Kigali — une première en Afrique.',
              },
              {
                icon: Globe,
                titleEn: 'Kenya Expansion',
                titleFr: 'Expansion au Kenya',
                descEn: 'Anti-epidemic robots deployed at Kenyatta National Hospital, Mbagathi Hospital, and JKIA.',
                descFr: 'Robots anti-épidémiques déployés à l\'Hôpital Kenyatta, Mbagathi et JKIA.',
              },
              {
                icon: GraduationCap,
                titleEn: 'Education Pioneer',
                titleFr: 'Pionnier de l\'Éducation',
                descEn: 'Partnership with Rwanda Ministry of Education to integrate robotics into the STEM curriculum.',
                descFr: 'Partenariat avec le Ministère de l\'Éducation pour intégrer la robotique dans les STIM.',
              },
              {
                icon: Microscope,
                titleEn: 'Youth Empowerment',
                titleFr: 'Autonomisation des Jeunes',
                descEn: 'Collaboration with WithinTechRwanda to bring robotics and coding to Rwandan youth.',
                descFr: 'Collaboration avec WithinTechRwanda pour apporter la robotique aux jeunes Rwandais.',
              },
              {
                icon: Building,
                titleEn: 'Rwanda Day 2024',
                titleFr: 'Rwanda Day 2024',
                descEn: 'Represented Rwanda\'s tech ecosystem at Rwanda Day in Washington D.C.',
                descFr: 'Représentation de l\'écosystème tech du Rwanda au Rwanda Day à Washington D.C.',
              },
            ].map((story, i) => (
              <motion.div
                key={story.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <story.icon size={24} className="text-cyan" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">
                        {language === 'en' ? story.titleEn : story.titleFr}
                      </h4>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">
                        {language === 'en' ? story.descEn : story.descFr}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
