import { useState } from 'react';
import type { Project } from '../types';
import './ProjectStory.css';

interface Props {
  project: Project;
  index: number;
  total: number;
}

export default function ProjectStory({ project, index, total }: Props) {
  const images = project.images?.length ? project.images : [project.image];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? project.image;

  return (
    <article className="project-story" aria-label={project.title}>
      <div className="story-heading">
        <div>
          <p className="story-index mono">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            <span className="story-index-divider" aria-hidden="true" />
            PROJETO EM PRODUÇÃO
          </p>
          <h2 className="story-title font-morganite uppercase">{project.title}</h2>
        </div>
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="story-link mono" aria-label={'Visitar ' + project.title + ' em nova aba'}>VER PROJETO <span aria-hidden="true">↗</span></a>}
      </div>

      <div className="story-visual">
        <div className="story-backdrop" aria-hidden="true" />
        <img key={activeImage} src={activeImage} alt={images.length > 1 ? 'Captura ' + (activeIndex + 1) + ' de ' + images.length + ' de ' + project.title : 'Captura de tela de ' + project.title} className="story-image" loading="lazy" />
        <span className="story-image-count mono" aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
      </div>

      {images.length > 1 && (
        <div className="story-gallery" role="group" aria-label={'Capturas de ' + project.title}>
          <span className="story-gallery-label mono">CAPTURAS DO PROJETO</span>
          <div className="story-thumbnails">
            {images.map((src, imageIndex) => (
              <button key={src} type="button" className={'story-thumbnail' + (activeIndex === imageIndex ? ' is-active' : '')} aria-label={'Mostrar captura ' + (imageIndex + 1) + ' de ' + project.title} aria-pressed={activeIndex === imageIndex} onClick={() => setActiveIndex(imageIndex)}>
                <img src={src} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="story-details">
        <div><span className="story-detail-label mono">SOBRE O PROJETO</span><p className="story-description">{project.description}</p></div>
        <div><span className="story-detail-label mono">TECNOLOGIAS</span><div className="story-tech">{project.tech.map(technology => <span key={technology} className="mono">{technology}</span>)}</div></div>
      </div>
    </article>
  );
}
