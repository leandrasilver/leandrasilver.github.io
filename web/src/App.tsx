import { useEffect } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  useEffect(() => {
    const sectionTitles = document.querySelectorAll('.sectionTitle, .sectionTitle2')
    const heroHeader = document.querySelector('header#toTop')

    if (!('IntersectionObserver' in window)) {
      sectionTitles.forEach((title) => title.classList.add('is-visible'))
      if (heroHeader) {
        heroHeader.classList.add('is-animated')
      }
      return
    }

    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      {
        threshold: 0.35,
      },
    )

    sectionTitles.forEach((title) => {
      titleObserver.observe(title)
    })

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement
          if (!entry.isIntersecting) {
            target.classList.remove('is-animated')
            return
          }

          target.classList.remove('is-animated')
          void target.offsetWidth
          target.classList.add('is-animated')
        })
      },
      {
        threshold: 0.45,
      },
    )

    if (heroHeader) {
      heroObserver.observe(heroHeader)
    }

    return () => {
      titleObserver.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  return (
    <>
      <a className="skipLink" href="#about">
        Skip to main content
      </a>
      <Header />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
