import { useState } from 'react';
import type { Project } from '../types';

type Props = {
  project: Project;
  index: number;
  compact?: boolean;
};

export default function ProjectCard({ project, index, compact = false }: Props) {
  const images = project.images?.length ? project.images : [project.image];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className={`work-card${compact ? ' work-card-compact' : ''}`}>
      <div className="work-card-meta"><span>{String(index + 1).padStart(2, '0')} / PROJETO</span><span>FULL STACK</span></div>
      <a className="work-visual" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.title} em nova aba`}>
        <img src={images[activeImage]} alt={`Captura ${activeImage + 1} de ${images.length} do projeto ${project.title}`} loading={index === 0 ? 'eager' : 'lazy'} />
        <span className="work-visual-arrow" aria-hidden="true">↗</span>
      </a>
      <div className="work-card-heading">
        <h3>{project.title}</h3>
      </div>
      {!compact && <p className="work-description">{project.description}</p>}
      <div className="work-tags">{project.tech.slice(0, compact ? 3 : undefined).map(tech => <span key={tech}>{tech}</span>)}</div>
      {!compact && images.length > 1 && (
        <div className="work-gallery" role="group" aria-label={`Imagens de ${project.title}`}>
          {images.map((image, imageIndex) => <button key={image} type="button" className={activeImage === imageIndex ? 'is-active' : ''} onClick={() => setActiveImage(imageIndex)} aria-label={`Mostrar imagem ${imageIndex + 1} de ${images.length}`} aria-pressed={activeImage === imageIndex}><img src={image} alt="" loading="lazy" /></button>)}
        </div>
      )}
    </article>
  );
}
