
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const blogs = [
    {
      title: "API-M to S4 OData call - CSRF Token validation failed despite passing apt Authorization and Cookies",
      description: "Very often we come across requirements wherein 3rd party applications post the data to S4 Hana OData in backend through SAP API Management. The implementation for the same have been discussed in multiple SAP Blogs by many authors. However we came across one such peculiar scenario wherein there are multiple layers between the call made by API-M to S4 Hana OData, due to which in spite of passing apt Authorization and Cookie parameters, request was still failing with 'CSRF Token Validation failed'.",
      tech: ["SAP API-M", "SAP BTP-IS"],
      image: "photo-1498050108023-c5249f4df085",
      liveUrl: "https://community.sap.com/t5/technology-blog-posts-by-members/api-m-api-m-s4-odata-call-csrf-token-validation-failed-despite-passing-apt/ba-p/13976873"
    },
    {
      title: "CPI-Convert deep nested specified JSON elements to double or boolean data types | Groovy",
      description: "This blog covers a groovy script for converting deep nested JSON elements from string to double or boolean data types. In some cases some requirements may arise wherein some specific fields of a JSON are not accepted in string format by the target system and only double or numeric values are accepted. The below groovy covers such requirements.",
      tech: ["SAP CPI", "SAP-BTP-IS", "Groovy"],
      image: "photo-1461749280684-dccba630e2f6",
      liveUrl: "https://community.sap.com/t5/technology-blog-posts-by-members/cpi-convert-deep-nested-specified-json-elements-to-double-or-boolean-data/ba-p/13578270"
    },
    {
      title: "CPI-Convert Flat File to XML with Field Fixed Lengths | Groovy",
      description: "This blog covers an idea on how we can convert a Flat File to dynamic XML structure with Field Fixed Lengths in CPI using groovy script.",
      tech: ["SAP CPI", "SAP-BTP-IS", "Groovy"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      liveUrl: "https://community.sap.com/t5/technology-blog-posts-by-members/cpi-convert-flat-file-to-xml-with-field-fixed-lengths-groovy/ba-p/13562845"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "photo-1483058712412-4245e9b90334",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Blogs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-elegant transition-smooth hover:scale-105 overflow-hidden group"
            >
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${blog.image}?w=500&h=300&fit=crop`}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {blog.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(blog.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="portfolio" size="lg">
            View All Blogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
