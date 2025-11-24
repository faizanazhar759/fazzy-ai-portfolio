const About = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1 w-20 gradient-primary mx-auto rounded-full glow-primary" />
        </div>
        
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I'm <span className="font-semibold text-foreground gradient-text">Fazzy</span>, an AI/ML Developer with over 2 years of experience 
            building intelligent systems that solve real-world problems. I specialize in designing and deploying 
            <span className="font-semibold text-foreground"> Agentic AI systems</span>, 
            <span className="font-semibold text-foreground"> RAG pipelines</span>, and 
            <span className="font-semibold text-foreground"> LLM-powered applications</span> that help businesses automate workflows 
            and unlock the potential of artificial intelligence.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            From custom chatbots and knowledge systems to cloud-based AI deployments on AWS and GCP, 
            I bring cutting-edge AI research into production-ready solutions. Whether you're a startup 
            looking to integrate AI or an enterprise scaling intelligent automation, I deliver results that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
