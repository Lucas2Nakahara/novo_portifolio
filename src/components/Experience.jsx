import Reveal from './Reveal.jsx'
import { experiencia, stats } from '../data/experience.js'

function Experience() {
  return (
    <section id="experiencia" className="section section--alt">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Experiência</span>
          <h2 className="section-title">Como agrego valor ao seu projeto</h2>
        </Reveal>

        <Reveal>
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat__valor">{s.valor}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="timeline">
          {experiencia.map((item, i) => (
            <Reveal key={item.cargo} delay={i * 80}>
              <article className="timeline__item">
                <div className="timeline__marker">
                  <span></span>
                </div>
                <div className="timeline__card">
                  <div className="timeline__head">
                    <div>
                      <h3>{item.cargo}</h3>
                      <span className="timeline__empresa">{item.empresa}</span>
                    </div>
                    <span className="timeline__periodo">{item.periodo}</span>
                  </div>
                  <ul className="timeline__itens">
                    {item.itens.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience