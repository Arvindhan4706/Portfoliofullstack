"use client";

import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          {/* Photo Identity Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12 max-w-md rounded-2xl relative overflow-hidden group border border-border bg-muted/20"
          >
            <Image
              src="/arvindhan.png"
              alt={`Photo of ${siteConfig.name}`}
              width={500}
              height={500}
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </motion.div>

          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              A Developer Who Builds Beyond the Interface
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground text-balance leading-relaxed">
              <p>
                I&apos;m {siteConfig.name}, a {siteConfig.role.toLowerCase()} focused on building modern websites and web applications.
              </p>
              <p>
                My work spans business websites, institutional platforms, interactive experiences, AI-powered applications and domain-specific digital solutions.
              </p>
              <p>
                I work primarily with modern web technologies including Next.js, React, TypeScript, Node.js, Python, databases and APIs, allowing me to handle projects from frontend development through backend integration and deployment.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors group"
              >
                Let&apos;s discuss your project 
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
