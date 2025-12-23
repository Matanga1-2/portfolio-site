import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/matangrady",
    href: "https://linkedin.com/in/matangrady",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "matngrady@gmail.com",
    href: "mailto:matngrady@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "Twitter/X",
    handle: "@GradyMatan",
    href: "https://twitter.com/GradyMatan",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-primary text-sm">05.</span>
            <h2 className="text-xl font-bold">connect()</h2>
          </div>

          {/* Message */}
          <div className="bg-card border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              <span className="text-terminal-cyan">/*</span>
              <br />
              <span className="text-foreground">
                Looking to chat about product, AI, or interesting problems?
              </span>
              <br />
              <span>I'm always open to connecting with fellow builders.</span>
              <br />
              <span className="text-terminal-cyan">*/</span>
            </p>

            {/* Contact methods */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group flex items-center gap-3 px-4 py-3 border border-border hover:border-primary transition-colors w-full sm:w-auto"
                >
                  <method.icon size={18} className="text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{method.label}</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      {method.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Fun terminal message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground font-mono"
          >
            <span className="text-primary">$</span> echo "Let's build something great"
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
