import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Phone, Shield, Star } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87_optimized.webp";

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* MOBILE: stacked layout - image on top, content below */}
      <div className="lg:hidden">
        {/* Hero image - fully visible on mobile */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9]">
          <img
            src={heroImage}
            alt="Beautiful Christmas lights illuminating a Seattle-area home at dusk"
            className="h-full w-full object-cover object-[70%_center]"
            loading="eager"
            // @ts-expect-error -- React 18 doesn't map fetchPriority; lowercase is the valid HTML attr
            fetchpriority="high"
          />
          {/* Subtle bottom fade only - lets you see the lights */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Content below image */}
        <div className="px-5 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8">
          <Badge
            variant="secondary"
            className="mb-4 h-auto w-fit gap-2 border border-emerald-500/30 bg-emerald-600 px-3 py-2 text-xs text-white shadow-lg sm:text-sm"
          >
            <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            2026 booking is open
          </Badge>

          <h1 className="mb-4 font-serif text-[2.25rem] font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
            Beautiful holiday lighting without the hassle.
          </h1>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Design, installation, maintenance, takedown, and storage - all handled by one local team.
          </p>

          <div className="mb-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="w-full bg-primary text-base font-bold shadow-xl sm:w-auto sm:text-lg"
              data-testid="button-hero-cta"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:4252150935" className="block w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-600 bg-slate-800/60 text-sm text-white hover:bg-slate-700/60 sm:text-base"
              >
                <Phone className="mr-2 h-4 w-4" />
                (425) 215-0935
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>5.0 Google rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Licensed & insured</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>Quick response</span>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP: side-by-side split layout */}
      <div className="hidden lg:grid lg:min-h-[calc(100svh-3rem)] lg:grid-cols-[45%_55%]">
        {/* Left: content panel */}
        <div className="flex flex-col justify-center px-10 py-16 xl:px-16 xl:py-20">
          <Badge
            variant="secondary"
            className="mb-6 h-auto w-fit gap-2 border border-emerald-500/30 bg-emerald-600 px-4 py-2.5 text-sm text-white shadow-lg md:text-base"
          >
            <Clock className="h-4 w-4 md:h-5 md:w-5" />
            2026 booking is open
          </Badge>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Christmas light installation &bull; Seattle &amp; Eastside
          </p>

          <h1 className="mb-5 max-w-xl font-serif text-[3.5rem] font-black leading-[0.92] tracking-tight text-white xl:text-[4.25rem]">
            Beautiful holiday lighting without the hassle.
          </h1>

          <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-300 xl:text-xl">
            Design, installation, maintenance, takedown, and storage - all handled by one local team.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="bg-primary text-lg font-bold shadow-2xl transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]"
              data-testid="button-hero-cta"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:4252150935">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 bg-slate-800/60 text-base text-white hover:bg-slate-700/60"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (425) 215-0935
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-base text-slate-300">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>5.0 Google rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Licensed, bonded &amp; insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-400" />
              <span>Quick response during the season</span>
            </div>
          </div>
        </div>

        {/* Right: full hero image - NO overlay, lights fully visible */}
        <div className="relative">
          <img
            src={heroImage}
            alt="Beautiful Christmas lights illuminating a Seattle-area home at dusk"
            className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
            loading="eager"
            // @ts-expect-error -- React 18 doesn't map fetchPriority; lowercase is the valid HTML attr
            fetchpriority="high"
          />
          {/* Subtle left-edge blend into the dark panel */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  );
}
