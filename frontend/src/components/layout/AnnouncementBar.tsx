import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

const APPLY_URL = 'https://forms.gle/hMWYqQzUXtz9xY1T9';

export const AnnouncementBar = ({ isScrolled = false }: { isScrolled?: boolean }) => {
  const { language } = useLanguage();

  const content = {
    en: {
      asideLabel: 'Announcement: Zora Robotics Academy trainer applications are now open',
      status: 'Trainer Applications Now Open',
      deadlineLabel: 'Deadline',
      deadline: '15 October 2026',
      apply: 'Apply Now',
      applyLabel: 'Apply now for Zora Robotics Academy (opens the application form in a new tab)',
    },
    fr: {
      asideLabel: 'Annonce : les candidatures de formateurs de la Zora Robotics Academy sont ouvertes',
      status: 'Candidatures des Formateurs Ouvertes',
      deadlineLabel: 'Clôture',
      deadline: '15 octobre 2026',
      apply: 'Postuler',
      applyLabel: 'Postuler à la Zora Robotics Academy (ouvre le formulaire de candidature dans un nouvel onglet)',
    },
  };

  const c = content[language];

  return (
    <aside
      aria-label={c.asideLabel}
      className={cn(
        'border-b border-accent/20 transition-all duration-300',
        isScrolled ? 'bg-background/60 backdrop-blur-xl' : 'bg-accent/10 backdrop-blur-md'
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1.5 px-4 py-2.5 text-center font-mono text-xs uppercase tracking-widest">
        <span className="font-bold text-accent">
          <span aria-hidden="true" className="mr-1.5">
            🚀
          </span>
          Zora Robotics Academy
        </span>
        <span aria-hidden="true" className="hidden text-muted-fg sm:inline">
          |
        </span>
        <span className="inline-flex items-center gap-1.5 text-foreground">
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {c.status}
        </span>
        <span aria-hidden="true" className="hidden text-muted-fg sm:inline">
          |
        </span>
        <span className="text-muted">
          {c.deadlineLabel}: <span className="font-bold text-foreground">{c.deadline}</span>
        </span>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.applyLabel}
          className="inline-flex min-h-[28px] items-center gap-1 px-2 py-1 font-bold text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          {c.apply}
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
};
