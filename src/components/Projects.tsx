import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Multi-Agent Task Automation Platform",
    description: "Developed an autonomous AI system using LangChain and GPT-4 that handles multi-step workflows, achieving 70% reduction in manual processing time.",
    tech: ["LangChain", "GPT-4", "Python", "FastAPI"],
  },
  {
    title: "Enterprise Knowledge Retrieval System",
    description: "Implemented RAG pipeline with Pinecone vector database, processing 10,000+ daily queries with 95% accuracy for enterprise document search.",
    tech: ["Pinecone", "OpenAI", "MongoDB", "Docker"],
  },
  {
    title: "Intelligent Content Generation Workflow",
    description: "Built multi-agent system with CrewAI for automated research, content creation, and quality assurance across marketing channels.",
    tech: ["CrewAI", "Claude", "n8n", "AWS"],
  },
  {
    title: "Real-Time Quality Control System",
    description: "Deployed computer vision solution using YOLOv8 for manufacturing defect detection, achieving 98% accuracy in production environment.",
    tech: ["PyTorch", "YOLOv8", "FastAPI", "GCP"],
  },
  {
    title: "Custom LLM Fine-Tuning Pipeline",
    description: "Created end-to-end pipeline for domain-specific LLM fine-tuning, improving model performance by 40% for specialized industry use cases.",
    tech: ["LLaMA", "Hugging Face", "PyTorch", "AWS"],
  },
  {
    title: "AI-Powered Process Automation Suite",
    description: "Integrated multiple AI models with n8n workflows to automate complex business processes, reducing operational overhead by 60%.",
    tech: ["n8n", "OpenAI", "Make.com", "Docker"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full glow-primary" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production AI systems delivering measurable business impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-500 group"
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-background/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10 hover:text-primary transition-all"
                >
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
