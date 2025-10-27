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
              Designer Holiday Lighting Excellence
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Christmas Northwest delivers more than just lights—we provide a premier, all-inclusive experience that creates lasting holiday memories for discerning homeowners across the Greater Seattle area.
              </p>
              <p>
                Every installation is a unique masterpiece, meticulously crafted to complement your home's distinct architecture. We custom-measure every run, use color-matched clips and pro-grade LEDs, hide cords, and test at dusk for a flawless finish.
              </p>
              <p>
                Our white-glove service includes designer consultation, professional installation, smart timer programming, 24/7 seasonal availability, maintenance, takedown, and climate-controlled storage. Licensed, bonded, and insured with a commitment to excellence.
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
