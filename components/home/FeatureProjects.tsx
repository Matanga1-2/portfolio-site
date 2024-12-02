'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export function FeatureProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const leftX = useTransform(scrollYProgress, [0, 0.5], [-100, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const projects = [
    {
      id: 1,
      title: "💻 Recruitment and HR System",
      description: "Redesigned the recruiting process, expanding it to the entire IDF.",
      link: "/projects/recruitment-hr-system"
    },
    {
      id: 2,
      title: "🎟️ Lottery Finance Platform",
      description: "Overhauled a finance platform that processes $80 million annually.",
      link: "/projects/lottery-finance-platform"
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                style={{ 
                  x: index % 2 === 0 ? leftX : rightX,
                  opacity 
                }}
                className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-green-900/70"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="120" cy="120" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                      <circle cx="120" cy="120" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                      <circle cx="120" cy="120" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                      <path d="M120 0v240M0 120h240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                      <path d="M35.15 35.15l169.7 169.7M35.15 204.85l169.7-169.7" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                </div>
                <div className="relative z-20 p-6 h-64 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href={project.link}
                    className="text-green-400 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

