import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

interface CTABannerProps {
  onGetQuote: () => void;
}

export default function CTABanner({ onGetQuote }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white">
          Ready to Light Up Your Home?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-3xl mx-auto">
          Get your free design estimate and see how we transform homes into holiday showcases.
          Spots fill fast once fall arrives.
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
            Get My Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <a href="tel:4252150935">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg sm:text-xl font-bold border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              data-testid="button-cta-call"
            >
              <Phone className="mr-2 h-5 w-5" />
              (425) 215-0935
            </Button>
          </a>
        </div>

        <p className="text-white/80 text-sm sm:text-base mt-8">
          Early reservations get first choice of installation dates
        </p>
      </div>
    </section>
  );
}
