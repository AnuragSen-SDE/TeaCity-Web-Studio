import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Businesses from './components/Businesses'
import Packages from './components/Packages'
import Work from './components/Work'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Businesses />
        <Packages />
        <Work />
        <HowItWorks />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
