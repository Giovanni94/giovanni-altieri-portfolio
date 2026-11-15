export interface Cv {
  profile: Profile;
  experiences: Experience[];
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  contacts: ContactLink[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  facts: Fact[];
}

export interface Fact {
  label: string;
  value: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string | null;
  activities: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  sector: string;
  client: string;
  activities: string[];
  tags: string[];
}

export interface Education {
  title: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  description?: string;
}

export interface ContactLink {
  label: string;
  url: string;
  primary: boolean;
}
