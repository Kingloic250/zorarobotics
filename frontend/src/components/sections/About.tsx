import { motion } from 'motion/react';
import { GlassCard } from '../ui/GlassCard';
import { Target, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Core Mission // 01',
      title1: 'Pioneering Robotics',
      titleSpan: 'Across Africa',
      subtitle: '"AI stands for Artificial Intelligence."',
      tagline: 'Zora Robotics, headquartered in Kigali, Rwanda. Founded in 2019, we are the first company to offer service humanoid robots across Africa.',
      desc1: 'We assemble and deploy robots with value-added solutions, using components sourced from Europe, South Korea, and China. Our mission is to be Africa\'s most impact-driven partner in the adoption of emerging technologies in Robotics and Artificial Intelligence.',
      desc2: 'We accelerate Africa\'s transformation into a knowledge-driven, technology-powered continent starting from Rwanda.',
      values: [
        { icon: Target, title: 'Mission', desc: 'Africa\'s most impact-driven partner in robotics and AI adoption.' },
        { icon: Users, title: 'Team', desc: '11–50 employees in Kigali, growing across East Africa.' },
        { icon: Globe, title: 'Reach', desc: 'Robots deployed in Rwanda, Kenya, and expanding across Africa.' },
        { icon: Award, title: 'Impact', desc: 'Aligned with Rwanda Vision 2050 and Africa\'s ICT agenda.' },
      ],
      leadershipName: 'Benjamin Karenzi',
      leadershipRole: 'CEO / Chairman',
      leadershipDesc: 'University of Aberdeen alumnus. Former Vice Chair, Rwanda ICT Chamber. Former International Roaming Coordinator, MTN Rwanda.',
      leadershipQuote: '"Introducing robotics in Africa through Rwanda."',
      timelineTitle: 'Our Journey',
    },
    fr: {
      badge: 'Mission Principale // 01',
      title1: 'Pionnier de la Robotique',
      titleSpan: 'à Travers l\'Afrique',
      subtitle: '"L\'IA signifie Intelligence Artificielle."',
      tagline: 'Zora Robotics, basée à Kigali, Rwanda. Fondée en 2019, nous sommes la première entreprise à proposer des robots humanoïdes de service à travers l\'Afrique.',
      desc1: 'Nous assemblons et déployons des robots avec des solutions à valeur ajoutée, utilisant des composants provenant d\'Europe, de Corée du Sud et de Chine. Notre mission est d\'être le partenaire le plus axé sur l\'impact en Afrique dans l\'adoption des technologies émergentes en Robotique et en Intelligence Artificielle.',
      desc2: 'Nous accélérons la transformation de l\'Afrique en un continent axé sur la connaissance et la technologie — en commençant par le Rwanda.',
      values: [
        { icon: Target, title: 'Mission', desc: 'Le partenaire le plus impactant d\'Afrique en robotique et IA.' },
        { icon: Users, title: 'Équipe', desc: '11–50 employés à Kigali, en croissance en Afrique de l\'Est.' },
        { icon: Globe, title: 'Portée', desc: 'Robots déployés au Rwanda, Kenya, et en expansion en Afrique.' },
        { icon: Award, title: 'Impact', desc: 'Aligné sur la Vision 2050 du Rwanda et l\'agenda TIC de l\'Afrique.' },
      ],
      leadershipName: 'Benjamin Karenzi',
      leadershipRole: 'CEO / Président',
      leadershipDesc: 'Diplômé de l\'Université d\'Aberdeen. Ancien Vice-Président, Rwanda ICT Chamber. Ancien Coordinateur Itinérance Internationale, MTN Rwanda.',
      leadershipQuote: '"Introduire la robotique en Afrique à travers le Rwanda."',
      timelineTitle: 'Notre Parcours',
    },
  };

  const c = content[language];

  const timeline = [
    { year: 'Oct 2019', en: 'Zora Robotics Belgium meets President Kagame at Rwanda Day, Bonn', fr: 'Zora Robotics Belgique rencontre le Président Kagame au Rwanda Day, Bonn' },
    { year: 'Nov 2019', en: 'Zora Robotics Ltd announced as Rwanda\'s first robotics company', fr: 'Zora Robotics Ltd annoncée comme première entreprise de robotique au Rwanda' },
    { year: 'Jan 2020', en: 'Operations begin in Kigali; first Zora Shop opens', fr: 'Début des opérations à Kigali; première Zora Shop ouverte' },
    { year: 'May 2020', en: '5 anti-epidemic robots deployed with UNDP & Govt of Rwanda', fr: '5 robots anti-épidémiques déployés avec le PNUD et le Gouvernement du Rwanda' },
    { year: 'Sep 2021', en: 'Partnership with Rwanda Ministry of Education for STEM', fr: 'Partenariat avec le Ministère de l\'Éducation du Rwanda pour les STIM' },
    { year: '2023–24', en: 'Represented at Rwanda Day Washington D.C.; East Africa expansion', fr: 'Représenté au Rwanda Day à Washington D.C.; expansion en Afrique de l\'Est' },
    { year: 'Ongoing', en: 'Partnerships with UNDP, Ministries, Youth Robotics Club & more', fr: 'Partenariats avec le PNUD, Ministères, Youth Robotics Club et plus' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />

      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] font-medium mb-4 block">
              {c.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 italic uppercase leading-[1.1]">
              {c.title1} <br />
              <span className="text-gradient">{c.titleSpan}</span>
            </h2>
            <p className="text-lg text-accent font-mono mb-6 italic">"{c.subtitle}"</p>
            <div className="space-y-6 text-muted font-light leading-relaxed text-lg">
              <p>{c.tagline}</p>
              <p>{c.desc1}</p>
              <p>{c.desc2}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full py-10 text-center group">
                  <div className="w-12 h-12 bg-card flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <value.icon className="text-accent" size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-3 uppercase tracking-wider text-foreground">{value.title}</h4>
                  <p className="text-xs text-muted-fg leading-relaxed font-mono uppercase tracking-tighter">{value.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <motion.div
          whileHover={{ y: -4, borderColor: 'rgba(0, 242, 255, 0.3)' }}
          className="mb-20 p-8 glass-panel border-accent/10 hover:bg-card transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
              <span className="text-3xl font-bold text-accent">BK</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{c.leadershipName}</h3>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">{c.leadershipRole}</p>
              <p className="text-muted text-sm font-light mb-2">{c.leadershipDesc}</p>
              <p className="text-muted-fg text-xs font-mono italic">"{c.leadershipQuote}"</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="pt-10 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center uppercase tracking-wider">{c.timelineTitle}</h3>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 overflow-x-auto">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex flex-col items-center text-center min-w-[120px]">
                <span className="text-lg font-extrabold text-foreground mb-2">{item.year}</span>
                <div className="w-1.5 h-1.5 bg-accent mb-3" />
                <p className="text-[9px] font-mono text-muted-fg uppercase tracking-widest leading-relaxed max-w-[140px]">
                  {language === 'en' ? item.en : item.fr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
