import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import headerLogo from "@assets/optimized/logo-header.webp";

interface StickyHeaderProps {
  onGetQuote: () => void;
}

export default function StickyHeader({ onGetQuote }: StickyHeaderProps) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const navLinks = [
    { href: "/", label: "Home", testId: "nav-home" },
    { href: "/gallery", label: "Gallery", testId: "nav-gallery" },
    { href: "/investment-guide", label: "Pricing", testId: "nav-investment-guide" },
    { href: "/about", label: "About", testId: "nav-about" },
    { href: "/faq", label: "FAQ", testId: "nav-faq" },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setOpen(false);
  };

  return (
    <header className="sticky top-10 z-50 bg-card border-b border-border shadow-md">
      <div className="max-w-7xl mx-auto px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <Link href="/" onClick={handleNavClick} data-testid="link-logo" className="flex-shrink-0">
            <img
              src={headerLogo}
              alt="Christmas Northwest"
              className="h-9 sm:h-16 md:h-20 cursor-pointer"
              width={128}
              height={128}
              style={{
                maxHeight: '80px',
                minHeight: '36px',
                width: 'auto',
                display: 'block'
              }}
              decoding="async"
              data-testid="img-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                  variant={location === link.href ? "default" : "ghost"}
                  size="default"
              >
                <Link href={link.href} onClick={handleNavClick} data-testid={link.testId}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>

          {/* Right Side: Phone, CTA, Mobile Menu */}
          <div className="ml-auto flex items-center gap-1.5 sm:gap-2 md:gap-4">
            <a 
              href="tel:4252150935" 
              className="hidden md:flex items-center gap-2 text-sm md:text-base font-semibold text-foreground hover-elevate active-elevate-2 px-2 md:px-3 py-2 rounded-md whitespace-nowrap"
              data-testid="link-header-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(425) 215-0935</span>
            </a>
            <Button 
              onClick={onGetQuote}
              className="inline-flex h-9 bg-primary px-3 text-xs font-semibold text-primary-foreground sm:h-10 sm:px-4 sm:text-sm md:px-6"
              data-testid="button-header-quote"
            >
              <span>Get a Quote</span>
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 lg:hidden"
              data-testid="button-mobile-menu"
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-[70] bg-black/50 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="fixed inset-y-0 right-0 z-[80] w-[300px] max-w-[85vw] bg-background p-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <h2 id="mobile-navigation-title" className="font-serif text-2xl font-bold">Menu</h2>
              <Button variant="ghost" size="icon" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant={location === link.href ? "default" : "ghost"}
                  className="w-full justify-start text-lg"
                >
                  <Link href={link.href} onClick={handleNavClick} data-testid={`mobile-${link.testId}`}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <div className="mt-6 border-t border-border pt-6">
              <a
                href="tel:4252150935"
                className="mb-4 flex items-center gap-3 rounded-md px-4 py-3 text-lg font-semibold text-foreground hover-elevate active-elevate-2"
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
                className="w-full bg-primary text-lg font-semibold text-primary-foreground"
                data-testid="mobile-button-quote"
              >
                Get a Quote
              </Button>
            </div>
          </aside>
        </>
      ) : null}
    </header>
  );
}
