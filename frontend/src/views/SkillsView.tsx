import { SKILLS } from '../constants';
import type { Skill } from '../types';

const groups: { category: Skill['category']; title: string; description: string }[] = [
  { category: 'language', title: 'Linguagens', description: 'A base para criar com clareza.' },
  { category: 'framework', title: 'Interfaces & APIs', description: 'Ferramentas para transformar ideias em produto.' },
  { category: 'tool', title: 'Dados & infraestrutura', description: 'Estrutura para construir e manter.' },
];

export default function SkillsView() {
  return (
    <section className="page container" aria-labelledby="skills-title">
      <header className="page-heading">
        <p className="eyebrow">FERRAMENTAS / 03</p>
        <h1 id="skills-title">Minha stack<span className="accent-period">.</span></h1>
        <p>Escolho tecnologias pelo problema que resolvem. Estas são as que uso com mais frequência para criar produtos completos.</p>
      </header>
      <div className="skill-groups">
        {groups.map((group, index) => <section className="skill-group" key={group.category} aria-labelledby={`skill-${group.category}`}>
          <div className="skill-group-intro"><span className="eyebrow">0{index + 1} / STACK</span><h2 id={`skill-${group.category}`}>{group.title}</h2><p>{group.description}</p></div>
          <div className="skill-list">{SKILLS.filter(skill => skill.category === group.category).map(skill => <div className="skill-row" key={skill.name}><span className="skill-name"><img className="skill-icon" src={skill.icon} alt="" aria-hidden="true" /><span>{skill.name}</span></span><span className="skill-role">{skill.roleTag ?? 'Tecnologia'}</span></div>)}</div>
        </section>)}
      </div>
    </section>
  );
}
