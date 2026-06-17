
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Site Institucional Odontológico',
    description: 'Site institucional criado para a Dra. Milena Takenaka. Focado em UX/UI, o projeto traduz a essência do atendimento humanizado em uma interface moderna e responsiva, projetada para converter visitantes em pacientes.',
    tech: ['Java', 'React', 'Docker'],
    image: '/dramilenatakenaka.jpeg',
    link: 'https://dramilenatakenaka.com',
    category: 'fullstack'
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    category: 'language'
  },

  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    category: 'language'
  },

  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    category: 'framework'
  },

  {
    name: 'Vue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    category: 'framework'
  },

  {
    name: 'Jaca Script',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'framework'
  },

  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    category: 'language'
  },

  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    category: 'tool'
  },

  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    category: 'tool'
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'SX&CO',
    role: 'Desenvolvedor Júnior',
    period: 'jun 2025 - presente',
    description: [
      'Desenvolvimento Full Stack: Criação de novas funcionalidades, desenvolvendo desde a interface do usuário até a lógica de negócios e estruturação de fluxos complexos, atuando em modelo ágil (Jira) com apoio de IA Generativa corporativa (Claude Code).',
      'Stack Tecnológica: Construção e manutenção de aplicações modernas utilizando Node.js, Vue.js e React. Manutenção e evolução de bases de código legadas estruturadas em Golang.',
      'Banco de Dados: Modelagem e gerenciamento de bancos de dados relacionais e não-relacionais, lidando com a estruturação de tabelas e manipulação de dados em PostgreSQL, MongoDB e SQL.',
      'Qualidade de Software: Criação de scripts para automação de rotinas, levantamento de casos de uso (Use Cases) e execução rigorosa de testes de software antes dos deploys.',
      'Infraestrutura e Cloud: Vivência inicial com serviços na nuvem (AWS) e backend as a service (Supabase). Orquestração de ambientes com Docker e suporte em configurações de infraestrutura web (domínios e registros DNS/MX).',
      'Gestão de Identidades e Acessos (IAM): Administração contínua do ambiente corporativo através do dashboard do Microsoft Entra, gerenciando perfis de usuários, listas de transmissão e o controle hierárquico de acesso às ferramentas da empresa.',
    ]
  },
  {
    company: 'SX&CO',
    role: 'Estagiário',
    period: 'fev 2025 - jun 2025',
    description: [
      'Atuação em suporte técnico (Help Desk), prestando atendimento aos usuários e realizando a manutenção preventiva e corretiva de desktops e notebooks.',
      'Responsável por realizar a preparação de máquinas, incluindo formatação, configuração de sistemas operacionais e instalação de softwares corporativos (Pacote Office, etc.).',
      'Apoio direto ao time de desenvolvimento na manutenção do sistema interno da empresa, atuando na implementação de novas funcionalidades de baixa complexidade, como criação de novos campos e pequenos ajustes, o que impulsionou a transição para a área de engenharia de software.',
      'Suporte e Governança: Auxílio na administração de acessos corporativos utilizando o Microsoft Entra, atuando na criação de perfis de usuários, controle de permissões e gerenciamento de listas de transmissão da suíte Microsoft.'
    ]
  },
];

export const BIO = "Sou um Desenvolvedor Full Stack com foco na construção de aplicações web modernas e escaláveis. Com uma trajetória que evoluiu do suporte técnico para a desenvolvedor de software, possuo uma visão sistêmica completa do ciclo de vida das aplicações. Hoje atuo de ponta a ponta: desde a modelagem de bancos de dados e orquestração de infraestrutura com Docker, até a criação de interfaces com React e Vue. Tenho facilidade em atuar em ambientes ágeis, entregando soluções eficientes e código de fácil manutenção.";
