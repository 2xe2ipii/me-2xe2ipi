import { cn } from "../../lib/utils";
import { Badge } from "./Badge";
import type { Project } from "../../data/projects";
import { ArrowUpRight, Trophy, Users, Code } from "lucide-react";
import { Terminal } from "./Terminal";

interface BentoCardProps {
  project: Project;
}

export function BentoCard({ project }: BentoCardProps) {
  const isFlagship = project.gridArea === 'flagship';
  
  // GRID MATH (Based on 4 Total Columns)
  const sizeClasses = {
    hero: "", 
    // Flagship: Spans 3 columns (75% width)
    flagship: "col-span-1 md:col-span-2 lg:col-span-3 row-span-1 lg:row-span-2", 
    // Tall: Spans 1 column
    tall: "col-span-1 row-span-1 lg:row-span-2", 
    // Wide: Spans 2 columns
    wide: "col-span-1 md:col-span-2", 
    // Normal: Spans 1 column
    normal: "col-span-1",
    list: "col-span-1",
  };

  const categoryConfig = {
    project: {
      border: "hover:border-accent-blue/50",
      icon: <Code className="w-5 h-5 text-accent-blue" />,
      titleColor: "group-hover:text-accent-blue"
    },
    win: {
      border: "hover:border-amber-500/50",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      titleColor: "group-hover:text-amber-500"
    },
    leadership: {
      border: "hover:border-emerald-500/50",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      titleColor: "group-hover:text-emerald-500"
    }
  };

  const config = categoryConfig[project.category];

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border border-midnight-border bg-midnight-800 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5",
      config.border,
      sizeClasses[project.gridArea],
      // FLEXBOX FIX: Ensures Flagship is Side-by-Side on Desktop
      isFlagship ? "flex flex-col lg:flex-row" : "flex flex-col justify-between p-6"
    )}>
      
      {/* CONTENT SIDE */}
      <div className={cn(
        "z-10 flex flex-col h-full", 
        // If Flagship, take 40% width. Else take full width.
        isFlagship ? "p-6 lg:w-[40%] lg:border-r lg:border-midnight-border order-2 lg:order-1 bg-midnight-800" : ""
      )}>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
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

      {/* TERMINAL SIDE (Flagship Only) */}
      {isFlagship && (
         <div className="relative h-64 lg:h-auto lg:w-[60%] bg-[#0D1117] overflow-hidden order-1 lg:order-2 group-hover:border-accent-blue/30 transition-colors">
            {/* Center the terminal with padding */}
            <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="w-full max-h-[90%] shadow-2xl">
                    <Terminal />
                </div>
            </div>
         </div>
      )}

      {/* Hover Glow */}
      {!isFlagship && (
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </div>
  );
}