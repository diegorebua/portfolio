import { EXPERIENCES } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

export default function ExperienceView() {
  useGsapMotion();
  return (
    <div id="experience" className="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div><div className="tech-badge mb-4"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Histórico // Carreira</div><h1 className="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88]">Minha <span className="text-gradient-blue">Trajetória</span></h1></div>
          <p className="mono text-xs uppercase tracking-widest max-w-sm" style={{ color: 'var(--color-text-dim)' }}>Empresas, funções e o que foi feito na prática</p>
        </div>
        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="exp-item p-7 lg:p-10 rounded-3xl border transition-all duration-300" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: 'var(--card-shadow)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                <div className="lg:col-span-4">
                  <span className="mono text-xs tracking-wider inline-block mb-3 px-3.5 py-1 rounded-full font-medium" style={{ background: 'var(--color-accent-sub)', border: '1px solid var(--card-border)', color: 'var(--color-accent-text)' }}>{experience.period}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{experience.role}</h2>
                  <p className="font-bold flex items-center gap-2 text-base" style={{ color: 'var(--color-accent-text)' }}><span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />{experience.company}</p>
                </div>
                <div className="lg:col-span-8 pt-2">
                  <ul className="space-y-4">{experience.description.map((item, itemIndex) => <li key={itemIndex} className="flex items-start gap-3.5 text-sm sm:text-base leading-[1.8]" style={{ color: 'var(--color-text-muted)' }}><span className="shrink-0 w-2 h-2 rounded-full mt-[10px]" style={{ background: 'var(--color-accent)', boxShadow: '0 0 8px var(--color-accent)' }} /><span>{item}</span></li>)}</ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
