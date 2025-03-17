import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  isPrivate?: boolean
}

export default function ProjectCard({ title, description, technologies, githubUrl, isPrivate }: ProjectCardProps) {
  return (
    <div className="relative z-20 p-3 sm:p-4 md:p-6 h-auto min-h-[12rem] sm:min-h-[13rem] md:min-h-[15rem] grid grid-rows-[auto_minmax(2rem,_1fr)_auto] gap-2 sm:gap-3">
      {/* Header section with title and GitHub icon */}
      <div className="flex justify-between items-center h-auto min-h-[1.75rem]">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white truncate pr-2">{title}</h3>
        {githubUrl && !isPrivate && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <FaGithub size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </a>
        )}
      </div>

      {/* Description section */}
      <p className="text-xs sm:text-sm md:text-base text-gray-300 line-clamp-3">{description}</p>

      {/* Technologies section */}
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-1">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-500/20 text-blue-300 px-1 py-0.5 sm:px-1.5 sm:py-0.5 md:px-2 md:py-1 rounded text-[10px] sm:text-xs md:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
} 