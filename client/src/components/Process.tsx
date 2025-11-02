import { Card } from "@/components/ui/card";
import { FileText, MessageSquare, CheckCircle, Calendar } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Submit Quote Request",
      description: "Fill out our simple quote form with your contact information and service needs. We'll review your request within 24 hours."
    },
    {
      number: "2",
      icon: MessageSquare,
      title: "Design Consultation",
      description: "We discuss your vision and create a custom lighting plan. For complex projects, we schedule an in-person consultation to ensure every detail is perfect."
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Approve & Reserve",
      description: "Once you approve your custom design, place a $100 deposit to secure your installation slot and lock in your preferred date."
    },
    {
      number: "4",
      icon: Calendar,
      title: "Installation & Enjoy",
      description: "We schedule your installation, often within a week during the season, and transform your home with professional-grade holiday lighting."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Simple Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From your first inquiry to the final installation, we make the entire process seamless and stress-free. Here's how it works:
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

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ready to get started? Scroll up to submit your free quote request and begin your journey to a stunning holiday display.
          </p>
        </div>
      </div>
    </section>
  );
}
