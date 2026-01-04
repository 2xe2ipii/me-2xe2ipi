import { cn } from "../../lib/utils";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react"; // Fixed: explicit type import

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    
    const variants = {
      primary: "bg-white text-midnight-900 hover:bg-gray-200 border-transparent",
      outline: "bg-transparent border-midnight-border text-white hover:border-accent-blue",
      ghost: "bg-transparent border-transparent text-gray-400 hover:text-white"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-bold transition-all duration-200 border",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";