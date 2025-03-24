
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

type CTAProps = {
  title: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  className?: string;
  variant?: "default" | "highlight";
};

const CTA = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  variant = "default",
}: CTAProps) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="page-container page-padding">
        <div
          className={cn(
            "rounded-2xl px-6 py-12 md:p-16 text-center md:text-left", 
            {
              "bg-secondary": variant === "default",
              "bg-primary text-white": variant === "highlight",
            }
          )}
        >
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl md:mr-8">
              <h2 className={cn(
                "text-3xl font-bold tracking-tight md:text-4xl",
                { "text-white": variant === "highlight" }
              )}>
                {title}
              </h2>
              <p className={cn(
                "mt-4 text-lg",
                {
                  "text-muted-foreground": variant === "default",
                  "text-white/80": variant === "highlight",
                }
              )}>
                {description}
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              {primaryAction && (
                <Button 
                  href={primaryAction.href}
                  variant={variant === "highlight" ? "secondary" : "primary"}
                  size="lg"
                >
                  {primaryAction.text}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  href={secondaryAction.href}
                  variant={variant === "highlight" ? "ghost" : "outline"}
                  size="lg"
                  className={variant === "highlight" ? "text-white border-white/20 hover:bg-white/10" : ""}
                >
                  {secondaryAction.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
