import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      "px-2 py-1 text-xs font-mono font-medium rounded-md border border-midnight-border bg-midnight-800 text-accent-blue/80",
      className
    )}>
      {children}
    </span>
  );
}