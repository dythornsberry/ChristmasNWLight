import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Phone, Shield, Sparkles, Star } from "lucide-react";
import { CURRENT_SEASON_YEAR, GOOGLE_RATING } from "@/lib/business";
import heroImage from "@assets/optimized/hero-real-desktop.webp";
import heroImageMobile from "@assets/optimized/hero-real-mobile.webp";

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="relative lg:min-h-[calc(100svh-3rem)]">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
          <picture className="block h-full w-full">
            <source media="(max-width: 1023px)" srcSet={heroImageMobile} />
            <img
              src={heroImage}
              alt="Warm white Christmas lights installed along a Seattle-area home's roofline, columns, and walkway"
              className="h-full w-full object-cover object-[62%_center] lg:object-center"
              width={1600}
              height={1000}
              loading="eager"
              // @ts-expect-error -- React 18 does not map fetchPriority; lowercase is valid HTML.
              fetchpriority="high"
            />
          </picture>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-slate-950 via-slate-950/85 via-35% to-transparent lg:block" />
        </div>

        <div className="relative px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 lg:flex lg:min-h-[calc(100svh-3rem)] lg:flex-col lg:justify-center lg:px-10 lg:py-16 xl:px-16 xl:py-20">
          <Badge
            variant="secondary"
            className="mb-4 h-auto w-fit gap-2 border border-emerald-500/40 bg-emerald-700 px-3 py-2 text-xs text-white shadow-lg sm:text-sm lg:mb-6 lg:px-4 lg:py-2.5 lg:text-base"
          >
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
            {CURRENT_SEASON_YEAR} booking is open
          </Badge>

          <p className="mb-3 hidden text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 lg:block">
            Christmas light installation &bull; Seattle &amp; Eastside
          </p>

          <h1 className="mb-4 max-w-xl font-serif text-[2.25rem] font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:mb-5 lg:text-[3.5rem] lg:leading-[0.92] xl:text-[4.25rem]">
            Professional Christmas Light Installation in Seattle
          </h1>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg lg:mb-8 lg:text-slate-200 xl:text-xl">
            Design, installation, maintenance, takedown, and storage—all handled by one local team.
          </p>

          <div className="mb-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3 lg:mb-8 lg:flex-wrap">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="w-full bg-primary text-base font-bold shadow-xl sm:w-auto sm:text-lg lg:shadow-2xl"
              data-testid="button-hero-cta"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get My Free Estimate
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-slate-500 bg-slate-800/60 text-sm text-white hover:bg-slate-700/60 sm:w-auto sm:text-base"
            >
              <a href="tel:4252150935">
                <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                <span className="lg:hidden">(425) 215-0935</span>
                <span className="hidden lg:inline">Call (425) 215-0935</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300 lg:gap-x-6 lg:gap-y-3 lg:text-base lg:text-slate-200">
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{GOOGLE_RATING} Google rating</span>
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Licensed, bonded &amp; insured</span>
            </div>
            <div className="flex items-center gap-1.5 lg:gap-2">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>Quick seasonal response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
