export const WhyWorkWithMe = () => {
  const reasons = [
    {
      title: "Full-Stack Capability",
      description: "I can work across frontend, backend, APIs and databases rather than only designing the UI."
    },
    {
      title: "Modern Development",
      description: "I build with modern technologies such as Next.js, React and TypeScript for robust applications."
    },
    {
      title: "Business-Focused UI",
      description: "I focus on making websites clear, professional and useful to the people visiting them."
    },
    {
      title: "Custom Solutions",
      description: "I don't rely on one fixed template for every business. Each project is tailored to your needs."
    },
    {
      title: "Deployment Ready",
      description: "I can take a project from initial development all the way through production deployment."
    },
    {
      title: "Direct Communication",
      description: "Clients work directly with the developer building their project, ensuring clarity and speed."
    }
  ];

  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">From Idea to Production</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Why business owners and startups choose to work with me.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {reasons.map((reason, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                    <h3 className="text-xl font-bold tracking-tight">{reason.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-4 border-l border-border/50">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
