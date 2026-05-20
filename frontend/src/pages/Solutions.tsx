import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { GraduationCap, HeartPulse, Factory, Building2, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SolutionsPage = () => {
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
        'Deployment goal: one robot per school district, scaling across Africa',
      ],
      detailsFr: [
        'Soutien au programme STIM pour l\'enseignement primaire, secondaire et supérieur',
        'Cours de programmation via des robots humanoïdes',
        'Partenariat avec le Ministère de l\'Éducation du Rwanda (Sep 2021)',
        'Collaboration WithinTechRwanda pour l\'autonomisation des jeunes',
        'Plateforme ZBOS avec robots virtuels et solutions VR',
        'Objectif : un robot par district scolaire, en expansion dans toute l\'Afrique',
      ],
      targetEn: 'Schools, Universities, Government Education Bodies, NGOs',
      targetFr: 'Écoles, Universités, Organismes gouvernementaux, ONG',
    },
    {
      icon: HeartPulse,
      titleEn: 'Healthcare',
      titleFr: 'Santé',
      descEn: 'Robots that support, protect, and enhance medical care.',
      descFr: 'Des robots qui soutiennent, protègent et améliorent les soins médicaux.',
      detailsEn: [
        'Smart Anti-Epidemic Robots deployed in COVID-19 treatment centers',
        'Deployed at Kigali International Airport (screening, disinfection)',
        'Robots named: Urumuri (light), Ingabo (shield), Ikizere (hope)',
        'Supplied to UNDP Rwanda, Kenya\'s Ministry of Health',
        'Capabilities: surveillance, data collection, large-area disinfection',
        'Motivates patients (especially children) during recovery exercises',
      ],
      detailsFr: [
        'Robots anti-épidémiques dans les centres de traitement COVID-19',
        'Déployés à l\'Aéroport International de Kigali',
        'Robots : Urumuri (lumière), Ingabo (bouclier), Ikizere (espoir)',
        'Fournis au PNUD Rwanda, Ministère de la Santé du Kenya',
        'Capacités : surveillance, collecte de données, désinfection',
        'Motive les patients (surtout les enfants) pendant la récupération',
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
        'Cobots industriels (Sawyer) pour la fabrication et l\'assemblage',
        'Robots de soutien minier pour environnements dangereux',
        'Solutions d\'automatisation du secteur énergétique',
        'Automatisation des tâches répétitives',
      ],
      targetEn: 'Mining companies, Manufacturing firms, Energy providers',
      targetFr: 'Sociétés minières, Manufacturiers, Fournisseurs d\'énergie',
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
        'Robots qui informent, assistent et améliorent le service',
        'Déployables dans hôtels, magasins et aéroports',
        'Robots humanoïdes avec voix et navigation',
      ],
      targetEn: 'Hotels, Retailers, Airport Authorities',
      targetFr: 'Hôtels, Commerçants, Aéroports',
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
        'Robots de surveillance avec vidéo',
        'Collecte et rapport de données en temps réel',
        'Déployés dans les zones à forte affluence',
      ],
      targetEn: 'Event organizers, Government security agencies, Corporates',
      targetFr: 'Organisateurs d\'événements, Agences de sécurité, Entreprises',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'Our Solutions // 02' : 'Nos Solutions // 02'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Sectors We Transform' : 'Secteurs Que Nous Transformons'}
          </h2>
          <p className="text-gray-400 text-lg font-light">
            {language === 'en'
              ? 'From education to healthcare, our robots are deployed across multiple sectors in Africa.'
              : 'De l\'éducation à la santé, nos robots sont déployés dans de multiples secteurs en Afrique.'}
          </p>
        </motion.div>

        <div className="space-y-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.titleEn}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/5 flex items-center justify-center">
                      <sector.icon size={32} className="text-cyan" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">
                      {language === 'en' ? sector.titleEn : sector.titleFr}
                    </h3>
                    <p className="text-gray-400 text-base font-light mb-6">
                      {language === 'en' ? sector.descEn : sector.descFr}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {(language === 'en' ? sector.detailsEn : sector.detailsFr).map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-cyan rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-gray-400 font-mono uppercase tracking-tight leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                        {language === 'en' ? 'Target Audience: ' : 'Public Cible : '}
                        <span className="text-cyan">{language === 'en' ? sector.targetEn : sector.targetFr}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
