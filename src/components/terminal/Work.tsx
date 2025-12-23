import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const roles = [
  {
    company: "Port",
    period: "Jul 2024 - Present",
    detailLink: null, // Coming soon
    positions: [
      {
        role: "Director of Product",
        period: "Dec 2025 - Present",
        description: "Leading Port agentic solution and building the GTM motion around them.",
        highlights: [],
      },
      {
        role: "Senior AI Product Manager",
        period: "Jan 2025 - Dec 2025",
        description: "Leading Port's first AI offering and enabling AI capabilities across all product teams.",
        highlights: [
          "Partnering with enterprise customers to deploy AI agents in production",
          "Defining the future of AI-human collaboration interfaces",
          "Uncovering critical gaps and opportunities in SDLC automation",
        ],
      },
      {
        role: "Senior Product Manager",
        period: "Jul 2024 - Jan 2025",
        description: "Led two product teams focused on integrating organizations' tech-stack into their portal.",
        highlights: [
          "Reduced customer tickets & bugs by 30% through documentation improvements",
          "Implemented dedicated AI tools for support resolution",
          "Consolidated data to enable next-generation experiences",
        ],
      },
    ],
    tech: ["AI/ML", "Developer Portals", "Platform Engineering", "B2B SaaS"],
  },
  {
    company: "Lusha",
    period: "Apr 2022 - Jul 2024",
    detailLink: "/work/lusha",
    positions: [
      {
        role: "Senior Product Manager",
        period: "May 2023 - Jul 2024",
        description: "Platform Product Manager leading infrastructure and cross-company initiatives.",
        highlights: [
          "Boosted user satisfaction by 15% through SLA establishment",
          "Reduced maintenance costs by 30% with infrastructure upgrades",
          "Spearheaded cross-company packaging changes influencing UX",
        ],
      },
      {
        role: "Product Manager",
        period: "Apr 2022 - May 2023",
        description: "Led internal assets systems, including Billing & Credits.",
        highlights: [
          "Launched subscription billing system processing $50M annually",
          "Achieved $150K/year in operational savings",
          "Optimized sale closing process saving 20 hours/month for sales",
        ],
      },
    ],
    tech: ["B2B SaaS", "Platform", "Billing", "Infrastructure"],
  },
  {
    company: "theLotter",
    period: "Oct 2018 - Jan 2022",
    detailLink: "/work/thelotter",
    positions: [
      {
        role: "Product Team Lead",
        period: "Jun 2021 - Jan 2022",
        description: "Recruited and led a team of 6 Product Managers.",
        highlights: [
          "Implemented company-wide product methodologies",
          "Increased employee NPS by 25% with new onboarding process",
          "Led design system initiative with 30+ components",
        ],
      },
      {
        role: "Product Manager",
        period: "Oct 2018 - Jun 2021",
        description: "Owned the checkout area processing $80M annually.",
        highlights: [
          "Increased payment acceptance rate by 8%",
          "Improved visit-to-adoption conversion by 15%",
          "At peak, led 3 teams with 13 engineers and 4 designers",
        ],
      },
    ],
    tech: ["Fintech", "Payments", "E-commerce", "A/B Testing"],
  },
  {
    company: "IDF",
    period: "Aug 2011 - Oct 2018",
    detailLink: "/work/idf",
    positions: [
      {
        role: "System Analyst",
        period: "Jan 2017 - Oct 2018",
        description: "Led a 1-year project moving 200+ users to SAP cloud.",
        highlights: [
          "Managed full product lifecycle from ideation to production",
          "Improved user engagement and satisfaction by 40%",
          "Gathered requirements and created specifications",
        ],
      },
    ],
    tech: ["SAP", "HR Systems", "Process Automation"],
  },
];

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">02.</span>
            <h2 className="text-xl font-bold">Where I've Made Impact</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {roles.map((role, index) => (
                <motion.div
                  key={role.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-4 top-1.5 w-2 h-2 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

                  {/* Content */}
                  <div className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
                    {/* Company Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <h3 className="font-bold text-primary text-lg">@{role.company}</h3>
                      <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 w-fit">
                        {role.period}
                      </span>
                    </div>

                    {/* Positions within company */}
                    <div className="space-y-6">
                      {role.positions.map((position, posIndex) => (
                        <div key={posIndex} className="border-l-2 border-border pl-4">
                          {/* Position header with promoted badge */}
                          <div className="flex items-center gap-2 mb-2">
                            {posIndex < role.positions.length - 1 && (
                              <span className="text-xs text-terminal-cyan">↑ promoted</span>
                            )}
                            <h4 className="font-semibold text-foreground">{position.role}</h4>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">
                            {position.period}
                          </span>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm mt-2 mb-3">{position.description}</p>

                          {/* Highlights as commit messages */}
                          <div className="space-y-2">
                            {position.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs">
                                <span className="text-terminal-cyan shrink-0">feat:</span>
                                <span className="text-muted-foreground">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                      {role.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Detail link */}
                    {role.detailLink && (
                      <Link
                        to={role.detailLink}
                        className="inline-flex items-center gap-2 mt-4 text-xs border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <span>git show --details</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
