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
I am a Senior SAP Integration Consultant & Solution Architect with over 7+ years of experience delivering robust, scalable, and future-ready integration solutions. My expertise spans across SAP Business Technology Platform (BTP), particularly in Cloud Integration (CPI), API Management (APIM), and Event Mesh, alongside a strong foundation in SAP PI/PO for hybrid and on-premise landscapes. 
              </p>
              <p>
                I specialize in 
SAP BTP – Cloud Integration (CPI):
Design and implementation of integration flows for both SAP and non-SAP systems. Hands-on experience with message transformation, error handling, security configurations, and connectivity adapters.
SAP Process Integration/Process Orchestration (PI/PO):
Design, migration, and support of A2A and B2B integrations. Transition planning and execution for moving from PI/PO to cloud-based integration.
Integration Architecture:
End-to-end integration design including system landscape analysis, middleware selection, performance optimization, and secure data exchange protocols.
           </p>
              <p>
SAP API Management (APIM):
API lifecycle management, policy implementation, developer portal configuration, and external system integrations with governance and throttling policies.
SAP Event Mesh:
Architecture and development of event-driven integrations using asynchronous messaging patterns. Expertise in event enablement of backend systems to promote decoupled and reactive integrations.
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
