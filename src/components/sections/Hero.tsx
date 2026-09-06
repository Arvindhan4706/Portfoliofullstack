"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock, Search, Code2, Cpu, LayoutTemplate, Sparkles, Layers, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Full-Stack Web Developer",
  "Cinematic Web Designer",
  "3D Web Experience Builder",
  "React & Next.js Engineer",
  "Digital Product Creator",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden">

      {/* ── Cinematic background layers ── */}
      {/* Deep radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.12),transparent)] -z-10" />
      
      {/* Corner glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-zinc-900/5 dark:bg-zinc-100/3 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">

        {/* ── Two-column layout on large screens ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="max-w-2xl">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
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

            {/* Role cycling text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="h-20 sm:h-24 md:h-28 flex items-center mb-4"
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={roleIndex}
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                >
                  {roles[roleIndex]}
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            {/* Main headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-4 leading-snug"
            >
              I build websites and web apps that help{" "}
              <span className="text-emerald-500">businesses stand out.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              From cinematic landing pages to complex full-stack applications — I
              craft premium digital experiences designed around your goals and
              your audience.
            </motion.p>

            {/* Capability pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {[
                { icon: Layers, label: "Full-Stack Apps" },
                { icon: Sparkles, label: "Cinematic Design" },
                { icon: Zap, label: "3D Web Experiences" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-default"
                >
                  <Icon size={11} />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
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

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-12 flex items-center gap-8 pt-8 border-t border-border/60"
            >
              {[
                { value: "6+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "3+", label: "Years Building" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-foreground">{value}</span>
                  <span className="text-xs text-muted-foreground mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Visual card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex relative h-[580px] items-center justify-center"
          >
            {/* Glow behind cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl" />
            </div>

            {/* Background card — code editor */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-72 bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 text-[10px] text-zinc-500 font-mono">portfolio.tsx</span>
              </div>
              <div className="font-mono text-[11px] space-y-1.5 leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-blue-300">Hero</span> <span className="text-zinc-400">= () =&gt;</span> <span className="text-zinc-400">{"{"}</span></p>
                <p className="pl-3"><span className="text-zinc-400">return (</span></p>
                <p className="pl-6"><span className="text-pink-400">&lt;section&gt;</span></p>
                <p className="pl-9"><span className="text-emerald-400">&lt;Heading /&gt;</span></p>
                <p className="pl-9"><span className="text-emerald-400">&lt;AnimatedRole /&gt;</span></p>
                <p className="pl-9"><span className="text-blue-400">&lt;CTAButton&gt;</span></p>
                <p className="pl-12 text-zinc-300">Start a Project</p>
                <p className="pl-9"><span className="text-blue-400">&lt;/CTAButton&gt;</span></p>
                <p className="pl-6"><span className="text-pink-400">&lt;/section&gt;</span></p>
                <p className="pl-3"><span className="text-zinc-400">)</span></p>
                <p><span className="text-zinc-400">{"}"}</span></p>
              </div>
              <div className="mt-3 h-px w-2/3 bg-emerald-500/30 rounded" />
            </motion.div>

            {/* Middle card — profile + status */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-0 -translate-y-1/2 w-64 bg-background border border-border rounded-2xl p-5 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden relative ring-2 ring-emerald-500/30">
                  <Image src="/arvindhan.png" alt="Arvindhan" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Arvindhan SM</p>
                  <p className="text-[11px] text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Full-Stack Apps", pct: 92 },
                  { label: "UI/UX Design", pct: 85 },
                  { label: "3D & Animation", pct: 78 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                      <span>{label}</span><span>{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 1, delay: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Front card — browser mockup */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 right-0 w-72 bg-background border border-border rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="bg-muted px-3 py-2 flex items-center justify-between border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="bg-background border border-border rounded px-2 py-0.5 flex items-center gap-1.5 text-[9px] text-muted-foreground">
                  <Lock size={7} className="text-emerald-500" />
                  <span className="text-foreground font-medium">arvindhansm.com</span>
                </div>
                <Search size={10} className="text-muted-foreground" />
              </div>
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950">
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[
                    { label: "Projects", value: "6+" },
                    { label: "Clients", value: "100%" },
                    { label: "Years", value: "3+" },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-background border border-border rounded-lg p-2 text-center">
                      <p className="text-sm font-bold text-foreground">{value}</p>
                      <p className="text-[8px] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-16 px-1">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-muted rounded-t relative overflow-hidden" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-0 left-0 right-0 bg-emerald-500/70 rounded-t" style={{ height: `${h * 0.45}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Full-width browser mockup (visible on small/md, hidden on lg) ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 lg:hidden"
        >
          <div className="rounded-xl overflow-hidden border border-border bg-background shadow-2xl">
            <div className="bg-muted px-4 py-3 flex items-center justify-between border-b border-border">
              <div className="flex gap-1.5 w-1/4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="bg-background border border-border rounded-md px-3 py-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Lock size={10} className="text-emerald-500" />
                <span className="text-foreground font-medium">arvindhansm.com</span>
              </div>
              <Search size={12} className="text-muted-foreground" />
            </div>
            <div className="aspect-[16/7] bg-zinc-50 dark:bg-zinc-950 p-4 relative overflow-hidden flex gap-4">
              <div className="hidden sm:flex flex-col w-40 shrink-0 bg-background border border-border rounded-xl p-3 gap-3 shadow-sm">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <div className="w-7 h-7 rounded-full overflow-hidden relative">
                    <Image src="/arvindhan.png" alt="Arvindhan" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-foreground">Arvindhan</p>
                    <p className="text-[7px] text-muted-foreground">Developer</p>
                  </div>
                </div>
                {[{ icon: LayoutTemplate, label: "Dashboard" }, { icon: Code2, label: "Projects" }, { icon: Cpu, label: "Deploy" }].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 p-1.5 rounded-lg text-[9px] ${i === 0 ? "bg-foreground text-background" : "text-muted-foreground"}`}>
                    <item.icon size={10} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-3">
                  {[["6+", "Projects"], ["100%", "Satisfied"], ["3+", "Years"]].map(([v, l], i) => (
                    <div key={i} className="bg-background border border-border rounded-xl p-3 shadow-sm">
                      <p className="text-sm font-bold">{v}</p>
                      <p className="text-[8px] text-muted-foreground">{l}</p>
                      <span className="text-[8px] text-emerald-500">↑ Pro</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-background border border-border rounded-xl p-3 shadow-sm flex flex-col">
                  <div className="h-2 w-1/3 bg-muted rounded mb-3" />
                  <div className="flex-1 flex items-end gap-1.5 px-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-muted rounded-t" style={{ height: `${h}%` }}>
                        <div className="w-full bg-emerald-500/75 rounded-t" style={{ height: `${h * 0.4}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
