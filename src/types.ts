export interface Resume {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  skills: Skill[];
  languages: Language[];
}

export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: "GitHub" | "Twitter" | "Facebook" | "Instagram";
  username: string;
  url: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  courses?: string[];
  website?: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Volunteer {
  organization: string;
  position: string;
  website?: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface Work {
  company: string;
  location: string;
  description: string;
  website?: string;
  position: string;
  startDate: string;
  summary: string;
  endDate?: string;
}
