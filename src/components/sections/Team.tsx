
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
};

type TeamProps = {
  title: string;
  subtitle: string;
  description?: string;
  members: TeamMember[];
  className?: string;
};

const Team = ({
  title,
  subtitle,
  description,
  members,
  className,
}: TeamProps) => {
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
          {members.map((member, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-fadeIn" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <Card.Header className="pt-6">
                <Card.Title className="text-xl">{member.name}</Card.Title>
                <span className="text-sm text-muted-foreground font-medium">
                  {member.role}
                </span>
              </Card.Header>
              <Card.Content>
                <p className="text-muted-foreground">
                  {member.bio}
                </p>
                
                {member.social && (
                  <div className="flex gap-4 mt-4">
                    {member.social.linkedin && (
                      <a 
                        href={member.social.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}
                    
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    )}
                    
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
