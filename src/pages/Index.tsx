import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2026 Data Scientist Portfolio. Built with precision.</p>
      </footer>
    </div>
  );
};

export default Index;
