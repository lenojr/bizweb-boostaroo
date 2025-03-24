
import { ArrowRight, CheckCircle2, Layout, Zap } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import BlogPreview from "@/components/sections/BlogPreview";

const Index = () => {
  const features = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Feature One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultricies.",
    },
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Feature Two",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Feature Three",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const blogPosts = [
    {
      title: "How to optimize your business processes",
      summary: "Discover the top strategies for streamlining your operations and improving efficiency.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "June 12, 2023",
      category: "Business",
      slug: "optimize-business-processes",
    },
    {
      title: "The future of digital transformation",
      summary: "Explore the latest trends and technologies shaping the future of business in a digital world.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 24, 2023",
      category: "Technology",
      slug: "future-digital-transformation",
    },
    {
      title: "Building a customer-centric culture",
      summary: "Learn how to create a business environment that puts customers at the center of everything you do.",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 18, 2023",
      category: "Customer Experience",
      slug: "customer-centric-culture",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <Hero
          title="Elevate Your Business with Professional Solutions"
          subtitle="Welcome to BusinessName"
          description="We provide exceptional business solutions tailored to your unique needs. Our team of experts is dedicated to helping your business thrive in today's competitive landscape."
          primaryAction={{
            text: "Get Started",
            href: "/contact",
          }}
          secondaryAction={{
            text: "Learn More",
            href: "/about",
          }}
          imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <Features
          title="Our Core Services"
          subtitle="What We Offer"
          description="We provide comprehensive business solutions designed to meet your specific needs and help you achieve your goals."
          features={features}
          className="bg-secondary/50"
        />

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="flex flex-col md:flex-row md:items-center gap-12">
              <div className="md:w-1/2">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary inline-block mb-4 animate-fadeIn">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  We're dedicated to your success
                </h2>
                <p className="text-muted-foreground text-lg mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  Our team brings years of experience and expertise to every project. We work closely with you to understand your needs and deliver solutions that exceed your expectations.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expert team with industry experience",
                    "Tailored solutions for your business",
                    "Dedicated support throughout the process",
                    "Innovative approaches to complex challenges"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 animate-fadeIn" style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}>
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                  <a href="/about" className="inline-flex items-center text-primary font-medium hover:underline">
                    Learn more about our approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Our team"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to transform your business?"
          description="Get in touch today to discover how we can help you achieve your business goals."
          primaryAction={{
            text: "Contact Us",
            href: "/contact",
          }}
          secondaryAction={{
            text: "View Services",
            href: "/services",
          }}
          variant="highlight"
        />

        <BlogPreview
          title="Latest Insights"
          subtitle="Our Blog"
          description="Stay up to date with the latest industry trends, tips, and best practices."
          posts={blogPosts}
        />
      </main>
    </div>
  );
};

export default Index;
