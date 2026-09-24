import { Link } from 'react-router-dom';
import { BIO } from '../constants';

export default function AboutView() {
  return (
    <section className="page container" aria-labelledby="about-title">
      <header className="page-heading">
        <p className="eyebrow">PERFIL / 02</p>
        <h1 id="about-title">Prazer, Diego<span className="accent-period">.</span></h1>
        <p>Gosto de transformar ideias em ferramentas que as pessoas realmente queiram usar.</p>
      </header>
      <div className="about-grid">
        <figure className="about-portrait">
          <div className="about-portrait-frame"><img src="/assets/profile.jpeg" alt="Retrato de Diego Rebuá" width="960" height="1280" /></div>
          <figcaption>Diego Rebuá · São Paulo, Brasil</figcaption>
        </figure>
        <div className="about-content">
          <p className="eyebrow">SOBRE MIM</p>
          <h2>Clareza no processo. Cuidado no resultado.</h2>
          <p>{BIO}</p>
          <p>Trabalho entre produto, interface e infraestrutura. Gosto de entender o contexto antes de escolher a tecnologia e de construir soluções que sejam fáceis de usar e de manter.</p>
          <div className="about-principles">
            <div><span>01</span><p>Interfaces com propósito e atenção aos detalhes.</p></div>
            <div><span>02</span><p>Sistemas sólidos, preparados para evoluir.</p></div>
            <div><span>03</span><p>Comunicação clara do início à entrega.</p></div>
          </div>
          <Link className="text-link" to="/trajetoria">Veja minha trajetória ↗</Link>
        </div>
      </div>
    </section>
  );
}
