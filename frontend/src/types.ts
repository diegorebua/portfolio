
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  images?: string[];
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool';
  roleTag?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
