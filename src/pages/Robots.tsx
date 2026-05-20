import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Eye, Info, Cpu, Globe, Monitor, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const robots = [
  {
    name: 'NAO',
    sectorEn: 'Education & Research',
    sectorFr: 'Éducation & Recherche',
    image: '/src/assets/images/NAO Robot.jpg',
    descEn: 'Small, friendly humanoid robot, very popular in schools for coding and STEM learning.',
    descFr: 'Petit robot humanoïde convivial, très populaire dans les écoles pour le codage et les STIM.',
    featuresEn: ['Coding & STEM', 'Humanoid Design', 'Interactive Learning'],
    featuresFr: ['Codage & STIM', 'Design Humanoïde', 'Apprentissage Interactif'],
  },
  {
    name: 'Robin',
    sectorEn: 'Healthcare & Education',
    sectorFr: 'Santé & Éducation',
    image: '/src/assets/images/Robin Robot.jpg',
    descEn: 'Social companion robot that supports patients, especially children, during recovery.',
    descFr: 'Robot compagnon social qui soutient les patients, surtout les enfants, pendant la guérison.',
    featuresEn: ['Social Companion', 'Patient Support', 'Therapeutic'],
    featuresFr: ['Compagnon Social', 'Soutien aux Patients', 'Thérapeutique'],
  },
  {
    name: 'Cruzr',
    sectorEn: 'Retail & Healthcare',
    sectorFr: 'Commerce & Santé',
    image: '/src/assets/images/Cruzr Robot.jpg',
    descEn: 'Intelligent humanoid with excellent navigation skills for customer service and guidance.',
    descFr: 'Humanoïde intelligent avec d\'excellentes capacités de navigation pour le service client.',
    featuresEn: ['Navigation', 'Customer Service', 'Guidance'],
    featuresFr: ['Navigation', 'Service Client', 'Guidage'],
  },
  {
    name: 'James',
    sectorEn: 'Hospitality & Retail',
    sectorFr: 'Hôtellerie & Commerce',
    image: '/src/assets/images/James Robot.jpg',
    descEn: 'Service and butler robot designed for hotels, restaurants and premium service environments.',
    descFr: 'Robot majordome conçu pour les hôtels, restaurants et environnements de service premium.',
    featuresEn: ['Butler Service', 'Hospitality', 'Premium'],
    featuresFr: ['Service Majordome', 'Hôtellerie', 'Premium'],
  },
  {
    name: 'Adibot',
    sectorEn: 'Healthcare & Security',
    sectorFr: 'Santé & Sécurité',
    image: '/src/assets/images/Adibot.jpg',
    descEn: 'Autonomous UV-C disinfection robot that sanitizes large areas such as hospitals and airports.',
    descFr: 'Robot de désinfection UV-C autonome pour les hôpitaux, aéroports et grandes surfaces.',
    featuresEn: ['UV-C Disinfection', 'Autonomous', 'Large Area'],
    featuresFr: ['Désinfection UV-C', 'Autonome', 'Grande Surface'],
  },
  {
    name: 'Sawyer',
    sectorEn: 'Industry & Manufacturing',
    sectorFr: 'Industrie & Manufacture',
    image: '/src/assets/images/Sawyer Cobot.jpg',
    descEn: 'Collaborative industrial robot (cobot) for precision assembly, manufacturing and automation.',
    descFr: 'Robot collaboratif industriel (cobot) pour l\'assemblage de précision et l\'automatisation.',
    featuresEn: ['Collaborative', 'Precision Assembly', 'Automation'],
    featuresFr: ['Collaboratif', 'Assemblage de Précision', 'Automatisation'],
  },
  {
    name: 'Spot',
    sectorEn: 'Mining, Security & Industry',
    sectorFr: 'Mines, Sécurité & Industrie',
    image: '/src/assets/images/Spot Robot.jpg',
    descEn: 'Agile, mobile four-legged robot for inspection and data collection in hazardous environments.',
    descFr: 'Robot mobile à quatre pattes pour l\'inspection et la collecte de données en environnements dangereux.',
    featuresEn: ['Rugged', 'Inspection', 'Data Collection'],
    featuresFr: ['Robuste', 'Inspection', 'Collecte de Données'],
  },
  {
    name: 'Lucki Bot',
    sectorEn: 'Service & Hospitality',
    sectorFr: 'Service & Hôtellerie',
    image: '/src/assets/images/Lucki Bot.jpg',
    descEn: 'Intelligent service robot for smart delivery and customer interaction in retail and hotels.',
    descFr: 'Robot de service intelligent pour la livraison et l\'interaction client dans le commerce et les hôtels.',
    featuresEn: ['Smart Delivery', 'Customer Interaction', 'Service'],
    featuresFr: ['Livraison Intelligente', 'Interaction Client', 'Service'],
  },
];

