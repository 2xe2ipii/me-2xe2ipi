import { Download } from "lucide-react";

export function Hero() {
  return (
    <div className="h-full flex flex-col justify-between p-8 rounded-xl border border-midnight-border bg-gradient-to-br from-midnight-800 to-midnight-900 relative overflow-hidden group hover:border-accent-blue/30 transition-colors">
      
      {/* Decorative Math (Kept subtle) */}
      <div className="absolute top-4 right-4 text-midnight-border font-mono text-[10px] select-none opacity-50">
        2 * e^(2 * i * π) = 2
      </div>

      <div className="z-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-1 tracking-tight">
          Drexler
        </h1>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-accent-gray mb-4 tracking-tight">
          Reyes
        </h1>
        
        <p className="font-mono text-sm text-accent-blue mb-6">@2xe2ipi</p>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          I build systems that scale. Transitioning from Game Dev to <span className="text-white font-medium">High-Performance Backends</span> and <span className="text-white font-medium">.NET Architecture</span>.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-midnight-900 text-sm font-bold hover:bg-gray-200 transition-colors">
                <Download className="w-4 h-4" />
                CV
            </button>
            <button className="flex-1 px-4 py-2 rounded-md border border-midnight-border text-white text-sm hover:border-accent-blue transition-colors">
                GitHub
            </button>
        </div>
      </div>

      {/* New "Status" Section - Pushed to bottom */}
      <div className="mt-auto pt-6 border-t border-midnight-border/50">
        <div className="flex items-center gap-2">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
           <span className="text-xs font-mono text-emerald-500 font-medium">
             Available for new projects
           </span>
        </div>
      </div>
    </div>
  );
}