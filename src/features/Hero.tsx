import { Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="col-span-12 lg:col-span-4 flex flex-col justify-center p-8 rounded-xl border border-midnight-border bg-gradient-to-br from-midnight-800 to-midnight-900 relative overflow-hidden">
      
      {/* Decorative Math */}
      <div className="absolute top-4 right-4 text-midnight-border font-mono text-xs select-none">
        2 * e^(2 * i * π) = 2
      </div>

      <div className="z-10">
        <div className="flex items-center gap-2 mb-4">
           <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
           <span className="text-xs font-mono text-accent-green uppercase tracking-wider">Available for work</span>
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight">
          Drexler Reyes
        </h1>
        <p className="font-mono text-accent-blue mb-6">@2xe2ipi</p>
        
        <p className="text-accent-gray mb-8 leading-relaxed">
          I build systems that scale and products that people use. 
          Currently focusing on <span className="text-white">.NET Core</span> Architecture and <span className="text-white">High-performance</span> Backends.
        </p>

        <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-white text-midnight-900 font-bold hover:bg-gray-200 transition-colors">
                <Terminal className="w-4 h-4" />
                Resume
            </button>
            <button className="px-4 py-2 rounded-md border border-midnight-border text-white hover:border-accent-blue transition-colors">
                GitHub
            </button>
        </div>
      </div>
    </div>
  );
}