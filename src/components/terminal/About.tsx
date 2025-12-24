import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "domains", items: ["Platform Engineering", "B2B SaaS", "Fintech", "E-commerce"] },
  { category: "building", items: ["AI Agents", "Automations", "Product Strategy", "Agentic Workflows"] },
  { category: "practices", items: ["Ship Fast", "Elite Execution", "Active Listening", "Team Player"] },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">01.</span>
            <h2 className="text-xl font-bold">about.md</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Main content */}
            <div className="md:col-span-3 space-y-6 overflow-hidden">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-primary">#</span> I'm a product leader who builds with AI.
                  I create products and workflows that solve real engineering problems.
                  My approach is hands-on—I care about what users actually need,
                  not what sounds impressive.
                </p>
                <p>
                  <span className="text-primary">#</span> Currently Director of Product at <span className="text-foreground">Port</span>,
                  leading AI initiatives and reimagining how developers will work in the AI era.
                  We shipped one of the first AI agents and MCP servers
                  in the platform engineering space.
                </p>
                <p>
                  <span className="text-primary">#</span> My philosophy: care about real user value.
                  Cut through the noise, listen to users, and ship
                  things that actually work.
                </p>
              </div>

              {/* ASCII separator */}
              <div className="text-muted-foreground/30 text-xs overflow-hidden whitespace-nowrap">
                {'─'.repeat(60)}
              </div>

              {/* Skills as code blocks */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="font-mono text-sm break-words"
                  >
                    <span className="text-terminal-cyan">const</span>{" "}
                    <span className="text-foreground">{skill.category}</span>{" "}
                    <span className="text-primary">=</span>{" "}
                    <span className="text-muted-foreground">[</span>
                    {skill.items.map((item, i) => (
                      <span key={item}>
                        <span className="text-terminal-amber">"{item}"</span>
                        {i < skill.items.length - 1 && <span className="text-muted-foreground">, </span>}
                      </span>
                    ))}
                    <span className="text-muted-foreground">];</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Profile image area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:col-span-2 flex justify-center"
            >
              <div className="w-full max-w-[280px] sm:w-72 md:w-full md:max-w-xs mx-auto">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/images/matan_profile.jpg"
                    alt="Matan Grady"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
