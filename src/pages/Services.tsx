import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FileText, BarChart3, Users, Headphones, Database, BookOpen, Search, FileCheck, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Writing & Rewriting",
    description: "Talk to our experts to rewrite your thesis or manuscript at any stage of your research or from scratch.",
    details: "Our expert writers help you craft compelling research papers, dissertations, and theses. Whether you need complete writing from scratch or rewriting existing content, we ensure academic excellence and adherence to university guidelines.",
    features: [
      "Complete thesis/dissertation writing",
      "Chapter-wise writing support",
      "Literature review writing",
      "Research proposal development",
      "Manuscript rewriting and restructuring"
    ]
  },
  {
    icon: BarChart3,
    title: "Statistical Analysis",
    description: "Consult us for statistical analyses, biostatistics or coding & algorithm development-related services.",
    details: "Our statistical experts provide comprehensive data analysis services using advanced statistical tools and software. We help you interpret your research data and present meaningful results.",
    features: [
      "Quantitative data analysis",
      "Qualitative data analysis",
      "SPSS, R, Python, STATA support",
      "Biostatistical analysis",
      "Algorithm development and coding"
    ]
  },
  {
    icon: Users,
    title: "Peer Reviewing & Editing",
    description: "Our experts edit your thesis and manuscripts, ensuring that they are easy to understand and acceptable for publication.",
    details: "Get professional peer review and editing services to enhance the quality and clarity of your research work. Our editors ensure your work meets international publication standards.",
    features: [
      "Comprehensive manuscript editing",
      "Proofreading and formatting",
      "Language and grammar correction",
      "Peer review simulation",
      "Publication readiness check"
    ]
  },
  {
    icon: Headphones,
    title: "Consulting Services",
    description: "Need consultation services on an hourly basis, use our hire a research assistant service. Easy and flexible.",
    details: "Access expert consultation on-demand for your research queries. Our flexible hourly consulting service connects you with research assistants who can guide you through any research challenge.",
    features: [
      "One-on-one consultation sessions",
      "Research methodology guidance",
      "Topic selection assistance",
      "Flexible hourly rates",
      "Expert mentorship"
    ]
  },
  {
    icon: Database,
    title: "Data Science Service",
    description: "Leverage advanced data science techniques for your research. Get support in machine learning, AI, and big data analytics.",
    details: "Our data science team helps you implement cutting-edge analytical techniques including machine learning, deep learning, and AI-powered solutions for your research.",
    features: [
      "Machine learning model development",
      "AI implementation",
      "Big data analytics",
      "Data visualization",
      "Predictive modeling"
    ]
  },
  {
    icon: BookOpen,
    title: "Literature Review Support",
    description: "Comprehensive literature review services including article extraction, synthesis, and systematic review preparation.",
    details: "We help you conduct thorough literature reviews by identifying, extracting, and synthesizing relevant research articles for your study.",
    features: [
      "Article search and extraction",
      "Annotated bibliography",
      "Systematic literature review",
      "Meta-analysis support",
      "Literature synthesis"
    ]
  },
  {
    icon: Search,
    title: "Research Methodology",
    description: "Expert guidance on selecting and implementing the right research methodology for your study.",
    details: "Get comprehensive support in designing your research methodology, selecting appropriate methods, and ensuring rigorous academic standards.",
    features: [
      "Research design consultation",
      "Sampling strategy development",
      "Instrument development",
      "Validity and reliability testing",
      "Methodology chapter writing"
    ]
  },
  {
    icon: FileCheck,
    title: "Journal Submission Support",
    description: "Complete assistance with journal selection, manuscript preparation, and submission process management.",
    details: "Navigate the complex journal submission process with expert guidance. We help you select appropriate journals and prepare your manuscript for publication.",
    features: [
      "Journal selection and recommendation",
      "Manuscript formatting per journal guidelines",
      "Cover letter preparation",
      "Submission process management",
      "Revision support"
    ]
  },
  {
    icon: Award,
    title: "Viva Voce Preparation",
    description: "Comprehensive preparation and coaching for your PhD defense presentation and viva voce examination.",
    details: "Build confidence and prepare thoroughly for your thesis defense with our expert coaching and mock viva sessions.",
    features: [
      "Mock viva sessions",
      "Presentation skills training",
      "Question preparation",
      "Defense strategy development",
      "Communication coaching"
    ]
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive PhD research support services tailored to meet your academic needs at every stage of your research journey.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.details}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us today to discuss your research needs and find the perfect service package for your PhD journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Request a Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Contact Us
              </button>
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
