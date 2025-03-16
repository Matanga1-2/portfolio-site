'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export function FeatureRoles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  })

  const leftX = useTransform(scrollYProgress, [0, 0.6], [-100, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.6], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  const roles = [
    {
      id: 1,
      title: "💻 Recruitment and HR System",
      description: "Redesigned the recruiting process, expanding it to the entire IDF.",
      link: "/roles/recruitment-hr-system"
    },
    {
      id: 2,
      title: "🎟️ Lottery Finance Platform",
      description: "Overhauled a finance platform that processes $80 million annually.",
      link: "/roles/lottery-finance-platform"
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Roles</h2>
            <p className="text-xl text-gray-400">Building Systems that Scale</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                style={{ 
                  x: index % 2 === 0 ? leftX : rightX,
                  opacity 
                }}
                className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-green-900/70"></div>
                </div>
                <div className="relative z-20 p-6 h-52 flex flex-col justify-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-gray-300 mb-4">
                      {role.description}
                    </p>
                    <Link
                      href={role.link}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

