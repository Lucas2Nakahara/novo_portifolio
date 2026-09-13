import Reveal from './Reveal.jsx'
import { certificados } from '../data/certificates.js'

function Certificates() {
  return (
    <section id="certificados" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Certificados & Licenças</span>
          <h2 className="section-title">Formação contínua</h2>
          <p className="section-subtitle">
            Estou em constante atualização. Aqui estão as certificações e licenças que compõem minha formação — novas chegam em breve.
          </p>
        </Reveal>

        <div className="certificates-grid">
          {certificados.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 80}>
              <article className={`cert-card ${c.concluido ? '' : 'cert-card--empty'}`}>
                <div className="cert-card__icon">
                  {c.concluido ? <i className="ri-award-line"></i> : <i className="ri-timer-line"></i>}
                </div>
                <h3>{c.titulo}</h3>
                <span className="cert-card__emissor">{c.emissor}</span>
                <span className="cert-card__area">{c.area}</span>
                {c.concluido && c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="cert-card__link">
                    Ver certificado <i className="ri-external-link-line"></i>
                  </a>
                ) : (
                  <span className="cert-card__link cert-card__link--disabled">Em andamento...</span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates