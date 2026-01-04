import { useRef } from "react";
import { Download, Github, Monitor, Layers } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep the subtle mouse follow effect (it's nice and polished, not aggressive)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="group relative h-full flex flex-col justify-between p-6 md:p-10 rounded-xl border border-midnight-border bg-midnight-900 overflow-hidden isolate"
    >
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -inset-px bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(88,166,255,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col h-full justify-center">
        
        {/* SIMPLE BADGE */}
        <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-midnight-border bg-midnight-800 text-gray-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            Software Developer
        </div>

        {/* GRADIENT NAME */}
        <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-white to-accent-blue bg-300% animate-gradient">
            Drexler Reyes
          </span>
        </h1>
        
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
            I started out building games, which taught me how to make things fast and fun. Now, I use those skills to build reliable websites and apps that help people or make them smile xD.
        </p>

        {/* SIMPLE STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
             <div className="p-4 rounded-lg bg-midnight-800/50 border border-midnight-border flex items-center gap-3">
                <div className="p-2 rounded-md bg-midnight-900 text-accent-blue">
                    <Monitor className="w-4 h-4" />
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Focus</div>
                    <div className="text-white font-bold">Web & Backends</div>
                </div>
             </div>
             
             <div className="p-4 rounded-lg bg-midnight-800/50 border border-midnight-border flex items-center gap-3">
                <div className="p-2 rounded-md bg-midnight-900 text-accent-purple">
                    <Layers className="w-4 h-4" />
                </div>
                <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Stack</div>
                    <div className="text-white font-bold">React & .NET</div>
                </div>
             </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-auto">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-midnight-900 font-bold hover:bg-gray-200 transition-colors">
                <Download className="w-4 h-4" />
                <span>Resume</span>
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-midnight-border text-white hover:bg-midnight-800 transition-colors"
            >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
            </a>
        </div>
        
      </div>
    </div>
  );
}