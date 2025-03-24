
import { cn } from "@/lib/utils";

type CardProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-lg border border-border/40 shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-border/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

Card.Header = ({ className, children, ...props }: CardHeaderProps) => {
  return (
    <div
      className={cn("p-6 flex flex-col space-y-1.5", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

Card.Content = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

type CardFooterProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

Card.Footer = ({ className, children, ...props }: CardFooterProps) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type CardTitleProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

Card.Title = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h3
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

type CardDescriptionProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

Card.Description = ({ className, children, ...props }: CardDescriptionProps) => {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  );
};
