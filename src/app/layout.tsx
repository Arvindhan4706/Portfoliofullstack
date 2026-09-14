import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arvindhan SM — Freelance Full-Stack Web Developer",
  description:
    "Arvindhan SM is a freelance full-stack web developer building modern websites, web applications and digital experiences for businesses, startups and organizations.",
  metadataBase: new URL("https://arvindhansm.com"),
  openGraph: {
    title: "Arvindhan SM — Freelance Full-Stack Web Developer",
    description:
      "Premium websites and digital experiences for ambitious businesses. Next.js, React, full-stack development.",
    url: "https://arvindhansm.com",
    siteName: "Arvindhan SM",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvindhan SM — Freelance Full-Stack Web Developer",
    description:
      "Premium websites and digital experiences for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground antialiased selection:bg-zinc-800 selection:text-zinc-50 dark:selection:bg-zinc-200 dark:selection:text-zinc-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arvindhan SM",
              jobTitle: "Freelance Full-Stack Web Developer",
              url: "https://arvindhansm.com",
              email: "arvindhan476@gmail.com",
              sameAs: ["https://www.linkedin.com/in/arvindhansm"],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "Web Development",
                "Full-Stack Development",
              ],
            }),
          }}
        />
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
