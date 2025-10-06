import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft transition-smooth">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/lovable-uploads/4c990c9b-a3b2-4e9d-9d30-233fe423761c.png"
                alt="Amplima Consultoria - Consultoria Organizacional"
                className="h-12 w-auto transition-smooth hover:scale-105"
              />
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("profipe")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Programa Profipe
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-foreground hover:text-primary transition-smooth font-medium"
                >
                  Contato
                </button>
              </div>
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <Button variant="hero" asChild>
                <a href="https://wa.me/5563999354511">
                  Fale Conosco
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary transition-smooth"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-soft border-t">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("profipe")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Programa Profipe
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2">
                <Button variant="hero" asChild className="w-full">
                  <a href="https://wa.me/5563999354511">
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
  );
};

export default Header;