export const RobotsPage = () => {
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
            {language === 'en' ? 'Product Catalog // 03' : 'Catalogue Produits // 03'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Our Robot Fleet' : 'Notre Flotte de Robots'}
          </h2>
          <p className="text-gray-400 text-lg font-light">
            {language === 'en'
              ? 'Eight advanced robots powered by the ZBOS platform, serving Education, Healthcare, Industry, Hospitality, and Security sectors.'
              : 'Huit robots avancés propulsés par la plateforme ZBOS, servant les secteurs de l\'Éducation, de la Santé, de l\'Industrie, de l\'Hôtellerie et de la Sécurité.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {robots.map((robot, index) => (
            <motion.div
              key={robot.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-0 group hover:border-cyan/30 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row bg-black/40">
                <div className="relative w-48 h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={robot.image}
                    alt={robot.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 scale-105 group-hover:scale-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <h3 className="text-2xl font-extrabold tracking-tight uppercase text-white">{robot.name}</h3>
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-widest">
                      {language === 'en' ? robot.sectorEn : robot.sectorFr}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm font-light leading-relaxed mb-4 flex-grow">
                    {language === 'en' ? robot.descEn : robot.descFr}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(language === 'en' ? robot.featuresEn : robot.featuresFr).map((feature) => (
                      <span
                        key={feature}
                        className="text-[8px] font-mono px-2 py-1 bg-white/5 text-gray-500 uppercase tracking-widest"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 gap-2 text-[10px]">
                      <Info size={12} /> {language === 'en' ? 'Specs' : 'Spécs'}
                    </Button>
                    <Button variant="secondary" size="sm" glow className="flex-1 gap-2 text-[10px]">
                      <Eye size={12} /> {language === 'en' ? 'View' : 'Voir'}
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ZBOS Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 lg:p-12 border-cyan/20 bg-gradient-to-br from-cyan/5 to-transparent">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-cyan/10 flex items-center justify-center">
                  <Cpu size={40} className="text-cyan" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-white mb-2 uppercase tracking-tighter">ZBOS Platform</h3>
                <p className="text-cyan font-mono text-xs uppercase tracking-widest mb-4">
                  {language === 'en' ? 'The Brain Behind the Bots' : 'Le Cerveau Derrière les Robots'}
                </p>
                <p className="text-gray-400 text-base font-light mb-6">
                  {language === 'en'
                    ? 'ZBOS is the proprietary operating system developed by ZoraBots Belgium that powers all robots in our catalog. It is the first software platform capable of giving life to any smart device.'
                    : 'ZBOS est le système d\'exploitation propriétaire développé par ZoraBots Belgique qui alimente tous les robots de notre catalogue. C\'est la première plateforme logicielle capable de donner vie à n\'importe quel appareil intelligent.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Monitor, en: 'Physical Robots', fr: 'Robots Physiques' },
                    { icon: Globe, en: 'Virtual & VR', fr: 'Virtuel & VR' },
                    { icon: Code, en: 'No-Code Interface', fr: 'Interface No-Code' },
                  ].map((item) => (
                    <div key={item.en} className="flex items-center gap-3 p-4 bg-white/5">
                      <item.icon size={20} className="text-cyan flex-shrink-0" />
                      <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">
                        {language === 'en' ? item.en : item.fr}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
