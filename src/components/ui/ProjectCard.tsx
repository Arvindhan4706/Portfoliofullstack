import { Project } from "@/data/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const statusLabels: Record<Project["status"], string> = {
  client: "Client Project",
  personal: "Personal Project",
  academic: "Academic Project",
  prototype: "Prototype",
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col md:flex-row gap-8 py-12 border-b border-border last:border-b-0">
      {/* Project Screenshot — larger */}
      <div className="w-full md:w-[55%] aspect-video rounded-xl bg-muted border border-border overflow-hidden relative flex-shrink-0 group-hover:border-foreground/30 transition-colors">
        {project.image ? (
          <div className="absolute inset-2 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
            <span className="text-2xl font-bold tracking-tighter opacity-20">
              {project.title.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="w-full md:w-[45%] flex flex-col justify-center">
        {/* Status badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-muted border border-border text-muted-foreground">
            {statusLabels[project.status]}
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-5 text-balance leading-relaxed">
          {project.description}
        </p>

        {/* Challenge → Approach → Result */}
        <div className="space-y-3 mb-6 text-sm">
          <div>
            <span className="font-semibold text-foreground">Challenge: </span>
            <span className="text-muted-foreground">{project.challenge}</span>
          </div>
          <div>
            <span className="font-semibold text-foreground">Approach: </span>
            <span className="text-muted-foreground">{project.approach}</span>
          </div>
          {project.result && (
            <div>
              <span className="font-semibold text-foreground">Result: </span>
              <span className="text-muted-foreground">{project.result}</span>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
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

        {/* Links */}
        <div className="mt-auto flex items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group/link"
          >
            View Live Project
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
