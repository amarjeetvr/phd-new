import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/10 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let’s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Talk directly with our experts for research mentoring, doctorate guidance, and academic support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href="https://api.whatsapp.com/send/?phone=%2B918827272142&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a
                href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" /> Book Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Mail className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">hello@rmcdr.com</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 88272 72142</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold mb-1">Office</h3>
                <p className="text-sm text-muted-foreground">407, 4th Floor, Atulya IT Park, Khandwa Road, Indore, India</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition">
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto mb-4 h-8 w-8 text-primary" />
                <h3 className="font-semibold mb-1">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Mon–Sat, 10 AM – 6 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need Quick Guidance?
          </h2>
          <p className="text-sm sm:text-base mb-6 opacity-90">
            Our team is available on WhatsApp for instant support and consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918827272142&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start WhatsApp Chat
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
