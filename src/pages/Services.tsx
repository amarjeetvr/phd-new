import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FileText, BarChart3, Users, Headphones, Database, BookOpen, Search, FileCheck, Award, ClipboardList, LineChart, CheckSquare, List, BookCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Dissertation Writing",
    description: "Complete Ph.D. and Master's dissertation support from topic selection to final defense.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    details: "Writing a dissertation is arguably the most significant academic challenge a student faces. It is not merely a long essay but a rigorous demonstration of independent research capabilities, critical thinking, and contribution to knowledge. Our Dissertation Writing Service is designed to provide end-to-end support, ensuring that every chapter meets the highest academic standards.",
    features: [
      "Topic Selection & Proposal",
      "Literature Review",
      "Methodology Design",
      "Data Collection & Analysis",
      "Discussion & Conclusion",
      "Complete chapter-wise support"
    ]
  },
  {
    icon: BookOpen,
    title: "Thesis Writing",
    description: "Master's & Undergraduate thesis support with expert guidance and quality assurance.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    details: "A thesis is the culmination of your degree, demanding a unique contribution to your field of study. While often similar to a dissertation, a thesis focuses heavily on demonstrating your mastery of the subject matter and your ability to conduct independent research.",
    features: [
      "Research proposal development",
      "Literature review writing",
      "Methodology chapter support",
      "Results and analysis",
      "Formatting and proofreading",
      "Defense preparation"
    ]
  },
  {
    icon: FileText,
    title: "Research Paper Services",
    description: "Expert assistance with research papers including data analysis and methodology.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    details: "Our expert writers help you craft compelling research papers that meet international publication standards. We provide comprehensive support from topic selection to final submission.",
    features: [
      "Topic selection assistance",
      "Literature search and review",
      "Research design and methodology",
      "Statistical analysis",
      "Manuscript writing and editing",
      "Journal submission support"
    ]
  },
  {
    icon: Search,
    title: "Review Papers / Systematic Review",
    description: "Comprehensive systematic reviews synthesizing seminal and contemporary studies.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    details: "Systematic reviews require rigorous methodology to identify, evaluate, and synthesize all relevant research on a particular question. Our experts guide you through this complex process.",
    features: [
      "Protocol development",
      "Literature search strategy",
      "Study selection and screening",
      "Data extraction",
      "Quality assessment",
      "Meta-analysis support"
    ]
  },
  {
    icon: FileCheck,
    title: "Editing & Peer Reviewing",
    description: "Professional editing and peer review services ensuring publication-ready manuscripts.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop",
    details: "Our expert editors provide comprehensive editing and peer review services to enhance the quality and clarity of your research work. We ensure your manuscripts meet international publication standards and are ready for journal submission.",
    features: [
      "Comprehensive manuscript editing",
      "Language and grammar correction",
      "Proofreading and formatting",
      "Peer review simulation",
      "Publication readiness check",
      "Citation and reference formatting"
    ]
  },
  {
    icon: LineChart,
    title: "Data Analysis",
    description: "Advanced statistical analysis using SPSS, R, STATA, and other tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    details: "Our statistical experts provide comprehensive data analysis services using advanced statistical tools. From survey design to complex statistical modeling, we handle it all.",
    features: [
      "Quantitative analysis (SPSS, R, STATA)",
      "Qualitative analysis (NVivo, ATLAS.ti)",
      "Regression analysis",
      "ANOVA and t-tests",
      "Structural Equation Modeling (SEM)",
      "Results interpretation"
    ]
  },
  {
    icon: CheckSquare,
    title: "Data Collection",
    description: "Primary and secondary data collection using validated research methodologies.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    details: "Effective data collection is crucial for research success. We help you design and implement robust data collection strategies.",
    features: [
      "Survey design",
      "Interview guide development",
      "Focus group planning",
      "Sampling strategy",
      "Pilot testing",
      "Data quality assurance"
    ]
  },

  {
    icon: List,
    title: "Thematic Analysis",
    description: "Qualitative data analysis using NVivo and ATLAS.ti for identifying themes.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    details: "We excel in thematic analysis, phenomenology, grounded theory, and ethnography. Our experts use NVivo and ATLAS.ti to code interview transcripts, identifying deep, latent themes.",
    features: [
      "Interview transcription",
      "Code development",
      "Theme identification",
      "NVivo/ATLAS.ti support",
      "Thematic mapping",
      "Results writing"
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our  <span className="text-primary">Services</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
                Specialized academic support tailored to your research needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Content - Sidebar Layout */}
        <section className="py-10 sm:py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Left Sidebar - Service List */}
              <div className="lg:w-1/4">
                <div className="bg-muted/30 rounded-lg p-3 sm:p-4 lg:sticky lg:top-24">
                  <h3 className="font-bold text-foreground mb-3 sm:mb-4 px-2 sm:px-4 text-sm sm:text-base">Major Services</h3>
                  <nav className="space-y-1">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedService(index)}
                        className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all flex items-center gap-2 sm:gap-3 ${
                          selectedService === index
                            ? 'bg-primary text-primary-foreground font-semibold'
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        <service.icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{service.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Right Content - Service Details */}
              <div className="lg:w-3/4">
                <Card className="border-2">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    {/* Service Image */}
                    <div className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden mb-4 sm:mb-6 md:mb-8">
                      <img
                        src={services[selectedService].image}
                        alt={services[selectedService].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* Hero Banner */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          {(() => {
                            const Icon = services[selectedService].icon;
                            return <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />;
                          })()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                            {services[selectedService].title}
                          </h2>
                          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">
                            {services[selectedService].description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Description */}
                    <div className="mb-6 sm:mb-8">
                      <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">
                        Professional {services[selectedService].title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {services[selectedService].details}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                        Structured Assistance
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {services[selectedService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-muted/30 p-3 sm:p-4 rounded-lg">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-xs sm:text-sm">✓</span>
                            </div>
                            <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {/* <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Link to="/contact" className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base">
                            Get Started
                          </button>
                        </Link>
                        <Link to="/contact" className="flex-1">
                          <button className="w-full bg-transparent border-2 border-primary text-primary px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base">
                            Contact Us
                          </button>
                        </Link>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Contact us today to discuss your research needs and find the perfect service package for your research journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base">
                  BOOK A CALL
                </button>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors text-sm sm:text-base">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
