import { Card } from "@/components/ui/card";
import { Shield, Clock, Star, Zap } from "lucide-react";

export default function PromiseSection() {
  const promises = [
    {
      icon: Clock,
      title: "Installed Within 1 Week",
      description: "Book today, enjoy your lights within a week. No long waits or uncertain timelines."
    },
    {
      icon: Zap,
      title: "48-Hour Touch-Up Guarantee",
      description: "If anything needs adjustment, we're back within 48 hours. Your satisfaction is our priority."
    },
    {
      icon: Star,
      title: "100% Satisfaction or Full Refund",
      description: "Not completely thrilled? We make it right or refund you completely. Zero risk for you."
    },
    {
      icon: Shield,
      title: "Commercial-Grade Equipment",
      description: "Premium LED lights built to last multiple seasons. No cheap products that fail mid-season."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
            <span className="text-primary font-semibold">Our Promise</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Christmas Northwest Promise
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Your peace of mind matters. Here's what you can count on when you work with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <Card 
                key={index} 
                className="p-8 text-center hover-elevate"
                data-testid={`card-promise-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
