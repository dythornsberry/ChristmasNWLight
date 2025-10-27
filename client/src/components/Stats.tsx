import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

interface Stat {
  icon: any;
  number: string;
  label: string;
  description: string;
}

interface StatsProps {
  stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Excellence in Every Detail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by discerning homeowners across the Greater Seattle area for designer-quality results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover-elevate transition-all"
              data-testid={`card-stat-${index}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-serif text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-lg text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
