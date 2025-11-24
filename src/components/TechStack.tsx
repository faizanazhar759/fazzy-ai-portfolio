import { Badge } from "@/components/ui/badge";

const technologies = [
  "Python",
  "FastAPI",
  "LangChain",
  "LLaMA",
  "OpenAI",
  "Claude",
  "Pinecone",
  "Weaviate",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "n8n",
  "Zapier",
  "Make",
  "PyTorch",
  "TensorFlow",
  "Hugging Face",
  "CrewAI",
  "AutoGPT",
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with daily
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="px-4 py-2 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
