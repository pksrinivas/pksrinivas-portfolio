
import { Button } from "@/components/ui/button";
import {Linkedin, Mail} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/pkaushiksrinivas122/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:pksrinivas2014@gmail.com';
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Portfolio
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce" onClick={handleLinkedInClick}>
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce" onClick={handleEmailClick}>
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#skills" className="hover:text-foreground transition-smooth">Skills</a>
            <a href="#experience" className="hover:text-foreground transition-smooth">Work Experience</a>
            <a href="#projects" className="hover:text-foreground transition-smooth">Featured Blogs</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. Built with AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
