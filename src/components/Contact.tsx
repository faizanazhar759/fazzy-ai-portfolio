import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-3xl p-12 md:p-16 text-center hover:border-primary/50 transition-all duration-500">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something
            <br />
            <span className="gradient-text">Extraordinary Together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Let's discuss how I can help you build intelligent systems that deliver real results.
          </p>
          
          <a 
            href="https://www.upwork.com/freelancers/faizana295?mp_source=share" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              size="lg" 
              className="gradient-primary text-white px-8 py-6 text-lg glow-primary hover:scale-105 transition-all duration-300"
            >
              Hire Me on Upwork
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
