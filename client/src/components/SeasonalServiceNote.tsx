import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Short "good to know" box that heads off the two most common wrong-fit
 * inquiries: permanent/year-round lighting and customer-provided lights.
 */
export default function SeasonalServiceNote({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-muted/40 p-4 text-left sm:p-5",
        className,
      )}
      data-testid="seasonal-service-note"
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <p className="text-sm leading-6 text-muted-foreground">
        <span className="font-semibold text-foreground">All-inclusive seasonal service.</span>{" "}
        We install, maintain, take down, and store our own commercial-grade LED lights — everything's
        included. We don't offer permanent/year-round lighting, and we can't install
        customer-provided lights.
      </p>
    </div>
  );
}
