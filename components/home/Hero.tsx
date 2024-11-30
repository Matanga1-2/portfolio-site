'use client'

import { useScrollTo } from '@/app/hooks/useScrollTo'

export function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden py-20">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-primary via-blue-900/20 to-navy-primary"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-xl"></div>
        <div className="absolute -inset-x-40 -inset-y-32">
          <div className="absolute right-1/2 bottom-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Add this new div for the transition effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy-primary"></div>

      <div className="container relative z-20 mx-auto px-4 py-12">
        <div className="max-w-[70%] mx-auto">
          <div className="relative space-y-6">
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

