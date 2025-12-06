import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ventyLogo from "@/assets/venty-logo.png";
import { getWhatsAppUrl } from "./WhatsAppButton";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const navLinks = [
    { href: "servicios", label: "Servicios" },
    { href: "beneficios", label: "Beneficios" },
    { href: "planes", label: "Planes" },
    { href: "contacto", label: "Contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
          <img src={ventyLogo} alt="Venty" className="h-10 w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => setIsLoginModalOpen(true)}>
            Iniciar Sesión
          </Button>
          <Button size="sm" asChild>
            <a href={getWhatsAppUrl("Hola, quiero una prueba gratis de Venty")} target="_blank" rel="noopener noreferrer">
              Prueba Gratis
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-primary font-medium py-2 text-left"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full" onClick={() => setIsLoginModalOpen(true)}>
                Iniciar Sesión
              </Button>
              <Button className="w-full" asChild>
                <a href={getWhatsAppUrl("Hola, quiero una prueba gratis de Venty")} target="_blank" rel="noopener noreferrer">
                  Prueba Gratis
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Header;
