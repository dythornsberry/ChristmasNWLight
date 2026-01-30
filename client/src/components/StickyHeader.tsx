import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761493054119.png';

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home", testId: "nav-home" },
    { href: "/gallery", label: "Gallery", testId: "nav-gallery" },
    { href: "/permanent-lighting", label: "Permanent Lighting", testId: "nav-permanent" },
    { href: "/investment-guide", label: "Pricing", testId: "nav-investment-guide" },
    { href: "/about", label: "About", testId: "nav-about" },
    { href: "/faq", label: "FAQ", testId: "nav-faq" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="sticky top-10 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" onClick={handleNavClick} data-testid="link-logo" className="flex-shrink-0">
            <img 
              src={logoImage} 
              alt="Christmas Northwest" 
              className="h-16 md:h-20 cursor-pointer"
              style={{ 
                maxHeight: '80px', 
                minHeight: '64px',
                width: 'auto',
                display: 'block'
              }}
              data-testid="img-logo"
              onError={(e) => console.error('Logo failed to load:', e)}
              onLoad={(e) => {
                console.log('Logo loaded successfully', {
                  width: (e.target as HTMLImageElement).width,
                  height: (e.target as HTMLImageElement).height,
                  naturalWidth: (e.target as HTMLImageElement).naturalWidth,
                  naturalHeight: (e.target as HTMLImageElement).naturalHeight
                });
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button 
                  variant={location === link.href ? "default" : "ghost"}
                  size="default"
                  onClick={handleNavClick}
                  data-testid={link.testId}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Right Side: Phone, CTA, Mobile Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="tel:4252150935" 
              className="md:flex items-center gap-2 text-sm md:text-base font-semibold text-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-2 rounded-md whitespace-nowrap"
              data-testid="link-header-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(425) 215-0935</span>
            </a>
            <Button 
              onClick={onGetQuote}
              className="bg-primary text-primary-foreground font-semibold"
              data-testid="button-header-quote"
            >
              Light Up My Home ✨
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="lg:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-serif">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <Button
                        variant={location === link.href ? "default" : "ghost"}
                        className="w-full justify-start text-lg"
                        onClick={handleNavClick}
                        data-testid={`mobile-${link.testId}`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                  
                  <div className="border-t border-border pt-6 mt-2">
                    <a 
                      href="tel:4252150935"
                      className="flex items-center gap-3 text-lg font-semibold text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md mb-4"
                      data-testid="mobile-link-phone"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(425) 215-0935</span>
                    </a>
                    <Button 
                      onClick={() => {
                        setOpen(false);
                        onGetQuote();
                      }}
                      size="lg"
                      className="w-full bg-primary text-primary-foreground font-semibold text-lg"
                      data-testid="mobile-button-quote"
                    >
                      Light Up My Home ✨
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
