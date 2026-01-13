import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Mail, DollarSign, Clock } from "lucide-react";

const HireResearchAssistant = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hiring a <span className="text-primary">Research Assistant</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conducting Research work is an integral part of research scholar that requires in-depth knowledge of the research study, research methodology, research planning, execution and creative writing skills.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-muted-foreground leading-relaxed mb-6">
                There are many challenges a researcher face ranging from choosing an appropriate research topic, choosing the right method, data collection, compilation, and dealing with the statistical data analytical techniques for arriving at the relevant research findings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To conduct a proper research, research scholars necessitate scientific training in the methodology of research. Thus, conducting a valid research study can be a significant challenge to researchers, in particular for those with inadequate resources and time. As a researcher, you will require experienced secretarial assistants who are well-versed and trained in various aspects of conducting research studies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Doctoral students can utilize the best services of research assistants from Ph.D. Assistant to recruit research study participants and complete the process of data collection promptly to their utmost satisfaction. As a researcher, you need to independently spend more time to collect sufficient primary and secondary data in searching the multiple streams of information like surveys, the internet, legal documents and other published material sources. Research assistants utilize multiple sources of evidence to find the most appropriate information for your research study.
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                You can utilize the service of a <span className="text-primary">Research Assistant</span> to
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "To identify research gap",
                  "To formulate appropriate but generic topic based on the gap identified",
                  "To fine tune the topic at later stage of the research based on the findings",
                  "To conduct Literature Review. In the form of annotated bibliography followed by logical sequence based on the themes and sub-themes",
                  "To collate previously published papers including peer reviewed journal articles and text book publications",
                  "Develop research design, methodology and data collection procedure",
                  "Develop research survey tools such as questionnaire, or Interview guide or Focus Groups Design",
                  "Authenticate quality of data elements",
                  "Assess consistency of research study data",
                  "Identify and install relevant applications software as related to research requirements",
                  "Provide adequate support for performing research computation",
                  "Carry out studies relevant to research project",
                  "Make proper diagnosis and problem solving of the research study",
                  "Assist in recruiting and enrolling of study participants for a clinical research",
                  "Execute efficient scheduling of research study",
                  "Track research studies participation",
                  "Conduct relevant literature searches for data collection",
                  "Perform necessary experiments concerned with the research study",
                  "Tabulate research data collected and record results",
                  "Organize research manuscripts and investigation study presentations",
                  "Establish and maintain research databases",
                  "Referencing and formatting Services",
                  "Citation Quality Check",
                  "End-note referencing",
                  "Power point presentation for your Viva Voce"
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-16">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dedicated Research Assistants from <strong>'Ph.D. Assistant'</strong> facilitate you to focus on the core, innovative and creative part of your research work, by taking care of the usual preparatory and background secretarial tasks related to your study. They will collaborate with you and provide valuable insights and secretarial assistance, thereby allowing you to concentrate and work efficiently on the most important aspects of your research study with little stress.
              </p>
            </div>

            {/* Pricing and Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-2xl mb-2">$18/hour</h3>
                <p className="text-sm text-muted-foreground">Affordable hourly rate</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Flexible Hours</h3>
                <p className="text-sm text-muted-foreground">Work according to your schedule</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Support</h3>
                <p className="text-sm text-muted-foreground">PhD scholars and researchers</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-muted/30 rounded-lg p-6 mb-16">
              <p className="text-sm text-muted-foreground text-center">
                Research Assistants at Ph.D. Assistants are usually scholars who pursue their Ph.D. Degree or post-graduate research scholars who may have skills and aspire to conduct Ph.D. Research. Through the income offered through this service, they can able to support themselves during their Ph.D. programs.
              </p>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Contact</h2>
              <p className="text-center text-muted-foreground mb-8">
                For more details, write to us at <a href="mailto:info@phdassistance.com" className="text-primary font-semibold hover:underline">info@phdassistance.com</a>
              </p>
              
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="research-area">Research Area</Label>
                    <Input id="research-area" placeholder="e.g., Computer Science" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hours">Estimated Hours Needed</Label>
                  <Input id="hours" type="number" placeholder="e.g., 20 hours" />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Request a Research Assistant
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireResearchAssistant;
