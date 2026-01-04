import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-midnight-border bg-midnight-900/80 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="font-mono font-bold text-white text-lg tracking-tight">
            ~/<span className="text-accent-blue">2xe2ipi</span>
        </div>

        {/* Social Links Only - Kept clean */}
        <div className="flex items-center gap-4">
            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="mailto:drexler@example.com" icon={<Mail className="w-5 h-5" />} />
        </div>
      </div>
    </nav>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200">
            {icon}
        </a>
    )
}