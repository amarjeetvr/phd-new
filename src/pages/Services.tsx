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
        <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our  <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Specialized academic support tailored to your research needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Content - Sidebar Layout */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Service List */}
              <div className="lg:w-1/4">
                <div className="bg-muted/30 rounded-lg p-4 sticky top-24">
                  <h3 className="font-bold text-foreground mb-4 px-4">Major Services</h3>
                  <nav className="space-y-1">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedService(index)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                          selectedService === index
                            ? 'bg-primary text-primary-foreground font-semibold'
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        <service.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm">{service.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Right Content - Service Details */}
              <div className="lg:w-3/4">
                <Card className="border-2">
                  <CardContent className="p-8">
                    {/* Hero Banner */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          {(() => {
                            const Icon = services[selectedService].icon;
                            return <Icon className="h-8 w-8 text-primary" />;
                          })()}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-foreground">
                            {services[selectedService].title}
                          </h2>
                          <p className="text-muted-foreground mt-1">
                            {services[selectedService].description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Description */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        Professional {services[selectedService].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {services[selectedService].details}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Structured Assistance
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {services[selectedService].features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-lg">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary font-bold text-sm">✓</span>
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-8 border-t border-border">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="flex-1">
                          <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                            Get Started
                          </button>
                        </Link>
                        <Link to="/contact" className="flex-1">
                          <button className="w-full bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                            Contact Us
                          </button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss your research needs and find the perfect service package for your research journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                  BOOK A CALL
                </button>
              </a>
              <Link to="/contact">
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
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
