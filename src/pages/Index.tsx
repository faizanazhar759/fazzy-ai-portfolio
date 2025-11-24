import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Fazzy. All rights reserved. Built with React & Lovable.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
