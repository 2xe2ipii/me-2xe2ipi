import { BentoCard } from "../components/ui/BentoCard";
import { projects } from "../data/projects";
import { Hero } from "./Hero";

export function Showcase() {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-12 gap-4 auto-rows-auto">
        
        {/* The Hero Card */}
        <Hero />

        {/* The Projects */}
        {projects.map((project) => (
            <BentoCard key={project.id} project={project} />
        ))}

        {/* Small Footer / Terminal Line */}
        <div className="col-span-12 mt-8 py-8 border-t border-midnight-border text-center font-mono text-sm text-midnight-border">
            console.log("Designed by 2xe2ipi");
        </div>

      </div>
    </div>
  );
}