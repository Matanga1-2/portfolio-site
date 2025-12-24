import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "about", href: "#about", isAnchor: true },
  { label: "work", href: "#work", isAnchor: true },
  { label: "projects", href: "#projects", isAnchor: true },
  { label: "content", href: "/content", isAnchor: false },
];

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (!isHomePage) {
      setIsMenuOpen(false);
      return;
    }
    e.preventDefault();
    setIsMenuOpen(false);
    // Small delay to let menu close animation complete before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-primary font-bold text-lg hover:opacity-80 transition-opacity">
          ~/matan.grady
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            item.isAnchor ? (
              <motion.a
                key={item.label}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={(e) => handleAnchorClick(e, item.href)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                <span className="text-primary">.</span>{item.label}
              </motion.a>
            ) : (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
                >
                  <span className="text-primary">.</span>{item.label}
                </Link>
              </motion.div>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className="text-xs border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            --connect
          </a>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.label}
                    href={isHomePage ? item.href : `/${item.href}`}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <span className="text-primary">.</span>{item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <span className="text-primary">.</span>{item.label}
                  </Link>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
