import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "wouter";
import logoImage from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761850163163.png';

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center cursor-pointer">
              <img 
                src={logoImage} 
                alt="Christmas Northwest" 
                className="h-12 md:h-14 w-auto"
                data-testid="img-logo"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-about"
            >
              <Link href="/about">
                <a>About</a>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-services"
            >
              <Link href="/services">
                <a>Services</a>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-gallery"
            >
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-testimonials"
            >
              <Link href="/testimonials">
                <a>Testimonials</a>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-service-areas"
            >
              <Link href="/service-areas">
                <a>Service Areas</a>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="default"
              asChild
              data-testid="nav-contact"
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </Button>
          </nav>

          {/* Phone & CTA */}
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="tel:4252150935" 
              className="hidden md:flex items-center gap-2 text-base font-semibold text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md"
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
