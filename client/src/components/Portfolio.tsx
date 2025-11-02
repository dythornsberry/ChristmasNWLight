import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

interface PortfolioProps {
  items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
  const [, setLocation] = useLocation();
  
  // Show only 6 featured premium photos for cleaner display
  const featuredItems = items.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Premium installations that transform homes into holiday showcases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover-elevate cursor-pointer shadow-lg"
              data-testid={`card-portfolio-${item.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Watermark */}
                <div 
                  className="absolute bottom-2 right-2 px-3 py-1 pointer-events-none z-10"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '0.375rem'
                  }}
                >
                  <p className="text-white text-xs font-semibold tracking-wide">
                    ChristmasNW.com
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6">
                <Badge variant="secondary" className="mb-3 border border-amber-500/20">
                  {item.category}
                </Badge>
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => setLocation('/gallery')}
            variant="default"
            size="lg"
            className="text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            data-testid="button-view-gallery"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <p className="text-base text-muted-foreground mt-4">
            Explore 38+ premium installations with category filtering
          </p>
        </div>
      </div>
    </section>
  );
}
