'use client'

import { useScrollTo } from '../hooks/useScrollTo'

export function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <div className="relative space-y-6">
            {/* Glow Effect */}
            <div className="absolute -inset-x-24 -inset-y-12 bg-blue-500/10 rounded-[50px] blur-[64px] glow" />
            
            {/* Main Content */}
            <div className="relative space-y-4">
              <h1 className="relative text-5xl md:text-8xl font-bold tracking-tight text-glow">
                HI, I&apos;M MATAN 👋🏾
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                A Product Manager and tech enthusiast
              </h2>
              <p className="text-lg md:text-xl text-white max-w-2xl">
                I scale products with innovative and creative solutions while identifying the underlying user needs
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo('portfolio')}
                className="bg-green-500 text-black px-8 py-3 rounded-full font-medium hover:bg-green-400 transition-colors cursor-pointer hover:shadow-lg active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 animate-pulse-slow"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="border border-green-500 text-green-500 px-8 py-3 rounded-full font-medium hover:bg-green-500/10 transition-colors cursor-pointer hover:shadow-lg active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 animate-pulse-slow"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

