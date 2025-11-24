import { Badge } from "@/components/ui/badge";

const technologies = [
  "Python",
  "FastAPI",
  "LangChain",
  "LLaMA",
  "OpenAI",
  "Claude",
  "Pinecone",
  "ChromaDB",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "n8n",
  "Make.com",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "CrewAI",
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full glow-primary" />
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with daily
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="px-5 py-2.5 text-base font-medium bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-white hover:border-primary hover:glow-primary transition-all duration-300 cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
