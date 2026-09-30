import Reveal from './Reveal.jsx'

const techGroups = [
  {
    label: 'Desenvolvimento Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    label: 'Lojas & CMS',
    items: ['Nuvemshop', 'Shopify', 'WooCommerce', 'WordPress', 'Elementor'],
  },
  {
    label: 'E-commerce & Design',
    items: ['E-commerce', 'Design'],
  },
  {
    label: 'Automação & IA',
    items: ['Automações', 'IA'],
  },
]

function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Sobre mim</span>
          <h2 className="section-title">Um pouco da minha jornada</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={80} className="about-card about-card--text">
            <h3>Minha jornada</h3>
            <p>
              Sou desenvolvedor Full Stack com foco em interfaces modernas e soluções de e-commerce.
              Trabalho com criação e manutenção de sites e aplicações web, integração de lojas
              (WooCommerce, Shopify, Nuvemshop), implementação de automações e aplicação de
              inteligência artificial para melhorar fluxos e resultados.
            </p>
            <p>
              Também atuo com testes, gestão de backlog e otimização de performance — tudo com
              foco em experiência do usuário e conversão.
            </p>
          </Reveal>

          <Reveal delay={160} className="about-card about-card--skills">
            <h3>Stack &amp; Ferramentas</h3>
            <ul className="tech-groups">
              {techGroups.map((group) => (
                <li key={group.label} className="tech-group">
                  <span className="tech-group__label">{group.label}</span>
                  <div className="tech-group__items">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About