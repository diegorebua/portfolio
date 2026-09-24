import { EXPERIENCES } from '../constants';

export default function ExperienceView() {
  return (
    <section className="page container" aria-labelledby="experience-title">
      <header className="page-heading">
        <p className="eyebrow">PERCURSO / 04</p>
        <h1 id="experience-title">Trajetória<span className="accent-period">.</span></h1>
        <p>Aprendizado contínuo, responsabilidade crescente e trabalho próximo de pessoas e produtos reais.</p>
      </header>
      <div className="experience-list">
        {EXPERIENCES.map((experience, index) => <article className="experience-item" key={`${experience.company}-${experience.role}`}>
          <div className="experience-period"><span className="eyebrow">0{index + 1} / EXPERIÊNCIA</span><span>{experience.period}</span></div>
          <div className="experience-details"><h2>{experience.role}</h2><p className="experience-company">{experience.company}</p><ul>{experience.description.map(item => <li key={item}>{item}</li>)}</ul></div>
        </article>)}
      </div>
    </section>
  );
}
