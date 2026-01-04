import { cn } from "../../lib/utils";
import { Badge } from "./Badge";
import type  { Project } from "../../data/projects";
import { ArrowUpRight, GitFork, Terminal } from "lucide-react";

interface BentoCardProps {
  project: Project;
}

export function BentoCard({ project }: BentoCardProps) {
  // Map gridArea to Tailwind col-span classes
  const sizeClasses = {
    hero: "",
    main: "col-span-12 lg:col-span-8 row-span-2", // Big Center
    tall: "col-span-12 md:col-span-6 lg:col-span-4 row-span-2", // Tall Side
    wide: "col-span-12 lg:col-span-8", // Wide Bottom
    normal: "col-span-12 md:col-span-6 lg:col-span-4", // Standard
  };

  return (
    <div className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-midnight-border bg-midnight-800 p-6 transition-all duration-300 hover:border-accent-gray/50 hover:shadow-lg hover:shadow-accent-blue/5",
      sizeClasses[project.gridArea]
    )}>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
            {/* Icon based on type */}
            {project.type === 'flagship' && <Terminal className="w-5 h-5 text-accent-green" />}
            {project.type === 'system' && <GitFork className="w-5 h-5 text-accent-purple" />}
            <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
            {project.title}
            </h3>
        </div>
        {project.link && (
            <ArrowUpRight className="w-5 h-5 text-accent-gray opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Content */}
      <div className="z-10">
        <p className="text-sm font-mono text-accent-blue mb-2">{project.subtitle}</p>
        <p className="text-accent-gray leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>

      {/* Background Decor (Optional Glow) */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}