import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Check } from "lucide-react";
import warmWhiteHouse from '@assets/1-2-min_1762064533191_feature.webp';
import commercialWalkway from '@assets/Lit-walkway_1762708951439.jpg';

interface SimpleServicesProps {
  onGetQuote: () => void;
}

export default function SimpleServices({ onGetQuote }: SimpleServicesProps) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
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
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Christmas Lighting</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Custom holiday displays designed for your home. Professional installation, maintenance, takedown, and storage included.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Custom design consultation',
                  'Professional-grade LED lights',
                  'Maintenance all season long',
                  'Takedown & storage included'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-base text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={onGetQuote}
                className="w-full bg-primary text-primary-foreground"
                data-testid="button-service-christmas"
              >
                Get a Residential Quote
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
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Commercial & Large Properties</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grand displays for estates, businesses, and large properties. Make a statement with premium commercial-grade installations.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Large-scale custom designs',
                  'Commercial-grade equipment',
                  'Multi-building coordination',
                  'Flexible scheduling options'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-base text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={onGetQuote}
                className="w-full bg-primary text-primary-foreground"
                data-testid="button-service-commercial"
              >
                Plan a Large-Property Display
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
