import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Database, MessageSquare, Workflow, Eye, Cloud } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description: "Build autonomous AI agents that can reason, plan, and execute complex tasks using LangChain, AutoGPT, and custom frameworks.",
  },
  {
    icon: Database,
    title: "RAG Pipelines & Knowledge Systems",
    description: "Design and deploy Retrieval-Augmented Generation systems with vector databases like Pinecone, Weaviate, and Qdrant for intelligent document search.",
  },
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots & LLM Applications",
    description: "Create conversational AI powered by GPT-4, Claude, LLaMA, and other LLMs for customer support, sales, and enterprise use cases.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate business processes with n8n, Zapier, and Make. Integrate AI with existing tools to save time and reduce manual work.",
  },
  {
    icon: Eye,
    title: "Computer Vision & NLP",
    description: "Implement image recognition, object detection, sentiment analysis, and text processing using PyTorch, TensorFlow, and Hugging Face.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment & Scaling",
    description: "Deploy AI models on AWS, GCP, and Azure with Docker, Kubernetes, and serverless architectures for production-grade reliability.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Services</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
