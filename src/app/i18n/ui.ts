import { SectionKey } from '../shared/nav-items';

export type Lang = 'it' | 'en';

interface SectionText {
  label: string;
  title: string;
}

export interface UiText {
  skip: string;
  loading: string;
  loadError: string;
  menu: {
    open: string;
    close: string;
    home: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    profiles: string;
  };
  theme: { toLight: string; toDark: string };
  language: { label: string; switchTo: string };
  hero: {
    label: string;
    line1: string;
    line2: string;
    highlight: string;
    intro: string;
    ctaExperience: string;
    ctaContact: string;
    scroll: string;
  };
  sections: Record<SectionKey, SectionText>;
  now: string;
  technologies: string;
  marquee: string;
  contact: { text: string; primary: string; profile: string };
  footer: { sections: string; profiles: string; site: string; siteText: string };
}

export const UI: Record<Lang, UiText> = {
  it: {
    skip: 'Vai al contenuto',
    loading: 'Caricamento del curriculum…',
    loadError: 'Non è stato possibile caricare il curriculum. Controlla la connessione e ricarica la pagina.',
    menu: {
      open: 'Apri il menu',
      close: 'Chiudi il menu',
      home: 'Inizio',
      ctaTitle: 'Hai una posizione aperta?',
      ctaText: 'Cerco nuove sfide nello sviluppo backend Java e Spring Boot. Scrivimi, rispondo volentieri.',
      ctaButton: 'Scrivimi su LinkedIn',
      profiles: 'Profili',
    },
    theme: { toLight: 'Passa al tema chiaro', toDark: 'Passa al tema scuro' },
    language: { label: 'EN', switchTo: 'Switch to English' },
    hero: {
      label: 'Software Engineer — Backend Java & Spring Boot',
      line1: 'Sistemi',
      line2: 'che',
      highlight: 'reggono',
      intro: 'Sono',
      ctaExperience: 'Guarda le esperienze',
      ctaContact: 'Scrivimi su',
      scroll: 'Scorri',
    },
    sections: {
      about: { label: 'Chi sono', title: "Backend solido, dal dato all'API." },
      experience: { label: 'Esperienze', title: 'Dove ho lavorato.' },
      skills: { label: 'Competenze', title: 'Gli strumenti che uso ogni giorno.' },
      projects: { label: 'Progetti', title: 'Cosa ho costruito.' },
      education: { label: 'Formazione', title: 'Il percorso di studi.' },
      contact: { label: 'Contatti', title: 'Parliamone' },
    },
    now: 'oggi',
    technologies: 'Tecnologie',
    marquee: 'Tecnologie principali',
    contact: {
      text: 'Cerchi uno sviluppatore backend per il tuo team o vuoi confrontarti su un progetto? Scrivimi su LinkedIn, rispondo volentieri.',
      primary: 'Scrivimi su',
      profile: 'Profilo',
    },
    footer: {
      sections: 'Sezioni',
      profiles: 'Profili',
      site: 'Questo sito',
      siteText: 'Progettato e sviluppato con Angular e TypeScript.',
    },
  },
  en: {
    skip: 'Skip to content',
    loading: 'Loading the résumé…',
    loadError: 'The résumé could not be loaded. Check your connection and reload the page.',
    menu: {
      open: 'Open menu',
      close: 'Close menu',
      home: 'Home',
      ctaTitle: 'Got an open position?',
      ctaText: "I'm looking for new challenges in Java and Spring Boot backend development. Drop me a message.",
      ctaButton: 'Message me on LinkedIn',
      profiles: 'Profiles',
    },
    theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
    language: { label: 'IT', switchTo: "Passa all'italiano" },
    hero: {
      label: 'Software Engineer — Java & Spring Boot backend',
      line1: 'Systems',
      line2: 'built to',
      highlight: 'last',
      intro: "I'm",
      ctaExperience: 'See my experience',
      ctaContact: 'Message me on',
      scroll: 'Scroll',
    },
    sections: {
      about: { label: 'About', title: 'Solid backends, from data to API.' },
      experience: { label: 'Experience', title: "Where I've worked." },
      skills: { label: 'Skills', title: 'The tools I use every day.' },
      projects: { label: 'Projects', title: "What I've built." },
      education: { label: 'Education', title: 'My studies.' },
      contact: { label: 'Contact', title: "Let's talk" },
    },
    now: 'present',
    technologies: 'Technologies',
    marquee: 'Main technologies',
    contact: {
      text: 'Looking for a backend developer for your team, or want to discuss a project? Message me on LinkedIn, I’m happy to talk.',
      primary: 'Message me on',
      profile: 'Profile',
    },
    footer: {
      sections: 'Sections',
      profiles: 'Profiles',
      site: 'This site',
      siteText: 'Designed and built with Angular and TypeScript.',
    },
  },
};
