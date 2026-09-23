import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../composables/useTheme';
import './Navbar.css';

const links = [
  { name: 'Início', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Stack', path: '/stack' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Trajetória', path: '/trajetoria' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = (path: string) => path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out" style={{ top: 'calc(0.85rem + env(safe-area-inset-top))', width: 'max-content', maxWidth: 'calc(100% - 1.25rem)' }}>
      <nav className="flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2.5 w-full px-3 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 rounded-full" style={{
        background: scrolled ? 'var(--color-navbar-bg-scrolled)' : 'var(--color-navbar-bg)',
        backdropFilter: 'blur(20px) saturate(190%)',
        WebkitBackdropFilter: 'blur(20px) saturate(190%)',
        border: scrolled ? '1px solid var(--color-navbar-border-scrolled)' : '1px solid var(--color-navbar-border)',
        boxShadow: scrolled ? 'var(--color-navbar-shadow-scrolled)' : 'var(--color-navbar-shadow)',
      }}>
        <div className="flex items-center gap-1 sm:gap-1.5 font-mono text-[9px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.22em] font-medium overflow-x-auto no-scrollbar py-0.5" style={{ color: 'var(--color-text-muted)' }}>
          {links.map(link => (
            <Link key={link.path} to={link.path} className="relative px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 shrink-0 flex items-center gap-1.5 active:scale-95" style={{
              color: active(link.path) ? 'var(--color-accent-text)' : 'var(--color-text-muted)',
              background: active(link.path) ? 'var(--color-accent-sub)' : 'transparent',
              border: active(link.path) ? '1px solid var(--color-border-2)' : '1px solid transparent',
              fontWeight: active(link.path) ? 700 : 500,
              boxShadow: active(link.path) ? '0 0 12px rgba(58, 90, 107, 0.15)' : 'none',
            }}>
              {active(link.path) && <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse shrink-0" />}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <span className="font-mono text-xs sm:text-sm select-none opacity-40 px-0.5 sm:px-1 shrink-0" style={{ color: 'var(--color-text-muted)' }} aria-hidden="true">|</span>
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button type="button" onClick={toggleTheme} className="theme-toggle-btn w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full cursor-pointer shrink-0" title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'} aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}>
            {isDark ? (
              <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-90" style={{ color: 'var(--color-accent-text)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M8.34 17.66l-1.41 1.41m12.14 0l-1.41-1.41M8.34 6.34L6.93 4.93" /></svg>
            ) : (
              <svg className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" style={{ color: 'var(--color-accent-vibrant)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <Link to="/contato" className="btn-primary inline-flex items-center justify-center font-mono text-[9px] sm:text-xs uppercase tracking-[0.2em] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full active:scale-95 transition-all shrink-0" style={active('/contato') ? { boxShadow: '0 0 20px var(--color-accent)', border: '1px solid #F5F5F3' } : undefined}>Contato</Link>
        </div>
      </nav>
    </header>
  );
}
