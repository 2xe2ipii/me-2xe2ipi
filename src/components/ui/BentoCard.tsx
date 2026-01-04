import { cn } from "../../lib/utils";
import { Badge } from "./Badge";
import type { Project } from "../../data/projects";
import { ArrowUpRight, Trophy, Users, Code } from "lucide-react";
import { Terminal } from "./Terminal";

interface BentoCardProps {
  project: Project;
}

export function BentoCard({ project }: BentoCardProps) {
  // NEW GRID LOGIC (Based on 4 Columns)
  const sizeClasses = {
    hero: "", // Handled in Showcase
    // Flagship: Takes 3 columns (Wide) and 2 rows (Tall) -> Massive center piece
    flagship: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1 lg:row-span-2", 
    // Tall: Takes 1 column, 2 rows
    tall: "col-span-1 row-span-1 lg:row-span-2", 
    // Wide: Takes 2 columns
    wide: "col-span-1 md:col-span-2", 
    // Normal: Takes 1 column
    normal: "col-span-1",
    list: "col-span-1",
  };

  const categoryConfig = {
    project: {
      border: "hover:border-accent-blue/50",
      icon: <Code className="w-5 h-5 text-accent-blue" />,
      glow: "bg-accent-blue/5",
      titleColor: "group-hover:text-accent-blue"
    },
    win: {
      border: "hover:border-amber-500/50",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      glow: "bg-amber-500/5",
      titleColor: "group-hover:text-amber-500"
    },
    leadership: {
      border: "hover:border-emerald-500/50",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      glow: "bg-emerald-500/5",
      titleColor: "group-hover:text-emerald-500"
    }
  };

  const config = categoryConfig[project.category];
  const isFlagship = project.gridArea === 'flagship';

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border border-midnight-border bg-midnight-800 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5",
      config.border,
      sizeClasses[project.gridArea],
      isFlagship ? "grid grid-cols-1 lg:grid-cols-3 gap-0" : "flex flex-col justify-between p-6"
    )}>
      
      {/* FLAGSHIP LAYOUT: Content takes 1/3, Terminal takes 2/3 */}
      <div className={cn("z-10 flex flex-col h-full", isFlagship && "p-6 lg:col-span-1 order-2 lg:order-1 border-r border-midnight-border")}>
        
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-midnight-900 border border-midnight-border">
                    {config.icon}
                </div>
                <div>
                    <h3 className={cn("text-lg font-bold text-white transition-colors", config.titleColor)}>
                        {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500">{project.subtitle}</p>
                </div>
            </div>
            {project.link && (
                <ArrowUpRight className="w-5 h-5 text-accent-gray opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </div>

        <p className="text-accent-gray text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <Badge key={tech} className="bg-midnight-900 border-midnight-border text-gray-400">
                {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* FLAGSHIP TERMINAL: Takes 2/3 of the card */}
      {isFlagship && (
         <div className="relative h-64 lg:h-auto bg-midnight-900 overflow-hidden order-1 lg:order-2 group-hover:border-accent-blue/30 transition-colors">
            <div className="absolute inset-0 p-4 lg:p-8">
                <Terminal />
            </div>
            {/* Gradient Fade to blend edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-midnight-900/50 to-transparent pointer-events-none" />
         </div>
      )}

      {/* Hover Glow for non-flagship */}
      {!isFlagship && (
        <div className={cn(
            "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
            config.glow
        )} />
      )}
    </div>
  );
}