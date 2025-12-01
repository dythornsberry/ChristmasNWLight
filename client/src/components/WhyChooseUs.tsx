import { Shield, Home, Users, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage for your peace of mind"
  },
  {
    icon: Home,
    title: "Local Family Business",
    description: "Based in Kenmore, serving greater Seattle since 2021"
  },
  {
    icon: Users,
    title: "300+ Homes Annually",
    description: "Trusted by hundreds of families each season"
  },
  {
    icon: ThumbsUp,
    title: "Free Design Estimates",
    description: "No obligation, no pressure, just honest pricing"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-12 text-foreground">
          Why Seattle Homeowners Choose Us
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center"
              data-testid={`trust-icon-${index}`}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
