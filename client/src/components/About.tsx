import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Zap } from "lucide-react";

interface AboutProps {
  teamImage: string;
}

export default function About({ teamImage }: AboutProps) {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Full liability coverage and proper licensing for your peace of mind"
    },
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Over a decade of professional holiday lighting expertise"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by homeowners and businesses across the Pacific Northwest"
    },
    {
      icon: Zap,
      title: "Premium LED Lights",
      description: "Energy-efficient, long-lasting commercial-grade LED technology"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Christmas Northwest
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Christmas Northwest is your trusted partner for professional holiday lighting in the greater Seattle area. We pride ourselves on our ability to make your custom display stand out above the rest, while being the most affordable and easy to work with!
              </p>
              <p>
                Don't waste any more time stressing about how to put up those lights or risking injury by climbing ladders. Our Christmas light installation process includes custom design, professional setup, maintenance throughout the season, takedown, and storage.
              </p>
              <p>
                We use only commercial-grade LED lights and professional-grade installation techniques to ensure your display looks beautiful and operates safely throughout the season. Licensed, bonded, and insured for your peace of mind.
              </p>
            </div>
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="ChristmasNW professional team"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
