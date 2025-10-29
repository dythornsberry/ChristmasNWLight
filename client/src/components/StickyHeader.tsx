import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-primary">Christmas Northwest</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('services')}
              data-testid="nav-services"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('portfolio')}
              data-testid="nav-portfolio"
            >
              Portfolio
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('colors')}
              data-testid="nav-colors"
            >
              Color Options
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('about')}
              data-testid="nav-about"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              data-testid="nav-contact"
            >
              Contact
            </Button>
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="tel:4252150935" 
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="link-header-phone"
            >
              <Phone className="w-4 h-4" />
              <span>(425) 215-0935</span>
            </a>
            <Button 
              onClick={onGetQuote}
              className="bg-primary text-primary-foreground font-semibold"
              data-testid="button-header-quote"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
