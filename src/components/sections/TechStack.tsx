"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";

export const TechStack = () => {
  const categories = [
    { title: "Frontend", items: siteConfig.techStack.frontend },
    { title: "Backend", items: siteConfig.techStack.backend },
    { title: "Database", items: siteConfig.techStack.database },
    { title: "AI / ML", items: siteConfig.techStack.aiml },
    { title: "Tools & Deployment", items: siteConfig.techStack.tools },
  ];

  return (
    <section id="tech" className="py-24 border-y border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Technologies</h2>
          <p className="text-lg text-muted-foreground text-balance">
            The core tools and frameworks I use to build robust, scalable applications. Technology is the tool; business value is the result.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
