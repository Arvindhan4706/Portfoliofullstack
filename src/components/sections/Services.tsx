"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Smartphone,
  Code,
  ShoppingCart,
  Cpu,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const serviceIcons = [
  <Globe key={0} className="w-6 h-6" />,
  <Layout key={1} className="w-6 h-6" />,
  <Smartphone key={2} className="w-6 h-6" />,
  <Code key={3} className="w-6 h-6" />,
  <ShoppingCart key={4} className="w-6 h-6" />,
  <Cpu key={5} className="w-6 h-6" />,
];

export const Services = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            What I Build
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Services designed for businesses, startups and organizations that
            need professional, production-ready digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-sm hover:border-border/80 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                {serviceIcons[index % serviceIcons.length]}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {service.deliverables && (
                <ul className="space-y-1.5 mb-4">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
