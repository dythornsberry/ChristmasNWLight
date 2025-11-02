import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, Star, Package, Sparkles } from "lucide-react";

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
      title: "Safety & Peace of Mind",
      description: "No ladders, no risk. Our licensed, bonded, and insured professionals handle everything safely while you relax and enjoy the season."
    },
    {
      icon: Star,
      title: "Superior Commercial-Grade Materials",
      description: "We use only premium LED lights built to withstand the Pacific Northwest weather—brilliant, energy-efficient, and designed to last."
    },
    {
      icon: Clock,
      title: "Time Savings & Stress-Free Experience",
      description: "Most installations completed within a week of booking. From design consultation to takedown, we handle it all so you don't lift a finger."
    },
    {
      icon: Sparkles,
      title: "Maintenance Included",
      description: "Lights go out mid-season? We've got you covered with complimentary in-season maintenance to keep your display looking perfect."
    },
    {
      icon: Package,
      title: "Secure Storage Year-Round",
      description: "After the season, we carefully take down and store your lights in our climate-controlled facility—no more cluttered garage or attic."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Now in our 4th season serving 300+ homes annually with 5-star service. Homeowners who value quality trust us year after year."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Christmas Northwest?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Skip the tangled lights, dangerous ladders, and holiday stress. Our all-inclusive service means you enjoy a beautifully lit home without lifting a finger—from professional design consultation and installation to in-season maintenance, takedown, and secure year-round storage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
