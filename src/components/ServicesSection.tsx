import { FileText, BarChart3, Users, Headphones, Database } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: FileText,
    title: "Writing & Rewriting",
    description: "Talk to our experts to rewrite your thesis or manuscript at any stage of your research or from scratch.",
  },
  {
    icon: BarChart3,
    title: "Statistical Analysis",
    description: "Consult us for statistical analyses, biostatistics or coding & algorithm development-related services.",
  },
  {
    icon: Users,
    title: "Peer Reviewing & Editing",
    description: "Our experts edit your thesis and manuscripts, ensuring that they are easy to understand and acceptable for publication.",
  },
  {
    icon: Headphones,
    title: "Consulting Services",
    description: "Need consultation services on an hourly basis, use our hire a research assistant service. Easy and flexible.",
  },
  {
    icon: Database,
    title: "Data Science Service",
    description: "Need consultation services on an hourly basis, use our hire a research assistant service. Easy and flexible.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted" id="services">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background hover:shadow-lg transition-shadow group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services">
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Find out More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;