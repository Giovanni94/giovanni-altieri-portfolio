export type SectionKey = 'about' | 'experience' | 'skills' | 'projects' | 'education' | 'contact';

export interface NavItem {
  id: string;
  key: SectionKey;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'chi-sono', key: 'about' },
  { id: 'esperienze', key: 'experience' },
  { id: 'competenze', key: 'skills' },
  { id: 'progetti', key: 'projects' },
  { id: 'formazione', key: 'education' },
  { id: 'contatti', key: 'contact' },
];
