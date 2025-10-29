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
import { Clock, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from '@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87.png';

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
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
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Headline & Offer */}
          <div className="text-white">
            {/* 10% Off Offer Banner */}
            <div className="inline-flex items-center gap-3 bg-primary/95 backdrop-blur-sm px-6 py-3 rounded-lg mb-6 border-2 border-primary-border shadow-xl" data-testid="banner-hero-offer">
              <span className="text-2xl font-bold">10% OFF</span>
              <div className="h-6 w-px bg-primary-foreground/30" />
              <div>
                <div className="text-sm font-semibold">October Installations</div>
                <div className="flex items-center gap-1 text-xs text-primary-foreground/90">
                  <Clock className="w-3 h-3" />
                  <span>Ends October 31st</span>
                </div>
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fast, Affordable, and Beautiful Holiday Lighting
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Installed within a week of booking!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 (85+ Reviews)</span>
              </div>
              <div className="text-sm font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                24/7 Seasonal Availability
              </div>
            </div>

            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Serving Hundreds of Homes Every Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Commercial-Grade LED Lights</span>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div id="quote" className="bg-card border border-border rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-foreground">Get Your Free Quote</h2>
            <p className="text-muted-foreground mb-6">Fill out the form below for a free installation estimate</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
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
                className="w-full text-lg"
                data-testid="button-submit-quote"
              >
                Get My Free Quote
              </Button>

              <p className="text-xs text-muted-foreground">
                By submitting this form, you consent to receive text messages and calls from Christmas Light Installers Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with 3rd parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
