export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge?: string;
  approach?: string;
  features: string[];
  technologies: string[];
  image?: string;
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "youthfest-2026",
    title: "YouthFest 2026",
    category: "Event / Festival Website",
    description: "A digital experience for Yuvenza's YouthFest 2026, designed to present the festival, events, activities and participation experience through a modern interactive web interface.",
    features: [
      "Event presentation",
      "Event information",
      "Registration-oriented experience",
      "Responsive design",
      "Interactive UI",
      "Festival branding",
      "Digital event experience",
      "Mobile-friendly experience"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/youthfest.png",
    liveUrl: "https://youthfest-2026.vercel.app/"
  },
  {
    id: "voyage",
    title: "Voyage \u2014 Luxury Travel Platform",
    category: "AI / Travel / Full-Stack Web Application",
    description: "An AI-powered travel platform designed around personalized travel discovery, itinerary generation, flight search, hotel discovery and intelligent travel recommendations.",
    features: [
      "AI travel recommendations",
      "Curated trip planner",
      "Personalized itinerary generation",
      "Flight search experience",
      "Hotel discovery",
      "Holiday package experience",
      "Destination exploration",
      "Dynamic travel data concepts",
      "AI-powered travel experience",
      "Machine learning integration",
      "MLOps-oriented architecture"
    ],
    technologies: ["Next.js", "React", "Python", "MLflow", "DVC", "Tailwind CSS"],
    image: "/projects/voyage.png",
    liveUrl: "https://voyage-liart-six.vercel.app/en"
  },
  {
    id: "cit-portal",
    title: "CIT Portal",
    category: "Institutional Web Platform",
    description: "A modern web portal project designed around the digital experience of an educational institution.",
    features: [
      "Modern frontend architecture",
      "Responsive interface",
      "Structured information presentation",
      "Component-based development",
      "Institutional web experience",
      "Navigation and content organization"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/cit-portal.png",
    liveUrl: "https://cit-portal-xi.vercel.app/"
  },
  {
    id: "tamilnadu-smartcare",
    title: "Tamil Nadu SmartCare",
    category: "Healthcare / Government Digital Platform",
    description: "A digital hospital-management and patient-flow concept designed for Tamil Nadu government hospitals, focusing on improving the digital experience around hospital operations and patient services.",
    features: [
      "Digital queue management",
      "Token-based patient flow",
      "Hospital information",
      "Role-based experiences",
      "Real-time queue updates",
      "API-driven architecture",
      "Database integration",
      "Healthcare-oriented workflows",
      "Responsive interface"
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/tamilnadu-smartcare.png",
    liveUrl: "https://tamilnadu-smartcare.vercel.app/"
  },
  {
    id: "sterling-industrial",
    title: "Sterling Industrial Solutions",
    category: "Corporate / Industrial Website",
    description: "A professional corporate website for an industrial engineering and fabrication company, presenting its services, industries, engineering capabilities and featured projects through a structured business-focused experience.",
    features: [
      "Company overview",
      "Industrial services",
      "Structural fabrication",
      "Equipment erection",
      "Electrical & automation",
      "Medical infrastructure",
      "Industries served",
      "Engineering process",
      "Featured projects",
      "Project filtering",
      "Contact / quote CTA"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/sterling-industrial.png",
    liveUrl: "https://company-two-virid.vercel.app/"
  },
  {
    id: "snap-booth",
    title: "Snap Booth",
    category: "Interactive Web Application",
    description: "An interactive web experience focused on a digital photo-booth style experience.",
    features: [
      "Interactive UI",
      "Media-oriented experience",
      "Responsive frontend development",
      "User interaction",
      "Modern component-based architecture"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/snap-booth.png",
    liveUrl: "https://snap-booth-eight.vercel.app/"
  }
];
