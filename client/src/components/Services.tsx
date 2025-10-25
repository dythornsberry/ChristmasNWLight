import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, Wrench } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  image: string;
}

interface ServicesProps {
  services: Service[];
  onLearnMore: (serviceTitle: string) => void;
}

export default function Services({ services, onLearnMore }: ServicesProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial properties, we bring professional holiday lighting to every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover-elevate cursor-pointer transition-all"
              onClick={() => onLearnMore(service.title)}
              data-testid={`card-service-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto font-semibold text-primary"
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
