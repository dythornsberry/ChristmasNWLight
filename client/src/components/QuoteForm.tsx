import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, CheckCircle2 } from "lucide-react";

interface QuoteFormProps {
  onSubmit: (data: any) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className="py-20 bg-background" id="quote">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-muted-foreground">
            Tell us about your project and we'll provide a custom estimate within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      placeholder="(206) 555-1234"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Property Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    data-testid="input-address"
                    placeholder="123 Main St, Seattle, WA 98103"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                  >
                    <SelectTrigger data-testid="select-property-type">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-single">Single Family Home</SelectItem>
                      <SelectItem value="residential-multi">Multi-Family Home</SelectItem>
                      <SelectItem value="commercial-small">Small Business</SelectItem>
                      <SelectItem value="commercial-large">Large Commercial</SelectItem>
                      <SelectItem value="hoa">HOA/Community</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your project..."
                    className="min-h-32"
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  data-testid="button-submit-quote"
                >
                  Request Free Quote
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 24 hours with a detailed quote
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">No Obligation</h3>
                  <p className="text-sm text-muted-foreground">
                    Free quotes with no pressure to commit
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-foreground">Contact Us Directly</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Phone:</strong><br />
                  <a href="tel:4252150935" className="hover:text-primary transition-colors">(425) 215-0935</a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong><br />
                  <a href="mailto:christmaslightsnw@gmail.com" className="hover:text-primary transition-colors">christmaslightsnw@gmail.com</a>
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Availability:</strong><br />
                  24/7 During Season
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
