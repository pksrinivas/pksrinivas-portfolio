
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pkaushiksrinivas122/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:pksrinivas2014@gmail.com';
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "pksrinivas2014@gmail.com",
      link: "mailto:pksrinivas2014@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 8072588277",
      link: "tel:+91 8072588277"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Chennai, Tamil Nadu, India",
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
        </div>

        <div className="max-w-2xl mx-auto">
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
    </section>
  );
};

export default Contact;
