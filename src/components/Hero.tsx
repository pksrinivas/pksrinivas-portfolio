import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                P Kaushik Srinivas
              </span>
              <br />
              <span className="text-muted-foreground text-xl md:text-2xl font-normal">
                Senior Consultant
              </span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl">
                SAP BTP-CI, APIM, Event Mesh & SAP PI/PO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I craft beautiful digital experiences with modern technologies.
              Turning ideas into elegant, functional solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8">
              View My Work
            </Button>
            <Button variant="portfolio" size="lg" className="text-lg px-8">
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;