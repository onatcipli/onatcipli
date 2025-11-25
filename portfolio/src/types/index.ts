export interface PortfolioData {
  meta: MetaData;
  hero: HeroData;
  about: AboutData;
  apps: AppConfig[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  skills: SkillsData;
  contact: ContactData;
}

export interface MetaData {
  title: string;
  description: string;
  url?: string;
  ogImage?: string;
  themeColor?: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  titles: string[];
  tagline: string;
  ctaPrimary: CTAButton;
  ctaSecondary: CTAButton;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface AboutData {
  avatar?: string;
  bio: string;
  bioExtended?: string;
  location: string;
  availability?: string;
  resumeUrl?: string;
  stats: StatItem[];
  techStack: TechItem[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TechItem {
  name: string;
  icon?: string;
  color?: string;
}

export interface AppConfig {
  appId: string;
  platform: "ios" | "android" | "both";
  featured?: boolean;
  technologies?: string[];
  role?: string;
  highlights?: string[];
}

export interface AppStoreData {
  trackId: number;
  trackName: string;
  bundleId: string;
  version: string;
  description: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl512: string;
  screenshotUrls: string[];
  ipadScreenshotUrls?: string[];
  averageUserRating: number;
  userRatingCount: number;
  price: number;
  formattedPrice: string;
  primaryGenreName: string;
  genres: string[];
  artistName: string;
  sellerName: string;
  minimumOsVersion: string;
  releaseDate: string;
  currentVersionReleaseDate: string;
  releaseNotes?: string;
  trackViewUrl: string;
  fileSizeBytes: string;
}

export interface MergedAppData extends AppConfig {
  storeData?: AppStoreData;
}

export interface ExperienceItem {
  company: string;
  logo?: string;
  role: string;
  type?: string;
  duration: {
    start: string;
    end: string | null;
  };
  location: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
  linkedIn?: string;
}

export interface SkillsData {
  languages?: SkillItem[];
  frameworks?: SkillItem[];
  tools?: SkillItem[];
  concepts?: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  years?: number;
}

export interface ContactData {
  email: string;
  phone?: string;
  calendlyUrl?: string;
  socials: SocialLinks;
  cta?: {
    title: string;
    description: string;
  };
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  dribbble?: string;
  medium?: string;
  instagram?: string;
  youtube?: string;
}
