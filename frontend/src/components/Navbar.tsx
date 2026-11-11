import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Stack', to: '/stack' },
  { label: 'Trajetória', to: '/trajetoria' },
];
const navigationLinks = [...links, { label: 'Contato', to: '/contato' }];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const overlay = overlayRef.current;
    const trigger = triggerRef.current;
    if (!overlay) return;

    // The portal escapes the header's backdrop-filter containing block.
    const background = Array.from(document.querySelectorAll<HTMLElement>('.site-header, main, .site-footer'));
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    const scrollY = window.scrollY;
    const previousStyle = document.body.style.cssText;
    Object.assign(document.body.style, { position: 'fixed', top: `-${scrollY}px`, width: '100%', overflow: 'hidden' });
    overlay.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMenuOpen(false);
      }
      if (event.key === 'Tab') {
        const items = Array.from(overlay.querySelectorAll<HTMLElement>('button, a[href]'));
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      document.body.style.cssText = previousStyle;
      window.scrollTo({ top: scrollY, behavior: 'instant' });
      trigger?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header${pathname === '/' ? ' is-home' : ''}`}>
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label="Diego Rebuá, início"><span className="brand-mark" aria-hidden="true" /></Link>
          <nav className="nav-actions" aria-label="Navegação principal">
            <button ref={triggerRef} className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-controls="site-navigation" aria-haspopup="dialog" aria-expanded={menuOpen} aria-label="Abrir menu">
              <span /><span />
            </button>
          </nav>
        </div>
      </header>
      {typeof document !== 'undefined' && createPortal(
        <div ref={overlayRef} id="site-navigation" className={`overlay-menu${menuOpen ? ' is-open' : ''}`} role="dialog" aria-modal={menuOpen ? true : undefined} aria-label="Menu de navegação" aria-hidden={!menuOpen} inert={!menuOpen}>
          <button className="menu-button overlay-menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><span /><span /></button>
          <nav className="overlay-menu-links" aria-label="Links de navegação">
            {navigationLinks.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `overlay-menu-link${isActive ? ' is-active' : ''}`}>{link.label}</NavLink>)}
          </nav>
        </div>, document.body,
      )}
    </>
  );
}
