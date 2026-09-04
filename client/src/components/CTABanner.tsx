import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  onGetQuote: () => void;
}

export default function CTABanner({ onGetQuote }: CTABannerProps) {
  return (
    <section id="quote" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="mb-5 font-serif text-4xl font-bold text-white sm:text-5xl">
          Ready for a quote?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
          Tell us what you want lit. We’ll handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="text-lg sm:text-xl font-bold border-2 border-white/40 bg-white text-primary shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
            onClick={onGetQuote}
            data-testid="button-cta-quote"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get My Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-2 border-white/40 bg-white/10 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:w-auto sm:text-xl"
          >
            <a href="tel:4252150935" data-testid="button-cta-call">
              <Phone className="mr-2 h-5 w-5" />
              (425) 215-0935
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
