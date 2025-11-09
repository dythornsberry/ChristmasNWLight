import { Card } from "@/components/ui/card";
import { FileText, MessageSquare, CheckCircle, Calendar } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Get Your Quote",
      description: "Fill out our quick form. We respond within 24 hours."
    },
    {
      number: "2",
      icon: MessageSquare,
      title: "Custom Design",
      description: "We create a lighting plan tailored to your home."
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Get Scheduled",
      description: "Reserve your spot with a $100 deposit."
    },
    {
      number: "4",
      icon: Calendar,
      title: "Enjoy the Glow",
      description: "We install, maintain, and store your lights. You relax."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3 text-foreground">
            How It Works
          </h2>
          <p className="text-base text-muted-foreground">
            Four simple steps to your perfect holiday display
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-6 relative"
                data-testid={`process-step-${index}`}
              >
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg border-4 border-background">
                  {step.number}
                </div>
                
                <div className="mt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
