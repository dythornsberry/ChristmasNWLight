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
        <div className="max-w-3xl">
          {/* Minimalist content */}
          <h1 className="font-serif text-6xl md:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-2xl">
            Premium Holiday Lighting, Zero Hassle
          </h1>
          
          <p className="text-2xl md:text-3xl mb-10 text-white leading-relaxed drop-shadow-lg">
            Sit back while we create your holiday wonderland.
          </p>

          {/* Single CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button 
              onClick={onGetQuote}
              size="lg" 
              className="text-lg font-bold px-10 py-6 h-auto"
              data-testid="button-hero-cta"
            >
              Request Free Design
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Compact trust badge */}
            <Badge variant="secondary" className="bg-white/95 text-foreground backdrop-blur-sm px-4 py-3 text-sm flex items-center gap-2 h-auto">
              <Shield className="w-4 h-4" />
              Licensed, Bonded & Insured • $800+
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
