import { useState } from "react";
import { Menu, Search, X, ChevronDown } from "lucide-react";
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
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

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
                            <div className="grid grid-cols-3 gap-4 p-6 w-[800px] bg-white rounded-lg shadow-lg">
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
                                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
                            <ul className="w-48 p-3 bg-white rounded-lg shadow-lg">
                              {item.items?.map((subItem) => (
                                <li key={subItem}>
                                  <Link
                                    to={item.label === "RESOURCES" && subItem === "Blog" ? "/blog" : item.href}
                                    className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors duration-200"
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
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between py-3 text-sm font-medium ${
                        item.isHighlighted ? "text-primary" : "text-foreground"
                      }`}
                      onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                      aria-expanded={expandedMobileMenu === item.label}
                    >
                      {item.label}
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          expandedMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedMobileMenu === item.label && (
                      <div className="pl-4 pb-2 space-y-2 bg-muted/30 rounded-md mt-1 p-3">
                        {item.sections ? (
                          item.sections.map((section) => (
                            <div key={section.title} className="mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg">{section.icon}</span>
                                <h4 className="font-semibold text-xs">{section.title}</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {section.items.map((subItem) => (
                                  <li key={subItem}>
                                    <Link
                                      to="/services"
                                      className="block text-xs text-muted-foreground hover:text-foreground py-1.5"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <ul className="space-y-1.5">
                            {item.items?.map((subItem) => (
                              <li key={subItem}>
                                <Link
                                  to={item.href}
                                  className="block text-xs text-muted-foreground hover:text-foreground py-1.5"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-3 text-sm font-medium ${
                      item.isHighlighted ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;