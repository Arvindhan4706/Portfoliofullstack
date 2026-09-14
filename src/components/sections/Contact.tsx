"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "validation_error"; fields: Record<string, string> }
  | { status: "server_error"; message: string }
  | { status: "network_error" };

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>({ status: "idle" });

  const getFieldError = (field: string): string | null => {
    if (formState.status === "validation_error") {
      return formState.fields[field] || null;
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading" });

    const formData = new FormData(e.currentTarget);
    const rawBudget = (formData.get("budget") as string || "").trim();
    const cleanedBudget = rawBudget.startsWith("₹") ? rawBudget : `₹${rawBudget}`;

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      projectType: formData.get("projectType") as string,
      budget: cleanedBudget,
      timeline: formData.get("timeline") as string,
      website: formData.get("website") as string,
      description: formData.get("description") as string,
      honeypot: formData.get("website_url") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.fields) {
          setFormState({ status: "validation_error", fields: result.fields });
        } else {
          setFormState({
            status: "server_error",
            message: result.error || "Something went wrong. Please try again.",
          });
        }
        return;
      }

      setFormState({ status: "success" });
    } catch {
      setFormState({ status: "network_error" });
    }
  };

  if (formState.status === "success") {
    return (
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 text-center space-y-4 max-w-lg mx-auto"
          >
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              Enquiry Sent Successfully
            </h3>
            <p className="text-muted-foreground text-balance">
              Thanks! Your project enquiry has been received. I&apos;ll get back
              to you shortly.
            </p>
            <button
              onClick={() => setFormState({ status: "idle" })}
              className="mt-8 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Send another enquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Contact Information */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Talk About Your Project
            </h2>
            <p className="text-lg text-muted-foreground text-balance mb-12">
              Every project is different. Share what you&apos;re looking to
              build and I&apos;ll help you determine the right approach and
              scope.
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
              {/* Server error banner */}
              {formState.status === "server_error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                >
                  {formState.message}
                </div>
              )}

              {/* Network error banner */}
              {formState.status === "network_error" && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                >
                  Network error. Please check your connection and try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot — hidden from humans, bots will fill it */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="website_url">Do not fill this</label>
                  <input
                    type="text"
                    name="website_url"
                    id="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-invalid={!!getFieldError("name")}
                      aria-describedby={getFieldError("name") ? "name-error" : undefined}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="John Doe"
                    />
                    {getFieldError("name") && (
                      <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">
                        {getFieldError("name")}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-invalid={!!getFieldError("email")}
                      aria-describedby={getFieldError("email") ? "email-error" : undefined}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="john@example.com"
                    />
                    {getFieldError("email") && (
                      <p id="email-error" role="alert" className="text-red-500 text-xs mt-1">
                        {getFieldError("email")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Business / Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium text-foreground"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      aria-invalid={!!getFieldError("projectType")}
                      aria-describedby={getFieldError("projectType") ? "projectType-error" : undefined}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="business_website">Business Website</option>
                      <option value="web_application">Web Application</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="other">Other</option>
                    </select>
                    {getFieldError("projectType") && (
                      <p id="projectType-error" role="alert" className="text-red-500 text-xs mt-1">
                        {getFieldError("projectType")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground">
                      Budget (₹ INR)
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-sm font-medium text-muted-foreground pointer-events-none">
                        ₹
                      </span>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        required
                        aria-invalid={!!getFieldError("budget")}
                        aria-describedby={getFieldError("budget") ? "budget-error" : undefined}
                        placeholder="e.g. 50,000 or 1,50,000"
                        className="w-full bg-muted border border-border rounded-lg pl-8 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      />
                    </div>
                    {getFieldError("budget") && (
                      <p id="budget-error" role="alert" className="text-red-500 text-xs mt-1">
                        {getFieldError("budget")}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="timeline"
                      className="text-sm font-medium text-foreground"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      aria-invalid={!!getFieldError("timeline")}
                      aria-describedby={getFieldError("timeline") ? "timeline-error" : undefined}
                      className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow appearance-none"
                    >
                      <option value="">Select an option</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1_month">Within 1 month</option>
                      <option value="1_3_months">1-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    {getFieldError("timeline") && (
                      <p id="timeline-error" role="alert" className="text-red-500 text-xs mt-1">
                        {getFieldError("timeline")}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="website"
                    className="text-sm font-medium text-foreground"
                  >
                    Existing Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                    placeholder="https://"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-foreground"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    maxLength={3000}
                    aria-invalid={!!getFieldError("description")}
                    aria-describedby={getFieldError("description") ? "description-error" : undefined}
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow resize-none"
                    placeholder="Tell me about your goals, features you need, and any other relevant details."
                  />
                  {getFieldError("description") && (
                    <p id="description-error" role="alert" className="text-red-500 text-xs mt-1">
                      {getFieldError("description")}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState.status === "loading"}
                  className="w-full bg-foreground text-background py-4 rounded-xl font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formState.status === "loading" ? (
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
