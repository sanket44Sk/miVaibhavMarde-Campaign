import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#home", label: "मुख्य पृष्ठ" },
  { href: "#about", label: "माझ्याबद्दल" },
  { href: "#vision", label: "दृष्टिकोन" },
  { href: "#contact", label: "संपर्क" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-saffron rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🪷</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-foreground text-sm md:text-base">वैभव शिवाजी मर्डे</p>
              <p className="text-xs text-muted-foreground">पंचायत समिती उमेदवार</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
            <Button className="ml-4 bg-gradient-saffron hover:opacity-90 shadow-button">
              पाठिंबा द्या
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <Button className="w-full bg-gradient-saffron hover:opacity-90 shadow-button">
                पाठिंबा द्या
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
