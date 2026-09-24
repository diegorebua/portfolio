import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export default function HomeView() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-portrait" aria-hidden="true"><img src="/assets/profile.jpeg" alt="" fetchPriority="high" /></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow hero-intro">DESENVOLVEDOR FULL STACK <span aria-hidden="true">⟶</span></p>
            <div className="hero-heading">
              <h1 id="home-title" className="hero-title"><span>Diego</span><span>Rebuá</span></h1>
            </div>
            <br />
            <p className="hero-detail">Desenvolvo sites, sistemas e experiências digitais que unem funcionalidade, estética e resultado.</p>
          </div>
        </div>
      </section>

      <section className="home-projects" aria-labelledby="selected-work-title">
        <div className="container">
          <div className="project-section-index"><span>PROJETOS EM DESTAQUE</span><span aria-hidden="true" /><span>{String(PROJECTS.length).padStart(2, '0')}</span></div>
          <div className="section-heading">
            <h2 id="selected-work-title">Projetos que<br />geram resultado.</h2>
          </div>
          <div className="work-grid">{PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} compact />)}</div>
          <div className="home-projects-action"><Link className="text-link" to="/projetos">Ver todos os projetos <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="statement-section">
        <div className="container statement-grid">
          <p className="eyebrow">02 / MINHA ABORDAGEM</p>
          <div><p className="statement-text">Boa tecnologia é aquela que resolve o problema e deixa a experiência mais leve.</p><Link className="text-link" to="/trajetoria">Conheça minha trajetória ↗</Link></div>
        </div>
      </section>
    </>
  );
}
