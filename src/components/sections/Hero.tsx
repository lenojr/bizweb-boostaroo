
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  imageUrl?: string;
  className?: string;
  align?: "left" | "center" | "right";
};

const Hero = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  imageUrl,
  className,
  align = "center",
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-20 md:py-32",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
      
      <div className="page-container page-padding relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center",
            {
              "text-left mx-0": align === "left",
              "text-center mx-auto": align === "center",
              "text-right ml-auto mr-0": align === "right",
            }
          )}
        >
          <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 mb-4 rounded-full bg-secondary animate-slideDown">
            {subtitle}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight mb-6 animate-slideDown" style={{ animationDelay: "0.1s" }}>
            {title}
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-slideDown" style={{ animationDelay: "0.2s" }}>
            {description}
          </p>
          
          <div className={cn(
            "flex gap-4 mt-8 animate-slideDown",
            {
              "justify-start": align === "left",
              "justify-center": align === "center",
              "justify-end": align === "right",
            }
          )} style={{ animationDelay: "0.3s" }}>
            {primaryAction && (
              <Button href={primaryAction.href} size="lg">
                {primaryAction.text}
              </Button>
            )}
            
            {secondaryAction && (
              <Button
                href={secondaryAction.href}
                variant="outline"
                size="lg"
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        </div>
        
        {imageUrl && (
          <div className="mt-12 md:mt-16 relative mx-auto max-w-4xl animate-slideUp" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-[20%] bottom-0"></div>
            <img
              src={imageUrl}
              alt="Hero"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
