import { Cpu, FlaskConical, Atom, Microscope, Server, TrendingUp, Brain, Stethoscope, Dna, Users, Apple, Mountain, Wrench, BookOpen, Users2 } from "lucide-react";
import { Button } from "./ui/button";

const subjects = [
  { icon: TrendingUp, name: "Supply Chain" },
  { icon: Cpu, name: "Computer Science" },
  { icon: Atom, name: "Physics" },
  { icon: FlaskConical, name: "Chemistry" },
  { icon: Microscope, name: "Biology" },
  { icon: Server, name: "Information Service" },
  { icon: TrendingUp, name: "Economics" },
  { icon: Brain, name: "Psychology" },
  { icon: Stethoscope, name: "Medicine" },
  { icon: Dna, name: "Biochemistry" },
  { icon: Users, name: "Human Resources" },
  { icon: Apple, name: "Food Sciences" },
  { icon: Mountain, name: "Geology" },
  { icon: Wrench, name: "Engineering" },
  { icon: BookOpen, name: "Education" },
  { icon: Users2, name: "Sociology" },
];

const workFor = ["Research Scholars", "Supervisors", "Publishers", "Universities"];

const SubjectsSection = () => {
  return (
    <section className="py-20 bg-muted" id="industries">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We have <span className="text-primary">200+ subject matter expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
            Almost every scholar and author wish to pursue a PhD, but choosing the correct path is critical. 
            As external mentors, we enable doctoral students to overcome transitional and troublesome moments, 
            move through limited spaces and cross conceptual thresholds.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="font-semibold text-foreground">Whom We Work For →</span>
          {workFor.map((item) => (
            <span key={item} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-4 text-center hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <subject.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground">{subject.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            More Subjects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;