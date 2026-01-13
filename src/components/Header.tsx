import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const servicesList = [
    "Dissertation Writing",
    "Thesis Writing",
    "Research Paper Services",
    "Review Papers / Systematic Review",
    "Editing & Peer Reviewing",
    "Data Analysis",
    "Data Collection",
    "Thematic Analysis",
  ];

  const navItems = [
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services", hasDropdown: true },
    { label: "TESTIMONIALS", href: "/testimonials" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact" },
   
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2 cursor-pointer">
            <div className="flex flex-col items-center">
              <img src="/rmc logo.png" alt="RMC Logo" className=" h-8 sm:h-10 md:h-12 w-auto object-contain" />
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-background border border-border rounded-lg shadow-xl z-50 p-6">
                      <h3 className="font-bold text-foreground mb-4 px-2">Our Services</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {servicesList.map((service, idx) => (
                          <Link
                            key={idx}
                            to="/services"
                            className="block px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button asChild className="ml-2">
              <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer">BOOK A CALL</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-10 w-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border space-y-1">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block py-3 px-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <a href="https://calendly.com/researchmentorclinic1/doctorate-call?month=2026-01" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  BOOK A CALL
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;