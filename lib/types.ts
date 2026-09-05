export type Language = "es" | "en";
export type Column = "sidebar" | "main";
export type SectionKind =
  | "profile"
  | "chips"
  | "strengths"
  | "education"
  | "languages"
  | "experience"
  | "projects"
  | "custom";

export type ThemePreset = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  text: string;
  muted: string;
  soft: string;
  border: string;
  line: string;
};

export type TemplatePreset = {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
};

export type ChipGroup = {
  label: string;
  chips: string[];
};

export type CvCard = {
  title: string;
  text: string;
};

export type CvItem = {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string;
  bullets?: string[];
};

export type CvSection = {
  id: string;
  kind: SectionKind;
  title: string;
  column: Column;
  page: number;
  enabled: boolean;
  body?: string[];
  chipGroups?: ChipGroup[];
  cards?: CvCard[];
  items?: CvItem[];
};

export type CvData = {
  language: Language;
  pageCount: number;
  templateId: string;
  themeId: string;
  personal: {
    name: string;
    role: string;
    tags: string[];
    photo: string;
    showPhoto: boolean;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
  sections: CvSection[];
};
