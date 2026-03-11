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
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/78 via-slate-950/42 to-slate-950/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/52 via-slate-950/8 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-black/22 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 md:px-6 md:pb-20 md:pt-28">
        <div className="max-w-2xl">
          <Badge
            variant="secondary"
            className="mb-5 h-auto w-fit gap-2 border border-white/20 bg-emerald-600 px-4 py-2.5 text-sm text-white shadow-xl md:text-base"
          >
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            2026 booking is open
          </Badge>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 md:text-sm [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
            Christmas light installation for Seattle and the Eastside
          </p>

          <h1 className="mb-5 font-serif text-[3.15rem] font-black leading-[0.96] tracking-[-0.04em] text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.55)] sm:text-6xl md:text-[4.7rem] lg:text-[5.2rem]">
            Beautiful holiday lighting without the hassle.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/96 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] md:text-[1.35rem]">
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

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white md:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]">
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
