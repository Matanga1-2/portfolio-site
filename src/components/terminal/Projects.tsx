import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Port's MCP Server",
    description: "Production MCP server enabling AI agents to orchestrate Port's platform capabilities autonomously.",
    tech: ["Python", "MCP", "Port API"],
    github: "https://github.com/port-experimental/port-mcp-server",
    category: "AI/Agents",
  },
  {
    name: "EvalKit",
    description: "Google Sheets add-on for testing and evaluating AI prompts at scale.",
    tech: ["Google Apps Script", "OpenAI"],
    category: "AI Tools",
  },
  {
    name: "AI Feature Triage",
    description: "Automated system to categorize feature requests and route to relevant product owners.",
    tech: ["Python", "OpenAI", "Slack API"],
    category: "Automation",
  },
  {
    name: "Canny-Hubspot Integration",
    description: "Custom integration syncing customer feedback with CRM data for prioritization.",
    tech: ["Node.js", "REST APIs"],
    category: "Integrations",
  },
  {
    name: "Yad2 Apartment Scraper",
    description: "Automated apartment hunting with notifications for new listings matching criteria.",
    tech: ["Python", "Selenium"],
    github: "https://github.com/Matanga1-2/yad2-scraper",
    category: "Automation",
  },
  {
    name: "Simplix Chrome Extension",
    description: "Chrome extension for gathering and analyzing user feedback patterns.",
    tech: ["JavaScript", "React"],
    github: "https://github.com/Matanga1-2/simplix-extension",
    category: "Extensions",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">03.</span>
            <h2 className="text-xl font-bold">./projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.08 }}
                className="group bg-card border border-border p-5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-terminal-cyan bg-terminal-cyan/10 px-2 py-0.5">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 text-xs text-terminal-dim font-mono">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};
