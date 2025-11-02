import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Houses", "Trees"];
  
  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Browse our portfolio of stunning Christmas light installations across the Pacific Northwest
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className="px-6 py-2 cursor-pointer text-sm"
                onClick={() => setSelectedCategory(category)}
                data-testid={`badge-filter-${category.toLowerCase()}`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover-elevate cursor-pointer"
              data-testid={`card-portfolio-${item.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* View Full Gallery CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => setLocation('/gallery')}
            variant="default"
            size="lg"
            className="bg-primary text-primary-foreground font-semibold"
            data-testid="button-view-gallery"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Browse all our installations with advanced filtering and lightbox view
          </p>
        </div>
      </div>
    </section>
  );
}
