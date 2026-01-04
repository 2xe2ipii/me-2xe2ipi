import { Mail, FileText, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="w-full h-full min-h-[300px]">
        <div className="h-full group relative rounded-xl border border-midnight-border bg-[#0D1117] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            
            {/* Soft Background Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} 
            />
            
            {/* LEFT: Main Message */}
            <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Let's work together.
                </h2>
                
                <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a 
                        href="mailto:drexler@example.com"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-midnight-900 font-bold hover:bg-gray-200 transition-all hover:-translate-y-1 shadow-lg shadow-white/5"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Send an Email</span>
                    </a>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-midnight-border text-white font-medium hover:bg-midnight-800 transition-colors">
                        <FileText className="w-5 h-5" />
                        <span>Get my Resume</span>
                    </button>
                </div>
            </div>

            {/* RIGHT: Contact Info (Clean & Simple) */}
            <div className="relative w-full md:w-1/3 border-t md:border-t-0 md:border-l border-midnight-border bg-midnight-900/50 flex flex-col justify-center p-8 md:p-12">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">Location</h3>
                        <div className="flex items-center gap-2 text-white">
                            <MapPin className="w-4 h-4 text-accent-blue" />
                            <span>Lipa City, Batangas</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">Socials</h3>
                        <div className="flex flex-col gap-2">
                            <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://github.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="pt-6 mt-2 border-t border-midnight-border/50">
                        <p className="text-gray-500 text-xs">
                            © 2026 Drexler Reyes
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}