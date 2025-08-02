import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with 5+ years of experience 
                creating digital solutions that make a difference. My journey started 
                with curiosity about how things work on the web, and it has evolved 
                into a career of building beautiful, functional applications.
              </p>
              <p>
                I specialize in React, TypeScript, and modern web technologies. 
                I believe in writing clean, maintainable code and creating user 
                experiences that are both intuitive and delightful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-elegant transition-smooth hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
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

export default About;