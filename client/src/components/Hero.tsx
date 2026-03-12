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
        className="absolute inset-0 h-full w-full object-cover object-[66%_center]"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-950/62 via-50% to-slate-950/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/62 via-slate-950/18 to-slate-950/6" />
      <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-black/48 via-black/28 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[46%] bg-[radial-gradient(circle_at_22%_32%,rgba(15,23,42,0.36),rgba(15,23,42,0.12)_42%,transparent_72%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28">
        <div className="max-w-[40rem] rounded-[32px] bg-[linear-gradient(180deg,rgba(2,6,23,0.52),rgba(2,6,23,0.74))] px-6 py-7 shadow-[0_30px_90px_-44px_rgba(15,23,42,1)] ring-1 ring-white/10 backdrop-blur-[2px] md:px-8 md:py-9">
          <Badge
            variant="secondary"
            className="mb-5 h-auto w-fit gap-2 border border-white/20 bg-emerald-600 px-4 py-2.5 text-sm text-white shadow-xl md:text-base"
          >
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            2026 booking is open
          </Badge>

          <p className="mb-4 max-w-[32rem] text-xs font-semibold uppercase tracking-[0.2em] text-slate-100/95 md:text-sm">
            Christmas light installation for Seattle and the Eastside
          </p>

          <h1 className="mb-5 max-w-[32rem] font-serif text-[3rem] font-black leading-[0.94] tracking-[-0.04em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] sm:text-[4.35rem] md:text-[4.65rem] lg:text-[5rem]">
            Beautiful holiday lighting without the hassle.
          </h1>

          <p className="mb-8 max-w-[31rem] text-lg leading-relaxed text-slate-100 drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] md:text-[1.25rem]">
            Design, installation, maintenance, takedown, and storage handled by one local team.
          </p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="border border-white/15 bg-primary text-lg font-bold shadow-2xl transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]"
              data-testid="button-hero-cta"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:4252150935">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (425) 215-0935
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-100 md:text-base">
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
