
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type BlogPost = {
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  category: string;
  slug: string;
};

type BlogPreviewProps = {
  title: string;
  subtitle: string;
  description?: string;
  posts: BlogPost[];
  viewAllLink?: string;
  className?: string;
};

const BlogPreview = ({
  title,
  subtitle,
  description,
  posts,
  viewAllLink = "/blog",
  className,
}: BlogPreviewProps) => {
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
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden h-full flex flex-col animate-fadeIn" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-secondary/80 backdrop-blur-sm text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <Card.Header className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </div>
                <Card.Title className="text-xl hover:text-primary transition-colors">
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </Card.Title>
              </Card.Header>
              <Card.Content className="flex-grow">
                <p className="text-muted-foreground">
                  {post.summary}
                </p>
              </Card.Content>
              <Card.Footer>
                <Button
                  href={`/blog/${post.slug}`}
                  variant="ghost"
                  className="p-0 h-auto hover:bg-transparent hover:text-primary"
                  asChild
                >
                  <a href={`/blog/${post.slug}`}>
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-12 text-center">
            <Button href={viewAllLink} variant="outline" asChild>
              <a href={viewAllLink}>View all articles</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
