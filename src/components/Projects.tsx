import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI Agent Task Automation System",
    description: "Built an autonomous AI agent using LangChain and GPT-4 that plans and executes multi-step tasks, reducing manual work by 70%.",
    tech: ["LangChain", "GPT-4", "Python", "FastAPI"],
  },
  {
    title: "Enterprise RAG Knowledge Base",
    description: "Developed a RAG pipeline with Pinecone for document retrieval, serving 10,000+ queries daily with 95% accuracy.",
    tech: ["Pinecone", "OpenAI", "MongoDB", "Docker"],
  },
  {
    title: "Multi-Agent Workflow System",
    description: "Designed a multi-agent AI system with CrewAI for automated content creation, research, and quality assurance.",
    tech: ["CrewAI", "Claude", "n8n", "AWS"],
  },
  {
    title: "Computer Vision Quality Control",
    description: "Implemented a real-time defect detection system using YOLOv8, achieving 98% accuracy in manufacturing quality control.",
    tech: ["PyTorch", "YOLOv8", "FastAPI", "GCP"],
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions that deliver measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
