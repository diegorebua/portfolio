import SocialIcon from '../components/SocialIcon';
import { useEffect, useRef, useState } from 'react';
import { EMAIL } from '../constants';
import { useGsapMotion } from '../composables/useGsapMotion';

const socials = [
  { name: 'GitHub', handle: '@diegorebua', url: 'https://github.com/diegorebua' },
  { name: 'LinkedIn', handle: '/in/diegorebua', url: 'https://www.linkedin.com/in/diegorebu%C3%A1/' },
  { name: 'Instagram', handle: '@diegorebua', url: 'https://www.instagram.com/diegorebua/' },
] as const;

export default function ContactView() {
  useGsapMotion();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = 'mailto:' + EMAIL;
    }
  };

  return (
    <div id="contact" className="relative min-h-[calc(100vh-80px)] pt-32 pb-24 flex flex-col justify-center">
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(58, 90, 107, 0.25) 0%, rgba(58, 90, 107, 0.08) 60%, transparent 80%)' }} />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-3xl contact-content">
          <div className="tech-badge mb-8"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />Contato Direto</div>
          <h1 className="font-morganite uppercase font-bold tracking-[0.02em] text-6xl sm:text-8xl md:text-9xl leading-[0.85] mb-8">Bora trocar<br /><span className="text-gradient-blue">uma ideia?</span></h1>
          <p className="text-base sm:text-lg md:text-xl leading-[1.8] mb-12" style={{ color: 'var(--color-text-muted)' }}>Seja para conversar sobre uma vaga, tirar uma dúvida técnica ou iniciar um projeto do zero, estou disponível.</p>
          <div className="p-6 sm:p-8 rounded-3xl border mb-14" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border-2)', boxShadow: 'var(--card-shadow)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div><span className="mono text-[10px] uppercase tracking-widest text-[var(--color-accent-text)] font-bold block mb-1.5">E-mail Direto</span><p className="mono text-base sm:text-xl font-bold select-all" style={{ color: 'var(--color-text)' }}>{EMAIL}</p></div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" onClick={copyEmail} className="btn-outline px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold flex items-center gap-2 cursor-pointer active:scale-95" style={{ border: '1px solid var(--card-border)', color: 'var(--color-text)' }}>
                  <svg className="w-4 h-4 text-[var(--color-accent-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={copied ? 'M5 13l4 4L19 7' : 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'} /></svg>
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
                <a href={'mailto:' + EMAIL} className="btn-primary inline-flex items-center gap-2.5 px-6 py-3 font-bold rounded-full text-xs uppercase tracking-wider active:scale-95">Abrir E-mail <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>
              </div>
            </div>
          </div>
          <div>
            <span className="mono text-xs uppercase tracking-[0.25em] mb-6 block" style={{ color: 'var(--color-accent-text)' }}>Redes Sociais</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socials.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 flex items-center justify-between" style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)', boxShadow: 'var(--card-shadow)' }}>
                <div className="flex items-center gap-3.5"><div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-accent-sub)', border: '1px solid var(--card-border)', color: 'var(--color-accent-text)' }}><SocialIcon name={social.name} /></div><div><h4 className="font-bold text-sm group-hover:text-[var(--color-accent-text)] transition-colors">{social.name}</h4><p className="mono text-[10px]" style={{ color: 'var(--color-text-muted)' }}>{social.handle}</p></div></div>
                <span className="text-xs text-[var(--color-accent-text)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
