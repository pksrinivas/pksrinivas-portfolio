import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "SAP",
      skills: [
        { name: "Cloud Integration", level: 80 },
        { name: "API-M", level: 75 },
        { name: "Event Mesh", level: 90 },
        { name: "PI/PO", level: 90 },
      ]
    },
    {
      title: "Non-SAP",
      skills: [
        { name: "Microsoft Azure Data Factory", level: 70 },
        { name: "IBM MQFTE", level: 70 },
      ]
    },
    {
      title: "Tools & Programming",
      skills: [
        { name: "Postman/SOAP UI", level: 90 },
        { name: "Groovy", level: 90 },
        { name: "Java", level: 85 },
        { name: "Python", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-elegant transition-smooth hover:scale-105"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
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

export default Skills;
