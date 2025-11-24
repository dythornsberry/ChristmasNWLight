import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import WatermarkedImage from "@/components/WatermarkedImage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Home, Building2, Sparkles, CheckCircle2, TrendingUp, Clock, Shield, Phone } from "lucide-react";
import { useLocation } from "wouter";

import modernTwoStoryRoofline from '@assets/IMG_6862-min_1763866884565.jpeg';
import signaturePhoto from '@assets/2024-11-11-2-min_1762058047476.jpg';
import premierPhoto from '@assets/2024-12-03-min_1762058047476.jpg';
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';
import redTreeSnowmen from '@assets/2024-11-28-2-min_1762058047476.jpg';
import uniqueArchitecture from '@assets/2024-12-25-min_1762058047476.jpg';
import purpleHalloweenHouse from '@assets/IMG_5468-min_1762396975618.jpeg';

export default function InvestmentGuide() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const pricingTiers = [
    {
      id: 1,
      name: "Example 1",
      range: "~$900",
      icon: Home,
      image: modernTwoStoryRoofline,
      description: "Elegant roofline installation",
      includes: [
        "Warm white roofline lighting",
        "C9 LED bulbs",
        "Professional installation",
        "Seasonal maintenance",
        "Year-round storage",
        "Next year reinstallation",
        "All-inclusive service",
        "Complete setup included"
      ],
      ideal: "Single-story or smaller homes wanting clean roofline coverage"
    },
    {
      id: 2,
      name: "Example 2",
      range: "~$2,000",
      icon: Building2,
      image: signaturePhoto,
      popular: true,
      description: "Two-story home in Bothell",
      includes: [
        "Complete roofline",
        "Wreath on front",
        "Mistletoe roof line pattern at peaks",
        "Multicolor C9 bulbs",
        "Multiple bushes wrapped",
        "Ground lights along pathway",
        "Archway lighting",
        "Full service included"
      ],
      ideal: "Most homes wanting comprehensive front display"
    },
    {
      id: 3,
      name: "Example 3",
      range: "~$3,500",
      icon: Sparkles,
      image: warmWhiteBushEstate,
      description: "Bellevue home with elegant warm white bushes and roofline",
      includes: [
        "Full roofline coverage",
        "Wrapped bushes and hedges",
        "Multiple trees wrapped",
        "Ground lights throughout",
        "Estate perimeter lighting",
        "Mini light installations",
        "Comprehensive design",
        "Professional installation",
        "Complete all-inclusive service"
      ],
      ideal: "Large homes with extensive landscaping wanting elegant displays"
    },
    {
      id: 4,
      name: "Example 4",
      range: "$10,000+",
      icon: Sparkles,
      image: purpleHalloweenHouse,
      description: "Bellevue premium estate with complete property coverage—Halloween + Christmas lighting",
      includes: [
        "Full roofline and ridgeline lighting",
        "50+ bushes and hedges wrapped",
        "Column wrapping throughout",
        "Garage door outline lighting",
        "Comprehensive ground lights",
        "Multiple trees wrapped",
        "Light post wrapping at driveway",
        "Full holiday lighting design",
        "Seasonal bulb conversion",
        "Complete professional installation",
        "Year-round service included"
      ],
      ideal: "Large estates wanting everything installed—full property transformation with complete holiday coverage"
    }
  ];

  const pricingFactors = [
    {
      icon: Home,
      title: "Size of Home or Feature",
      description: "More footage means more cost. A 50-foot tree costs more than a 10-foot tree. A house with 500 feet of roofline costs significantly more than 100 feet of roofline."
    },
    {
      icon: TrendingUp,
      title: "Roof Steepness",
      description: "Steep roofs cost more, especially tile, cedar, metal, or specialty roofs. These are difficult to walk on and often have to be done entirely from a ladder, requiring extra time and safety measures."
    },
    {
      icon: Sparkles,
      title: "Roof Complexity",
      description: "The number of jumper wires and connections needed affects installation complexity. More jumpers mean more time and labor to properly set up your lighting system."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <PageHead 
        title="Christmas Light Installation Pricing | $800-$6,000+ | Transparent Rates | Christmas Northwest"
        description="Transparent Christmas light installation pricing for Greater Seattle. Essential Display $800-$1,500, Signature Display $1,500-$3,000, Premier Estate $3,000+. All-inclusive service: installation, maintenance, storage, reinstall. Free quotes!"
      />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 border border-gold/20">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Pricing Guide
              <br />
              <span className="text-4xl md:text-5xl">An Investment Into Your Holidays</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-6">
              All-inclusive pricing with no hidden fees. Installation, maintenance, storage, and next-year reinstallation included.
            </p>
            <Badge variant="secondary" className="bg-amber-500 text-white backdrop-blur-sm px-5 py-3 text-base flex items-center gap-2 h-auto mx-auto w-fit border-2 border-white/30 shadow-xl">
              <Clock className="w-5 h-5" />
              Fast Turnaround - Installed Within a Week
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Real Customer Examples
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's what real installations cost so you can see transparent pricing. Every home is unique, but these examples give you a clear idea of what to expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pricingTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={tier.id}
                  className={`relative overflow-hidden shadow-xl hover-elevate ${
                    tier.popular ? 'border-2 border-primary' : ''
                  }`}
                  data-testid={`card-pricing-${tier.id}`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 right-0 z-10">
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  {/* Example Photo */}
                  <div className="relative h-48 overflow-hidden">
                    <WatermarkedImage
                      src={tier.image}
                      alt={`${tier.name} example`}
                      className="h-full"
                      enableLightbox={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                      <p className="text-xs text-white/90 font-medium">
                        Example {tier.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-gold/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-foreground">
                          {tier.name}
                        </h3>
                        <p className="text-2xl font-black text-primary mt-1">
                          {tier.range}
                        </p>
                      </div>
                    </div>

                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                        What Was Installed
                      </h4>
                      <ul className="space-y-3">
                        {tier.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase">
                        Similar Homes
                      </p>
                      <p className="text-sm text-foreground">
                        {tier.ideal}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-gold/20 max-w-3xl mx-auto">
            <p className="text-base text-center text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Every home is unique.</strong> These are real customer examples to show transparent pricing. Your home may cost more or less depending on size, roof complexity, and how much coverage you want. A small home with a steep roof may cost more than a larger single-story home. Your custom quote is based on your specific property.
            </p>
          </Card>

          <div className="text-center mt-12">
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="text-xl font-bold shadow-2xl hover:shadow-primary/20 border border-gold/20"
              data-testid="button-request-custom-quote"
            >
              Request Your Custom Quote
            </Button>
            <p className="text-base text-muted-foreground mt-4">
              Free design consultation • No obligation • Same-day response
            </p>
          </div>
        </div>
      </section>

      {/* Price Per Unit Breakdown */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Understanding Price Per Unit
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's how we break down costs for the most common installation types
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Roofline Pricing */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Roofline Lighting</h3>
                  <p className="text-lg font-bold text-primary mt-1">$5–$12 per linear foot</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden mb-6 h-48">
                <WatermarkedImage
                  src={uniqueArchitecture}
                  alt="Steep roofline with complex architecture"
                  className="h-full object-cover"
                  enableLightbox={true}
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground italic mb-3">
                  Example: Complex, steep roof with many angles and cuts requires extra care
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Cost depends on several factors:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Roof steepness:</strong> Steep roofs cost more due to safety requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Roof type:</strong> Tile, metal, cedar, or specialty roofing requires extra care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Complexity:</strong> Number of peaks, valleys, and jumper connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground"><strong>Easy takedown:</strong> Roofline lights are simple to remove, keeping labor efficient</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Tree Lighting Pricing */}
            <Card className="p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Tree Lighting (Mini Lights)</h3>
                  <p className="text-lg font-bold text-accent mt-1">$275–$1,650+ per tree</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden mb-6 h-48">
                <WatermarkedImage
                  src={redTreeSnowmen}
                  alt="Red tree wrap with snowmen decorations"
                  className="h-full object-cover"
                  enableLightbox={true}
                />
              </div>
              <div className="space-y-4">
                <p className="text-xs text-muted-foreground italic mb-3">
                  Example: Tree with custom design shows how many strands are needed
                </p>
                <p className="text-base text-foreground leading-relaxed">
                  Trees are priced by the number of light strands needed. Each strand contains 74 individual lights:
                </p>
                <div className="bg-card/50 border border-border rounded-lg p-4 space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-foreground">Simple Tree (Budget)</p>
                    <p className="text-xs text-muted-foreground">5 strands × 74 lights = 370 total lights</p>
                    <p className="text-lg font-bold text-primary mt-1">~$275</p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-sm text-foreground">Large Maple or Pine (Magazine Quality)</p>
                    <p className="text-xs text-muted-foreground">25-30 ft tall, all branches wrapped, 30 strands × 74 lights = 2,220 total lights</p>
                    <p className="text-lg font-bold text-accent mt-1">$1,650+</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded p-3 mt-4">
                  <strong>Important:</strong> Setup takes just as long as takedown. Mini lights wrap around branches and trunks, requiring labor-intensive wrapping and unwrapping. Large trees may need special equipment like aerial lifts or specialized ladder setups, significantly increasing professional installation costs.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-gold/20 shadow-lg">
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Why Professional Installation Adds Value</h3>
                <p className="text-base text-foreground leading-relaxed">
                  DIY mini light installation looks easy until you're climbing ladders in December wrapping branches. Professional installation with proper equipment, safety measures, and efficient labor delivers results that are worth every dollar. Plus you avoid rentals, product waste, storage headaches, and the risk of injury.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Affects Your Investment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding these factors helps you plan your perfect display
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <Card key={index} className="p-8 shadow-lg hover-elevate" data-testid={`card-factor-${index}`}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gold/20">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Our Pricing Delivers Exceptional Value
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                All-Inclusive Service
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Unlike competitors who charge separately for installation, removal, storage, and repairs, our pricing includes everything.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Professional installation & design
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Seasonal maintenance visits
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Secure year-round storage
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Next year reinstallation included
                </li>
              </ul>
            </Card>

            <Card className="p-8 shadow-lg">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Commercial-Grade Quality
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We use only professional-grade LED products designed for longevity and performance, not cheap big-box store lights.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  90% more energy efficient
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Weather-resistant construction
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  25x longer lifespan
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  Brilliant, consistent color
                </li>
              </ul>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-gold/20 shadow-lg">
            <div className="text-center">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Save Time, Money, and Hassle
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                When you factor in ladder rentals, product costs, storage solutions, your time, and the risk of injury, professional installation delivers exceptional value. Most clients save money compared to DIY while getting a superior result with zero stress.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to See Your Custom Quote?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Every home is unique. Get a personalized quote based on your specific property, design preferences, and coverage goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToQuote}
              size="lg"
              className="text-xl font-bold shadow-2xl hover:shadow-primary/20 border border-gold/20 min-w-[240px]"
              data-testid="button-get-quote"
            >
              Get Your Free Quote
            </Button>
            <Button
              onClick={() => window.location.href = 'tel:4252150935'}
              size="lg"
              variant="outline"
              className="text-xl font-bold shadow-xl min-w-[240px]"
              data-testid="button-call"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call (425) 215-0935
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Same-day response • No pressure • Licensed & insured
          </p>
        </div>
      </section>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
