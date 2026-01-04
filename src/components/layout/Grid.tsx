import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export function Grid({ children, className }: GridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto",
      className
    )}>
      {children}
    </div>
  );
}