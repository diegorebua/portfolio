import { useState } from 'react';
import { SKILLS } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';
import type { Skill } from '../types';

type Filter = 'all' | Skill['category'];
const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'language', label: 'Linguagens' },
  { value: 'framework', label: 'Frameworks & Libs' },
  { value: 'tool', label: 'DevOps & Dados' },
];

export default function SkillsView() {
  useGsapMotion();
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const skills = activeFilter === 'all' ? SKILLS : SKILLS.filter(skill => skill.category === activeFilter);

  return (
    <div id="skills" className="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div><div className="tech-badge mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Stack // Arsenal</div><h1 className="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88]">Arsenal <span className="text-gradient-blue">Tecnológico</span></h1></div>
          <p className="mono text-xs uppercase tracking-widest max-w-sm" style={{ color: 'var(--color-text-dim)' }}>Tecnologias que uso no dia a dia para construir sistemas e interfaces</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
          {filters.map(filter => {
            const selected = activeFilter === filter.value;
            return <button key={filter.value} type="button" onClick={() => setActiveFilter(filter.value)} aria-pressed={selected} className="mono text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer" style={{ background: selected ? 'var(--color-accent)' : 'var(--card-bg)', color: selected ? 'var(--text-inverse)' : 'var(--color-text-muted)', border: selected ? '1px solid var(--color-accent)' : '1px solid var(--card-border)', fontWeight: selected ? 700 : 500 }}>{filter.label}{filter.value === 'all' ? ' (' + SKILLS.length + ')' : ''}</button>;
          })}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-5">
          {skills.map(skill => (
            <div key={skill.name} className="group relative p-6 lg:p-7 flex flex-col items-center text-center cursor-default skill-card">
              {skill.roleTag && <span className="mono text-[9px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full mb-4 border transition-colors duration-300" style={{ background: 'var(--color-accent-sub)', borderColor: 'var(--color-border)', color: 'var(--color-accent-text)' }}>{skill.roleTag}</span>}
              <div className="mb-4 skill-icon-wrap">{skill.icon.startsWith('http') ? <img src={skill.icon} alt={skill.name} className="w-8 h-8 lg:w-9 lg:h-9 object-contain transition-transform duration-300 group-hover:scale-110" /> : <span className="text-3xl lg:text-4xl transition-transform duration-300 group-hover:scale-110">{skill.icon}</span>}</div>
              <span className="font-bold text-sm tracking-tight group-hover:text-[var(--color-accent-text)] transition-colors duration-200 mb-1" style={{ color: 'var(--color-text)' }}>{skill.name}</span>
              <span className="mono text-[9px] uppercase tracking-widest opacity-60" style={{ color: 'var(--color-text-dim)' }}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
