import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, HeartPulse, Factory, Building2, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Solutions = () => {
  const { language } = useLanguage();

  const sectors = [
    {
      icon: GraduationCap,
      titleEn: 'Education',
      titleFr: 'Éducation',
      descEn: 'Empowering the next generation with hands-on robotics, coding, and AI skills.',
      descFr: 'Donner à la prochaine génération des compétences pratiques en robotique, codage et IA.',
      detailsEn: [
        'STEM curriculum support for primary, secondary, and higher learning',
        'Programming and coding classes via humanoid robots',
        'Partnership with Rwanda Ministry of Education (Sep 2021)',
        'WithinTechRwanda collaboration for youth empowerment',
        'ZBOS platform with virtual robots and VR learning solutions',
      ],
      detailsFr: [
        'Soutien au programme STIM pour l\'enseignement primaire, secondaire et supérieur',
        'Cours de programmation via des robots humanoïdes',
        'Partenariat avec le Ministère de l\'Éducation du Rwanda (Sep 2021)',
        'Collaboration WithinTechRwanda pour l\'autonomisation des jeunes',
        'Plateforme ZBOS avec robots virtuels et solutions VR',
      ],
      targetEn: 'Schools, Universities, Government Education Bodies, NGOs',
      targetFr: 'Écoles, Universités, Organismes gouvernementaux d\'éducation, ONG',
    },
    {
      icon: HeartPulse,
      titleEn: 'Healthcare',
      titleFr: 'Santé',
      descEn: 'Robots that support, protect, and enhance medical care.',
      descFr: 'Des robots qui soutiennent, protègent et améliorent les soins médicaux.',
      detailsEn: [
        'Smart Anti-Epidemic Robots for COVID-19 treatment centers',
        'Deployed at Kigali International Airport (screening, disinfection)',
        'Robots: Urumuri (light), Ingabo (shield), Ikizere (hope)',
        'Supplied to UNDP Rwanda, Kenya\'s Ministry of Health',
        'Capabilities: surveillance, data collection, disinfection, patient motivation',
      ],
      detailsFr: [
        'Robots anti-épidémiques intelligents pour les centres de traitement COVID-19',
        'Déployés à l\'Aéroport International de Kigali (dépistage, désinfection)',
        'Robots : Urumuri (lumière), Ingabo (bouclier), Ikizere (espoir)',
        'Fournis au PNUD Rwanda, Ministère de la Santé du Kenya',
        'Capacités : surveillance, collecte de données, désinfection, motivation des patients',
      ],
      targetEn: 'Hospitals, Health Ministries, UNDP, WHO',
      targetFr: 'Hôpitaux, Ministères de la Santé, PNUD, OMS',
    },
    {
      icon: Factory,
      titleEn: 'Industry & Mining',
      titleFr: 'Industrie & Mines',
      descEn: 'Robots built for Rwanda\'s industrial frontier.',
      descFr: 'Des robots conçus pour la frontière industrielle du Rwanda.',
      detailsEn: [
        'Industrial cobots (e.g., Sawyer) for manufacturing and assembly',
        'Mining support robots for hazardous environments',
        'Energy sector automation solutions',
        'Repetitive task automation to assist human workers',
      ],
      detailsFr: [
        'Cobots industriels (ex: Sawyer) pour la fabrication et l\'assemblage',
        'Robots de soutien minier pour environnements dangereux',
        'Solutions d\'automatisation du secteur énergétique',
        'Automatisation des tâches répétitives pour assister les travailleurs',
      ],
      targetEn: 'Mining companies, Manufacturing firms, Energy providers',
      targetFr: 'Sociétés minières, Entreprises manufacturières, Fournisseurs d\'énergie',
    },
    {
      icon: Building2,
      titleEn: 'Retail & Hospitality',
      titleFr: 'Commerce & Hôtellerie',
      descEn: 'Delivering memorable customer experiences through robotics.',
      descFr: 'Offrir des expériences client mémorables grâce à la robotique.',
      detailsEn: [
        'Robots that relay information, assist visitors, enhance service',
        'Deployable in hotels, retail stores, and airports',
        'Customer-facing humanoid robots with voice and navigation',
      ],
      detailsFr: [
        'Robots qui transmettent des informations, assistent les visiteurs',
        'Déployables dans les hôtels, magasins et aéroports',
        'Robots humanoïdes avec voix et navigation',
      ],
      targetEn: 'Hotels, Retailers, Airport Authorities',
      targetFr: 'Hôtels, Commerçants, Autorités aéroportuaires',
    },
    {
      icon: Shield,
      titleEn: 'Security',
      titleFr: 'Sécurité',
      descEn: 'Intelligent monitoring and surveillance solutions.',
      descFr: 'Solutions intelligentes de surveillance et de sécurité.',
      detailsEn: [
        'Surveillance-capable robots with video monitoring',
        'Real-time data collection and reporting',
        'Deployed at high-traffic areas and events',
      ],
      detailsFr: [
        'Robots de surveillance avec capacités vidéo',
        'Collecte et rapport de données en temps réel',
        'Déployés dans les zones à forte affluence',
      ],
      targetEn: 'Event organizers, Government security agencies, Corporates',
      targetFr: 'Organisateurs d\'événements, Agences de sécurité gouvernementales, Entreprises',
    },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
              Sectors // 02
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
              {language === 'en' ? 'Sectors We Transform' : 'Secteurs Que Nous Transformons'}
            </h2>
            <p className="text-gray-400 text-lg font-light">
              {language === 'en'
                ? 'From education to healthcare, our robots are deployed across multiple sectors.'
                : 'De l\'éducation à la santé, nos robots sont déployés dans de multiples secteurs.'}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((item, index) => (
            <motion.div
              key={item.titleEn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan group-hover:text-black transition-colors duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan transition-colors">
                  {language === 'en' ? item.titleEn : item.titleFr}
                </h3>
                <p className="text-gray-400 text-sm font-light mb-4">
                  {language === 'en' ? item.descEn : item.descFr}
                </p>
                <ul className="space-y-2 mb-6">
                  {(language === 'en' ? item.detailsEn : item.detailsFr).map((detail, i) => (
                    <li key={i} className="text-[10px] font-mono text-gray-500 flex items-start gap-2">
                      <span className="text-cyan mt-0.5">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">
                    {language === 'en' ? 'Target: ' : 'Cible : '}
                    <span className="text-gray-400">{language === 'en' ? item.targetEn : item.targetFr}</span>
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
