"use client";

export const ValueStrip = () => {
  const capabilities = [
    "FULL-STACK DEVELOPMENT",
    "MODERN UI/UX",
    "RESPONSIVE DESIGN",
    "API INTEGRATION",
    "DATABASES",
    "DEPLOYMENT",
    "AI/ML INTEGRATION",
  ];

  return (
    <section className="border-y border-border bg-muted py-6 overflow-hidden">
      <div className="flex w-full whitespace-nowrap">
        {/* We use two identical ticker content blocks to create a seamless infinite scroll effect */}
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
      
      {/* We need to add the animation in globals.css or inline. Since we use Tailwind v4, we can define it inline if needed, but a simple flex is enough. For real infinity we can just use simple CSS */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
