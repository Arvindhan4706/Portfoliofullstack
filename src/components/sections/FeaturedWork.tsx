"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export const FeaturedWork = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Selected Work</h2>
          <p className="text-lg text-muted-foreground text-balance">
            A selection of websites, web applications, and digital platforms I&apos;ve designed and built.
          </p>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
