import { Link } from 'react-router-dom';
import { EMAIL } from '../constants';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <p className="eyebrow">TEM ALGO EM MENTE?</p>
          <Link className="footer-title" to="/contato">Vamos criar algo<br />que faça sentido <span aria-hidden="true">↗</span></Link>
        </div>
        <a className="footer-email" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Diego Rebuá</span>
        <span>Desenvolvido com atenção aos detalhes.</span>
        <div className="footer-socials">
          <a href="https://github.com/diegorebua" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/diegorebu%C3%A1/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com/diegorebua/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        </div>
      </div>
    </footer>
  );
}
