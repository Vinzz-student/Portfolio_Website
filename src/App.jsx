import React, { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Blog from './components/sections/Blog'
import Contact from './components/sections/Contact'
import ParticleBackground from './components/animations/ParticleBackground'
import useTheme from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  useEffect(() => {
    // Update theme class on document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Layout>
      <ParticleBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  )
}

export default App