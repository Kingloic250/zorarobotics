import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Bot,
  BrainCircuit,
  Presentation,
  Rocket,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  GraduationCap,
  Users,
  Sparkles,
  Lightbulb,
  Code2,
  Cog,
  Check,
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export const APPLY_URL = 'https://forms.gle/hMWYqQzUXtz9xY1T9';
export const DEADLINE_EN = '15 October 2026';
export const DEADLINE_FR = '15 octobre 2026';

const pillars = [
  {
    icon: Bot,
    titleEn: 'Robotics',
    titleFr: 'Robotique',
    descEn: 'Develop practical knowledge and hands-on experience with robotics systems and technologies.',
    descFr: 'Développez des connaissances pratiques et une expérience concrète des systèmes et technologies robotiques.',
  },
  {
    icon: BrainCircuit,
    titleEn: 'Artificial Intelligence',
    titleFr: 'Intelligence Artificielle',
    descEn: 'Explore AI concepts and technologies and learn how they can be introduced to young learners.',
    descFr: "Explorez les concepts et technologies de l'IA et apprenez à les présenter aux jeunes apprenants.",
  },
  {
    icon: Presentation,
    titleEn: 'Teaching & Learning',
    titleFr: 'Enseignement & Apprentissage',
    descEn: 'Develop practical approaches for making Robotics and AI engaging, understandable, and accessible to students.',
    descFr: 'Développez des approches pratiques pour rendre la Robotique et l’IA engageantes, compréhensibles et accessibles aux élèves.',
  },
  {
    icon: Rocket,
    titleEn: 'Entrepreneurship',
    titleFr: 'Entrepreneuriat',
    descEn: 'Explore opportunities to build sustainable initiatives around technology education and innovation.',
    descFr: 'Explorez les opportunités de bâtir des initiatives durables autour de l’éducation technologique et de l’innovation.',
  },
];

const applicantTypes = [
  { en: 'Educators and teachers', fr: 'Éducateurs et enseignants' },
  { en: 'Trainers and facilitators', fr: 'Formateurs et facilitateurs' },
  { en: 'Students and graduates', fr: 'Étudiants et diplômés' },
  { en: 'Technology enthusiasts', fr: 'Passionnés de technologie' },
  { en: 'Aspiring entrepreneurs', fr: 'Entrepreneurs en devenir' },
  { en: 'People interested in Robotics and AI education', fr: 'Personnes intéressées par l’éducation en Robotique et IA' },
  { en: 'People passionate about working with young learners', fr: 'Personnes passionnées par le travail avec les jeunes apprenants' },
];

const journeySteps = [
  {
    n: '01',
    titleEn: 'Apply',
    titleFr: 'Postuler',
    descEn: 'Submit your application through the Academy application form.',
    descFr: 'Soumettez votre candidature via le formulaire de l’Académie.',
  },
  {
    n: '02',
    titleEn: 'Learn',
    titleFr: 'Apprendre',
    descEn: 'Develop practical skills in Robotics, AI, education, and related technologies.',
    descFr: 'Développez des compétences pratiques en Robotique, IA, éducation et technologies connexes.',
  },
  {
    n: '03',
    titleEn: 'Train',
    titleFr: 'Se former',
    descEn: "Participate in the Academy's trainer development program.",
    descFr: 'Participez au programme de développement des formateurs de l’Académie.',
  },
  {
    n: '04',
    titleEn: 'Teach',
    titleFr: 'Enseigner',
    descEn: 'Bring Robotics and AI learning experiences to young learners in schools and communities.',
    descFr: 'Apportez des expériences d’apprentissage en Robotique et IA aux jeunes dans les écoles et les communautés.',
  },
  {
    n: '05',
    titleEn: 'Grow',
    titleFr: 'Évoluer',
    descEn: 'Explore opportunities to develop as a Robotics and AI educator and entrepreneur.',
    descFr: 'Explorez les opportunités d’évoluer comme éducateur et entrepreneur en Robotique et IA.',
  },
];

const beneficiaryTopics = [
  { icon: Bot, en: 'Robotics', fr: 'Robotique' },
  { icon: BrainCircuit, en: 'Artificial Intelligence', fr: 'Intelligence Artificielle' },
  { icon: Code2, en: 'Programming', fr: 'Programmation' },
  { icon: Cog, en: 'Engineering', fr: 'Ingénierie' },
  { icon: Lightbulb, en: 'Problem solving', fr: 'Résolution de problèmes' },
  { icon: Sparkles, en: 'Creativity', fr: 'Créativité' },
  { icon: Rocket, en: 'Innovation', fr: 'Innovation' },
  { icon: Presentation, en: 'Technology entrepreneurship', fr: 'Entrepreneuriat technologique' },
];

