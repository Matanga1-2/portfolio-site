import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  { prompt: "whoami", response: "matan.grady" },
  { prompt: "cat role.txt", response: "Director of Product • AI & Platform Engineering" },
  { prompt: "echo $FOCUS", response: "reimagining how developers work in the AI era" },
];

export const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < commands.length * 2 ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Terminal window */}
          <div className="bg-card border border-border rounded-sm overflow-hidden shadow-2xl">
            {/* Terminal header */}
            <div className="bg-secondary px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
                <div className="w-3 h-3 rounded-full bg-primary/80" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">~/portfolio — zsh</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm space-y-2">
              {commands.map((cmd, index) => (
                <div key={index}>
                  {visibleLines > index * 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-primary">❯</span>
                      <span className="text-foreground">{cmd.prompt}</span>
                    </motion.div>
                  )}
                  {visibleLines > index * 2 + 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-muted-foreground pl-4 mt-1"
                    >
                      {cmd.response}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {visibleLines >= commands.length * 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 mt-4"
                >
                  <span className="text-primary">❯</span>
                  <span className="cursor-blink text-foreground">_</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Tagline below terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-foreground">Product leader who builds with </span>
              <span className="text-primary">AI.</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I create products and workflows that solve real engineering problems.
              Hands-on approach, care about what users actually need.
              Shipped one of the first AI agents and MCP servers in platform engineering.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="#work"
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition-opacity"
              >
                <span>view --impact</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                ls ./projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
