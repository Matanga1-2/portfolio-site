import Image from 'next/image'
import Link from 'next/link'

export function FeatureProjects() {
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of the project and its impact on users or business outcomes.",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Brief description of the project and its impact on users or business outcomes.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[70%] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                <Image
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <Link
                    href="#"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

