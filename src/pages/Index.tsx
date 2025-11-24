import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="text-sm">© 2024 Fazzy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
