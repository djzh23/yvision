import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <CTA />
    </>
  )
}