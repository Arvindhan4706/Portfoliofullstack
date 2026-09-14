"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const Process = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="process" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Process</h2>
          <p className="text-lg text-muted-foreground text-balance">
            A structured approach from the first idea to the final launch.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {siteConfig.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={prefersReduced ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"}`}>
                  <div className="bg-background border border-border p-6 rounded-xl shadow-sm relative w-full">
                    <span className="text-sm font-bold text-muted-foreground mb-2 block">{step.step}</span>
                    <h3 className="text-xl font-bold tracking-tight mb-3">{step.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center hidden md:flex">
                  <div className="w-12 h-12 rounded-full bg-background border-4 border-muted flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-foreground rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-lg font-medium tracking-tight">
            Clear communication from the first idea to the final launch.
          </p>
        </div>
      </div>
    </section>
  );
};
