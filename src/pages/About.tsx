import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutSection />
        
        {/* CTA Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
              Let us help you achieve your academic goals with our expert mentoring and support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer">
                  BOOK A CALL
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-primary w-full sm:w-auto">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
