// Terminal theme components
import { Header } from "@/components/terminal/Header";
import { Hero } from "@/components/terminal/Hero";
import { About } from "@/components/terminal/About";
import { Work } from "@/components/terminal/Work";
import { Projects } from "@/components/terminal/Projects";
import { Testimonials } from "@/components/terminal/Testimonials";
import { Contact } from "@/components/terminal/Contact";
import { Footer } from "@/components/terminal/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
