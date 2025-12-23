import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
import { ArrowLeft } from "lucide-react";

const TheLotter = () => {
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
                <span className="text-primary">~</span>/work/thelotter
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
                  cat <span className="text-primary">lottery-platform</span>.md
                </h1>
              </div>
              <p className="text-muted-foreground text-lg ml-6">
                Leading Platform Innovation By Redesigning Critical Systems
              </p>
              <div className="flex flex-wrap gap-2 mt-4 ml-6">
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Oct 2018 - Jan 2022
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Fintech
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Payments
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  E-commerce
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
                    As the Product Manager for theLotter (Online Lottery Platform), I identified critical gaps in our finance service and content management systems that limited our integration capabilities and international expansion.
                  </p>
                  <p>
                    I led a comprehensive redesign of these systems to achieve scalability, efficiency, and support for new features.
                  </p>
                </div>
              </motion.section>

              {/* My Role */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">My Role</h2>
                </div>

                {/* Finance Service Overhaul */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Finance Service Overhaul
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    I led the initiative to overhaul the outdated finance service, collaborating with three cross-functional teams. My responsibilities included:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">1.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Identifying Gaps:</strong> Recognized the deficiencies in the current finance service processing $80M annually, including compliance standards and the need to upgrade our infrastructure to support PSD 2 regulation (3DS).
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">2.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Discovery Process:</strong> Discussed with other CTOs, studied the regulations, explored fintech industry solutions, and worked with lead engineers to develop a POC.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">3.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Securing Buy-In:</strong> I gained approval from stakeholders to proceed with the redesign based on the POC findings. As a result, I received the resources of two teams other than mine.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">4.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Collaborative Development:</strong> Worked closely with development, design, and QA teams to rebuild the finance area from the ground up. The new system supports over eight payment processors, seven new payment methods, and the 3DS process.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Management System */}
                <div>
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Content Management System Improvement
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For the content management system, my collaboration with the Content Manager, CTO, and system architect involved:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">1.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Identifying Gaps:</strong> I learned the domain thoroughly and explored the market's best practices and tools available.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">2.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Proof of Concept:</strong> Developed a POC that integrated third-party tools and internal solutions to streamline content management.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">3.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Improved Workflow:</strong> I created a workflow that increased the content team's efficiency and developers' velocity.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">4.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Securing Buy-In:</strong> I secured the budget and roadmap for integrating the new workflow.
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-amber shrink-0">5.</span>
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Language Expansion:</strong> Enabled support for right-to-left languages and facilitated the addition of new languages.
                      </span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Challenges */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Challenges</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">The primary challenges included:</p>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">Thinking ahead about our platform and infrastructure.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">Identifying trends and necessary upgrades.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">Aligning multiple teams.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-destructive shrink-0">!</span>
                    <span className="text-muted-foreground">Maintaining business-as-usual for our millions of users.</span>
                  </div>
                </div>
              </motion.section>

              {/* Solutions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Solutions</h2>
                </div>
                <div className="space-y-2 ml-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">+</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Finance System Redesign:</strong> Implemented a scalable architecture for the finance service that supports multiple payment processors and methods while meeting PSD 2 compliance standards.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">+</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Content Management Enhancement:</strong> Developed a CMS that supported efficient content updates and translation management, making expansion to additional languages straightforward.
                    </span>
                  </div>
                </div>
              </motion.section>

              {/* Outcomes */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Outcomes</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  These improvements enhanced the system's efficiency and drove substantial business outcomes:
                </p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">feat:</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Compliance and Revenue:</strong> Met the PSD 2 compliance deadline and secured $2M/month in revenue.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">feat:</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Enhanced Payment Options:</strong> Broadened the range of payment methods available, improving user experience and increasing transaction volumes.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">feat:</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Content Management Automation:</strong> Automated the content management process for over 1M keys in 14+ languages, saving an estimated 20% in manual work through a third-party and events-based integration.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green shrink-0">feat:</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Scalability:</strong> Established a scalable foundation for future growth and integrations.
                    </span>
                  </div>
                </div>
              </motion.section>

              {/* Personal Achievements */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Personal Achievements</h2>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Throughout three and a half years, I progressed from a BA position to a Product Manager and eventually to a Product Team Leader. I led various squads across different domains.
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Key achievements:
                </p>
                <div className="space-y-3 ml-4">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-amber shrink-0">*</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Career Progression:</strong> Promoted from L3 PM to L5 PM Manager.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-amber shrink-0">*</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Product Methodologies:</strong> Managed 6 Product Managers, and improved the quality of the PM team by integrating agile user story writing and mapping techniques.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-amber shrink-0">*</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Design System:</strong> Led a 10-person task force of designers and engineers to create the first design system with over 30 components and a style guide, reaching 85% readiness within three months.
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-amber shrink-0">*</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Billing Stability:</strong> Reached billing stability while reducing refusal rates by 8% by integrating and upgrading six payment processors and ten payment methods.
                    </span>
                  </div>
                </div>
              </motion.section>

              {/* Conclusion */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Conclusion</h2>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  My roles in this company exemplified my ability to lead complex, multi-team initiatives, improve system efficiency, and drive significant business outcomes. My involvement in redesigning the finance and content management systems addressed immediate needs and positioned the product Platform for future growth and success.
                </p>
              </motion.section>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
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

export default TheLotter;
