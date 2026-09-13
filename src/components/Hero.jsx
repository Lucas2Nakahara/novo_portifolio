const happyClients = ["Advocacia", "Clínica", "Pet Shops", "Restaurantes", "Lojas online", "Autopeças", "Concessionárias", "Prestadores de serviços"]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow hero__badge">
            <span className="dot"></span>
            Disponível para novos projetos
          </span>
          <h1 className="hero__title">
            Transformo <em>ideias</em> em <em>experiências</em> digitais.
          </h1>
          <p className="hero__subtitle">
            Sou o <strong>Lucas Nakahara</strong>, desenvolvedor full stack. Crio e-commerces
            (Nuvemshop &amp; Shopify), landing pages, sites institucionais e sistemas com
            banco de dados — tudo sob medida e pensado para converter.
          </p>
          <div className="hero__actions">
            <a href="https://wa.me/5544998667380" target="_blank" rel="noreferrer" className="btn btn--primary">
              <i className="ri-arrow-right-up-line"></i>
              Iniciar um projeto
            </a>
            <a href="#projetos" className="btn btn--ghost">
              Ver projetos
            </a>
          </div>
          <div className="hero__socials">
            <a href="https://github.com/Lucas2Nakahara" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/lucas-nakahara-395b0624b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://wa.me/5544998667380" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="ri-whatsapp-fill"></i>
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__photo">
            <img src="/imagens/image copy.png" alt="Lucas Nakahara" />
          </div>
        </div>
      </div>

      <div className="hero__strip">
        <div className="container">
          <span className="hero__strip-label">Já atendi negócios de diversos nichos</span>
          <div className="hero__strip-items">
            {happyClients.map((item) => (
              <span key={item} className="hero__chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero