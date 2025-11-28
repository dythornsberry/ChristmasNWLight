import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Home, Sparkles, ArrowRight } from "lucide-react";

interface PriceEstimatorProps {
  onGetQuote: () => void;
}

const HOME_SIZES = [
  { 
    label: "Starter", 
    description: "Small home, simple roofline",
    minPrice: 800, 
    maxPrice: 1200,
    example: "Basic roofline with peaks"
  },
  { 
    label: "Classic", 
    description: "Average home, standard features",
    minPrice: 1200, 
    maxPrice: 1800,
    example: "Roofline + garage + bushes"
  },
  { 
    label: "Premium", 
    description: "Larger home, multiple features",
    minPrice: 1800, 
    maxPrice: 2500,
    example: "Full roofline + trees + yard accents"
  },
  { 
    label: "Estate", 
    description: "Large property, custom design",
    minPrice: 2500, 
    maxPrice: 4000,
    example: "Complete property transformation"
  },
  { 
    label: "Showcase", 
    description: "Go all out, maximum impact",
    minPrice: 4000, 
    maxPrice: 6000,
    example: "The full holiday experience"
  }
];

export default function PriceEstimator({ onGetQuote }: PriceEstimatorProps) {
  const [sizeIndex, setSizeIndex] = useState(1);
  const currentSize = HOME_SIZES[sizeIndex];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 border border-amber-500/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Instant Estimate
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What's My Home Going to Cost?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to get a ballpark estimate. Every home is unique, so we'll give you an exact quote after seeing your property.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-xl border-2 border-amber-500/10">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Home className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                {currentSize.label} Package
              </span>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-2">{currentSize.description}</p>
              <p className="text-sm text-muted-foreground italic">{currentSize.example}</p>
            </div>

            <div className="px-4 py-2">
              <Slider
                defaultValue={[1]}
                value={[sizeIndex]}
                onValueChange={(value) => setSizeIndex(value[0])}
                min={0}
                max={HOME_SIZES.length - 1}
                step={1}
                className="w-full cursor-pointer"
                data-testid="slider-price-estimator"
              />
              <div className="flex justify-between mt-3 text-sm text-muted-foreground">
                <span>Smaller</span>
                <span>Larger</span>
              </div>
            </div>

            <div className="text-center py-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground mb-2">Estimated Investment</p>
              <p className="text-4xl md:text-5xl font-bold text-primary" data-testid="text-price-estimate">
                {formatPrice(currentSize.minPrice)} - {formatPrice(currentSize.maxPrice)}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                All-inclusive: design, install, maintenance, takedown, storage
              </p>
            </div>

            <div className="text-center space-y-4">
              <Button 
                size="lg" 
                onClick={onGetQuote}
                className="text-lg font-semibold bg-primary text-primary-foreground"
                data-testid="button-estimator-quote"
              >
                Get My Exact Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free estimate, no obligation
              </p>
            </div>
          </div>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Prices based on typical installations. Your actual quote may vary based on roofline complexity, trees, and custom requests.
        </p>
      </div>
    </section>
  );
}
