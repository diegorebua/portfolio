import { BIO } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

export default function AboutView() {
  useGsapMotion();
  return (
    <div id="about" className="relative min-h-[calc(100vh-80px)] pt-32 pb-24">
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="tech-badge"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Perfil // Sobre Mim</div>
          <span className="mono text-xs uppercase tracking-widest hidden sm:block" style={{ color: 'var(--color-text-dim)' }}>Bio & Filosofia</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 about-photo relative">
            <div className="absolute -inset-2 rounded-3xl blur-2xl pointer-events-none opacity-35 transition-all duration-500" style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
            <div className="photo-card aspect-[3/4] group">
              <img src="/profile.jpeg" alt="Diego Rebuá" className="photo-img" loading="lazy" />
              <div className="photo-badge absolute bottom-3 left-3 right-3 py-2 px-3.5 rounded-xl mono text-[10px] uppercase tracking-wider flex items-center justify-between z-20">
                <span className="flex items-center gap-2 font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Disponível</span>
                <span className="font-medium" style={{ color: 'var(--color-text-muted)' }}>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center about-text">
            <h1 className="font-morganite uppercase font-bold tracking-[0.02em] text-5xl sm:text-7xl md:text-8xl leading-[0.88] mb-8">Combinando robustez no backend<br className="hidden md:block" /> com elegância no <span className="text-gradient-blue">frontend</span>.</h1>
            <p className="text-base md:text-lg leading-[1.8] mb-8" style={{ color: 'var(--color-text-muted)' }}>{BIO}</p>
            <p className="text-sm md:text-base leading-[1.8] mb-10" style={{ color: 'var(--color-text-muted)' }}>Não perco tempo reinventando a roda nem criando complexidade desnecessária. Meu foco é resolver problemas com código limpo, APIs bem documentadas e telas que respondem rápido.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
              <div className="bio-card p-5 rounded-2xl border transition-all duration-300" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: 'var(--card-shadow)' }}>
                <h3 className="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2 font-bold" style={{ color: 'var(--color-accent-text)' }}><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Frontend</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>Interfaces reativas, responsivas e velozes construídas com Vue 3, React, TypeScript e Tailwind CSS.</p>
              </div>
              <div className="bio-card p-5 rounded-2xl border transition-all duration-300" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: 'var(--card-shadow)' }}>
                <h3 className="mono text-xs uppercase tracking-[0.2em] mb-2.5 flex items-center gap-2 font-bold" style={{ color: 'var(--color-accent-text)' }}><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Backend & Dados</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>APIs em Node.js e Java (Spring Boot), com banco de dados PostgreSQL estruturado e containers Docker.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
