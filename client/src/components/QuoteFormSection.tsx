import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function QuoteFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    serviceType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with your custom estimate.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      serviceType: ""
    });
  };

  return (
    <section id="quote" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <Card className="p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground font-serif">
              Request Your Free Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your custom design estimate - no obligation, no hassle. We'll contact you within 24 hours.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  data-testid="input-first-name"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  data-testid="input-last-name"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                data-testid="input-email"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                data-testid="input-phone"
                placeholder="(425) 555-0123"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code *</Label>
              <Input
                id="zipCode"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                required
                data-testid="input-zip-code"
                placeholder="98028"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Interest *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              >
                <SelectTrigger data-testid="select-service-type">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Installation</SelectItem>
                  <SelectItem value="commercial">Commercial Installation</SelectItem>
                  <SelectItem value="custom">Custom Design</SelectItem>
                  <SelectItem value="full-service">Full White-Glove Service</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg font-bold mt-6"
              data-testid="button-submit-quote"
            >
              Request Free Design
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-semibold">Licensed, Bonded & Insured Professional Service</span>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you consent to receive text messages and calls from Christmas Light Installers Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with 3rd parties.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}
