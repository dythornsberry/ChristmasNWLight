import { Button } from "@/components/ui/button";
import { Sparkles, Phone } from "lucide-react";

interface StickyBottomCTAProps {
  onGetQuote: () => void;
}

export default function StickyBottomCTA({ onGetQuote }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Mobile: Clean 2-button layout - main CTA + phone */}
        <div className="flex md:hidden gap-3">
          <Button 
            size="lg"
            className="flex-1 gap-2 bg-primary text-primary-foreground font-semibold"
            onClick={onGetQuote}
            data-testid="button-sticky-quote-mobile"
          >
            <Sparkles className="w-5 h-5" />
            Light Up My Home ✨
          </Button>
          <Button 
            size="icon"
            variant="outline"
            onClick={() => window.location.href = 'tel:4252150935'}
            data-testid="button-sticky-call-mobile"
          >
            <Phone className="w-5 h-5" />
          </Button>
        </div>

        {/* Desktop: Clean 2 options */}
        <div className="hidden md:flex gap-4 justify-center">
          <Button 
            size="lg"
            className="gap-2 bg-primary text-primary-foreground font-semibold"
            onClick={onGetQuote}
            data-testid="button-sticky-quote"
          >
            <Sparkles className="w-5 h-5" />
            Light Up My Home ✨
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => window.location.href = 'tel:4252150935'}
            data-testid="button-sticky-call"
          >
            <Phone className="w-5 h-5" />
            (425) 215-0935
          </Button>
        </div>
      </div>
    </div>
  );
}
