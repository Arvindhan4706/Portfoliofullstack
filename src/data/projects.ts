export interface Project {
  id: string;
  title: string;
  category: string;
  status: "client" | "personal" | "academic" | "prototype";
  description: string;
  challenge: string;
  approach: string;
  result?: string;
  features: string[];
  technologies: string[];
  image?: string;
  liveUrl: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "voyage",
    title: "Voyage",
    category: "AI / Travel / Full-Stack Web Application",
    status: "personal",
    description:
      "An AI-powered travel platform for personalized travel discovery, itinerary generation, flight search, hotel discovery and intelligent travel recommendations.",
    challenge:
      "Planning travel is fragmented across dozens of apps and websites. Travelers waste hours comparing options, building itineraries, and trying to find coherent recommendations that match their preferences.",
    approach:
      "Built a unified AI-powered platform that combines itinerary generation, flight search, hotel discovery, and personalized recommendations into a single experience. Integrated machine learning pipelines for travel data processing and recommendation quality.",
    result:
      "A working prototype demonstrating AI-powered travel planning with personalized recommendations, itinerary generation, and a cohesive user experience across all travel planning stages.",
    features: [
      "AI travel recommendations",
      "Personalized itinerary generation",
      "Flight search experience",
      "Hotel discovery",
      "Holiday package experience",
      "Destination exploration",
      "Machine learning pipeline",
    ],
    technologies: ["Next.js", "React", "Python", "MLflow", "DVC", "Tailwind CSS"],
    image: "/projects/voyage.png",
    liveUrl: "https://voyage-liart-six.vercel.app/en",
  },
  {
    id: "sterling-industrial",
    title: "Sterling Industrial Solutions",
    category: "Corporate / Industrial Website",
    status: "academic",
    description:
      "A professional corporate website for an industrial engineering and fabrication company, presenting services, industries served, engineering capabilities and featured projects.",
    challenge:
      "Industrial companies often struggle to present complex technical capabilities in a way that's clear and compelling to potential clients and partners.",
    approach:
      "Designed a structured, business-focused website with clear service categories, industry sections, project filtering, and prominent contact CTAs to convert visitors into enquiries.",
    features: [
      "Company overview",
      "Industrial services showcase",
      "Industries served section",
      "Engineering process display",
      "Featured projects with filtering",
      "Contact / quote CTA",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/sterling-industrial.png",
    liveUrl: "https://company-two-virid.vercel.app/",
  },
  {
    id: "tamilnadu-smartcare",
    title: "Tamil Nadu SmartCare",
    category: "Healthcare / Government Digital Platform",
    status: "academic",
    description:
      "A digital hospital-management and patient-flow concept designed for government hospitals, focusing on improving the digital experience around hospital operations and patient services.",
    challenge:
      "Government hospitals face long wait times, poor queue management, and lack of real-time information for patients about their position in the queue or expected wait times.",
    approach:
      "Designed a digital queue management and patient-flow system with token-based scheduling, real-time queue updates, role-based dashboards, and API-driven architecture for hospital operations.",
    features: [
      "Digital queue management",
      "Token-based patient flow",
      "Hospital information display",
      "Role-based experiences",
      "Real-time queue updates",
      "API-driven architecture",
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/tamilnadu-smartcare.png",
    liveUrl: "https://tamilnadu-smartcare.vercel.app/",
  },
  {
    id: "youthfest-2026",
    title: "YouthFest 2026",
    category: "Event / Festival Website",
    status: "academic",
    description:
      "A digital experience for Yuvenza's YouthFest 2026, presenting the festival, events, activities and participation experience through a modern interactive web interface.",
    challenge:
      "Festival organizers need a single digital platform to present event schedules, activities, and registration — replacing fragmented social media posts and spreadsheets.",
    approach:
      "Built a modern, responsive festival website with event presentation, activity listings, and a registration-oriented experience using Next.js and Tailwind CSS.",
    features: [
      "Event presentation",
      "Activity listings",
      "Registration-oriented experience",
      "Responsive design",
      "Interactive UI",
      "Festival branding",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/youthfest.png",
    liveUrl: "https://youthfest-2026.vercel.app/",
  },
  {
    id: "cit-portal",
    title: "CIT Portal",
    category: "Institutional Web Platform",
    status: "academic",
    description:
      "A modern web portal designed around the digital experience of an educational institution, presenting academic information, department details and resources.",
    challenge:
      "Educational institutions often have outdated or fragmented websites that fail to present information clearly to students, faculty, and visitors.",
    approach:
      "Built a component-based institutional portal with structured information presentation, responsive design, and intuitive navigation for all user types.",
    features: [
      "Modern frontend architecture",
      "Responsive interface",
      "Structured information presentation",
      "Component-based development",
      "Navigation and content organization",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    image: "/projects/cit-portal.png",
    liveUrl: "https://cit-portal-xi.vercel.app/",
  },
  {
    id: "snap-booth",
    title: "Snap Booth",
    category: "Interactive Web Application",
    status: "prototype",
    description:
      "An interactive web experience focused on a digital photo-booth style experience with real-time media capture and effects.",
    challenge:
      "Building an engaging interactive web application that works smoothly across devices while handling real-time media operations and visual effects.",
    approach:
      "Developed an interactive photo-booth experience using modern component architecture, Framer Motion animations, and responsive design principles.",
    features: [
      "Interactive UI",
      "Media-oriented experience",
      "Real-time effects",
      "Responsive frontend",
      "Smooth animations",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/snap-booth.png",
    liveUrl: "https://snap-booth-eight.vercel.app/",
  },
];
