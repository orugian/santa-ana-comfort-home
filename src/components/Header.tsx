
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: string;
}

export const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Nossa Essência" },
    { id: "services", label: "Cuidados" },
    { id: "routine", label: "Rotina Diária" },
    { id: "events", label: "Momentos" },
    { id: "contact", label: "Contato" }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                // keep using the existing helper to scroll smoothly
                scrollToSection('home');
              }}
              aria-label="Go to top"
              className="inline-flex items-center h-11 md:h-14 px-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <img
                src="/brand/lar-santa-ana-logo.png"
                alt="Lar Santa Ana"
                className="h-8 md:h-10 w-auto object-contain select-none block"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-accent-light ${
                  activeSection === item.id
                    ? "text-primary bg-accent-light"
                    : "text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button size="sm" variant="whatsapp">
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                      className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-primary bg-accent-light"
                      : "text-foreground hover:text-primary hover:bg-accent-light"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <Button size="sm" variant="whatsapp" className="justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
