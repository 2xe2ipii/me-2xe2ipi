import { useState } from "react";
import { BentoCard } from "../components/ui/BentoCard";
import { projects } from "../data/projects";
import type { Project } from "../data/projects"; 
import { Hero } from "./Hero";
import { Contact } from "./Contact";
import { ProjectModal } from "../components/ui/ProjectModal";

export function Showcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="w-[95%] max-w-[1600px] mx-auto pt-24 pb-12"> 
      
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto grid-flow-dense">
        
        {/* HERO */}
        <div 
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 h-full min-h-[500px] lg:min-h-0 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards"
          style={{ animationDelay: '0ms' }}
        >
            <Hero />
        </div>

        {/* PROJECTS */}
        {projects.map((project, index) => (
            <BentoCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedProject(project)}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards cursor-pointer" 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            />
        ))}

      </div>

      {/* FOOTER: MOVED OUTSIDE GRID */}
      {/* mt-8 (32px) matches the visual gap created by pt-24 minus the navbar height */}
      <div className="mt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" style={{ animationDelay: '800ms' }}>
         <Contact />
      </div>

    </div>
  );
}