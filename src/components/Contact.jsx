import { useState } from 'react'
import Reveal from './Reveal.jsx'

const WHATS = '5544998667380'

function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const texto = `Olá, Lucas! Meu nome é ${form.nome || ''}. ${form.mensagem || ''} (Contato: ${form.email || ''})`
    window.open(`https://wa.me/${WHATS}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="contato" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Contato</span>
          <h2 className="section-title">Vamos criar algo juntos?</h2>
          <p className="section-subtitle">
            Me conte sobre o seu projeto — respondo rápido e com uma proposta clara, sem enrolação.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={80}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="nome">Seu nome</label>
                <input id="nome" name="nome" type="text" placeholder="Como posso te chamar?" value={form.nome} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="email">Seu e-mail</label>
                <input id="email" name="email" type="email" placeholder="voce@exemplo.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="mensagem">Sua mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" placeholder="Conte a ideia do seu projeto..." value={form.mensagem} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn btn--primary btn--full">
                <i className="ri-whatsapp-line"></i>
                Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={160}>
            <div className="contact-info">
              <h3>Informações de contato</h3>
              <a className="contact-item" href="mailto:nakaharalucas2@gmail.com">
                <i className="ri-mail-line"></i>
                <span>nakaharalucas2@gmail.com</span>
              </a>
              <a className="contact-item" href="https://wa.me/5544998667380" target="_blank" rel="noreferrer">
                <i className="ri-whatsapp-line"></i>
                <span>(44) 99866-7380</span>
              </a>
              <a className="contact-item" href="https://www.linkedin.com/in/lucas-nakahara-395b0624b/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-fill"></i>
                <span>Lucas Nakahara</span>
              </a>
              <div className="contact-item">
                <i className="ri-map-pin-line"></i>
                <span>Maringá / PR</span>
              </div>

              <div className="contact-note">
                <span className="dot"></span>
                Atendendo de perto ou a distância em todo o Brasil.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact