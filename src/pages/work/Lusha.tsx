import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/terminal/Header";
import { Footer } from "@/components/terminal/Footer";
import { ArrowLeft } from "lucide-react";

const Lusha = () => {
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
                <span className="text-primary">~</span>/work/lusha
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
                  cat <span className="text-primary">lusha-platform</span>.md
                </h1>
              </div>
              <p className="text-muted-foreground text-lg ml-6">
                Rebuilding Billing & Credits Infrastructure at a High-Growth B2B SaaS
              </p>
              <div className="flex flex-wrap gap-2 mt-4 ml-6">
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Apr 2022 - Jul 2024
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  B2B SaaS
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Platform
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Billing
                </span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground border border-border">
                  Infrastructure
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
                    At Lusha, I progressed from Product Manager to Senior Product Manager, owning the billing and credits infrastructure that powered the company's revenue operations.
                  </p>
                  <p>
                    I inherited one of the most painful areas of the product—a billing system with 50+ bugs backlog—and transformed it into a stable, smooth experience while enabling new pricing and growth initiatives.
                  </p>
                </div>
              </motion.section>

              {/* Role Progression */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Role Progression</h2>
                </div>

                {/* Senior PM */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Senior Product Manager
                    <span className="text-xs text-terminal-cyan ml-2">↑ promoted</span>
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">May 2023 - Jul 2024</span>
                  <p className="text-muted-foreground text-sm mt-2 mb-3">
                    Platform Product Manager leading infrastructure and cross-company initiatives.
                  </p>
                </div>

                {/* PM */}
                <div>
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Product Manager
                  </h3>
                  <span className="text-xs text-muted-foreground font-mono">Apr 2022 - May 2023</span>
                  <p className="text-muted-foreground text-sm mt-2">
                    Led internal assets systems, including Billing & Credits.
                  </p>
                </div>
              </motion.section>

              {/* Key Initiatives */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Key Initiatives</h2>
                </div>

                {/* Billing Mechanism Rebuild */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Billing Mechanism Rebuild
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Rebuilt the core billing mechanisms processing ~$70M/year in recurring revenue (wire + cards), including $2M/month in credit card transactions:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Stabilized the billing system from 50+ bugs backlog to smooth, reliable operation
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Worked closely with Support and GTM teams to address pain points
                      </span>
                    </div>
                  </div>
                </div>

                {/* Credit Management System */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Credit Management System
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Redesigned and shipped an upgraded credit management system:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Full visibility into spend for customers and internal teams
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Enabled pricing growth initiatives with flexible credit allocation
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Reduced new pricing version development from 3 weeks to 1-hour self-serve setup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Deal Provisioning Automation */}
                <div>
                  <h3 className="text-lg font-semibold text-terminal-cyan mb-3">
                    <span className="text-muted-foreground">##</span> Deal Provisioning Automation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Rebuilt the deal provision & close process with FinOps and BizOps:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Automated manual process that took several days in some cases
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        New process: few clicks instead of multi-day manual work
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="text-terminal-green shrink-0">+</span>
                      <span className="text-muted-foreground">
                        Saved equivalent of a full AE's time per month
                      </span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Impact Summary */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border border-border p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-terminal-cyan text-sm">#</span>
                  <h2 className="text-xl font-bold text-primary">Impact Summary</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/50 border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary">$70M</div>
                    <div className="text-xs text-muted-foreground">Annual Revenue Processed</div>
                  </div>
                  <div className="bg-secondary/50 border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary">3w→1h</div>
                    <div className="text-xs text-muted-foreground">Pricing Setup Time</div>
                  </div>
                  <div className="bg-secondary/50 border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground">Bugs Backlog Cleared</div>
                  </div>
                  <div className="bg-secondary/50 border border-border p-4 text-center">
                    <div className="text-2xl font-bold text-primary">1 AE</div>
                    <div className="text-xs text-muted-foreground">Monthly Time Saved</div>
                  </div>
                </div>
              </motion.section>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
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

export default Lusha;
