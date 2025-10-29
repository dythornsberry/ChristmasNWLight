import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "wouter";

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer">
              <h1 className="text-xl md:text-2xl font-bold text-primary">Christmas Northwest</h1>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/about">
              <Button 
                variant="ghost" 
                size="sm"
                data-testid="nav-about"
                asChild
              >
                <a>About</a>
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="ghost" 
                size="sm"
                data-testid="nav-services"
                asChild
              >
                <a>Services</a>
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button 
                variant="ghost" 
                size="sm"
                data-testid="nav-testimonials"
                asChild
              >
                <a>Testimonials</a>
              </Button>
            </Link>
            <Link href="/service-areas">
              <Button 
                variant="ghost" 
                size="sm"
                data-testid="nav-areas"
                asChild
              >
                <a>Service Areas</a>
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="ghost" 
                size="sm"
                data-testid="nav-contact"
                asChild
              >
                <a>Contact</a>
              </Button>
            </Link>
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
