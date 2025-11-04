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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Sparkles, Sun, Droplets, Home } from "lucide-react";

export default function YearRoundServices() {
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
        title: "Request Received!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });
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
    const quoteSection = document.getElementById("year-round-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Year-Round Services - Christmas Northwest | Gutter Cleaning & Permanent Lighting"
        description="Premium year-round outdoor lighting and property care services in Greater Seattle. Professional gutter cleaning $300-$500, permanent lighting systems starting at $1,500, and custom landscape lighting by your trusted Christmas light experts."
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
              data-testid="badge-year-round"
            >
              <Sun className="w-5 h-5 mr-2 text-amber-600" />
              Premium Outdoor Lighting & Property Care
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground font-serif leading-tight">
              We Don't Hibernate<br />After the Holidays
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Your trusted outdoor lighting specialists now offer premium year-round services for Greater Seattle homeowners who demand excellence.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToQuote}
              className="text-xl px-10 py-7 shadow-2xl hover:shadow-amber-500/20 font-bold"
              data-testid="button-hero-quote"
            >
              Get Started Today ✨
            </Button>
          </div>
        </section>

        {/* Gutter Cleaning Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Badge 
                variant="outline" 
                className="mb-4 px-5 py-2 text-base font-semibold border-amber-500/40 bg-amber-500/10"
                data-testid="badge-gutter-cleaning"
              >
                <Droplets className="w-4 h-4 mr-2 text-amber-600" />
                Most Popular
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Professional Gutter & Roof Maintenance
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powered by our sister company Seattle ProWash, offering the same premium quality you trust for Christmas lights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Seamless Convenience</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Why hire two companies when one can do it all? When we take down your Christmas lights in early January, we can clean your gutters at the same time. Already on your roof. Already insured. Already trusted.
                </p>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-3xl font-bold text-foreground">$300-$500</span>
                  <span className="text-lg text-muted-foreground">Most homes</span>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Premium Service Includes</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Complete gutter cleaning and debris removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Downspout flushing and inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Roof debris removal and inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Photo documentation of problem areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Same professional team you already trust</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-gutter-placeholder-1">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Professional Gutter Cleaning</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-gutter-placeholder-2">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Roof Maintenance</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-gutter-placeholder-3">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Downspout Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Permanent Lighting Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Badge 
                variant="outline" 
                className="mb-4 px-5 py-2 text-base font-semibold border-amber-500/40 bg-amber-500/10"
                data-testid="badge-permanent-lighting"
              >
                <Sparkles className="w-4 h-4 mr-2 text-amber-600" />
                Premium Installation
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Permanent Lighting Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your home with year-round architectural lighting. The same craftsmanship you love at Christmas, available 365 days a year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Year-Round Beauty</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Permanent lighting systems blend seamlessly with your home's architecture. Control colors and patterns from your smartphone for any holiday, season, or special event. Christmas red and green, Fourth of July colors, Halloween orange, or elegant white year-round.
                </p>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-3xl font-bold text-foreground">Starting at $1,500</span>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Premium Features</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Commercial-grade LED track system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Smartphone app control - millions of colors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Professional installation by lighting experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Matches your roofline perfectly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Energy efficient and weather resistant</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg" data-testid="card-permanent-placeholder-1">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Roofline Installation</p>
              </div>
              <div className="bg-background p-6 rounded-lg" data-testid="card-permanent-placeholder-2">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Color Changing Display</p>
              </div>
              <div className="bg-background p-6 rounded-lg" data-testid="card-permanent-placeholder-3">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Architectural Accent</p>
              </div>
            </div>
          </div>
        </section>

        {/* Landscape/Bistro/Event Lighting Section */}
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Badge 
                variant="outline" 
                className="mb-4 px-5 py-2 text-base font-semibold border-amber-500/40 bg-amber-500/10"
                data-testid="badge-landscape-lighting"
              >
                <Home className="w-4 h-4 mr-2 text-amber-600" />
                Custom Solutions
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Landscape, Bistro & Event Lighting
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create unforgettable outdoor spaces with professional lighting design. Perfect for entertaining, ambiance, or special events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Transform Your Outdoor Space</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  From elegant pathway lighting to stunning bistro string lights for your patio, we bring the same attention to detail that makes your home shine at Christmas. Professional installation, premium materials, beautiful results.
                </p>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-2xl font-bold text-foreground">Contact for Custom Quote</span>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Popular Applications</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Bistro string lights for patios and decks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Landscape and pathway accent lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Special event and wedding lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Tree uplighting and garden features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Outdoor dining and entertainment areas</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-landscape-placeholder-1">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Home className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Bistro String Lights</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-landscape-placeholder-2">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Home className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Pathway Lighting</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg" data-testid="card-landscape-placeholder-3">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Home className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Event Lighting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="year-round-quote" className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="p-10 md:p-14 shadow-2xl border-2 border-amber-500/10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                  Get Your Free Estimate
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Tell us about your project and we'll contact you within 24 hours with a custom quote.
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
                      data-testid="input-year-round-first-name"
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
                      data-testid="input-year-round-last-name"
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
                    data-testid="input-year-round-email"
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
                    data-testid="input-year-round-phone"
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
                    data-testid="input-year-round-address"
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
                    data-testid="input-year-round-zip-code"
                    placeholder="98028"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">What service are you interested in? *</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    required
                  >
                    <SelectTrigger data-testid="select-year-round-service-type">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                      <SelectItem value="permanent-lighting">Permanent Lighting</SelectItem>
                      <SelectItem value="landscape-bistro-event">Landscape/Bistro/Event Lighting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl font-bold mt-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-testid="button-submit-year-round-quote"
                  disabled={!formData.serviceType || createQuoteMutation.isPending}
                >
                  {createQuoteMutation.isPending ? "Submitting..." : "Get My Free Estimate ✨"}
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="font-semibold">Same Professional Team • Same Premium Quality</span>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you consent to receive text messages and calls from Christmas Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe.
                </p>
              </form>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground font-serif">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">When is the best time to clean gutters?</h3>
                <p className="text-lg text-muted-foreground">
                  We recommend cleaning gutters at least twice a year - once in late fall after leaves drop, and again in early spring. Many of our clients schedule gutter cleaning when we take down their Christmas lights in January, making it convenient and efficient.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">How long does permanent lighting last?</h3>
                <p className="text-lg text-muted-foreground">
                  Our commercial-grade permanent lighting systems are built to last 10+ years with minimal maintenance. The LED bulbs are rated for 50,000+ hours, and the track system is designed to withstand Pacific Northwest weather year-round.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Do you serve the same areas as your Christmas lighting service?</h3>
                <p className="text-lg text-muted-foreground">
                  Yes! We serve the entire Greater Seattle area including Bothell, Woodinville, Kirkland, Redmond, Sammamish, Issaquah, Bellevue, and surrounding communities. Same trusted team, same service area.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Is Seattle ProWash a separate company?</h3>
                <p className="text-lg text-muted-foreground">
                  Seattle ProWash is our sister company specializing in professional gutter and roof cleaning. It's the same ownership, same quality standards, and often the same crew you know from Christmas lights. We simply wanted a dedicated brand for year-round property maintenance.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Can I get multiple services at once?</h3>
                <p className="text-lg text-muted-foreground">
                  Absolutely! Many clients bundle gutter cleaning with Christmas light takedown in January, or add permanent lighting to their annual Christmas service. We're happy to provide package pricing for multiple services.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
