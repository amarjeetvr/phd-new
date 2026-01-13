import { FileText, BookOpen, BarChart3, Code, Database, Edit, Search, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const solutions = [
  { icon: FileText, title: "Dissertation Services", description: "Re-writing the complete or part of your dissertation" },
  { icon: BookOpen, title: "Publication Support", description: "Provide support includes journal selection," },
  { icon: BarChart3, title: "Statistical Analysis", description: "Data science is the core for any research" },
  { icon: Code, title: "Coding & Algorithm Services", description: "Develop novel algorithms based on the strong research gap" },
  { icon: Database, title: "Data Collection", description: "Offers survey tool development, hosting," },
  { icon: Edit, title: "Editing & Peer Reviewing", description: "Experts edit your manuscripts, ensuring that they are easy to understand." },
  { icon: Search, title: "Research Support Service", description: "Re-writing the complete or part of your dissertation" },
  { icon: GraduationCap, title: "Course Work", description: "Perfect Research Papers Every Time" },
];

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Dissertation & Publication Support{" "}
            <span className="text-primary">Mentoring Solutions and Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We collaborate closely with you to deliver professional and high-quality 
            research work within the agreed time limit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <solution.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                <Button variant="link" className="text-primary p-0 h-auto text-sm">
                  Find Out More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;