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
    <div className="relative z-20 p-6 h-60 grid grid-rows-[auto_minmax(2.5rem,_1fr)_auto] gap-3">
      {/* Header section with title and GitHub icon */}
      <div className="flex justify-between items-center h-8">
        <h3 className="text-xl font-semibold text-white truncate pr-2">{title}</h3>
        {githubUrl && !isPrivate && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <FaGithub size={24} />
          </a>
        )}
      </div>

      {/* Description section */}
      <p className="text-gray-300 line-clamp-3">{description}</p>

      {/* Technologies section */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
} 