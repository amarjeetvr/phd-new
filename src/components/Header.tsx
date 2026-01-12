import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT US", href: "/about", scrollTo: false },
    {
      label: "SERVICES",
      href: "#services",
      hasDropdown: true,
      sections: [
        {
          icon: "🧑‍🏫",
          title: "1-on-1 Mentoring",
          items: [
            "Research Proposal",
            "Literature Review",
            "Concept Paper",
            "Dissertation Special Mentorship",
            "Defence ( Viva Voce ) Preparation",
            "Research Topic Selection",
            "Quantitative Data Analysis",
            "Qualitative Data Analysis",
            "AI Experiments",
          ],
        },
        {
          icon: "🎓",
          title: "Teach Me Bootcamp",
          items: [
            "Concept Paper Bootcamp",
            "Literature Overview Bootcamp",
            "Research Proposal Bootcamp",
          ],
        },
        {
          icon: "⏱️",
          title: "Time Saver Services",
          items: [
            "Editing and Proofreading",
            "Formatting Services",
            "Research Data Analysis Services",
            "AI Coding",
          ],
        },
      ],
    },
    {
      label: "INDUSTRIES",
      href: "#industries",
      hasDropdown: true,
      items: ["Computer Science", "Medicine", "Engineering", "Economics", "Education"],
    },
    {
      label: "RESOURCES",
      href: "#resources",
      hasDropdown: true,
      items: ["Blog", "Sample Works", "FAQs", "Testimonials"],
    },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "#contact" },
    { label: "HIRE A RESEARCH ASSISTANT", href: "#hire", isHighlighted: true },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">PhD</span>
              </div>
              <span className="text-[10px] text-muted-foreground">Research Lab</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">PhD Assistance</span>
              <span className="text-xs text-muted-foreground">Your Trusted Mentor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger
                          className={`text-xs font-medium ${
                            item.isHighlighted
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {item.sections ? (
                            <div className="grid grid-cols-3 gap-4 p-6 w-[800px]">
                              {item.sections.map((section) => (
                                <div key={section.title}>
                                  <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">{section.icon}</span>
                                    <h3 className="font-semibold text-sm">{section.title}</h3>
                                  </div>
                                  <ul className="space-y-2">
                                    {section.items.map((subItem) => (
                                      <li key={subItem}>
                                        <Link
                                          to="/services"
                                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                          {subItem}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="grid w-48 gap-1 p-2">
                              {item.items?.map((subItem) => (
                                <li key={subItem}>
                                  <Link
                                    to="/services"
                                    className="block px-3 py-2 text-sm hover:bg-muted rounded-md"
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 text-xs font-medium ${
                          item.isHighlighted
                            ? "text-primary font-semibold"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-3 text-sm font-medium ${
                  item.isHighlighted ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;