function useAcademySeo(language: 'en' | 'fr') {
  useEffect(() => {
    const title =
      language === 'en'
        ? 'Zora Robotics Academy | Robotics & AI Education in Rwanda'
        : 'Zora Robotics Academy | Éducation en Robotique & IA au Rwanda';
    const description =
      language === 'en'
        ? 'Zora Robotics Academy trains educators and aspiring entrepreneurs to teach Robotics and Artificial Intelligence to young learners across Rwanda.'
        : 'Zora Robotics Academy forme des éducateurs et entrepreneurs en devenir à enseigner la Robotique et l’Intelligence Artificielle aux jeunes apprenants à travers le Rwanda.';
    const canonical = 'https://zoraroboticsltd.com/academy';

    document.title = title;

    const setMeta = (selector: string, create: () => HTMLMetaElement, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    setMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement('meta');
        m.name = 'description';
        return m;
      },
      { name: 'description', content: description }
    );
    setMeta(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:title');
        return m;
      },
      { property: 'og:title', content: title }
    );
    setMeta(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:description');
        return m;
      },
      { property: 'og:description', content: description }
    );
    setMeta(
      'meta[property="og:url"]',
      () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:url');
        return m;
      },
      { property: 'og:url', content: canonical }
    );
    setMeta(
      'meta[property="og:type"]',
      () => {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:type');
        return m;
      },
      { property: 'og:type', content: 'website' }
    );

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [language]);
}

