"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [budgetValue, setBudgetValue] = useState("");
  const [customBudget, setCustomBudget] = useState(false);

  const budgetPresets = [
    { label: "Under ₹25,000", value: "under_25k" },
    { label: "₹25,000 – ₹75,000", value: "25k_75k" },
    { label: "₹75,000 – ₹1,50,000", value: "75k_150k" },
    { label: "₹1,50,000 – ₹5,00,000", value: "150k_500k" },
    { label: "₹5,00,000+", value: "5l_plus" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      website: formData.get("website"),
      description: formData.get("description"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      setFormState("success");
    } catch (error) {
      console.error(error);
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let&apos;s Talk About Your Project</h2>
            <p className="text-lg text-muted-foreground text-balance mb-12">
              Every project is different. Share what you&apos;re looking to build and I&apos;ll help you determine the right approach and scope.
            </p>
            
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center sm:justify-start gap-3 bg-muted text-foreground px-6 py-4 rounded-xl border border-border hover:border-foreground/30 transition-colors w-full"
              >
                <Mail size={20} />
                <span className="font-medium">Email Me</span>
              </a>
              <a 
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-6 py-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-colors w-full"
              >
                <MessageCircle size={20} />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Enquiry Sent Successfully</h3>
                  <p className="text-muted-foreground max-w-sm text-balance">
                    Thank you for reaching out. I&apos;ve received your project details and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-sm font-medium hover:text-muted-foreground transition-colors"
                  >
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-foreground">Business / Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        required 
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                      <select 
                        id="projectType" 
                        name="projectType" 
                        required 
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="business_website">Business Website</option>
                        <option value="web_application">Web Application</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget Range (₹ INR)</label>
                      <input type="hidden" name="budget" value={budgetValue} required />
                      
                      {/* Preset option chips */}
                      {!customBudget && (
                        <div className="flex flex-wrap gap-2">
                          {budgetPresets.map((preset) => (
                            <button
                              key={preset.value}
                              type="button"
                              onClick={() => setBudgetValue(preset.value)}
                              className={`text-xs px-3 py-2 rounded-lg border transition-all font-medium ${
                                budgetValue === preset.value
                                  ? "bg-foreground text-background border-foreground"
                                  : "bg-muted border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
                              }`}
                            >
                              {preset.label}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => { setCustomBudget(true); setBudgetValue(""); }}
                            className="text-xs px-3 py-2 rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all font-medium"
                          >
                            ✏️ Enter Custom
                          </button>
                        </div>
                      )}

                      {/* Custom text input */}
                      {customBudget && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-muted-foreground">₹</span>
                          <input
                            type="text"
                            id="budget"
                            placeholder="e.g. 60,000 or 2,00,000"
                            value={budgetValue.startsWith("custom:") ? budgetValue.slice(7) : budgetValue}
                            onChange={(e) => setBudgetValue(`custom:${e.target.value}`)}
                            className="flex-1 bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                          />
                          <button
                            type="button"
                            onClick={() => { setCustomBudget(false); setBudgetValue(""); }}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
                          >
                            ← Presets
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="text-sm font-medium text-foreground">Timeline</label>
                      <select 
                        id="timeline" 
                        name="timeline" 
                        required 
                        className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow appearance-none"
                      >
                        <option value="">Select an option</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1_month">Within 1 month</option>
                        <option value="1_3_months">1-3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium text-foreground">Existing Website (Optional)</label>
                    <input 
                      type="url" 
                      id="website" 
                      name="website" 
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="https://"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-foreground">Project Description</label>
                    <textarea 
                      id="description" 
                      name="description" 
                      required 
                      rows={4}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow resize-none"
                      placeholder="Tell me about your goals, features you need, and any other relevant details."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === "loading"}
                    className="w-full bg-foreground text-background py-4 rounded-xl font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Project Enquiry
                      </>
                    )}
                  </button>
                  
                  {formState === "error" && (
                    <p className="text-red-500 text-sm text-center">There was an error sending your enquiry. Please try again or email directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
