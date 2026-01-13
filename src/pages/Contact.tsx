import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
              Have questions about our research mentoring services? We're here to help you succeed in your research journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
              <form className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Full Name *</Label>
                  <Input id="name" placeholder="Your full name" required className="text-sm" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required className="text-sm" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="text-sm" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" required className="text-sm" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your research needs..." 
                    rows={6}
                    required 
                    className="text-sm"
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  Reach out to us through any of these channels and our team will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">hello@rmcdr.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1">Phone</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 81094 47202</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">+91 88272 72142</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1">Office Address</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      407, 4th Floor, Atulya IT Park,<br />
                      Khandwa Road,<br />
                      Indore, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold mb-1">Business Hours</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold mb-2">Need Immediate Assistance?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  For urgent inquiries, use our WhatsApp button for instant support.
                </p>
                <Button variant="outline" className="w-full">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Schedule a call with our experts to discuss your research needs and how we can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer">
                BOOK A CALL
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-blue-500 hover:bg-white hover:text-primary w-full sm:w-auto">
              <a href="/services">View Services</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
