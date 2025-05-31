'use client'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import ProjectCard from '@/components/projects/ProjectCard'
import { useScrollToTop } from '@/app/hooks/useScrollToTop'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  websiteUrl?: string
  isPrivate?: boolean
}

interface ProjectCategory {
  category: string
  projects: Project[]
}

const projects: ProjectCategory[] = [
  {
    category: "Product & GTM Tools",
    projects: [
      {
        title: "Canny-Hubspot Integration",
        description: "Integrated feature requests from Canny to Hubspot, improving collaboration between GTM teams and Product.",
        technologies: ["Python", "Github Actions", "API"],
        isPrivate: true
      },
      {
        title: "AI Feature Request Triage",
        description: "AI-powered system to automatically triage feature requests.",
        technologies: ["Python", "Selenium", "OpenAI SDK", "Slack API"],
        isPrivate: true
      }
    ]
  },
  {
    category: "Process Automation",
    projects: [
      {
        title: "Yad2 Apartment Scraper",
        description: "A tool to automate apartment hunting, reducing daily search time from 40 minutes to 2 minutes.",
        technologies: ["Python", "Selenium", "SQLite", "CLI"],
        githubUrl: "https://github.com/Matanga1-2/yad2-apartment-scraper"
      },
      {
        title: "TFS Automator",
        description: "My first team productivity tool that automated mundane weekly tasks in TFS.",
        technologies: ["Python", "TFS API", "CLI"],
        githubUrl: "https://github.com/Matanga1-2/TFS-Automator"
      },
      {
        title: "PDF Gmail Processor",
        description: "Built a tool to automate handling of password-protected PDFs",
        technologies: ["Python", "Gmail API", "GDrive API"],
        githubUrl: "https://github.com/Matanga1-2/pdf-gmail-processor"
      }
    ]
  },
  {
    category: "Innovation Projects",
    projects: [
      {
        title: "EvalKit",
        description: "A Google Sheets™ add-on for testing and evaluations of AI prompts.",
        technologies: ["OpenAI API", "Google Workspace"],
        websiteUrl: "https://evalkit.matangr.com/"
      },
      {
        title: "Port's MCP Server",
        description: "An MCP server exposing Port's capabilities to AI agents.",
        technologies: ["Python", "MCP", "Port API"],
        githubUrl: "https://github.com/port-experimental/port-mcp-server"
      },
      {
        title: "Simplix Chrome Extension",
        description: "Developed during a hackathon to gather user feedback from Lusha customers.",
        technologies: ["JavaScript", "Chrome", "React"],
        githubUrl: "https://github.com/Matanga1-2/simplix-extension"
      }
    ]
  }
]

export default function ProjectsPage() {
  useScrollToTop()

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden bg-navy-primary">
      <Header />
      <main className="flex-grow container mx-auto px-2 sm:px-3 md:px-4 pt-14 sm:pt-18 md:pt-24 pb-10 sm:pb-14 md:pb-20">
        <div className="w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto space-y-8 sm:space-y-10 md:space-y-16">
          <section className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 md:mb-16">
              Building tools and solutions that bridge the gap between business needs and technical innovation
            </p>
          </section>

          {projects.map((category, index) => (
            <section key={index} className="bg-white/5 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 backdrop-blur-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-green-400">{category.category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                {category.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                    <div className="absolute inset-0 z-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-green-900/70"></div>
                    </div>
                    <ProjectCard
                      key={projectIndex}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      githubUrl={project.githubUrl}
                      isPrivate={project.isPrivate}
                      websiteUrl={project.websiteUrl}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
} 