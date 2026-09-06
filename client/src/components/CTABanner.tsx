import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTABanner({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section id="quote" className="bg-[#17201c] py-14 text-white md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Your lights, taken care of.</h2>
          <p className="mt-3 text-base text-white/75">Tell us about your home. We’ll put together a quote.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Button size="lg" className="min-h-12 px-7 text-base font-semibold" onClick={onGetQuote} data-testid="button-cta-quote">
            Get a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <a href="tel:4252150935" className="inline-flex min-h-11 items-center text-sm text-white/85 hover:underline" data-testid="button-cta-call">(425) 215-0935</a>
        </div>
      </div>
    </section>
  );
}
