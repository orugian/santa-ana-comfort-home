
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: string;
}

export const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch {
        // Fallback in rare cases
        window.location.hash = sectionId;
      }
    } else {
      // Absolute fallback: update hash so the browser tries to jump when it appears
      window.location.hash = sectionId;
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
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Brand / Logo */}
          <div className="flex items-center shrink-0">
            <button 
              onClick={() => scrollToSection("home")}
              className="focus:outline-none"
              aria-label="Ir para o topo da página"
            >
              <img
                src="/brand/lar-santa-ana-logo.png.png"
                alt="Lar Santa Ana"
                width={168}
                height={48}
                className="block h-16 md:h-20 w-auto object-contain select-none"
                loading="eager"
                decoding="async"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md hover:bg-accent-light ${
                    active ? "text-primary bg-accent-light" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button size="sm" variant="whatsapp" asChild>
              <a
                href="https://wa.me/551160243030?text=Ol%C3%A1%2C%20vim%20do%20site%20Lar%20Santa%20Ana%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir chat no WhatsApp"
                className="no-underline hover:no-underline"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                WhatsApp
              </a>
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
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      active ? "text-primary bg-accent-light" : "text-foreground hover:text-primary hover:bg-accent-light"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <Button size="sm" variant="whatsapp" className="justify-start" asChild>
                  <a
                    href="https://wa.me/551160243030?text=Ol%C3%A1%2C%20vim%20do%20site%20Lar%20Santa%20Ana%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir chat no WhatsApp"
                    className="no-underline hover:no-underline"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
