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
        'Collaboration with Youth Robotics Club for youth empowerment',
        'ROS platform with virtual robots and VR learning solutions',
        'Zora Robotarium Hub for robotics and AI research, and exposure study visits.',
      ],
      detailsFr: [
        'Soutien au programme STIM pour l\'enseignement primaire, secondaire et supérieur',
        'Cours de programmation via des robots humanoïdes',
        'Partenariat avec le Ministère de l\'Éducation du Rwanda (Sep 2021)',
        'Collaboration Youth Robotics Club pour l\'autonomisation des jeunes',
        'Plateforme ROS avec robots virtuels et solutions VR',
        'Zora Robotarium Hub pour la recherche en robotique et IA, et visites d\'étude.',
      ],
      targetEn: 'Schools, Universities, Government Education Bodies, NGOs and Researchers',
      targetFr: 'Écoles, Universités, Organismes gouvernementaux, ONG et Chercheurs',
    },
    {
      icon: HeartPulse,
      titleEn: 'Healthcare',
      titleFr: 'Santé',
      descEn: 'Robots that support, protect, and enhance medical care.',
      descFr: 'Des robots qui soutiennent, protègent et améliorent les soins médicaux.',
      detailsEn: [
        'Smart Anti-Epidemic Robots deployed during COVID-19, Marburg outbreak and Ebola outbreak',
        'Deployed at Kigali International Airport, JKIA Airport (Kenya) and Malabo International Airport (screening, disinfection)',
        'Robots named: Urumuri (light), Ingabo (shield), Ikizere (hope)',
        'Supplied to UNDP and Kenya\'s Ministry of Health',
        'Capabilities: surveillance, data collection, large-area disinfection',
      ],
      detailsFr: [
        'Robots anti-épidémiques intelligents déployés lors de la COVID-19, de l\'épidémie de Marburg et de l\'épidémie d\'Ebola',
        'Déployés à l\'Aéroport International de Kigali, à l\'Aéroport JKIA (Kenya) et à l\'Aéroport International de Malabo (dépistage, désinfection)',
        'Robots : Urumuri (lumière), Ingabo (bouclier), Ikizere (espoir)',
        'Fournis au PNUD et au Ministère de la Santé du Kenya',
        'Capacités : surveillance, collecte de données, désinfection',
      ],
      targetEn: 'Hospitals, Research Centers, Universities, Government and NGOs',
      targetFr: 'Hôpitaux, Centres de Recherche, Universités, Gouvernement et ONG',
    },
    {
      icon: Factory,
      titleEn: 'Industry & Mining',
      titleFr: 'Industrie & Mines',
      descEn: 'Robots built for Africa Industrial Revolution.',
      descFr: 'Des robots conçus pour la révolution industrielle africaine.',
      detailsEn: [
        'Industrial cobots for manufacturing and assembly',
        'Mining support robots for hazardous environments',
        'Energy sector automation solutions',
        'Repetitive task automation to assist human workers',
      ],
      detailsFr: [
        'Cobots industriels pour la fabrication et l\'assemblage',
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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'Our Solutions // 02' : 'Nos Solutions // 02'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Sectors We Transform' : 'Secteurs Que Nous Transformons'}
          </h2>
          <p className="text-muted text-lg font-light">
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
              <GlassCard className="p-8 lg:p-12 group">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-card flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <sector.icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-wider">
                      {language === 'en' ? sector.titleEn : sector.titleFr}
                    </h3>
                    <p className="text-muted text-base font-light mb-6">
                      {language === 'en' ? sector.descEn : sector.descFr}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {(language === 'en' ? sector.detailsEn : sector.detailsFr).map((detail, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          <span className="text-xs text-muted font-mono uppercase tracking-tight leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <span className="text-[9px] font-mono text-muted-fg uppercase tracking-widest">
                        {language === 'en' ? 'Target Audience: ' : 'Public Cible : '}
                        <span className="text-accent">{language === 'en' ? sector.targetEn : sector.targetFr}</span>
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
