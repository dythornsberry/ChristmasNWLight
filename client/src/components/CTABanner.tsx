import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

interface CTABannerProps {
  onGetQuote: () => void;
}

export default function CTABanner({ onGetQuote }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
          Begin Your Design Experience
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Schedule your complimentary designer consultation and discover how we transform homes into holiday showcases. 
          Limited availability—reserve your custom design today.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 border-white/30 bg-white text-primary"
            onClick={onGetQuote}
            data-testid="button-cta-quote"
          >
            Get Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 border-white/30 bg-white/10 text-white backdrop-blur-sm"
            onClick={() => window.location.href = 'tel:4252150935'}
            data-testid="button-cta-call"
          >
            <Phone className="mr-2 h-5 w-5" />
            (425) 215-0935
          </Button>
        </div>

        <p className="text-white/80 text-sm mt-6">
          Limited availability - Book early for the 2025 holiday season
        </p>
      </div>
    </section>
  );
}
