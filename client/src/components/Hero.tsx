import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight, Clock, Award } from "lucide-react";
import heroImage from '@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87.png';

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      {/* Lighter gradient overlay to showcase the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          {/* Fast Installation Badge */}
          <Badge variant="secondary" className="bg-amber-500 text-white backdrop-blur-sm px-5 py-3 text-base flex items-center gap-2 h-auto mb-6 w-fit border-2 border-white/30 shadow-xl">
            <Clock className="w-5 h-5" />
            Same-Week Installation Available
          </Badge>
          
          {/* Minimalist content with enhanced typography */}
          <h1 className="font-serif text-7xl md:text-9xl font-black mb-8 leading-[0.95] tracking-tighter text-white drop-shadow-2xl">
            Premium Holiday Lighting, Zero Hassle
          </h1>
          
          <p className="text-2xl md:text-4xl mb-12 text-white/95 leading-relaxed drop-shadow-lg font-light">
            Sit back while we create your holiday wonderland.
          </p>

          {/* Single Premium CTA Button */}
          <div className="flex flex-col gap-6 items-start mb-8">
            <Button 
              onClick={onGetQuote}
              size="lg" 
              className="text-xl font-bold bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 border-2 border-white/20"
              data-testid="button-hero-cta"
            >
              Light Up My Home ✨
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <p className="text-white/90 text-lg font-medium" data-testid="text-pricing-range">
              Most homes $800-$2,000 • All-inclusive service
            </p>
          </div>
          
          {/* Enhanced Trust Badges */}
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto border border-amber-500/30">
              <Shield className="w-4 h-4 text-amber-600" />
              Licensed, Bonded & Insured
            </Badge>
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-600" />
              Free Takedown & Storage
            </Badge>
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto border border-amber-500/30">
              <Award className="w-4 h-4 text-amber-600" />
              5.0 Google Rating
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
