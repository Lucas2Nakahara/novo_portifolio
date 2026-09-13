import { useEffect, useState } from 'react'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#certificados', label: 'Certificados' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav id="global-nav" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={close}>
          Lucas<em>Nakahara</em>
        </a>

        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="navbar__cta-mobile">
            <a href="https://wa.me/5544998667380" target="_blank" rel="noreferrer" className="btn btn--primary btn--sm" onClick={close}>
              Orçamento
            </a>
          </li>
        </ul>

        <div className="navbar__right">
          <a href="https://wa.me/5544998667380" target="_blank" rel="noreferrer" className="btn btn--primary btn--sm navbar__cta">
            <i className="ri-whatsapp-line"></i>
            Orçamento
          </a>
          <button
            className={`navbar__toggle ${open ? 'is-active' : ''}`}
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar