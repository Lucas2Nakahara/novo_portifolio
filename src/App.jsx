import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Certificates from './components/Certificates.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    const updateOffset = () => {
      const el = document.getElementById('global-nav')
      if (el) setNavbarHeight(el.offsetHeight)
    }
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ '--nav-offset': `${navbarHeight}px` }}>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App