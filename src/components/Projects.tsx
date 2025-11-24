import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "AI Knowledge Base Assistant | Private RAG Chatbot with FastAPI + GPT-4",
    role: "Built a RAG-based AI assistant that answers from internal docs using LangChain, GPT-4, and FastAPI.",
    description:
      "Private AI Knowledge Base Assistant that lets teams query PDFs, Notion pages, and databases using natural conversation. LangChain orchestrates GPT-4 with FAISS/Chroma retrieval and hardened FastAPI endpoints to return context-aware answers without hallucinations.",
    tech: ["FastAPI", "LangChain", "PostgreSQL", "FAISS", "GPT-4"],
    github: "Private repo — access available upon request.",
    skills: ["Retrieval Augmented Generation", "Vector Databases", "Conversational AI", "Security Controls"],
  },
  {
    title: "AI Voice Agent | Smart Appointment Booking with GPT-4o + Whisper",
    role: "Built a voice AI that books appointments using GPT-4o, Whisper, and FastAPI.",
    description:
      "Voice-native assistant that listens, detects intent, checks availability, and confirms bookings over phone or web. FastAPI coordinates GPT-4o reasoning, Whisper transcription, and Twilio voice channels for multi-domain scheduling with real-time speech + text responses.",
    tech: ["FastAPI", "PostgreSQL", "Twilio", "GPT-4o", "Whisper"],
    github: "Private repo — access on request.",
    skills: ["Conversational AI", "Speech Recognition", "Twilio Integrations", "NLP"],
  },
  {
    title: "AI Code Analyzer & Jira Ticket Bot | FastAPI + GPT-4 + Tree-sitter",
    role: "Built a hybrid AI that analyzes real code, maps dependencies, and auto-creates Jira tickets.",
    description:
      "Automation platform that ingests GitHub repos and PRDs, parses ASTs via Tree-sitter, and uses GPT-4/Claude to produce accurate Jira tickets with dependency mapping and effort estimates. Includes dashboards for complexity metrics and CI-safe rollout.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "LangGraph", "Streamlit"],
    github: "Private repo — access available upon request.",
    skills: ["AI Agent Development", "LangChain", "Jira Automation", "Code Intelligence"],
  },
  {
    title: "AI-Powered Multimedia Workflow Automation with OpenAI & Airtable",
    role: "Designed and built an AI workflow using OpenAI, transcription, image gen, and Airtable.",
    description:
      "Modular automation that ingests audio, transcribes content, generates imagery with OpenAI models, and logs outputs to Airtable for editorial pipelines. Includes n8n orchestration, metadata schema, and guardrails for review.",
    tech: ["OpenAI", "Python", "Airtable", "n8n"],
    github: "Private workflow — access available upon request.",
    skills: ["ChatGPT API Integration", "Workflow Automation", "AI Image Generation", "Airtable"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
          <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full glow-primary" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Selected builds that highlight private AI assistants, voice automation, and developer tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card/60 backdrop-blur-sm border-2 border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-500"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base text-primary/80">{project.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-border/60" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{project.github}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
