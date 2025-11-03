import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761850163163.png';

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/about", label: "About", testId: "nav-about" },
    { href: "/services", label: "Services", testId: "nav-services" },
    { href: "/gallery", label: "Gallery", testId: "nav-gallery" },
    { href: "/product-guide", label: "Product Guide", testId: "nav-product-guide" },
    { href: "/investment-guide", label: "Investment Guide", testId: "nav-investment-guide" },
    { href: "/testimonials", label: "Testimonials", testId: "nav-testimonials" },
    { href: "/service-areas", label: "Service Areas", testId: "nav-service-areas" },
    { href: "/contact", label: "Contact", testId: "nav-contact" },
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
          <Link href="/">
            <div className="flex items-center cursor-pointer" onClick={handleNavClick}>
              <img 
                src={logoImage} 
                alt="Christmas Northwest" 
                className="h-16 md:h-20 w-auto"
                data-testid="img-logo"
              />
            </div>
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
              className="hidden md:flex items-center gap-2 text-base font-semibold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md whitespace-nowrap"
              data-testid="link-header-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">(425) 215-0935</span>
            </a>
            <Button 
              onClick={onGetQuote}
              className="bg-primary text-primary-foreground font-semibold"
              data-testid="button-header-quote"
            >
              Get a Quote
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
                <div className="flex flex-col gap-6 mt-8">
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
                      Get a Quote
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
