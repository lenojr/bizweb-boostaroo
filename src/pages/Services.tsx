
import { ArrowRight, CircleDollarSign, Clock, FileText, LayoutGrid, MessagesSquare, Settings } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const Services = () => {
  const services = [
    {
      icon: <LayoutGrid className="h-6 w-6 text-primary" />,
      title: "Business Strategy",
      description: "Develop comprehensive strategies to guide your business toward sustainable growth and success.",
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Financial Planning",
      description: "Create robust financial plans to optimize resources, manage risks, and maximize profits.",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Operations Management",
      description: "Streamline your operations for maximum efficiency, productivity, and cost-effectiveness.",
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-primary" />,
      title: "Marketing & Branding",
      description: "Build a strong brand identity and implement effective marketing strategies to reach your target audience.",
    },
    {
      icon: <CircleDollarSign className="h-6 w-6 text-primary" />,
      title: "Investment Advisory",
      description: "Receive expert guidance on investments to maximize returns and achieve financial objectives.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Transformation",
      description: "Transform your business model to adapt to changing markets and technological advancements.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business, objectives, challenges, and requirements through in-depth consultations.",
    },
    {
      number: "02",
      title: "Analysis",
      description: "Our team analyzes your current situation, identifies opportunities, and evaluates potential solutions.",
    },
    {
      number: "03",
      title: "Strategy Development",
      description: "We develop a tailored strategy and implementation plan designed to achieve your specific goals.",
    },
    {
      number: "04",
      title: "Execution",
      description: "We work with you to implement the solutions, providing guidance and support throughout the process.",
    },
    {
      number: "05",
      title: "Evaluation",
      description: "We measure results, gather feedback, and make necessary adjustments to ensure optimal outcomes.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <Hero
          title="Comprehensive Business Services"
          subtitle="Our Services"
          description="We offer a wide range of professional services designed to help your business grow, optimize operations, and achieve its full potential."
          imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <Features
          title="Our Core Services"
          subtitle="What We Offer"
          description="Explore our range of services designed to address your business challenges and drive growth."
          features={services}
          columns={2}
        />

        <section className="section-padding bg-secondary/50">
          <div className="page-container page-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-white inline-block mb-4 animate-fadeIn">
                Our Process
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                How We Work
              </h2>
              
              <p className="text-muted-foreground text-lg animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Our structured approach ensures we deliver the best solutions for your business needs.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-border/70 hidden md:block"></div>
              
              <div className="space-y-12">
                {process.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="relative animate-fadeIn"
                    style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}
                  >
                    <div className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="md:w-1/2 relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 hidden md:flex">
                          {idx + 1}
                        </div>
                        <Card className="bg-white">
                          <Card.Header>
                            <span className="text-primary text-sm font-bold mb-2 md:hidden">STEP {step.number}</span>
                            <Card.Title className="text-xl">{step.title}</Card.Title>
                          </Card.Header>
                          <Card.Content>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </Card.Content>
                        </Card>
                      </div>
                      <div className="md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary inline-block mb-4 animate-fadeIn">
                  Tailored Solutions
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  Customized to your business needs
                </h2>
                <p className="text-muted-foreground text-lg mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  We understand that every business is unique. That's why we offer customized solutions designed to address your specific challenges and help you achieve your goals.
                </p>
                <p className="text-muted-foreground text-lg mb-8 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  Our team of experts works closely with you to understand your business, identify opportunities, and develop strategies that deliver results.
                </p>
                <Button href="/contact" className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                  Get a Custom Solution
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                {[
                  {
                    title: "Small Business",
                    description: "Solutions tailored to help small businesses grow and compete effectively.",
                    link: "/services/small-business",
                  },
                  {
                    title: "Enterprises",
                    description: "Strategic services for large organizations seeking optimization and innovation.",
                    link: "/services/enterprises",
                  },
                  {
                    title: "Startups",
                    description: "Specialized support for startups to establish strong foundations and scale rapidly.",
                    link: "/services/startups",
                  },
                  {
                    title: "Non-Profits",
                    description: "Dedicated solutions to help non-profit organizations maximize their impact.",
                    link: "/services/non-profits",
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="animate-fadeIn" style={{ animationDelay: `${0.3 + (idx * 0.1)}s` }}>
                    <Card.Header>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                      <p className="text-muted-foreground text-sm mb-4">
                        {item.description}
                      </p>
                      <a href={item.link} className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Card.Content>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to transform your business?"
          description="Contact us today to discuss how our services can help you achieve your business goals."
          primaryAction={{
            text: "Get Started",
            href: "/contact",
          }}
          variant="highlight"
        />
      </main>
    </div>
  );
};

export default Services;
