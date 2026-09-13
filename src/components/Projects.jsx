import Reveal from './Reveal.jsx'
import { projetos } from '../data/projects.js'

function Projects() {
  return (
    <section id="projetos" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Projetos</span>
          <h2 className="section-title">Trabalhos selecionados</h2>
          <p className="section-subtitle">
            Uma amostra de projetos que desenvolvi — cada projeto começa no papel e vai até o ar, sempre com performance, design e conversão em mente.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projetos.map((p, i) => (
            <Reveal key={p.nome} delay={(i % 2) * 80}>
              <a href={p.link} target="_blank" rel="noreferrer" className="project-card">
                <div className="project-card__img">
                  <img src={p.imagem} alt={p.nome} loading="lazy" />
                </div>
                <span className="project-card__cat">{p.categoria}</span>
                <div className="project-card__body">
                  <h3>{p.nome}</h3>
                  <p>{p.descricao}</p>
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="project-card__link">
                    Ver projeto <i className="ri-arrow-right-up-line"></i>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects