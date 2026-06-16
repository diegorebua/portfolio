
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
