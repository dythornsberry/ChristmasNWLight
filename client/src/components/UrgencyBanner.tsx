import { Phone } from "lucide-react";

export default function UrgencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
          <span className="hidden sm:inline">🎄</span>
          <span>Last-Minute Spots Available - Install This Week or Call Today</span>
          <a 
            href="tel:4252150935"
            className="ml-2 inline-flex items-center gap-1 hover:underline font-semibold"
            data-testid="link-urgency-call"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">(425) 215-0935</span>
          </a>
        </div>
      </div>
    </div>
  );
}
