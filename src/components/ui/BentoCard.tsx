import { cn } from "../../lib/utils";
import { Badge } from "./Badge";
import type { Project } from "../../data/projects";
import { ArrowUpRight, Trophy, Users, Code, Star, Play } from "lucide-react";
import { Terminal } from "./Terminal";

interface BentoCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function BentoCard({ project, className, style, onClick }: BentoCardProps) {
  const isFlagship = project.gridArea === 'flagship';
  const isEmphasized = ['grammar-heroes', 'comp-prog', 'jpcs'].includes(project.id);

  const sizeClasses = {
    hero: "", 
    flagship: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2", 
    tall: "col-span-1 row-span-1 lg:row-span-2", 
    wide: "col-span-1 md:col-span-2", 
    normal: "col-span-1",
    list: "col-span-1",
  };

  const categoryConfig = {
    project: {
      border: "hover:border-accent-blue/50",
      icon: <Code className="w-5 h-5 text-accent-blue" />,
      titleColor: "group-hover:text-accent-blue",
      glow: "bg-accent-blue/5"
    },
    win: {
      border: "hover:border-amber-500/50",
      icon: <Trophy className="w-5 h-5 text-amber-500" />,
      titleColor: "group-hover:text-amber-500",
      glow: "bg-amber-500/5"
    },
    leadership: {
      border: "hover:border-emerald-500/50",
      icon: <Users className="w-5 h-5 text-emerald-500" />,
      titleColor: "group-hover:text-emerald-500",
      glow: "bg-emerald-500/5"
    }
  };

  const config = categoryConfig[project.category];

  return (
    <div 
      onClick={onClick}
      style={style}
      className={cn(
        "group relative overflow-hidden rounded-xl border transition-all duration-500",
        isFlagship 
          ? "bg-gradient-to-br from-[#161B22] via-[#0D1117] to-[#161B22]" 
          : "bg-midnight-800",
        sizeClasses[project.gridArea],
        isFlagship ? "flex flex-col lg:flex-row" : "flex flex-col justify-between p-6",
        "hover:-translate-y-1 hover:shadow-xl cursor-pointer",
        isFlagship 
          ? "border-accent-blue/20 hover:border-accent-blue/50 shadow-lg shadow-accent-blue/5" 
          : (isEmphasized ? "border-amber-500/20 hover:border-amber-500/60" : "border-midnight-border " + config.border),
        className
      )}
    >
      
      {/* CONTENT SIDE */}
      <div className={cn(
        "z-10 flex flex-col h-full", 
        isFlagship ? "p-6 lg:w-1/2 lg:border-r lg:border-midnight-border order-2 lg:order-1" : ""
      )}>
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                {/* FIXED: Removed typo 'rounded-lgWZ' */}
                <div className={cn(
                    "p-2 rounded-lg border", 
                    isFlagship 
                      ? "bg-accent-blue/10 border-accent-blue/30"
                      : (isEmphasized ? "bg-midnight-800 border-amber-500/30" : "bg-midnight-900 border-midnight-border")
                )}>
                    {isFlagship 
                       ? <Star className="w-5 h-5 text-accent-blue fill-accent-blue/20" /> 
                       : (isEmphasized && project.category === 'project' ? <Star className="w-5 h-5 text-amber-400 fill-amber-400/20" /> : config.icon)
                    }
                </div>
                <div>
                    <h3 className={cn("text-lg font-bold text-white transition-colors", config.titleColor)}>
                        {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-500">{project.subtitle}</p>
                </div>
            </div>

            {/* PLAY BUTTON (Flagship Only) */}
            {isFlagship && project.liveUrl && (
               <a 
                 href={project.liveUrl}
                 target="_blank"
                 rel="noreferrer"
                 onClick={(e) => e.stopPropagation()} 
                 className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500 text-white font-bold text-xs hover:bg-emerald-400 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
               >
                  <Play className="w-3 h-3 fill-current" />
                  PLAY
               </a>
            )}

            {!isFlagship && project.link && (
                <ArrowUpRight className="w-5 h-5 text-accent-gray opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300" />
            )}
        </div>

        <p className="text-accent-gray text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <Badge key={tech} className={cn(
               "transition-colors",
               isFlagship 
                 ? "bg-midnight-900/80 border-accent-blue/20 text-accent-blue/80" 
                 : "bg-midnight-900 border-midnight-border text-gray-400 group-hover:border-gray-600"
            )}>
                {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* TERMINAL SIDE (Flagship Only) */}
      {isFlagship && (
         <div className="relative h-64 lg:h-auto lg:w-1/2 bg-[#0D1117] overflow-hidden order-1 lg:order-2 group-hover:border-accent-blue/30 transition-colors">
            <div className="w-full h-full p-8 flex items-center justify-center">
                <div className="w-full shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <Terminal />
                </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60 pointer-events-none" />
         </div>
      )}

      {/* Hover Glow */}
      <div className={cn(
        "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        isFlagship ? "bg-accent-blue/10" : (isEmphasized ? "bg-amber-500/10" : config.glow)
      )} />
      
    </div>
  );
}