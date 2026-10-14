export interface ProfileIdentity {
  name: string;
  shortName: string;
  role: string;
  company: string;
  tagline: string;
  location: string;
  timezone: string;
  avatar: string;
  verified: boolean;
  openToRoles: string;
  terminalPrompt: string;
}

export interface ProfileAvailability {
  quarter: string;
  systemStatus: string;
  statusText: string;
}

export interface StackItem {
  name: string;
  icon: string;
  color?: string;
  colorLight?: string;
  isMono?: boolean;
  tintBg?: boolean;
  iconSrc?: string;
}

export interface TechStackGroup {
  id: string;
  label: string;
  items: StackItem[];
}

export interface ProfileStacks {
  groups: TechStackGroup[];
  aiStack: StackItem[];
  coreStack: StackItem[];
  modernTools: StackItem[];
}

export interface StatItem {
  label: string;
  value: string;
  numValue?: number;
  prefix?: string;
  suffix?: string;
  description: string;
  icon: "cloud" | "code" | "network" | "shield" | "activity";
  isAccent?: boolean;
}

export interface AboutSection {
  lead: string;
  body: string;
  mission: string;
  philosophySpec: string;
}

export interface LocationInfo {
  city: string;
  country: string;
  timeZoneLabel: string;
}

export interface CollaborationInfo {
  style: string;
  description: string;
  chips: string[];
}

export interface LanguageItem {
  name: string;
  note: string;
  level: "Native" | "Fluent" | "Working" | "Conversational";
  segments: number; // 1 to 5
  sampleSpeech?: string;
  langCode?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  liveLabel?: string;
  sourceUrl: string;
  sourceLabel?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  locationMode: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export type SkillDisplayMode = "percent" | "level";

export interface SkillItem {
  name: string;
  percent: number;
  level?: "Beginner" | "Working" | "Strong";
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "frontend" | "backend" | "database";
  items: SkillItem[];
}

export interface SkillsConfig {
  mode: SkillDisplayMode;
  categories: SkillCategory[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  description: string;
  honor?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  icon: "aws" | "mongodb" | "meta" | "cert";
}

export interface SocialItem {
  platform: string;
  label: string;
  url: string;
  icon: "github" | "linkedin" | "x" | "mail";
}

export interface ContactInfo {
  email: string;
  responseTime: string;
  pgp?: string;
  footerTagline: string;
}

export interface ProfileData {
  identity: ProfileIdentity;
  availability: ProfileAvailability;
  stacks: ProfileStacks;
  stats: StatItem[];
  about: AboutSection;
  location: LocationInfo;
  collaboration: CollaborationInfo;
  languages: LanguageItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  skills: SkillsConfig;
  education: EducationItem[];
  credentials: CredentialItem[];
  socials: SocialItem[];
  contact: ContactInfo;
}
