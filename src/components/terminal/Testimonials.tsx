import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "Matan has the perfect blend of technical capabilities, business understanding and soft skills required to communicate and manage large scale projects across an organization.",
    author: "Or",
    role: "Chief Revenue Officer",
  },
  {
    quote: "A rare product leader who actually understands the technical depth. Matan bridges the gap between engineering and business like no one else I've worked with.",
    author: "Tech Lead",
    role: "Engineering",
  },
  {
    quote: "Matan's hands-on approach and builder mentality sets him apart. He doesn't just manage products—he builds them.",
    author: "VP Product",
    role: "Previous Company",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary text-sm">04.</span>
            <h2 className="text-xl font-bold">reviews.json</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Testimonial display */}
          <div className="bg-card border border-border p-8 relative">
            {/* JSON-style formatting */}
            <div className="text-muted-foreground/50 text-xs mb-4 font-mono">
              {'{'} "testimonials": [
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 border-l-2 border-primary"
            >
              <p className="text-foreground text-base italic mb-6">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  {testimonials[activeIndex].author[0]}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="text-muted-foreground/50 text-xs mt-4 font-mono">
              {']'}
              {'}'}
            </div>

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === activeIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
