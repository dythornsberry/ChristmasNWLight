import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock } from "lucide-react";

interface HeroProps {
  onGetQuote: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/api/placeholder/1920/1080')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        {/* Limited Time Offer Banner */}
        <div className="inline-flex items-center gap-3 bg-primary/90 backdrop-blur-sm px-8 py-4 rounded-lg mb-8 border-2 border-primary-border shadow-2xl" data-testid="banner-hero-offer">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <span className="text-2xl md:text-3xl font-bold">10% OFF</span>
            <div className="h-8 w-px bg-primary-foreground/30 hidden md:block" />
            <div className="text-center md:text-left">
              <div className="text-lg md:text-xl font-semibold">October Installations</div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base text-primary-foreground/90">
                <Clock className="w-4 h-4" />
                <span>Offer Ends October 31st - Book Now!</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Greater Seattle's Premier<br />Holiday Lighting Designers
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Transform your home with designer holiday lighting, crafted with artistry and executed with white-glove service. Complete design-to-storage solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-primary text-primary-foreground border border-primary-border"
            onClick={onGetQuote}
            data-testid="button-hero-quote"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-call"
            onClick={() => window.location.href = 'tel:4252150935'}
          >
            <Phone className="mr-2 h-5 w-5" />
            (425) 215-0935
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center text-sm md:text-base">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Designer Quality & Detail</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>24/7 Seasonal Availability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Complete White-Glove Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
