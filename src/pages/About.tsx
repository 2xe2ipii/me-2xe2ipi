import { useEffect, useState, useRef } from "react";
import { Download, Github, Cpu, Network, Terminal, Activity, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  const [nameText, setNameText] = useState("Drexler Reyes");
  const [uptime, setUptime] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setUptime(u => u + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    containerRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
  const scrambleText = (finalText: string) => {
    let iterations = 0;
    const interval = setInterval(() => {
      setNameText(
        finalText.split("").map((_, index) => {
          // FIX: Corrected variable name from 'returnHZText' to 'finalText'
          if (index < iterations) return finalText[index];
          return letters[Math.floor(Math.random() * letters.length)];
        }).join("")
      );
      // FIX: Ensure we compare against the length of the target text
      if (iterations >= finalText.length) clearInterval(interval);
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scrambleText("Drexler Reyes");
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent-blue mb-8 transition-colors group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Operations
      </Link>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative w-full min-h-[600px] flex flex-col p-8 md:p-12 rounded-2xl border border-midnight-border bg-midnight-900 overflow-hidden isolate"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute -inset-px bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(88,166,255,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* HUD Header */}
        <div className="flex justify-between items-start mb-12 font-mono text-xs text-midnight-border tracking-widest select-none border-b border-midnight-border pb-6">
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-accent-green">
              <Activity className="w-4 h-4 animate-pulse" />
              SYSTEM ONLINE
            </span>
            <span>wd: /usr/home/drexler</span>
          </div>
          <div className="text-right">
             <span>UPTIME: {uptime}s</span>
             <br />
             <span>ID: 2XE2IPI</span>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
            
            {/* Left: Identity */}
            <div className="flex flex-col justify-center">
                <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-bold mb-6">
                    <Cpu className="w-3 h-3" />
                    <span>SYSTEM ARCHITECT</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                    {nameText}
                </h1>
                
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-8">
                    I optimize for <span className="text-white font-bold">latency</span>, <span className="text-white font-bold">scalability</span>, and <span className="text-white font-bold">user experience</span>. 
                    Currently transitioning from game engines to distributed cloud architectures.
                </p>

                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-midnight-900 font-bold hover:bg-gray-200 transition-all">
                        <Download className="w-4 h-4" />
                        Download CV
                    </button>
                    <a href="https://github.com" target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-lg border border-midnight-border text-white hover:border-white transition-all">
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                </div>
            </div>

            {/* Right: Stats & Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">
                <StatCard icon={<Terminal />} label="Primary Stack" value=".NET / React" />
                <StatCard icon={<Network />} label="Focus" value="Distributed Sys" />
                <StatCard icon={<Cpu />} label="Experience" value="3+ Years" />
                <StatCard icon={<Activity />} label="Current Status" value="Open to Work" />
            </div>
        </div>
      </div>
    </div>
  );
}

// FIX: Removed unused 'HP' prop
function StatCard({ icon, value, label }: any) {
    return (
        <div className="p-6 rounded-xl bg-midnight-800/50 border border-midnight-border hover:border-accent-blue/50 transition-colors">
            <div className="flex items-center gap-3 text-gray-400 mb-2">
                {icon}
                <span className="text-xs font-mono uppercase tracking-wider">{label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{value}</div>
        </div>
    )
}