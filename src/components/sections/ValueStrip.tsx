"use client";

export const ValueStrip = () => {
  const capabilities = [
    "NEXT.JS & REACT",
    "FULL-STACK DEVELOPMENT",
    "MODERN UI/UX",
    "RESPONSIVE DESIGN",
    "API INTEGRATION",
    "DATABASES",
    "AI/ML INTEGRATION",
    "PRODUCTION DEPLOYMENT",
  ];

  return (
    <section className="border-y border-border bg-muted py-6 overflow-hidden">
      <div className="flex w-full whitespace-nowrap">
        <div className="animate-marquee inline-flex items-center">
          {capabilities.map((item, i) => (
            <div key={`first-${i}`} className="flex items-center">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-muted-foreground mx-4 md:mx-8">
                {item}
              </span>
              <span className="text-border mx-2">•</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee inline-flex items-center" aria-hidden="true">
          {capabilities.map((item, i) => (
            <div key={`second-${i}`} className="flex items-center">
              <span className="text-xs md:text-sm font-semibold tracking-widest text-muted-foreground mx-4 md:mx-8">
                {item}
              </span>
              <span className="text-border mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
