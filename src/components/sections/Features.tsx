
import { ReactNode } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

type FeaturesProps = {
  title: string;
  subtitle: string;
  description?: string;
  features: Feature[];
  className?: string;
  columns?: 2 | 3 | 4;
};

const Features = ({
  title,
  subtitle,
  description,
  features,
  className,
  columns = 3,
}: FeaturesProps) => {
  return (
    <section className={cn("section-padding", className)}>
      <div className="page-container page-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary inline-block mb-4 animate-fadeIn">
            {subtitle}
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            {title}
          </h2>
          
          {description && (
            <p className="text-muted-foreground text-lg animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              {description}
            </p>
          )}
        </div>
        
        <div
          className={cn("grid gap-6 md:gap-8", {
            "md:grid-cols-2": columns === 2,
            "md:grid-cols-3": columns === 3,
            "md:grid-cols-2 lg:grid-cols-4": columns === 4,
          })}
        >
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="animate-fadeIn" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-secondary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold leading-none tracking-tight">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
