import { CURRENT_SEASON_YEAR } from "@/lib/business";

export default function UrgencyBanner() {
  return (
    <div className="flex h-9 items-center justify-center bg-brand-blue px-4 text-center text-xs font-medium text-white" data-testid="season-banner">
      Booking Christmas {CURRENT_SEASON_YEAR}
    </div>
  );
}
