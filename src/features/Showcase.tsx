import { BentoCard } from "../components/ui/BentoCard";
import { projects } from "../data/projects";
import { Hero } from "./Hero";
import { Contact } from "./Contact";

export function Showcase() {
  return (
    // Changed max-w-7xl to max-w-[1600px] and w-[90%] for that "Wide Screen" feel
    <div className="w-[90%] max-w-[1600px] mx-auto pt-28 pb-12 animate-in fade-in zoom-in duration-500"> 
      
      {/* GRID LOGIC: 
         - Mobile: 1 column
         - Tablet: 2 columns
         - Desktop: 4 columns (grid-cols-4) is cleaner than 12 for this width 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
        
        {/* The Hero Card (Takes 1 slot on Desktop, full width on mobile) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 lg:row-span-2">
            <Hero />
        </div>

        {/* The Projects Loop */}
        {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
        ))}

        {/* Footer */}
        <Contact />

      </div>
    </div>
  );
}