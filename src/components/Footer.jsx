function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="navbar__brand">
              Lucas<em>Nakahara</em>
            </a>
            <p>
              Desenvolvedor Full Stack. Transformando ideias em experiências digitais que vendem, comunicam e escalam.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#certificados">Certificados</a></li>
              <li><a href="#projetos">Projetos</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:nakaharalucas2@gmail.com">nakaharalucas2@gmail.com</a></li>
              <li><a href="https://wa.me/5544998667380" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href="https://github.com/Lucas2Nakahara" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/lucas-nakahara-395b0624b/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Lucas Nakahara · Todos os direitos reservados.</p>
          <p className="footer__made">Feito com React &amp; muito café</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer