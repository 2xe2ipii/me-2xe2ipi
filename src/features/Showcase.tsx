import { BentoCard } from "../components/ui/BentoCard";
import { projects } from "../data/projects";
import { Hero } from "./Hero";
import { Contact } from "./Contact";

export function Showcase() {
  return (
    <div className="w-[95%] max-w-[1600px] mx-auto pt-32 pb-12"> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto grid-flow-dense">
        
        {/* HERO: Fixed typo in style prop */}
        <div 
          id="about" 
          className="col-span-1 row-span-1 lg:row-span-2 h-full min-h-[500px] lg:min-h-0 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards"
          style={{ animationDelay: '0ms' }}
        >
            <Hero />
        </div>

        {/* PROJECTS */}
        {projects.map((project, index) => (
            <BentoCard 
              key={project.id} 
              project={project}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards" 
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            />
        ))}

        {/* FOOTER */}
        <Contact />

      </div>
    </div>
  );
}