export const AcademyPage = () => {
  const { language } = useLanguage();
  useAcademySeo(language);

  return (
    <>
      {/* 1. WHAT IS ZORA ROBOTICS ACADEMY */}
      <section id="about-academy" className="relative overflow-hidden pt-32 pb-24 scroll-mt-24">
        <div className="absolute inset-0 cyber-grid opacity-[0.06] pointer-events-none" />
        <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-linear-to-t from-accent/5 to-transparent pointer-events-none" />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Zora Robotics Academy // 01' : 'Zora Robotics Academy // 01'}
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter text-foreground">
                {language === 'en' ? 'What is Zora Robotics Academy?' : 'Qu’est-ce que la Zora Robotics Academy ?'}
              </h1>

              <p className="text-muted text-lg font-light leading-relaxed mb-6">
                {language === 'en'
                  ? 'Zora Robotics Academy is an initiative designed to equip educators and aspiring entrepreneurs with practical skills in Robotics and Artificial Intelligence, enabling them to deliver engaging technology education to young learners in primary and secondary schools across Rwanda.'
                  : 'La Zora Robotics Academy est une initiative conçue pour doter les éducateurs et les entrepreneurs en devenir de compétences pratiques en Robotique et en Intelligence Artificielle, afin d’offrir une éducation technologique engageante aux jeunes apprenants des écoles primaires et secondaires à travers le Rwanda.'}
              </p>

              <p className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-foreground mb-3">
                {language === 'en' ? 'Train. Teach. Inspire the Next Generation.' : 'Former. Enseigner. Inspirer la Prochaine Génération.'}
              </p>

              <p className="text-base text-muted mb-8 max-w-2xl leading-relaxed font-light">
                {language === 'en'
                  ? 'Become a Robotics & AI trainer and help young learners across Rwanda discover robotics, artificial intelligence, programming, and emerging technologies.'
                  : 'Devenez formateur en Robotique & IA et aidez les jeunes apprenants à travers le Rwanda à découvrir la robotique, l’intelligence artificielle, la programmation et les technologies émergentes.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-accent border border-accent/30 bg-accent/10 px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  {language === 'en' ? 'Applications Now Open' : 'Candidatures Ouvertes'}
                </span>
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted border border-border bg-card px-4 py-2">
                  <CalendarClock size={14} className="text-accent" />
                  {language === 'en' ? `Deadline: ${DEADLINE_EN}` : `Clôture : ${DEADLINE_FR}`}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" aria-label={language === 'en' ? 'Apply to be Trainer (opens Google Form)' : 'Postuler pour devenir formateur (ouvre le formulaire Google)'}>
                  <Button variant="primary" size="lg" className="px-10 flex items-center group w-full sm:w-auto">
                    {language === 'en' ? 'Apply to be Trainer' : 'Postuler pour Devenir Formateur'}
                    <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </a>
                <a href="#academy-focus">
                  <Button variant="outline" size="lg" className="px-10 border-border text-foreground hover:bg-accent hover:text-white uppercase text-sm tracking-widest font-bold w-full sm:w-auto">
                    {language === 'en' ? 'What Trainers Develop' : 'Ce Que Développent les Formateurs'}
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-8 lg:p-10 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-card flex items-center justify-center">
                    <GraduationCap size={28} className="text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground uppercase tracking-wider">
                      {language === 'en' ? 'Beyond Technology' : 'Au-delà de la Technologie'}
                    </h2>
                    <p className="text-[10px] font-mono text-accent uppercase tracking-widest">
                      {language === 'en' ? 'Developing people, not only robots' : 'Développer les talents, pas seulement les robots'}
                    </p>
                  </div>
                </div>
                <p className="text-muted text-sm font-light leading-relaxed mb-6">
                  {language === 'en'
                    ? 'Zora Robotics is not only building robotics technology, it is developing the people who will introduce Robotics and AI to the next generation.'
                    : 'Zora Robotics ne construit pas seulement la technologie robotique, elle forme les personnes qui initieront la prochaine génération à la Robotique et à l’IA.'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { en: 'Practical skills', fr: 'Compétences pratiques' },
                    { en: 'Teaching approaches', fr: 'Approches pédagogiques' },
                    { en: 'Young learners focus', fr: 'Focus jeunes apprenants' },
                    { en: 'Rwanda-wide mission', fr: 'Mission à travers le Rwanda' },
                  ].map((item) => (
                    <div key={item.en} className="flex items-center gap-3 p-4 bg-card border border-transparent hover:border-accent/30 transition-all">
                      <Check size={16} className="text-accent shrink-0" />
                      <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                        {language === 'en' ? item.en : item.fr}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WILL TRAINERS DEVELOP */}
      <section id="academy-focus" className="py-24 bg-card relative overflow-hidden scroll-mt-24">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Trainer Focus // 02' : 'Focus Formateurs // 02'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
                {language === 'en' ? 'What Will Trainers Develop?' : 'Que Vont Développer les Formateurs ?'}
              </h2>
              <p className="text-muted text-lg font-light">
                {language === 'en'
                  ? 'Four practical areas that prepare trainers to bring Robotics and AI to young learners.'
                  : 'Quatre domaines pratiques qui préparent les formateurs à apporter la Robotique et l’IA aux jeunes apprenants.'}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full p-8 group hover:border-accent/30 transition-all duration-500">
                  <div className="w-14 h-14 bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <p.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wider">
                    {language === 'en' ? p.titleEn : p.titleFr}
                  </h3>
                  <p className="text-muted text-sm font-light leading-relaxed">
                    {language === 'en' ? p.descEn : p.descFr}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO CAN APPLY */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Eligibility // 03' : 'Éligibilité // 03'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
                {language === 'en' ? 'Who Can Apply?' : 'Qui Peut Postuler ?'}
              </h2>
              <p className="text-muted text-lg font-light leading-relaxed mb-8">
                {language === 'en'
                  ? 'We are looking for passionate individuals who want to learn, teach, and help expand access to Robotics and AI education across Rwanda.'
                  : 'Nous recherchons des personnes passionnées qui souhaitent apprendre, enseigner et aider à élargir l’accès à l’éducation en Robotique et IA à travers le Rwanda.'}
              </p>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md" className="flex items-center gap-2">
                  {language === 'en' ? 'Check Your Fit: Apply' : 'Vérifiez Votre Profil : Postulez'}
                  <ArrowUpRight size={16} />
                </Button>
              </a>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {applicantTypes.map((a, i) => (
                <motion.div
                  key={a.en}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <GlassCard className="h-full py-6 px-5 flex items-start gap-3 group">
                    <span className="w-8 h-8 shrink-0 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users size={16} className="text-accent" />
                    </span>
                    <span className="text-xs font-medium text-foreground leading-relaxed">
                      {language === 'en' ? a.en : a.fr}
                    </span>
                  </GlassCard>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="sm:col-span-2">
                <div className="px-5 py-4 border border-accent/20 bg-accent/5 flex items-center gap-3">
                  <CalendarClock size={18} className="text-accent shrink-0" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
                    {language === 'en' ? (
                      <>Applications now open, deadline <span className="text-accent font-bold">{DEADLINE_EN}</span></>
                    ) : (
                      <>Candidatures ouvertes, clôture le <span className="text-accent font-bold">{DEADLINE_FR}</span></>
                    )}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOURNEY */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
              {language === 'en' ? 'The Process // 04' : 'Le Parcours // 04'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
              {language === 'en' ? 'Your Journey with Zora Robotics Academy' : 'Votre Parcours avec la Zora Robotics Academy'}
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />
            <div className="space-y-8 md:space-y-12">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                    <GlassCard className="p-6 group hover:border-accent/30 transition-all duration-500">
                      <span className="text-accent font-mono text-sm font-bold block mb-2">{step.n}</span>
                      <h3 className="text-xl font-bold text-foreground mb-2 uppercase tracking-wider">
                        {language === 'en' ? step.titleEn : step.titleFr}
                      </h3>
                      <p className="text-muted text-sm font-light leading-relaxed">
                        {language === 'en' ? step.descEn : step.descFr}
                      </p>
                    </GlassCard>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/30 shrink-0 relative z-10" aria-hidden="true">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO WILL BENEFIT */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-accent font-mono text-[10px] uppercase tracking-widest font-bold mb-4 block">
                {language === 'en' ? 'Our Mission // 05' : 'Notre Mission // 05'}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter">
                {language === 'en' ? 'Inspiring the Next Generation' : 'Inspirer la Prochaine Génération'}
              </h2>
              <p className="text-muted text-lg font-light">
                {language === 'en'
                  ? 'Trained educators will help young learners discover the technologies shaping the future.'
                  : 'Les éducateurs formés aideront les jeunes apprenants à découvrir les technologies qui façonnent l’avenir.'}
              </p>
            </motion.div>
          </div>

          {/* Chain */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-2 mb-12 max-w-5xl mx-auto"
            aria-label={language === 'en' ? 'Trainer to Future Innovator pathway' : 'Parcours du formateur au futur innovateur'}
          >
            {[
              { en: 'Trainer', fr: 'Formateur' },
              { en: 'School', fr: 'École' },
              { en: 'Student', fr: 'Élève' },
              { en: 'Future Innovator', fr: 'Futur Innovateur' },
            ].map((s, i, arr) => (
              <div key={s.en} className="flex flex-col md:flex-row items-center gap-3 md:gap-2 flex-1">
                <div className={`w-full text-center px-4 py-4 glass-panel ${i === arr.length - 1 ? 'border-accent/40 bg-accent/10' : ''}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${i === arr.length - 1 ? 'text-accent' : 'text-foreground'}`}>
                    {language === 'en' ? s.en : s.fr}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight size={18} className="text-accent shrink-0 rotate-90 md:rotate-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {beneficiaryTopics.map((t, i) => (
              <motion.div
                key={t.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <GlassCard className="text-center py-6 px-4 h-full group cursor-default">
                  <t.icon size={24} className="mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">
                    {language === 'en' ? t.en : t.fr}
                  </h3>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPLICATION CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="p-8 lg:p-14 border-accent/20 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent text-center overflow-hidden" hoverGlow={false}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-accent border border-accent/30 bg-background/60 px-4 py-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  {language === 'en' ? 'Applications Now Open' : 'Candidatures Ouvertes'}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-tighter text-foreground">
                  {language === 'en' ? 'Ready to Become a Robotics & AI Trainer?' : 'Prêt à Devenir Formateur en Robotique & IA ?'}
                </h2>
                <p className="text-muted text-lg font-light mb-8">
                  {language === 'en'
                    ? 'Take the opportunity to learn, teach, and help young learners explore the future of technology.'
                    : 'Saisissez l’opportunité d’apprendre, d’enseigner et d’aider les jeunes apprenants à explorer l’avenir de la technologie.'}
                </p>
                <p className="text-[11px] font-mono uppercase tracking-widest text-muted-fg mb-8">
                  {language === 'en' ? (
                    <>Deadline: <span className="text-accent font-bold">{DEADLINE_EN}</span></>
                  ) : (
                    <>Clôture : <span className="text-accent font-bold">{DEADLINE_FR}</span></>
                  )}
                </p>
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" aria-label="Apply now (opens the Academy application Google Form)">
                  <Button variant="primary" size="lg" className="px-12 uppercase font-bold tracking-widest text-sm font-mono">
                    {language === 'en' ? 'Apply Now' : 'Postuler'}
                    <ArrowUpRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Structured data (no unsupported claims) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Zora Robotics Academy | Robotics & AI Education in Rwanda',
            description:
              'Zora Robotics Academy trains educators and aspiring entrepreneurs to teach Robotics and Artificial Intelligence to young learners across Rwanda.',
            url: 'https://zoraroboticsltd.com/academy',
          }),
        }}
      />
    </>
  );
};
