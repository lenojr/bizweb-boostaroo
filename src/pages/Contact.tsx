
import { Mail, MapPin, Phone } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "default",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "default",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-20">
        <Hero
          title="Get in Touch"
          subtitle="Contact Us"
          description="We'd love to hear from you. Contact us with any questions, inquiries, or to discuss how we can help your business."
          align="left"
        />

        <section className="section-padding">
          <div className="page-container page-padding">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="animate-fadeIn">
                  <Card.Header>
                    <Card.Title className="text-2xl">Send Us a Message</Card.Title>
                    <Card.Description>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Company Inc."
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service You're Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                        >
                          <option value="default">Select a service</option>
                          <option value="business-strategy">Business Strategy</option>
                          <option value="financial-planning">Financial Planning</option>
                          <option value="operations-management">Operations Management</option>
                          <option value="marketing-branding">Marketing & Branding</option>
                          <option value="investment-advisory">Investment Advisory</option>
                          <option value="business-transformation">Business Transformation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto"
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Card.Content>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                  <Card.Header>
                    <Card.Title>Contact Information</Card.Title>
                  </Card.Header>
                  <Card.Content className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Our Office</p>
                        <p className="text-muted-foreground">
                          123 Business Street<br />
                          Suite 100<br />
                          City, State 12345<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">
                          info@businessname.com
                        </p>
                      </div>
                    </div>
                  </Card.Content>
                </Card>
                
                <Card className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                  <Card.Header>
                    <Card.Title>Business Hours</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="font-medium">Monday - Friday</dt>
                        <dd className="text-muted-foreground">9:00 AM - 6:00 PM</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Saturday</dt>
                        <dd className="text-muted-foreground">10:00 AM - 4:00 PM</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium">Sunday</dt>
                        <dd className="text-muted-foreground">Closed</dd>
                      </div>
                    </dl>
                  </Card.Content>
                </Card>
                
                <Card className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
                  <Card.Header>
                    <Card.Title>Follow Us</Card.Title>
                  </Card.Header>
                  <Card.Content>
                    <div className="flex gap-4">
                      {[
                        { name: "LinkedIn", href: "https://linkedin.com" },
                        { name: "Twitter", href: "https://twitter.com" },
                        { name: "Facebook", href: "https://facebook.com" },
                        { name: "Instagram", href: "https://instagram.com" },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={social.name}
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding pt-0">
          <div className="page-container page-padding">
            <div className="h-[400px] rounded-xl overflow-hidden">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7268426876717!2d-122.40195538447224!3d37.78774997975504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858089a6f4f7bb%3A0x836cfb7f3ef7dc88!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635304797659!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
