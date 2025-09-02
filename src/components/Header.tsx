import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:6399354511"
              className="flex items-center gap-1 hover:text-primary-foreground transition-smooth"
            >
              <Phone size={14} />
              (63) 9 9935-4511
            </a>
            <a
              href="mailto:anamarciaperes73@gmail.com"
              className="flex items-center gap-1 hover:text-primary-foreground transition-smooth"
            >
              <Mail size={14} />
              anamarciaperes73@gmail.com
            </a>
          </div>
          <div className="hidden sm:flex items-center">
            <a
              href="https://instagram.com/anamarciaperes73"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-smooth"
            >
              @anamarciaperes73
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-soft transition-smooth"
        style={{ marginTop: "40px" }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/lovable-uploads/4c990c9b-a3b2-4e9d-9d30-233fe423761c.png"
                alt="Amplima Consultoria - Consultoria Organizacional"
                className="h-8 w-auto transition-smooth hover:scale-105"
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
    </>
  );
};

export default Header;