const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-20 gradient-primary mx-auto rounded-full glow-primary" />
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500">
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="font-semibold text-foreground gradient-text">Faizan Azhar</span>, an AI Developer focused on 
              production-grade Retrieval-Augmented Generation systems, private AI assistants, and voice-first agents.
              I partner with teams to translate ambiguous requirements into measurable product milestones.
            </p>
            <p>
              My builds ship with observability, evaluation harnesses, and clear handoff documentation. From
              LangChain pipelines and FastAPI services to vector infrastructure and CI integrations, I handle
              architecture, delivery, and iteration so you can focus on outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
