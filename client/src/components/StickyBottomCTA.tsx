import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

interface StickyBottomCTAProps {
  onGetQuote: () => void;
}

export default function StickyBottomCTA({ onGetQuote }: StickyBottomCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
        <div className="flex gap-3">
          <Button 
            size="lg"
            className="flex-1 gap-2 bg-primary text-primary-foreground font-semibold"
            onClick={onGetQuote}
            data-testid="button-sticky-quote-mobile"
          >
            <Sparkles className="w-5 h-5" />
            Get My Quote
          </Button>
          <a href="tel:4252150935" data-testid="button-sticky-call-mobile">
            <Button 
              size="icon"
              variant="outline"
              className="h-11 w-11"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
