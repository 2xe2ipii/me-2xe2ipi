import { X, ExternalLink, Gamepad2, ChevronRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Badge } from "./Badge";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-midnight-900/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-midnight-800 border border-midnight-border rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row">
        
        {/* Close Button (Mobile) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-midnight-900/50 text-gray-400 hover:text-white md:hidden z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: Gallery Section (Scrollable on mobile, sticky on desktop) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="w-full md:w-1/2 bg-midnight-900/50 p-6 md:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-midnight-border">
             {/* Mobile Frame Simulation or Grid */}
             <div className="w-full overflow-x-auto pb-4 flex gap-4 snap-x snap-mandatory">
                {project.gallery.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`Screenshot ${idx + 1}`} 
                      className="h-[400px] w-auto rounded-lg shadow-lg border border-midnight-border snap-center object-contain bg-black"
                    />
                ))}
             </div>
             <p className="text-xs font-mono text-gray-500 mt-2 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" /> Scroll for more
             </p>
          </div>
        )}

        {/* RIGHT: Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
                <h2 className="text-3xl font-extrabold text-white mb-2">{project.title}</h2>
                <p className="text-lg text-accent-blue font-mono">{project.subtitle}</p>
            </div>
            {/* Close Button (Desktop) */}
            <button 
                onClick={onClose}
                className="hidden md:block p-2 rounded-full hover:bg-midnight-700 text-gray-400 hover:text-white transition-colors"
            >
                <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            {project.description}
          </p>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <Badge key={tech} className="bg-midnight-900 border-midnight-border text-gray-300 px-3 py-1">
                        {tech}
                    </Badge>
                ))}
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-6 border-t border-midnight-border">
            {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 group relative isolate flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent-blue text-midnight-900 font-bold overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-blue/20"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Gamepad2 className="w-5 h-5" />
                    <span>Play Now</span>
                </a>
            )}
            
            {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-midnight-border text-white font-medium hover:bg-midnight-700 transition-colors"
                >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Code</span>
                </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}