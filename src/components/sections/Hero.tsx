"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const Hero = () => {
  const prefersReduced = usePrefersReducedMotion();

  const fadeUp = {
    initial: prefersReduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          {/* Status pill */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-muted/60 border border-border rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              Available for new projects
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Premium websites & digital experiences{" "}
            <span className="text-emerald-500">for ambitious businesses.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            I design and develop high-performance websites, web applications, and
            AI-powered products using modern technology — from concept to deployment.
          </motion.p>

          {/* Capability pills */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {["Next.js & React", "Full-Stack Apps", "AI Integration", "Production Deployment"].map(
              (label) => (
                <span
                  key={label}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 text-muted-foreground"
                >
                  {label}
                </span>
              )
            )}
          </motion.div>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-foreground/85 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-lg shadow-foreground/10"
            >
              Start a Project
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-muted transition-all border border-border w-full sm:w-auto"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
