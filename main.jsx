import React from 'react'
import ReactDOM from 'react-dom/client'

const projetos = [
  {
    nome: "Projeto PetCare",
    descricao: "Desenvolvi uma plataforma completa de cuidados para pets, focada em proporcionar uma experiência intuitiva e profissional para donos de animais de estimação. Sistema de Agendamento integrado, Interface Responsiva e Design Moderno.",
    imagem: "imagens/pet.png",
    link: "https://teste-pets.netlify.app/",
  },
  {
    nome: "Projeto Advocacia & Consultoria",
    descricao: "Desenvolvi um site profissional para um escritório de advocacia, focado em transmitir confiança, ética e excelência jurídica. Design Elegante, Informações Claras, Call-to-Action Estratégicos e Layout Responsivo.",
    imagem: "imagens/advocacia.png",
    link: "https://advogados-exemplo.netlify.app/",
  },
  {
    nome: "Projeto Saúde & Bem-Estar",
    descricao: "Desenvolvi um site profissional para uma clínica de saúde e bem-estar, com design moderno e acolhedor. Layout Responsivo e foco na experiência do usuário.",
    imagem: "imagens/saude-bem-estar.png",
    link: "https://vital-space.netlify.app/",
  },
  {
    nome: "Projeto Coffee Shop",
    descricao: "Desenvolvi um projeto de cafeteria digital utilizando HTML, CSS e JavaScript, focado em proporcionar uma experiência intuitiva e interativa. Cardápio Dinâmico e Layout Responsivo.",
    imagem: "imagens/Screenshot_2.png",
    link: "https://lucasnakahara-loja-de-cafe.netlify.app/",
  },
  {
    nome: "Projeto Login",
    descricao: "Desenvolvi uma tela de login moderna e interativa utilizando HTML, CSS e JavaScript, focada em design clean, responsividade e experiência do usuário. Interface profissional com estilização elegante.",
    imagem: "imagens/Screenshot_1.png",
    link: "https://lucas2nakahara-tela-de-login.netlify.app/",
  },
  {
    nome: "Landing Page para Viagens",
    descricao: "Landing page moderna e interativa para agência de viagens, com design clean, responsividade e experiência do usuário otimizada para conversão.",
    imagem: "imagens/image.png",
    link: "https://ladingteste.netlify.app/",
  },
  {
    nome: "Landing Page - Orquestra Software",
    descricao: "Site institucional desenvolvido com ferramenta Lovable para apresentar software focado em pequenas empresas, MEIs e empreendedores. Conta com solicitação de apresentação via WhatsApp integrada a API dedicada.",
    imagem: "imagens/orquestra.png",
    link: "https://orquestra-site.netlify.app/",
  },
  {
    nome: "Core Digital - Soluções em TI",
    descricao: "Landing page para empresa fictícia de soluções integradas de Tecnologia e Marketing. Destaque para serviços, produtos e desenvolvimento de software sob medida.",
    imagem: "imagens/empresa_fake.png",
    link: "https://core-digital.netlify.app/",
  },
]

function Portifolio() {
  return (
    <>
      <h2 className="header">Meus Projetos</h2>
      <div className="projects-container">
        {projetos.map((projeto, index) => (
          <div key={index} className="project-card">
            <img src={projeto.imagem} alt={projeto.nome} />
            <div className="overlay">
              <h3>{projeto.nome}</h3>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} target="_blank" className="btn">Ver Projeto</a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("projetos")).render(<Portifolio />)
