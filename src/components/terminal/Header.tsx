import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "about", href: "#about", isAnchor: true },
  { label: "work", href: "#work", isAnchor: true },
  { label: "projects", href: "#projects", isAnchor: true },
  { label: "content", href: "/content", isAnchor: false },
];

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (!isHomePage) {
      // If not on home page, navigate to home first
      return;
    }
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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

        <a
          href={isHomePage ? "#contact" : "/#contact"}
          className="text-xs border border-primary text-primary px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
        >
          --connect
        </a>
      </div>
    </motion.header>
  );
};
