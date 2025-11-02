import { Button } from "@/components/ui/button";
import { Calendar, Phone, FileText } from "lucide-react";

interface StickyBottomCTAProps {
  onGetQuote: () => void;
}

export default function StickyBottomCTA({ onGetQuote }: StickyBottomCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="grid grid-cols-3 gap-2 md:gap-4">
          <Button 
            size="lg"
            variant="outline"
            className="flex-col h-auto py-3 gap-1"
            onClick={onGetQuote}
            data-testid="button-sticky-schedule"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs md:text-sm font-semibold">BOOK NOW</span>
          </Button>
          
          <Button 
            size="lg"
            className="flex-col h-auto py-3 gap-1 bg-primary text-primary-foreground"
            onClick={() => window.location.href = 'tel:4252150935'}
            data-testid="button-sticky-call"
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs md:text-sm font-semibold">CALL NOW</span>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="flex-col h-auto py-3 gap-1"
            onClick={onGetQuote}
            data-testid="button-sticky-quote"
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs md:text-sm font-semibold">FREE DESIGN</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
