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

import essentialPhoto from '@assets/2024-11-17-3-min_1762058047475.jpg';
import signaturePhoto from '@assets/2024-11-11-2-min_1762058047476.jpg';
import premierPhoto from '@assets/2024-12-03-min_1762058047476.jpg';
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';

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
      range: "~$1,400",
      icon: Home,
      image: essentialPhoto,
      description: "Two-story home in Sammamish",
      includes: [
        "Roofline lighting",
        "Bushes wrapped",
        "Garage door outline",
        "Red and white color scheme",
        "Professional installation",
        "Seasonal maintenance",
        "Year-round storage",
        "Next year reinstallation"
      ],
      ideal: "Single-story or smaller homes with basic coverage"
    },
    {
      id: 2,
      name: "Example 2",
      range: "~$2,100",
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
      description: "Estate with elegant warm white bushes and roofline",
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

          <div className="grid md:grid-cols-3 gap-8">
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
