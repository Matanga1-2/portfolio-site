'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const featuredProjects = [
  {
    title: "AI Feature Request Triage",
    description: "AI-powered process to triage feature requests and send Slack notifications to product team.",
    technologies: ["Python", "OpenAI", "Slack API"],
    isPrivate: true
  },
  {
    title: "Port's MCP Server",
    description: "MVP server exposing Port's capabilities to AI agents, built as part of an AI taskforce initiative.",
    technologies: ["Python"],
    githubUrl: "https://github.com/port-experimental/port-mcp-server"
  },
  {
    title: "Simplix Chrome Extension",
    description: "Chrome extension built during a hackathon to gather user feedback from Lusha customers.",
    technologies: ["JavaScript", "React"],
    githubUrl: "https://github.com/Matanga1-2/simplix-extension"
  }
]

export function BuilderProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"]
  })

  const leftX = useTransform(scrollYProgress, [0, 0.6], [-100, 0])
  const rightX = useTransform(scrollYProgress, [0, 0.6], [100, 0])
  const bottomY = useTransform(scrollYProgress, [0, 0.6], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  return (
    <div className="container mx-auto px-4" ref={containerRef}>
      <div className="max-w-[70%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Builder Mindset</h2>
          <p className="text-xl text-gray-400">Turning Ideas into Reality</p>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div 
                key={index}
                style={{ 
                  x: index === 0 ? leftX : rightX,
                  opacity 
                }}
                className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-green-900/70"></div>
                </div>
                <div className="relative z-20 p-6 h-52 flex flex-col justify-center">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      {project.githubUrl && !project.isPrivate && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <motion.div 
              style={{ 
                y: bottomY,
                opacity 
              }}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors w-[calc(50%-1rem)]"
            >
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-green-900/70"></div>
              </div>
              <div className="relative z-20 p-6 h-52 flex flex-col justify-center">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{featuredProjects[2].title}</h3>
                    {featuredProjects[2].githubUrl && !featuredProjects[2].isPrivate && (
                      <a 
                        href={featuredProjects[2].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={24} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{featuredProjects[2].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[2].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 text-sm font-medium text-green-400 border border-green-500 rounded-full hover:bg-green-500/10 transition-colors cursor-pointer hover:shadow-lg active:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            See All Projects →
          </Link>
        </div>
      </div>
    </div>
  )
} 