'use client'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { Hero } from '@/components/home/Hero'
import { AboutMe } from '@/components/home/AboutMe'
import { FeatureProjects } from '@/components/home/FeatureProjects'
import { GetInTouch } from '@/components/home/GetInTouch'
import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'

export default function Home() {
  useScrollToTop()
  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header key="header" />
      <main className="flex-grow">
        <Hero key="hero" />
        <AboutMe key="about-me" />
        <section id="portfolio" key="portfolio">
          <FeatureProjects />
        </section>
        <section id="testimonials" className="py-20 relative" key="testimonials">
          <div className="container mx-auto px-4">
            <div className="max-w-[70%] mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Others Say</h2>
              <TestimonialCarousel />
            </div>
          </div>
        </section>
        <section id="contact" key="contact">
          <GetInTouch />
        </section>
      </main>
      <Footer key="footer" />
    </div>
  )
}

