export type Profile = {
  name: string;
  role: string;
  greeting: string;
  description: string;
  location: string;
  email: string;
  github: string;
  image: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type SkillsContent = {
  title: string;
  categories: SkillCategory[];
};

export type Project = {
  title: string;
  summary: string;
  role: string;
  focus: string;
  github: string;
  deploy?: string;
  tags: string[];
  featured?: boolean;
};

export type Social = {
  name: string;
  url: string;
};

export type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
};
