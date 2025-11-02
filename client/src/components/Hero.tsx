import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowRight } from "lucide-react";
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
          {/* Minimalist content with enhanced typography */}
          <h1 className="font-serif text-7xl md:text-9xl font-black mb-8 leading-[0.95] tracking-tighter text-white drop-shadow-2xl">
            Premium Holiday Lighting, Zero Hassle
          </h1>
          
          <p className="text-2xl md:text-4xl mb-12 text-white/95 leading-relaxed drop-shadow-lg font-light">
            Sit back while we create your holiday wonderland.
          </p>

          {/* Single Premium CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Button 
              onClick={onGetQuote}
              size="lg" 
              className="text-xl font-bold px-12 py-7 h-auto bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 border-2 border-white/20"
              data-testid="button-hero-cta"
            >
              Request Free Design
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            {/* Compact trust badge with gold accent */}
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-5 py-4 text-base flex items-center gap-2 h-auto border border-amber-500/30">
              <Shield className="w-5 h-5 text-amber-600" />
              Licensed, Bonded & Insured • $800+
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
