
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Site Institucional Dra. Milena Takenaka',
    description: 'Site institucional para consultório odontológico. Interface rápida, totalmente responsiva e com foco direto no agendamento de consultas. Desenvolvido com Vue 3, TypeScript e containerizado com Docker.',
    tech: ['Vue 3', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Docker'],
    image: '/assets/dramilenatakenaka/dramilenatakenaka.jpeg',
    link: 'https://dramilenatakenaka.com',
    category: 'fullstack'
  },
  {
    id: '2',
    title: 'Nozzle Lab',
    description: 'Plataforma de gestão para negócios de impressão 3D. Reúne pedidos, clientes, estoque de filamentos, impressoras e despesas em um só lugar, com indicadores para acompanhar a operação.',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    image: '/assets/nozzle/nozzle-1.png',
    images: ['/assets/nozzle/nozzle-1.png', '/assets/nozzle/nozzle-2.png', '/assets/nozzle/nozzle-3.png', '/assets/nozzle/nozzle-4.png'],
    link: 'https://nozzle-qmu.pages.dev',
    category: 'fullstack'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', icon: '/assets/tech-icons/java.svg', category: 'language', roleTag: 'Backend' },
  { name: 'Node.js', icon: '/assets/tech-icons/nodejs.svg', category: 'framework', roleTag: 'APIs' },
  { name: 'TypeScript', icon: '/assets/tech-icons/typescript.svg', category: 'language', roleTag: 'Full Stack' },
  { name: 'JavaScript', icon: '/assets/tech-icons/javascript.svg', category: 'language', roleTag: 'Frontend' },
  { name: 'React', icon: '/assets/tech-icons/react.svg', category: 'framework', roleTag: 'Frontend' },
  { name: 'Vue', icon: '/assets/tech-icons/vuejs.svg', category: 'framework', roleTag: 'Frontend' },
  { name: 'Docker', icon: '/assets/tech-icons/docker.svg', category: 'tool', roleTag: 'Deploy' },
  { name: 'PostgreSQL', icon: '/assets/tech-icons/postgresql.svg', category: 'tool', roleTag: 'Banco' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Suprema Gaming',
    role: 'Desenvolvedor Júnior',
    period: 'jun 2025 - presente',
    description: [
      'Desenvolvimento full stack de novas funcionalidades e plataformas com Node.js, Vue.js, React e Go.',
      'Modelagem de dados e queries otimizadas em bancos relacionais (PostgreSQL) e não-relacionais (MongoDB).',
      'Configuração de containers Docker para desenvolvimento e deploy, além de gerenciamento de infraestrutura AWS.',
    ]
  },
  {
    company: 'Suprema Gaming',
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
