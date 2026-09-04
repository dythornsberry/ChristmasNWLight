import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2 } from "lucide-react";
import warmWhiteHouse from '@assets/optimized/residential-card.webp';
import commercialWalkway from '@assets/optimized/commercial-card.webp';

interface SimpleServicesProps {
  onGetQuote: () => void;
}

export default function SimpleServices({ onGetQuote }: SimpleServicesProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">What we light</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Residential Christmas Lighting */}
          <Card className="overflow-hidden group hover-elevate">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={warmWhiteHouse}
                alt="Classic Warm White Elegance - Residential Christmas Lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Christmas Lighting</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rooflines, trees, and accents—with installation, service, takedown, and storage included.
              </p>
              <Button 
                onClick={onGetQuote}
                className="w-full bg-primary text-primary-foreground"
                data-testid="button-service-christmas"
              >
                Get a Quote
              </Button>
            </div>
          </Card>

          {/* Commercial & Large Properties */}
          <Card className="overflow-hidden group hover-elevate">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={commercialWalkway}
                alt="Commercial Christmas Lighting - Lit Walkway"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={300}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Commercial & Large Properties</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Custom displays for estates, storefronts, offices, and multi-building properties.
              </p>
              <Button 
                onClick={onGetQuote}
                className="w-full bg-primary text-primary-foreground"
                data-testid="button-service-commercial"
              >
                Plan a Display
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
