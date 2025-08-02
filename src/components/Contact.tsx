import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@portfolio.com",
      link: "mailto:hello@portfolio.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "San Francisco, CA",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-background/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input placeholder="Project Discussion" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea 
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    className="bg-background/50"
                  />
                </div>
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or partnerships. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border hover:shadow-elegant transition-smooth hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;