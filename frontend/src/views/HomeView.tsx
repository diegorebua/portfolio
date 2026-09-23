import { Link } from 'react-router-dom';
import TerminalTyping from '../components/TerminalTyping';
import { useGsapMotion } from '../composables/useGsapMotion';

export default function HomeView() {
  useGsapMotion();
  return (
    <div id="home" className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-28 pb-16">
      <div className="section-ambient-glow" aria-hidden="true" />
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 relative z-10 my-auto">
        <div className="mb-6 hero-terminal max-w-full overflow-hidden"><TerminalTyping /></div>
        <div className="relative hero-name-container mb-6 select-none max-w-full">
          <div className="hero-name-aura" aria-hidden="true" />
          <h1 className="font-morganite uppercase font-bold tracking-[0.01em] hero-name" style={{ fontSize: 'clamp(4.5rem, 16vw, 17rem)', lineHeight: 0.82 }}>
            <span className="hero-name-first">Diego</span><span className="hero-name-last ml-[0.16em]">Rebuá</span>
          </h1>
        </div>
        <p className="max-w-xl text-base sm:text-lg md:text-xl leading-relaxed mb-10 hero-subtitle" style={{ color: 'var(--color-text-muted)' }}>
          Desenvolvedor Full Stack. Desenvolvo <span className="font-medium" style={{ color: 'var(--color-text)' }}>sistemas confiáveis</span> no backend e interfaces rápidas no frontend.
        </p>
        <div className="flex flex-wrap items-center gap-4 hero-cta">
          <Link to="/projetos" className="btn-primary px-8 py-3.5 rounded-full font-bold text-sm active:scale-95 flex items-center gap-2">Ver Projetos <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
          <Link to="/sobre" className="btn-outline px-8 py-3.5 rounded-full font-bold text-sm active:scale-95" style={{ border: '1px solid var(--color-border-2)', color: 'var(--color-text-frost)' }}>Sobre Mim</Link>
          <Link to="/contato" className="mono text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:text-[var(--color-accent-text)] transition-colors duration-200" style={{ color: 'var(--color-text-muted)' }}>Falar Comigo →</Link>
        </div>
      </div>
    </div>
  );
}
