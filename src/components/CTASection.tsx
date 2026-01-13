import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Research Journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Get expert guidance and personalized support for your research success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01">
                Book a Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-white text-primary  border-white hover:scale-105 transition-transform"
              asChild
            >
              <a href="/contact">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
