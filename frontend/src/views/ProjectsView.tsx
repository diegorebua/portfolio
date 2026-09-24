import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

export default function ProjectsView() {
  return (
    <section className="page container" aria-labelledby="projects-title">
      <header className="page-heading">
        <p className="eyebrow">PORTFÓLIO / 01</p>
        <h1 id="projects-title">Projetos<span className="accent-period">.</span></h1>
        <p>Uma seleção de produtos que construí, do conceito à entrega. Interfaces claras, sistemas confiáveis e atenção ao que importa.</p>
      </header>
      <div className="project-list">{PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    </section>
  );
}
