import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, Star } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  image?: string;
}

interface ServicesProps {
  services: Service[];
  onLearnMore?: (serviceTitle: string) => void;
}

export default function Services({ services, onLearnMore }: ServicesProps) {
  const features = [
    {
      icon: Shield,
      title: "Long-Tenured Christmas Light Installers",
      description: "We have more than 5 years of experience providing personalized holiday lighting services using only premium materials."
    },
    {
      icon: Clock,
      title: "Fast Installation",
      description: "Most installations are completed in as little as one day, which means you'll be enjoying your lights in no time!"
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Christmas Northwest is fully licensed, bonded, and insured, so you can rest assured the work will be done correctly."
    },
    {
      icon: Star,
      title: "Full White-Glove Service",
      description: "Our American-made lights are crafted from durable materials and backed by our commitment to excellence. Complete design-to-storage service included."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Christmas Northwest?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Christmas Northwest, we know how frustrating it can be to struggle with tangled lights and ladder safety every year. We will help you find a solution by designing and installing gorgeous new holiday lighting that you will truly love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
