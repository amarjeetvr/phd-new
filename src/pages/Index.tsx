import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EngagementSection from "@/components/EngagementSection";
import EngagementModels from "@/components/EngagementModels";
import SolutionsSection from "@/components/SolutionsSection";
import SubjectsSection from "@/components/SubjectsSection";
import HowWeWork from "@/components/HowWeWork";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CountriesSection from "@/components/CountriesSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <EngagementSection /> */}
        {/* <EngagementModels /> */}
        <SolutionsSection />
        <CTASection />
        <SubjectsSection />
        <HowWeWork />
        <GuaranteeSection />
        <TestimonialsSection />
        {/* <CountriesSection /> */}
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;