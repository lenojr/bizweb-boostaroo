
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", href, external, className, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      {
        // Variants
        "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50": variant === "primary",
        "bg-secondary text-primary hover:bg-secondary/80 focus:ring-secondary/50": variant === "secondary",
        "border border-border bg-transparent hover:bg-secondary/50 focus:ring-secondary/50": variant === "outline",
        "bg-transparent hover:bg-secondary/50 focus:ring-secondary/50": variant === "ghost",
        
        // Sizes
        "h-8 px-3 text-xs": size === "sm",
        "h-10 px-5": size === "md",
        "h-12 px-8 text-base": size === "lg",
      },
      className
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={baseClasses}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        );
      }
      return (
        <Link to={href} className={baseClasses} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button className={baseClasses} ref={ref as any} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
