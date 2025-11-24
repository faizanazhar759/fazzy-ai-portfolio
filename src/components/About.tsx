const About = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <div className="h-1 w-20 gradient-primary mx-auto mb-8 rounded-full" />
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Hi, I'm <span className="font-semibold text-foreground">Fazzy</span>, an AI/ML Developer with over 2 years of experience 
          building intelligent systems that solve real-world problems. I specialize in designing and deploying 
          <span className="font-semibold text-foreground"> Agentic AI systems</span>, 
          <span className="font-semibold text-foreground"> RAG pipelines</span>, and 
          <span className="font-semibold text-foreground"> LLM-powered applications</span> that help businesses automate workflows 
          and unlock the potential of artificial intelligence.
        </p>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          From custom chatbots and knowledge systems to cloud-based AI deployments on AWS and GCP, 
          I bring cutting-edge AI research into production-ready solutions. Whether you're a startup 
          looking to integrate AI or an enterprise scaling intelligent automation, I deliver results.
        </p>
      </div>
    </section>
  );
};

export default About;
