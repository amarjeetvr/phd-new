import { FileText, BookOpen, FileEdit, Search, GraduationCap, ClipboardList, LineChart, CheckSquare, List, FileCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: GraduationCap,
    title: "Dissertation Writing",
    description: "Complete Ph.D. and Master's dissertation support from topic selection to final defense.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
  },
  {
    icon: FileText,
    title: "Thesis Writing",
    description: "Master's & Undergraduate thesis support with expert guidance and quality assurance.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
  },
  {
    icon: FileEdit,
    title: "Research Paper Services",
    description: "Expert assistance with research papers including data analysis and methodology.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Search,
    title: "Review Papers / Systematic Review",
    description: "Comprehensive systematic reviews synthesizing seminal and contemporary studies.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
  },
   {
    icon: ClipboardList,
    title: "Data Collection",
    description: "Primary and secondary data collection using validated research methodologies.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Advanced statistical analysis using SPSS, R, STATA, and other tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
   {
    icon: List,
    title: "Thematic Analysis",
    description: "Qualitative data analysis using NVivo and ATLAS.ti for identifying themes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
  },
  {
    icon: FileCheck,
    title: "Editing & Peer Reviewing",
    description: "Professional editing and peer review services ensuring publication-ready manuscripts.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
  },
  
 
  
 
];

const ServicesSection = () => {
  return (
    <section className="py-2 sm:py-16 md:py-2 bg-gradient-to-b from-background to-muted" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Specialized academic support tailored to your research needs .  We support researchers globally with structured supervision,
            mentorship, and academic excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-background hover:shadow-xl transition-all group overflow-hidden border-border hover:border-primary/50">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-3 text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services">
                  <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center py-5 mt-8">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;