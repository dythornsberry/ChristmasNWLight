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
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export default function QuoteFormSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    serviceType: ""
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: () => {
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
        address: "",
        zipCode: "",
        serviceType: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createQuoteMutation.mutate(formData);
  };

  return (
    <section id="quote" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Quick Call CTA - Mobile Optimized */}
        <div className="mb-8 md:mb-10">
          <div className="bg-primary/90 rounded-lg p-6 md:p-8 text-center">
            <p className="text-primary-foreground text-sm md:text-base mb-3">
              Want to talk to our team right now?
            </p>
            <a 
              href="tel:4252150935"
              data-testid="button-quote-call-now"
            >
              <Button 
                size="lg"
                className="w-full md:w-auto bg-white text-primary hover:bg-white/90 font-bold text-lg"
              >
                Call Now: (425) 215-0935
              </Button>
            </a>
            <p className="text-primary-foreground/80 text-xs mt-3">
              Available 7am-8pm daily. Free consultation, no obligation.
            </p>
          </div>
        </div>

        <Card className="p-10 md:p-14 shadow-2xl border-2 border-amber-500/10">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <Badge 
                variant="outline" 
                className="px-6 py-2.5 text-base md:text-lg font-semibold border-2 border-amber-500/40 bg-amber-500/10 text-foreground"
                data-testid="badge-pricing-indicator"
              >
                <DollarSign className="w-5 h-5 mr-2 text-amber-600" />
                Most homes $800-$2,000 • All-inclusive service
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
              Or Fill Out a Quick Estimate Form
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get your custom design estimate, no obligation. We'll contact you within 24 hours.
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
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                data-testid="input-address"
                placeholder="123 Main Street"
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
              <Label htmlFor="serviceType">When do you need it installed? *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                required
              >
                <SelectTrigger data-testid="select-service-type">
                  <SelectValue placeholder="Select installation timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week (Limited Spots)</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="before-christmas">Before Christmas</SelectItem>
                  <SelectItem value="flexible">I'm Flexible</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">Most popular:</span> This Week - spots fill fast in December
              </p>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-xl font-bold mt-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              data-testid="button-submit-quote"
              disabled={!formData.serviceType || createQuoteMutation.isPending}
            >
              {createQuoteMutation.isPending ? "Submitting..." : "Light Up My Home ✨"}
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
