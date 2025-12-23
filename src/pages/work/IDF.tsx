import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
import { ArrowLeft } from "lucide-react";

const IDF = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-primary">~</span>/work/idf
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-sm">$</span>
                <h1 className="text-2xl md:text-3xl font-bold">
                  cat <span className="text-primary">recruitment-hr-system</span>.md
                </h1>
              </div>
              <p className="text-muted-foreground text-lg ml-6">
                Built HR tools that grew from a team hack to a 250+ user system, cutting assignment wait times from 3.5 days to 1
              </p>
              <div className="flex flex-wrap gap-2 mt-4 ml-6">
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Aug 2011 - Oct 2018
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  SAP
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  HR Systems
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Process Automation
                </span>
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-8">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Overview</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    In my journey from a dedicated department tool to a large-scale organizational solution, I developed and scaled recruitment tools that transformed the Special Courses HR processes.
                  </p>
                  <p>
                    Starting with a tool for my team to address recruitment challenges, my work was recognized at the highest levels, leading to my transition into the main information technology organization.
                  </p>
                  <p>
                    Here, I expanded the solution for hundreds of users, significantly improving efficiency and planning across the organization.
                  </p>
                </div>
              </motion.section>

              {/* Problem */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Problem</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Recruitment in the IDF Special Courses faced several challenges:
                </p>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Data Inadequacies:</strong> The primary company data source lacked essential internal data required for recruitment and assignment tasks.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Manual Processes:</strong> Recruitment and assignment involved extensive manual work, causing inefficiencies.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Predictive Shortcomings:</strong> Without proper tools, predicting and planning for future needs was difficult, affecting unit stability.
                    </span>
                  </div>
                </div>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Solution</h2>
                </div>

                {/* Internal Tool Development */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Internal Tool Development
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    I initially created an internal recruitment tool using MS Access and Excel to streamline and automate processes. This tool included:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Automated Data Integration:</strong> Built a daily updated database with views for relevant roles and tasks, outlier reports to identify gaps and top action recommendations.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Predictive Analysis:</strong> Developed an Excel-based tool to generate statistical predictions on future movements using historical trends and macros, updated monthly.
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    This tool reduced the team size required from 10 to 7, improving efficiency and planning.
                  </p>

                  {/* Process Diagram */}
                  <p className="text-muted-foreground text-sm mt-4 mb-4">
                    Below is a diagram of the process I've built:
                  </p>
                  <div className="bg-secondary/50 border border-border p-4 rounded">
                    <img
                      src="/images/hr_diagram.svg"
                      alt="Diagram of recruiting software process"
                      className="mx-auto max-w-full h-auto"
                    />
                  </div>
                </div>

                {/* Recognition And Expansion */}
                <div>
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Recognition And Expansion
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    My efforts were recognized with a Brigadier's appreciation and a promotion to Captain, leading to a role in the IT sector without prior experience.
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    In this new role, I scaled the internal tool to support over 250 users, working with 10 engineers to develop a comprehensive HR management solution.
                  </p>

                  {/* Components Sketch */}
                  <p className="text-muted-foreground text-sm mb-4">
                    Below is a rough sketch of the solution components:
                  </p>
                  <div className="bg-secondary/50 border border-border p-4 rounded">
                    <img
                      src="/images/hr_components.png"
                      alt="Sketch of solution components"
                      className="mx-auto max-w-[360px] h-auto"
                    />
                  </div>
                </div>
              </motion.section>

              {/* Results */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Results</h2>
                </div>

                {/* Efficiency and Planning Gains */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Efficiency and Planning Gains
                  </h3>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">feat:</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Team Efficiency:</strong> Reduced the number of personnel involved in recruitment processes from 10 to 7.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">feat:</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Improved Planning:</strong> Enhanced the ability to predict and plan, contributing to more stable units.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Organizational Impact */}
                <div>
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Organizational Impact
                  </h3>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">feat:</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">User Expansion:</strong> Scaled the solution to accommodate 250 users, integrating advanced features to meet broader organizational needs.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">feat:</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Time-to-Assignment:</strong> The average time soldiers spent waiting for an assignment was reduced from 3.5 days to 1 day.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">feat:</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Strategic Focus:</strong> By automating paperwork and routine tasks, HR teams could focus on actual recruiting instead of data entry.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Reflections */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Reflections</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This project showed me how scalable solutions can reshape HR management. It taught me the importance of user-centric design and iterative development.
                </p>
              </motion.section>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex justify-between items-center pt-8 border-t border-border"
              >
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>cd ..</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IDF;
