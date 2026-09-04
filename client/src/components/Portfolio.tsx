import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  
  const featuredItems = items.slice(0, 3);

  return (
    <section id="portfolio" className="bg-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Recent work
          </h2>
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none pointer-events-none"
                  width={400}
                  height={300}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  loading="lazy"
                  decoding="async"
                />
                {/* Watermark */}
                <div 
                  className="absolute bottom-3 right-3 px-4 py-2 pointer-events-none z-10"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.65)',
                    borderRadius: '0.375rem'
                  }}
                >
                  <p className="text-white text-sm font-bold tracking-wide">
                    ChristmasNW.com
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* View Full Gallery CTA */}
        <div className="mt-10 text-center">
          <Button
            onClick={() => setLocation('/gallery')}
            variant="default"
            size="lg"
            className="text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            data-testid="button-view-gallery"
          >
            See Full Gallery
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
