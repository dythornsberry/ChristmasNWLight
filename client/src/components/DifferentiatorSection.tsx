import { Card } from "@/components/ui/card";
import { Clock, Shield, Package, Headphones } from "lucide-react";

export default function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Clock,
      title: "Same-Week Installation",
      description: "Book today and enjoy your lights within a week. No waiting around for weeks or uncertain scheduling.",
      benefit: "Get your display up fast"
    },
    {
      icon: Shield,
      title: "Commercial-Grade Equipment",
      description: "Professional LED lights that last multiple seasons, not cheap products that fail halfway through December.",
      benefit: "Built to last years, not weeks"
    },
    {
      icon: Package,
      title: "Storage Included",
      description: "We store your lights year-round in our climate-controlled facilities. No clutter in your garage or attic.",
      benefit: "Zero hassle, zero storage space needed"
    },
    {
      icon: Headphones,
      title: "Responsive Service",
      description: "Need a bulb replaced or adjustment made? We're back within 48 hours to make it perfect.",
      benefit: "Always here when you need us"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Makes Us Different
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're not your average Christmas light company. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate"
                data-testid={`card-differentiator-${index}`}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-primary font-semibold">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
