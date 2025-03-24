
import { Calendar, CheckCircle2, Users } from "lucide-react";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";

const About = () => {
  const milestones = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Founded in 2010",
      description: "Started with a vision to provide exceptional business solutions and services to clients worldwide.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "50+ Team Members",
      description: "Grown to a diverse team of experts dedicated to helping businesses succeed in their industries.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "500+ Clients Served",
      description: "Successfully delivered solutions to hundreds of businesses across various industries and sectors.",
    },
  ];

  const teamMembers = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      bio: "Jane has over 15 years of experience in business consulting and leadership. She founded the company with a vision to provide innovative solutions to businesses of all sizes.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "jane@businessname.com",
      },
    },
    {
      name: "John Davis",
      role: "CTO",
      bio: "John brings technical expertise and innovation to the team. With a background in computer science and engineering, he leads our technical initiatives and solutions.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "john@businessname.com",
      },
    },
    {
      name: "Emily Chen",
      role: "Marketing Director",
      bio: "Emily is a marketing strategist with experience in digital marketing, brand development, and customer engagement strategies for businesses across various industries.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "emily@businessname.com",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <Hero
          title="About Our Company"
          subtitle="Our Story"
          description="Learn about our journey, our values, and the team behind our success. We're dedicated to providing exceptional solutions and services to our clients."
          align="left"
          imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary inline-block mb-4 animate-fadeIn">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  Helping businesses thrive in a changing world
                </h2>
                <p className="text-muted-foreground text-lg mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  At BusinessName, our mission is to empower organizations with innovative solutions that drive growth, efficiency, and success. We combine industry expertise with cutting-edge approaches to help our clients navigate challenges and seize opportunities.
                </p>
                <p className="text-muted-foreground text-lg animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  We believe in building lasting relationships with our clients based on trust, integrity, and exceptional results. Our team is committed to understanding your unique needs and delivering solutions that exceed your expectations.
                </p>
              </div>
              <div className="order-1 md:order-2 animate-fadeIn">
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team meeting"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <Features
          title="Our Journey"
          subtitle="Key Milestones"
          features={milestones}
          className="bg-secondary/50"
        />

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary inline-block mb-4 animate-fadeIn">
                Our Values
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                The principles that guide us
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from the solutions we develop to the service we provide."
                },
                {
                  title: "Integrity",
                  description: "We conduct our business with honesty, transparency, and the highest ethical standards."
                },
                {
                  title: "Innovation",
                  description: "We embrace innovation and creativity to deliver cutting-edge solutions that address complex challenges."
                },
                {
                  title: "Collaboration",
                  description: "We believe in the power of collaboration, both within our team and with our clients and partners."
                }
              ].map((value, idx) => (
                <div 
                  key={idx} 
                  className="p-6 border border-border rounded-lg bg-card animate-fadeIn"
                  style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Team
          title="Meet Our Leadership Team"
          subtitle="The People Behind Our Success"
          description="Our leadership team brings decades of combined experience across various industries."
          members={teamMembers}
        />

        <CTA
          title="Want to join our team?"
          description="We're always looking for talented individuals to join our growing team."
          primaryAction={{
            text: "View Career Opportunities",
            href: "/careers",
          }}
          secondaryAction={{
            text: "Learn About Our Culture",
            href: "/about#culture",
          }}
        />
      </main>
    </div>
  );
};

export default About;
