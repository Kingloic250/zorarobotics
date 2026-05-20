import { motion } from 'motion/react';
import { GlassCard } from '../components/ui/GlassCard';
import { ExternalLink, Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const pressMentions = [
  {
    outlet: 'CGTN Africa',
    titleEn: 'Global robotics firm inches closer to launch in Rwanda',
    titleFr: 'Une entreprise mondiale de robotique se rapproche du lancement au Rwanda',
    year: '2019',
    url: '#',
  },
  {
    outlet: 'UNDP',
    titleEn: 'Smart Anti-Epidemic Robots deployed to fight COVID-19',
    titleFr: 'Des robots anti-épidémiques intelligents déployés contre le COVID-19',
    year: '2020',
    url: '#',
  },
  {
    outlet: 'Rwanda Ministry of Education',
    titleEn: 'Partnership to integrate robotics into STEM education',
    titleFr: 'Partenariat pour intégrer la robotique dans l\'éducation STIM',
    year: '2021',
    url: '#',
  },
  {
    outlet: 'Standard Media Kenya',
    titleEn: 'Robot deployment at Kenyan hospitals',
    titleFr: 'Déploiement de robots dans les hôpitaux kenyans',
    year: '2021',
    url: '#',
  },
  {
    outlet: 'KT Press',
    titleEn: 'Rwanda Day Washington D.C. tech showcase',
    titleFr: 'Vitrine technologique au Rwanda Day Washington D.C.',
    year: '2024',
    url: '#',
  },
  {
    outlet: 'CNBC Africa',
    titleEn: 'Coverage of ZoraBots Africa operations',
    titleFr: 'Couverture des opérations de ZoraBots Africa',
    year: '2024',
    url: '#',
  },
];

const socialChannels = [
  {
    name: 'LinkedIn',
    handle: 'ZoraBots Africa Ltd',
    followers: '297 followers',
    url: 'https://rw.linkedin.com/company/zorabots-africa',
    icon: Linkedin,
    color: 'hover:text-[#0077B5]',
    contentEn: 'Partnerships, thought leadership, recruitment',
    contentFr: 'Partenariats, leadership éclairé, recrutement',
  },
  {
    name: 'X (Twitter)',
    handle: '@zorabots',
    followers: '~449 followers',
    url: 'https://x.com/zorabots',
    icon: Twitter,
    color: 'hover:text-white',
    contentEn: 'News updates, event participation, tech announcements',
    contentFr: 'Actualités, participation aux événements, annonces tech',
  },
  {
    name: 'Facebook',
    handle: 'WeAreZoraBots',
    followers: 'ZoraBots',
    url: 'https://www.facebook.com/WeAreZoraBots/',
    icon: Facebook,
    color: 'hover:text-[#1877F2]',
    contentEn: 'Robot teasers, product reveals, healthcare stories',
    contentFr: 'Teasers robots, lancements produits, histoires santé',
  },
  {
    name: 'Instagram',
    handle: '@zorabots_africa',
    followers: 'ZoraBots Africa',
    url: 'https://www.instagram.com/zorabots_africa/',
    icon: Instagram,
    color: 'hover:text-[#E4405F]',
    contentEn: 'Visual content, robot photos, events',
    contentFr: 'Contenu visuel, photos robots, événements',
  },
  {
    name: 'YouTube',
    handle: 'ZoraBots Africa',
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
          <span className="text-cyan font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
            {language === 'en' ? 'News & Media // 06' : 'Actualités & Médias // 06'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
            {language === 'en' ? 'Press & Media' : 'Presse & Médias'}
          </h2>
          <p className="text-gray-400 text-lg font-light">
            {language === 'en'
              ? 'ZoraBots Africa in the news. Press coverage, media mentions, and social media channels.'
              : 'ZoraBots Africa dans l\'actualité. Couverture presse, mentions médias et réseaux sociaux.'}
          </p>
        </motion.div>

        {/* Press Mentions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 uppercase tracking-wider">
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
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-cyan uppercase tracking-widest font-bold">{item.outlet}</span>
                      <span className="text-[9px] font-mono text-gray-600">{item.year}</span>
                    </div>
                    <p className="text-sm text-white font-medium mb-4 group-hover:text-cyan transition-colors">
                      {language === 'en' ? item.titleEn : item.titleFr}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      {language === 'en' ? 'Read More' : 'Lire Plus'}
                      <ExternalLink size={10} />
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 uppercase tracking-wider">
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
                      <channel.icon size={24} className="text-gray-400 group-hover:text-current transition-colors" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{channel.name}</h4>
                        <p className="text-[10px] font-mono text-gray-500">{channel.handle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 font-light mb-3">
                      {language === 'en' ? channel.contentEn : channel.contentFr}
                    </p>
                    <p className="text-[9px] font-mono text-cyan uppercase tracking-widest">{channel.followers}</p>
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
