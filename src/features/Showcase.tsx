import { BentoCard } from "../components/ui/BentoCard";
import { projects } from "../data/projects";
import { Hero } from "./Hero";
import { Contact } from "./Contact";

export function Showcase() {
  return (
    // PT-32 pushes it down below the navbar
    // MAX-W-[1600px] ensures it doesn't stretch too wide on huge screens
    <div className="w-[95%] max-w-[1600px] mx-auto pt-32 pb-12 animate-in fade-in zoom-in duration-500"> 
      
      {/* CRITICAL FIX: 
         - Mobile: 1 column (grid-cols-1)
         - Tablet: 2 columns (md:grid-cols-2)
         - Desktop: 4 columns (lg:grid-cols-4) 
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
        
        {/* HERO: Takes 1 column spot, but spans 2 rows high */}
        <div className="col-span-1 row-span-1 lg:row-span-2 h-full min-h-[500px] lg:min-h-0">
            <Hero />
        </div>

        {/* PROJECTS */}
        {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
        ))}

        {/* FOOTER */}
        <Contact />

      </div>
    </div>
  );
}