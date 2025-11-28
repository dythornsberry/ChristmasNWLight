import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761493054119.png';

interface HeaderProps {
  onGetQuote: () => void;
}

export default function Header({ onGetQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="h-12">
              <img 
                src={logo} 
                alt="ChristmasNW" 
                className="h-full w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('services')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                About
              </button>
              <a 
                href="tel:4252150935"
                className={`font-medium transition-colors flex items-center gap-2 ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                }`}
              >
                <Phone className="w-4 h-4" />
                (425) 215-0935
              </a>
            </nav>

            <div className="hidden md:block">
              <Button 
                onClick={onGetQuote}
                className={isScrolled ? '' : 'bg-primary text-primary-foreground border border-primary-border'}
                data-testid="button-header-quote"
              >
                Light Up My Home ✨
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-foreground' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-foreground' : 'text-white'} />
              )}
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <a 
              href="tel:4252150935"
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              (425) 215-0935
            </a>
            <Button 
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onGetQuote();
              }}
            >
              Light Up My Home ✨
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
