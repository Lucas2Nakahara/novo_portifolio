import Reveal from './Reveal.jsx'
import { servicos } from '../data/services.js'

function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Serviços</span>
          <h2 className="section-title">Soluções sob medida para cada negócio</h2>
          <p className="section-subtitle">
            Não se trata de apenas "fazer um site" — é construir uma ferramenta que vende, comunica e escala com o seu negócio.
          </p>
        </Reveal>

        <div className="services-grid">
          {servicos.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 70}>
              <article className="service-card">
                <div className="service-card__icon">
                  <i className={s.icon}></i>
                </div>
                <div>
                  <h3 className="service-card__title">{s.titulo}</h3>
                  <span className="service-card__plataforma">{s.plataforma}</span>
                </div>
                <p className="service-card__resumo">{s.resumo}</p>
                <ul className="service-card__itens">
                  {s.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services