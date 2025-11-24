import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center animate-fade-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Available for Hire</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="gradient-text">AI/ML Developer</span>
          <br />
          Building Agentic AI, RAG Systems,
          <br />
          and Automation Solutions
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          I help startups and enterprises create intelligent AI agents, automate workflows, 
          and deploy scalable LLM-powered systems.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
            Hire Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-2">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
