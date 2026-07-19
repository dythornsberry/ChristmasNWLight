import { Phone } from "lucide-react";
import { CURRENT_SEASON_YEAR } from "@/lib/business";

export default function UrgencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-semibold">
          <span className="whitespace-nowrap sm:hidden">{CURRENT_SEASON_YEAR} booking now open</span>
          <span className="hidden sm:inline">Now Booking {CURRENT_SEASON_YEAR} Christmas Season - Reserve Your Spot</span>
          <a 
            href="tel:4252150935"
            className="ml-2 inline-flex items-center gap-1 hover:underline font-semibold"
            data-testid="link-urgency-call"
            aria-label="Call Christmas Northwest at (425) 215-0935"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">(425) 215-0935</span>
          </a>
        </div>
      </div>
    </div>
  );
}
