import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { ExternalLink, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pressMentions = [
  {
    outlet: 'CGTN Africa',
    image: '/images/cgtn.png',
    titleEn: 'Rwanda to deploy robots in COVID-19 fight',
    titleFr: 'Le Rwanda va déployer des robots dans la lutte contre le COVID-19',
    descEn: 'Rwanda acquires smart anti-epidemic robots from Zora Robotics to screen temperatures, deliver food and medicines to COVID-19 patients, and reduce front-line worker exposure.',
    descFr: 'Le Rwanda acquiert des robots anti-épidémiques intelligents de Zora Robotics pour prendre les températures, livrer nourriture et médicaments aux patients COVID-19, et réduire l\'exposition des travailleurs de première ligne.',
    year: '2020',
    url: 'https://newsaf.cgtn.com/news/2020-05-21/Rwanda-to-deploy-robots-in-COVID-19-fight-QEG75qMRkk/index.html',
  },
  {
    outlet: 'The New Times Rwanda',
    image: '/images/new times.png',
    titleEn: 'Global robotics firm inches closer to launch in Rwanda',
    titleFr: 'Une entreprise mondiale de robotique se rapproche du lancement au Rwanda',
    descEn: 'Zora Robotics Ltd, a subsidiary of Belgian robotics company Zora Robotics, prepares to establish operations in Rwanda, bringing advanced robotics solutions to the region.',
    descFr: 'Zora Robotics Ltd, filiale de la société belge de robotique Zora Robotics, se prépare à établir ses activités au Rwanda, apportant des solutions robotiques avancées dans la région.',
    year: '2019',
    url: 'https://www.newtimes.co.rw/article/171271/News/global-robotics-firm-inches-closer-to-launch-in-rwanda',
  },
  {
    outlet: 'UNDP',
    image: '/images/undp.png',
    titleEn: 'UNDP and Government of Rwanda deploy smart anti-epidemic robots to fight COVID-19',
    titleFr: 'Le PNUD et le gouvernement rwandais déploient des robots anti-épidémiques intelligents contre le COVID-19',
    descEn: 'UNDP partners with Rwanda and Zora Robotics to deploy Adibot and other robots in treatment centres, supporting healthcare workers with disinfection and remote patient monitoring.',
    descFr: 'Le PNUD s\'associe au Rwanda et à Zora Robotics pour déployer Adibot et d\'autres robots dans les centres de traitement, soutenant les agents de santé avec la désinfection et la surveillance à distance des patients.',
    year: '2020',
    url: 'https://www.undp.org/africa/news/undp-and-government-rwanda-deploy-smart-anti-epidemic-robots-fight-against-covid-19',
  },
  {
    outlet: 'Rwanda Ministry of Education',
    image: '/images/mineduc.png',
    titleEn: 'Ministry of Education enters partnership with Zora Robotics Ltd to promote STEM in schools',
    titleFr: 'Le Ministère de l\'Éducation s\'associe à Zora Robotics Ltd pour promouvoir les STIM dans les écoles',
    descEn: 'MINEDUC partners with Zora Robotics Ltd to integrate robotics and AI into Rwanda\'s STEM curriculum, training teachers and deploying robots in classrooms nationwide.',
    descFr: 'Le MINEDUC s\'associe à Zora Robotics Ltd pour intégrer la robotique et l\'IA dans le programme STIM du Rwanda, formant les enseignants et déployant des robots dans les classes à travers le pays.',
    year: '2021',
    url: 'https://www.mineduc.gov.rw/news-detail/the-ministry-of-education-to-enter-into-partnership-with-zorabots-africa-to-promote-stem-in-rwandan-schools',
  },
  {
    outlet: 'Standard Media Kenya',
    image: '/images/standard.png',
    titleEn: 'Rwandan medical workers deploy robots to minimise coronavirus risk',
    titleFr: 'Des agents de santé rwandais déploient des robots pour minimiser le risque de coronavirus',
    descEn: 'Rwandan medics use Zora Robotics robots to screen patients, clean rooms with UV-C light, and deliver supplies — reducing direct contact with infected individuals.',
    descFr: 'Les médecins rwandais utilisent les robots Zora Robotics pour examiner les patients, nettoyer les chambres avec la lumière UV-C et livrer des fournitures — réduisant le contact direct avec les personnes infectées.',
    year: '2020',
    url: 'https://www.standardmedia.co.ke/article/2001373595/rwandan-medical-workers-deploy-robots-to-minimise-coronavirus-risk',
  },
  {
    outlet: 'KT Press',
    image: '/images/KT.png',
    titleEn: 'Rwanda Day: Tech innovations to be showcased in Washington D.C.',
    titleFr: 'Rwanda Day : Les innovations technologiques présentées à Washington D.C.',
    descEn: 'Zora Robotics Ltd featured among Rwanda\'s top tech innovations at Rwanda Day in Washington D.C., showcasing robotics solutions on an international stage.',
    descFr: 'Zora Robotics Ltd figure parmi les meilleures innovations technologiques du Rwanda au Rwanda Day à Washington D.C., présentant des solutions robotiques sur la scène internationale.',
    year: '2024',
    url: 'https://www.ktpress.rw/2024/02/rwanda-day-tech-innovations-to-be-showcased-in-washington-dc/',
  },
  {
    outlet: 'The Telegraph',
    image: '/images/tel.png',
    titleEn: 'Rwanda deploys robots to fight COVID-19',
    titleFr: 'Le Rwanda déploie des robots pour lutter contre le COVID-19',
    descEn: 'The Telegraph covers Rwanda\'s pioneering use of Zora Robotics\' robots in the COVID-19 response, highlighting how technology is protecting healthcare workers in East Africa.',
    descFr: 'The Telegraph couvre l\'utilisation pionnière par le Rwanda des robots de Zora Robotics dans la réponse au COVID-19, soulignant comment la technologie protège les agents de santé en Afrique de l\'Est.',
    year: '2020',
    url: 'https://www.telegraph.co.uk/global-health/science-and-disease/rwanda-deploys-robots-fight-covid-19/',
  },

];

function XIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialChannels = [
  {
    name: 'LinkedIn',
    handle: 'Zora Robotics Ltd',
    followers: '297 followers',
    url: 'https://rw.linkedin.com/company/zorabots-africa',
    icon: Linkedin,
    color: 'hover:text-[#0077B5]',
    contentEn: 'Partnerships, thought leadership, recruitment',
    contentFr: 'Partenariats, leadership éclairé, recrutement',
  },
  {
    name: 'X',
    handle: '@zorabots',
    followers: '~449 followers',
    url: 'https://x.com/zorabots',
    icon: XIcon,
    color: 'hover:text-foreground',
    contentEn: 'News, event participation, tech announcements',
    contentFr: 'Actualités, participation aux événements, annonces tech',
  },
  {
    name: 'Facebook',
    handle: 'WeAreZorarobotics',
    followers: 'Zorarobotics',
    url: 'https://www.facebook.com/WeAreZorarobotics/',
    icon: Facebook,
    color: 'hover:text-[#1877F2]',
    contentEn: 'Robot teasers, product reveals, healthcare stories',
    contentFr: 'Teasers robots, lancements produits, histoires santé',
  },
  {
    name: 'Instagram',
    handle: '@zorabots_africa',
    followers: 'Zora Robotics Ltd',
    url: 'https://www.instagram.com/zorabots_africa/',
    icon: Instagram,
    color: 'hover:text-[#E4405F]',
    contentEn: 'Visual content, robot photos, events',
    contentFr: 'Contenu visuel, photos robots, événements',
  },
  {
    name: 'YouTube',
    handle: 'Zora Robotics Ltd',
    followers: 'Channel',
    url: 'https://www.youtube.com/channel/UC6FWjluEyNztGFmWrlEzQcw',
    icon: Youtube,
    color: 'hover:text-[#FF0000]',
    contentEn: 'Robot demos, CEO interviews, STEM education videos',
    contentFr: 'Démos robots, interviews CEO, vidéos éducation STIM',
  },
];

export const NewsPage = () => {
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
            {language === 'en' ? 'News & Media // 06' : 'Actualités & Médias // 06'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Press & Media' : 'Presse & Médias'}
          </h2>
          <p className="text-muted text-lg font-light">
            {language === 'en'
              ? 'Zora Robotics Ltd in the news. Press coverage, media mentions, and social media channels.'
              : 'Zora Robotics Ltd dans l\'actualité. Couverture presse, mentions médias et réseaux sociaux.'}
          </p>
        </motion.div>

        {/* Press Mentions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-10 uppercase tracking-wider">
            {language === 'en' ? 'Press Coverage' : 'Couverture Presse'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pressMentions.map((item, i) => (
              <motion.div
                key={item.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <GlassCard className="h-full group cursor-pointer overflow-hidden">
                    {item.image && (
                      <div className="relative h-36 overflow-hidden">
                        <img src={item.image} alt={item.outlet} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent" />
                      </div>
                    )}
                    <div className={item.image ? 'p-5' : 'p-6'}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">{item.outlet}</span>
                      <span className="text-[9px] font-mono text-muted-fg">{item.year}</span>
                    </div>
                    <p className="text-sm text-foreground font-medium mb-2 group-hover:text-accent transition-colors">
                      {language === 'en' ? item.titleEn : item.titleFr}
                    </p>
                    <p className="text-[11px] text-muted-fg font-light mb-4 leading-relaxed">
                      {language === 'en' ? item.descEn : item.descFr}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-muted-fg uppercase tracking-widest">
                      {language === 'en' ? 'Read More' : 'Lire Plus'}
                      <ExternalLink size={10} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-10 uppercase tracking-wider">
            {language === 'en' ? 'Follow Us' : 'Suivez-Nous'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialChannels.map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={channel.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <GlassCard className={`h-full group cursor-pointer ${channel.color}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <channel.icon size={24} className="text-muted group-hover:text-current transition-colors" />
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{channel.name}</h4>
                        <p className="text-[10px] font-mono text-muted-fg">{channel.handle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted font-light mb-3">
                      {language === 'en' ? channel.contentEn : channel.contentFr}
                    </p>
                    <p className="text-[9px] font-mono text-accent uppercase tracking-widest">{channel.followers}</p>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
