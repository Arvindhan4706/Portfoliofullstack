import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Mail, MessageCircle } from "lucide-react";

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">{siteConfig.name}</h3>
            <p className="text-muted-foreground text-sm max-w-sm">
              {siteConfig.role} specializing in modern, responsive and production-ready digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="#work" className="hover:text-foreground transition-colors w-fit">Work</Link>
              <Link href="#services" className="hover:text-foreground transition-colors w-fit">Services</Link>
              <Link href="#about" className="hover:text-foreground transition-colors w-fit">About</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a 
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
              >
                <Mail size={16} />
                Email
              </a>
              <a 
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors w-fit"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Designed and built for conversion.</p>
        </div>
      </div>
    </footer>
  );
};
