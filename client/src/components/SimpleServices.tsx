import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Sun, Check } from "lucide-react";

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
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=800&q=80"
                alt="Residential Christmas Lighting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
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
                Get Free Quote
              </Button>
            </div>
          </Card>

          {/* Year-Round Services */}
          <Card className="overflow-hidden group hover-elevate">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Year-Round Outdoor Services"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Year-Round Services</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Keep your property beautiful all year with gutter maintenance, permanent lighting, and landscape illumination.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Gutter & roof maintenance',
                  'Permanent outdoor lighting',
                  'Landscape & event lighting',
                  'Professional consultation'
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={onGetQuote}
                variant="outline"
                className="w-full"
                data-testid="button-service-yearround"
              >
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
