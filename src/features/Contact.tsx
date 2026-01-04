import { Terminal } from "lucide-react";

export function Contact() {
  return (
    // FIX APPLIED: Changed col-span-12 to col-span-full
    // This prevents the grid from exploding into 12 columns on a 4-column layout.
    <section className="col-span-full mt-12 mb-8">
        <div className="rounded-xl border border-midnight-border bg-midnight-800 p-8 md:p-12 text-center relative overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent-blue/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-midnight-900 border border-midnight-border text-xs font-mono text-accent-green mb-6">
                    <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                    Open to Opportunities
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to engineer the next big thing?
                </h2>
                <p className="text-accent-gray mb-8 text-lg">
                    Whether it's complex backend logic, game development, or AI pipelines, I bring the engineering rigor.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-midnight-900 font-bold hover:bg-blue-400 transition-colors cursor-pointer">
                        <Terminal className="w-5 h-5" />
                        Download Resume
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-midnight-border text-white hover:border-white transition-colors cursor-pointer">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center text-xs font-mono text-midnight-border">
            <span>© 2026 Drexler Reyes</span>
            <span>Local: Lipa City, Batangas</span>
        </div>
    </section>
  );
}