import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-midnight-border bg-midnight-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="font-mono font-bold text-white text-lg">
            ~/<span className="text-accent-blue">2xe2ipi</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden md:block">
                Projects
            </a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden md:block">
                About
            </a>
            
            <div className="h-4 w-px bg-midnight-border hidden md:block" />
            
            <div className="flex gap-4">
                <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
                <SocialLink href="mailto:drexler@example.com" icon={<Mail className="w-5 h-5" />} />
            </div>
        </div>
      </div>
    </nav>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-blue transition-colors">
            {icon}
        </a>
    )
}