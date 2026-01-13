import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-background">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
  <img
    src="/logo-footer.png"
    alt="RMC Logo"
    className="h-10 sm:h-15 md:h-20 w-auto object-contain"
  />
</div>

            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Research Mentor Clinic travels as part of your research journey 
              by supervising and mentoring researchers across the globe.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <Button variant="ghost" size="icon" className="hover:bg-background/10 h-9 w-9 sm:h-10 sm:w-10" asChild>
                <a href="https://www.facebook.com/people/Research-Mentor-Clinic/61559129450575/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="icon" className="hover:bg-background/10 h-9 w-9 sm:h-10 sm:w-10" asChild>
                <a href="https://www.instagram.com/researchmentorclinic/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button> */}
              <Button variant="ghost" size="icon" className="hover:bg-background/10 h-9 w-9 sm:h-10 sm:w-10" asChild>
                <a href="https://www.linkedin.com/company/research-mentor-clinic/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 h-9 w-9 sm:h-10 sm:w-10" asChild>
                <a href="https://youtube.com/@research_mentor_clinic?si=IfEnqMS4ylWAuAtK" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 h-9 w-9 sm:h-10 sm:w-10" asChild>
                <a href="https://api.whatsapp.com/send/?phone=%2B918827272142&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm opacity-80">
              <li><Link to="/about" className="hover:text-primary transition-colors inline-block py-1">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Services</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors inline-block py-1">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors inline-block py-1">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors inline-block py-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm opacity-80">
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Dissertation Writing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Thesis Writing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Research Paper Services</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Review Papers / Systematic Review</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Editing & Peer Reviewing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Data Analysis</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Data Collection</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors inline-block py-1">Thematic Analysis</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="break-all">hello@rmcdr.com</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="break-words"> +91 88272 72142</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 text-primary flex-shrink-0" />
                <span className="break-words">407, 4th Floor, Atulya IT Park, Khandwa Road, Indore, India</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <p className="text-sm mb-3">Subscribe to Newsletter</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 text-sm flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm opacity-70 text-center md:text-left">
            <p>© 2024 Research Mentor Clinic. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;