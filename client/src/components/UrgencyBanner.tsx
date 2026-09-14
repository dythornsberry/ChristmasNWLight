import { CURRENT_SEASON_YEAR } from "@/lib/business";

export default function UrgencyBanner() {
  return (
    <div className="flex h-9 items-center justify-center bg-primary px-4 text-center text-xs font-medium text-primary-foreground">
      Booking Christmas {CURRENT_SEASON_YEAR}
    </div>
  );
}
