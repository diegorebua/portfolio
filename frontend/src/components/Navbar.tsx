import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Stack', to: '/stack' },
  { label: 'Trajetória', to: '/trajetoria' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`site-header${pathname === '/' ? ' is-home' : ''}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/" aria-label="Diego Rebuá, início"><span className="brand-mark" aria-hidden="true" /></Link>
        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>{link.label}</NavLink>)}
          <NavLink to="/contato" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link nav-contact-mobile${isActive ? ' is-active' : ''}`}>Contato</NavLink>
        </nav>
        <div className="nav-actions">
          <Link to="/contato" className="nav-contact">Vamos conversar <span aria-hidden="true">↗</span></Link>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(open => !open)} aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
