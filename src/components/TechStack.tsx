import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stackCategories = [
  {
    title: "AI Frameworks",
    items: ["LangChain", "LlamaIndex", "LangGraph", "CrewAI", "Hugging Face Transformers", "PyTorch", "TensorFlow"],
  },
  {
    title: "LLMs & Model Providers",
    items: ["OpenAI (GPT-4o, GPT-4, GPT-3.5)", "Anthropic Claude", "Meta LLaMA", "Google Gemini", "Groq"],
  },
  {
    title: "Backend & APIs",
    items: ["Python", "FastAPI", "Node.js", "WebSockets", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases & Vector Stores",
    items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "ChromaDB", "FAISS"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS (Lambda, ECS, S3, EC2)", "GCP (Cloud Run, Firestore)", "Docker", "Kubernetes", "Vercel", "Railway"],
  },
  {
    title: "DevOps & Tooling",
    items: ["GitHub", "GitHub Actions", "CI/CD Pipelines", "Terraform", "Linux", "Nginx"],
  },
  {
    title: "Automation & Workflows",
    items: ["n8n", "Make.com", "Zapier", "Airtable APIs"],
  },
  {
    title: "Speech, Vision & Multimodal",
    items: ["Whisper", "Speech-to-Text APIs", "OCR Tools", "DALL·E / Image Generation"],
  },
  {
    title: "Data Engineering & Analytics",
    items: ["Pandas", "NumPy", "Apache Spark", "Supabase", "Airflow (basic usage)"],
  },
];

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tech Stack</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full glow-primary" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The tools, frameworks, and platforms I rely on to ship senior-level AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stackCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-card/60 backdrop-blur-sm border-2 border-border hover:border-primary/40 transition-colors duration-500"
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="bg-background/60 border border-border px-4 py-2 text-sm font-medium"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
