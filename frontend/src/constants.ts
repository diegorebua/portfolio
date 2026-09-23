
import { Project, Skill, Experience } from './types';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const ICONS = {
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  nodejs: `${CDN}/nodejs/nodejs-original.svg`,
  react: `${CDN}/react/react-original.svg`,
  vue: `${CDN}/vuejs/vuejs-original.svg`,
  typescript: `${CDN}/typescript/typescript-original.svg`,
  docker: `${CDN}/docker/docker-original.svg`,
  postgresql: `${CDN}/postgresql/postgresql-original.svg`,
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Site Institucional Dra. Milena Takenaka',
    description: 'Site institucional para consultório odontológico. Interface rápida, totalmente responsiva e com foco direto no agendamento de consultas. Desenvolvido com Vue 3, TypeScript e containerizado com Docker.',
    tech: ['Vue 3', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Docker'],
    image: '/dramilenatakenaka.jpeg',
    link: 'https://dramilenatakenaka.com',
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Nozzle Lab',
    description: 'Plataforma de gestão para negócios de impressão 3D. Reúne pedidos, clientes, estoque de filamentos, impressoras e despesas em um só lugar, com indicadores para acompanhar a operação.',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    image: '/nozzle-1.png',
    images: ['/nozzle-1.png', '/nozzle-2.png', '/nozzle-3.png', '/nozzle-4.png'],
    link: 'https://nozzle-qmu.pages.dev',
    category: 'fullstack'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', icon: ICONS.java, category: 'language', roleTag: 'Backend' },
  { name: 'Node.js', icon: ICONS.nodejs, category: 'framework', roleTag: 'APIs' },
  { name: 'TypeScript', icon: ICONS.typescript, category: 'language', roleTag: 'Full Stack' },
  { name: 'JavaScript', icon: ICONS.javascript, category: 'language', roleTag: 'Frontend' },
  { name: 'React', icon: ICONS.react, category: 'framework', roleTag: 'Frontend' },
  { name: 'Vue', icon: ICONS.vue, category: 'framework', roleTag: 'Frontend' },
  { name: 'Docker', icon: ICONS.docker, category: 'tool', roleTag: 'Deploy' },
  { name: 'PostgreSQL', icon: ICONS.postgresql, category: 'tool', roleTag: 'Banco' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SX&CO',
    role: 'Desenvolvedor Júnior',
    period: 'jun 2025 - presente',
    description: [
      'Desenvolvimento full stack de novas funcionalidades e plataformas com Node.js, Vue.js, React e Go.',
      'Modelagem de dados e queries otimizadas em bancos relacionais (PostgreSQL) e não-relacionais (MongoDB).',
      'Configuração de containers Docker para desenvolvimento e deploy, além de gerenciamento de infraestrutura AWS.',
    ]
  },
  {
    company: 'SX&CO',
    role: 'Estagiário',
    period: 'fev 2025 - jun 2025',
    description: [
      'Suporte técnico especializado a usuários e sustentação de infraestrutura interna.',
      'Apoio à equipe de desenvolvimento na implementação de novas rotinas em sistemas internos.',
    ]
  },
];

export const BIO = "Desenvolvedor Full Stack. Comecei no suporte técnico, onde aprendi na prática como usuários reais lidam com sistemas e onde os problemas acontecem, e migrei para a engenharia de software. Hoje construo aplicações completas: desenho bancos de dados em PostgreSQL, crio APIs em Node.js e Java, e desenvolvo interfaces rápidas e responsivas com React e Vue. Código limpo, testado e direto ao ponto.";

export const EMAIL = "diegorebua@gmail.com";
