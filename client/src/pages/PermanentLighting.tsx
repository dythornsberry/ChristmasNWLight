import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Sparkles, Smartphone, Zap, Shield, Palette, Clock } from "lucide-react";

import permanentLighting1 from "@assets/Gallery_GeorgeS_Edited-scaled-square_1762286184697.jpg";
import permanentLighting2 from "@assets/dsc00331_edited_1762286184697.jpg";

export default function PermanentLighting() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    serviceType: "permanent-lighting"
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const payload = {
        fullName: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        phone: data.phone,
        address: data.address,
        zipCode: data.zipCode,
        serviceType: data.serviceType,
      };
      return await apiRequest("POST", "/api/quote-requests", payload);
    },
    onSuccess: () => {
      toast({
        title: "Request Received!",
        description: "We'll contact you within 24 hours to discuss your permanent lighting project.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        serviceType: "permanent-lighting"
      });
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createQuoteMutation.mutate(formData);
  };

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("permanent-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Permanent Outdoor Lighting | Christmas Northwest - Greater Seattle"
        description="Transform your home with permanent outdoor lighting. Smartphone-controlled LED systems, millions of colors, professional installation. Starting at $1,500. Serving Greater Seattle."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <Badge 
              variant="outline" 
              className="mb-6 px-6 py-2.5 text-base md:text-lg font-semibold border-2 border-amber-500/40 bg-amber-500/10"
              data-testid="badge-permanent-hero"
            >
              <Sparkles className="w-5 h-5 mr-2 text-amber-600" />
              High Demand Service
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground font-serif leading-tight">
              One Installation.<br />Every Holiday. Forever.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Permanent outdoor lighting that transforms with the seasons. Christmas red and green, Fourth of July, Halloween, or elegant white year-round. All from your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={scrollToQuote}
                className="text-xl px-10 py-7 shadow-2xl hover:shadow-amber-500/20 font-bold"
                data-testid="button-permanent-hero-quote"
              >
                Get a Free Estimate
              </Button>
              <p className="text-lg text-muted-foreground">Starting at $1,500</p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Why Homeowners Love Permanent Lighting
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Control From Your Phone</h3>
                <p className="text-muted-foreground">
                  Change colors, set schedules, and create custom patterns from anywhere. No climbing ladders ever again.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Millions of Colors</h3>
                <p className="text-muted-foreground">
                  Red and green for Christmas, pastels for Easter, team colors for game day. One system, endless possibilities.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">No Annual Setup</h3>
                <p className="text-muted-foreground">
                  Skip the yearly install and takedown. Your lights stay up, look great, and work perfectly year after year.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Energy Efficient</h3>
                <p className="text-muted-foreground">
                  Commercial-grade LEDs use a fraction of the power of traditional bulbs. Beautiful lighting without the electric bill shock.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Built to Last</h3>
                <p className="text-muted-foreground">
                  Weather-resistant construction handles Seattle rain, snow, and everything in between. 5-year warranty included.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Invisible by Day</h3>
                <p className="text-muted-foreground">
                  Low-profile track system matches your roofline and fascia. Stunning at night, nearly invisible during the day.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                See It In Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Local installations by our team in the Greater Seattle area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-perm-gallery-1">
                <img 
                  src={permanentLighting1} 
                  alt="Permanent lighting system showing rainbow colors on home roofline"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-background p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Custom Color Display</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-perm-gallery-2">
                <img 
                  src={permanentLighting2} 
                  alt="Multi-color permanent lighting on residential roofline"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-background p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Year-Round Versatility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every project is custom, but here's what to expect.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Starter</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$1,500 - $2,500</div>
                <p className="text-muted-foreground">
                  Single roofline, simple layout. Great for smaller homes or testing the waters.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 border-amber-500/40">
                <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/40">Most Popular</Badge>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Standard</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$2,500 - $4,000</div>
                <p className="text-muted-foreground">
                  Full roofline coverage, peaks and valleys. The complete look most homeowners want.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Premium</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$4,000+</div>
                <p className="text-muted-foreground">
                  Complex rooflines, multiple structures, or larger homes. Custom quote required.
                </p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              All prices include professional installation, materials, and 5-year warranty. No hidden fees.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="permanent-quote" className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="p-10 md:p-14 shadow-2xl border-2 border-amber-500/10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                  Get Your Free Estimate
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Tell us about your home and we'll provide a custom quote within 24 hours.
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
                      data-testid="input-permanent-first-name"
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
                      data-testid="input-permanent-last-name"
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
                    data-testid="input-permanent-email"
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
                    data-testid="input-permanent-phone"
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
                    data-testid="input-permanent-address"
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
                    data-testid="input-permanent-zip-code"
                    placeholder="98028"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-xl py-7 shadow-xl hover:shadow-amber-500/20 font-bold"
                  disabled={createQuoteMutation.isPending}
                  data-testid="button-submit-permanent"
                >
                  {createQuoteMutation.isPending ? "Sending..." : "Get My Free Estimate"}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>We'll respond within 24 hours</span>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
