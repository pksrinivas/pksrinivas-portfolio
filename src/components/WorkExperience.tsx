
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Consultant - CPI/APIM/SAP PI/PO/Event Mesh",
      company: "Deloitte USI",
      location: "Chennai, Tamil Nadu, India",
      duration: "Aug 2021 - Present",
      projects: [
        {
          domain: "Pulp and Paper",
          client: "One of the world's largest manufacturers and distributors of pulp, paper, packaging, building products and related chemicals.",
          responsibilities: [
            "SAP BTP-Integration Suite (CPI, APIM), Event Mesh implementation for SAP S4 HANA and 3rd party systems integration",
            "Project planning including integration strategy, transport strategy and naming convention documentation",
            "CPI-S4 initial setups: IDoc, Proxy-inbound/outbound, JDBC Connectivity, SPRO configs for Event Mesh",
            "Generic Error handling mechanism design and implementation for iflows",
            "Proficient in Groovy scripting and various CPI Adapters (SFTP, Process Direct, OData, IDoc, JDBC, Sfdc, Https)"
          ]
        },
        {
          domain: "Healthcare",
          client: "A global provider of diagnostics, medical devices, nutrition and branded generic pharmaceuticals.",
          responsibilities: [
            "CPI implementation for SAP S4 HANA and 3rd party systems integration",
            "CPI setup for IDOCs/Proxy routing and on-prem to cloud integrations",
            "CPI Error retry handling and integration with JDNET, MDNET for Japan region",
            "Groovy scripting for Field Fixed Lengths handling and Content Modifiers/Splitter/Router/Aggregator",
            "Team mentoring and training on CPI"
          ]
        },
        {
          domain: "Food, Animal Nutrition, Agricultural Supply Chain, Metals/Industrial and Process Manufacturing",
          client: "One of the largest private companies in the world with four main operating divisions including agriculture, animal nutrition and protein, food, and financial and industrial services.",
          responsibilities: [
            "SAP PO interfacing for S4 HANA implementation: A2A, B2B integrations from Development to Production",
            "Client-facing role for requirement gathering and cross-functional team coordination",
            "Government integrations: SAP-Mexico govt. and SAP-Vietnam govt. for electronic invoicing",
            "SAP-EDI carriers integration for TM across APAC, EMEA, NA regions",
            "Custom Adapter Module development and PI-Basis configuration",
            "SAP S4 HANA upgrade project and Change Request handling post-PGLS"
          ]
        }
      ]
    },
    {
      title: "Project Engineer-Integration-SAP PI, Microsoft Azure Data Factory",
      company: "Wipro Technologies Ltd",
      location: "Pune, Maharashtra, India",
      duration: "Nov 2017 - July 2021",
      projects: [
        {
          domain: "Chemical/Manufacturing",
          client: "A global provider of titanium technologies, fluoroproducts and chemical solutions, with ingredients found in plastics and coatings, refrigeration and air conditioning, and general industrial manufacturing.",
          responsibilities: [
            "Technical development and operations in SAP PI and Microsoft Azure Data Factory",
            "Middleware landscape redesign: IBM MQ-FTE to SAP PI migration (200+ interfaces)",
            "Vroozi Purchase Manager-SAP PI integration and IBM Cast Iron to SAP PI refactoring",
            "SAP PI 7.1 to 7.4 migration and monitoring automation implementation",
            "Custom Adapter Module development and Azure Data Factory pipeline development",
            "Knowledge Transfer sessions and multi-platform integration (SAP PI, Azure Data Factory, IBM MQ-FTE)"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-elegant transition-smooth"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="p-3 bg-gradient-primary rounded-lg text-primary-foreground">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground mb-1">
                        {exp.company}
                      </p>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="border-l-4 border-gradient-primary pl-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Domain/Industry: {project.domain}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        <strong>Client:</strong> {project.client}
                      </p>
                      <div>
                        <h5 className="font-semibold text-foreground mb-3">Roles & Responsibilities:</h5>
                        <ul className="space-y-2">
                          {project.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-muted-foreground flex">
                              <span className="text-gradient-primary mr-2">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
