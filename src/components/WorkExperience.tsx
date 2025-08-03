
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
            "Working on SAP BTP-Integration Suite (CPI, APIM), Event Mesh implementation project to set up integration between SAP S4 HANA and 3rd party systems (Sfdc, Sfmc, P44, MES, Bloomberg etc.)",
            "Worked on project planning from scratch ranging from creating integration strategy documents, transport strategy documents to naming convention documentations etc.",
            "Worked extensively on CPI-S4 initial setups viz. IDoc, Proxy-inbound/outbound, JDBC Connectivity setups, SPRO configs. for Event Mesh etc.",
            "Worked on doing POCs on triggering Data and Notification events from SAP S4 to Event mesh topics.",
            "Worked on designing and implementing a Generic Error handling mechanism to be used across all iflows.",
            "Proficient in Groovy scripting.",
            "CPI Adapters worked upon : SFTP, Process Direct, OData, IDoc, JDBC, Sfdc, Https"
          ]
        },
        {
          domain: "Healthcare",
          client: "A global provider of diagnostics, medical devices, nutrition and branded generic pharmaceuticals.",
          responsibilities: [
            "Worked on CPI implementation project to set up integration between SAP S4 HANA and 3rd party systems",
            "Worked on the initial CPI setup to receive and route IDOCs/Proxy through a common iflow",
            "Design, Build, test iFlows for on-prem to cloud integrations",
            "Co-ordination with cross-functional team to analyze Functional specs and technical solution design",
            "Worked to design and setup CPI Error retry handling iflows",
            "Worked on integrating CPI with JDNET, MDNET for Japan region",
            "Proficient in Groovy scripting for Field Fixed Lengths handling, encodings etc. for CPI",
            "Proficient in use of Content Modifiers, Splitter, Router, Aggregator etc.",
            "Mentored and trained peers on CPI",
            "CPI Adapters worked upon : SFTP, Process Direct, OData, IDoc"
          ]
        },
        {
          domain: "Food, Animal Nutrition, Agricultural Supply Chain, Metals/Industrial and Process Manufacturing",
          client: "One of the largest private companies in the world with four main operating divisions including agriculture, animal nutrition and protein, food, and financial and industrial services.",
          responsibilities: [
            "Worked on setting up SAP PO interfacing for S4 HANA implementation project. Worked on design and build A2A, B2B integrations from Development till Production deployment",
            "Worked on effort estimations, technical developments, UAT upto PGLS",
            "Working in a client facing role which involves requirement gathering and co-ordination with different cross functional teams across geographies.",
            "Interface Design, Build, Test, PGLS for integrating SAP and Mexico govt.",
            "Worked on integrating SAP and Vietnam govt. for electronic invoicing",
            "Worked on integrating SAP with EDI carriers for TM integration for APAC, EMEA, NA regions",
            "Worked on integration with Datahub platform using PO custom Apache Pulsar adapter",
            "Worked on SAP S4 HANA upgrade project to set up PI/PO integration with new SAP system from scratch",
            "Worked on Configuration of PI-Basis functions like setting up of RFC Destinations, Port and Partner Profiles",
            "Worked on Custom Adapter Module development from NWDS setup to custom module development",
            "Worked and mentored peers to handle Change Requests which arise post PGLS",
            "SAP PO Adapters worked on : IDOC, JMS, SOAP, File, SFTP, Apache Pulsar (Custom Adapter)"
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
            "Technical development, support, Operations and solutioning in SAP PI and Microsoft Azure Data Factory",
            "Worked on other cross integration platforms apart from SAP PI viz. Microsoft Azure Data Factory, IBM MQFTE, IBM Data Power etc.",
            "IBM MQ-FTE to SAP PI Refactoring–Worked on middleware landscape redesign to migrate 200+ interfaces",
            "Vroozi Purchase Manager-SAP PI integration–lead end to end development",
            "IBM Cast Iron to SAP PI Refactoring for SAP PI 7.4-SFDC integration",
            "SAP PI 7.1 to 7.4–Migration Project",
            "SAP PI Monitoring Automation-Successfully implemented Automations for SAP PI manual monitoring & Automatic error reporting",
            "SAP PI Adapters worked on : IDOC, RFC, JMS, SOAP, JDBC, File, HTTP, SFTP, Ariba adapters",
            "Custom Adapter Module development, UDFs, SOAP lookup, Configuration, Design Changes, enhancements in PI",
            "Development of pipeline flows in Ms Azure Data Factory",
            "Conducted full Knowledge Transfer sessions on SAP PI interfaces",
            "Integration Platforms worked on: SAP PI(Dual Stack), Microsoft Azure Data Factory, IBM MQ-FTE"
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
