import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Phone, Shield, Star } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87_optimized.webp";

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-3rem)] items-center overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[74%_center] sm:object-[66%_center]"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/74 via-55% to-slate-950/14 sm:from-slate-950/88 sm:via-slate-950/62 sm:to-slate-950/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/24 to-slate-950/8 sm:from-slate-950/62 sm:via-slate-950/18 sm:to-slate-950/6" />
      <div className="absolute inset-y-0 left-0 w-[88%] bg-gradient-to-r from-black/56 via-black/32 to-transparent sm:w-[62%] sm:from-black/48 sm:via-black/28" />
      <div className="absolute inset-y-0 left-0 w-[70%] bg-[radial-gradient(circle_at_24%_34%,rgba(15,23,42,0.54),rgba(15,23,42,0.2)_46%,transparent_76%)] sm:w-[46%] sm:bg-[radial-gradient(circle_at_22%_32%,rgba(15,23,42,0.36),rgba(15,23,42,0.12)_42%,transparent_72%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-20 sm:px-5 sm:pb-16 sm:pt-24 md:px-6 md:pb-20 md:pt-28">
        <div className="max-w-[22rem] rounded-[28px] bg-[linear-gradient(180deg,rgba(2,6,23,0.72),rgba(2,6,23,0.82))] px-4 py-5 shadow-[0_30px_90px_-44px_rgba(15,23,42,1)] ring-1 ring-white/10 backdrop-blur-[3px] sm:max-w-[25rem] sm:px-6 sm:py-7 md:max-w-[40rem] md:rounded-[32px] md:bg-[linear-gradient(180deg,rgba(2,6,23,0.52),rgba(2,6,23,0.74))] md:px-8 md:py-9">
          <Badge
            variant="secondary"
            className="mb-4 h-auto w-fit gap-2 border border-white/20 bg-emerald-600 px-3 py-2 text-xs text-white shadow-xl sm:px-4 sm:py-2.5 sm:text-sm md:mb-5 md:text-base"
          >
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            2026 booking is open
          </Badge>

          <p className="mb-3 max-w-[18rem] text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-100/95 sm:max-w-[22rem] sm:text-xs sm:tracking-[0.2em] md:mb-4 md:max-w-[32rem] md:text-sm">
            Christmas light installation for Seattle and the Eastside
          </p>

          <h1 className="mb-4 max-w-[18rem] font-serif text-[2.35rem] font-black leading-[0.92] tracking-[-0.045em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] sm:mb-5 sm:max-w-[22rem] sm:text-[3.15rem] md:max-w-[32rem] md:text-[4.65rem] lg:text-[5rem]">
            Beautiful holiday lighting without the hassle.
          </h1>

          <p className="mb-6 max-w-[18.5rem] text-[1rem] leading-relaxed text-slate-100 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:max-w-[24rem] sm:text-lg md:mb-8 md:max-w-[31rem] md:text-[1.25rem]">
            Design, installation, maintenance, takedown, and storage handled by one local team.
          </p>

          <div className="mb-5 flex flex-col gap-2.5 sm:mb-6 sm:gap-3 sm:flex-row">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="w-full border border-white/15 bg-primary text-base font-bold shadow-2xl transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] sm:w-auto sm:text-lg"
              data-testid="button-hero-cta"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:4252150935" className="block w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/25 bg-white/10 text-sm text-white hover:bg-white/15 sm:text-base"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (425) 215-0935
              </Button>
            </a>
          </div>

          <div className="grid gap-2 text-[0.82rem] text-slate-100 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>5.0 Google rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-300" />
              <span>Licensed, bonded, and insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-300" />
              <span>Quick response during the season</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
