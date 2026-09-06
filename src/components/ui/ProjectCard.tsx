import { Project } from "@/data/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col md:flex-row md:items-center gap-8 py-12 border-b border-border last:border-b-0">
      {/* Project Image / Visual Placeholder */}
      <div className="w-full md:w-1/3 aspect-video rounded-xl bg-muted border border-border overflow-hidden relative flex-shrink-0 group-hover:border-foreground/30 transition-colors">
        {project.image ? (
          <div className="absolute inset-2 overflow-hidden rounded-lg">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 transition-transform duration-500 group-hover:scale-105">
            {/* Abstract representation since real images aren't provided */}
            <div className="w-full h-full border border-border/50 bg-background/50 rounded-lg shadow-sm flex items-center justify-center backdrop-blur-sm">
              <span className="text-xl font-bold tracking-tighter opacity-20">{project.title.substring(0, 2).toUpperCase()}</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6 text-balance leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 5).map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-transparent text-muted-foreground">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
          >
            View Live Project 
            <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
