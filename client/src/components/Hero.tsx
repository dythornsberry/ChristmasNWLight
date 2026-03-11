import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Clock, Award, Phone, Star } from "lucide-react";
import heroImage from '@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87_optimized.webp';

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100svh-3rem)] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/45 to-sky-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%)]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-2xl rounded-[28px] border border-white/15 bg-black/20 p-6 md:p-8 shadow-2xl backdrop-blur-sm">
          <Badge variant="secondary" className="bg-emerald-600 text-white backdrop-blur-sm px-4 py-2.5 text-sm md:text-base flex items-center gap-2 h-auto mb-5 w-fit border border-white/20 shadow-xl">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            2026 early bird dates are open
          </Badge>

          <p className="text-white/75 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Christmas light installation for Seattle and the Eastside
          </p>

          <h1 className="font-serif text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.1rem] font-black mb-5 leading-[0.94] tracking-[-0.04em] text-white drop-shadow-2xl">
            Premium holiday lighting without the ladder, storage, or stress.
          </h1>

          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-xl">
            Custom design, professional installation, in-season maintenance, takedown, and storage for homeowners who want a polished display and a fast response.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button 
              onClick={onGetQuote}
              size="lg" 
              className="text-lg font-bold bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.35)] transition-all duration-300 border border-white/15"
              data-testid="button-hero-cta"
            >
              Get My Free Estimate
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="tel:4252150935">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/25 bg-white/10 text-white hover:bg-white/15"
              >
                <Phone className="mr-2 h-5 w-5" />
                (425) 215-0935
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap mb-6">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
              <div className="text-sm font-semibold">Most homes</div>
              <div className="text-white/80 text-sm">$800-$2,000</div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                5.0 Google rating
              </div>
              <div className="text-white/80 text-sm">85+ reviews</div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
              <div className="text-sm font-semibold">Full service</div>
              <div className="text-white/80 text-sm">Install, maintain, remove</div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white">
              <div className="text-sm font-semibold">Service area</div>
              <div className="text-white/80 text-sm">Seattle, Bellevue, Kirkland, Bothell</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto border border-amber-500/30">
              <Shield className="w-4 h-4 text-amber-600" />
              Licensed, Bonded & Insured
            </Badge>
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-600" />
              Free Takedown & Storage
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
