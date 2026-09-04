import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import WatermarkedImage from "@/components/WatermarkedImage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, DollarSign, Home, Phone, Sparkles, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";

import modernTwoStoryRoofline from '@assets/IMG_6862-min_1763866884565.jpeg';
import signaturePhoto from '@assets/2024-11-11-2-min_1762058047476.jpg';
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';
import largeCustomDisplay from '@assets/optimized/portfolio-yard.webp';

const pricingTiers = [
  {
    id: 1,
    name: "Clean Roofline",
    range: "Starting at $800",
    image: modernTwoStoryRoofline,
    description: "A clean roofline on a straightforward home.",
  },
  {
    id: 2,
    name: "Roofline + Accents",
    range: "$1,500–$1,800",
    image: signaturePhoto,
    popular: true,
    description: "Roofline plus an entry, wreath, bushes, or a small tree.",
  },
  {
    id: 3,
    name: "Full-Property Display",
    range: "$2,500–$3,500",
    image: warmWhiteBushEstate,
    description: "Broader roofline coverage with landscape or tree lighting.",
  },
  {
    id: 4,
    name: "Large Custom Display",
    range: "$4,000+",
    image: largeCustomDisplay,
    description: "Multi-level rooflines, larger trees, and custom features.",
  },
];

const pricingFactors = [
  {
    icon: Home,
    title: "Coverage",
    description: "How much roofline, landscaping, and tree lighting you want.",
  },
  {
    icon: TrendingUp,
    title: "Access",
    description: "Height, roof pitch, materials, and equipment needs.",
  },
  {
    icon: Sparkles,
    title: "Design",
    description: "Custom cuts, dense tree wraps, and specialty accents.",
  },
];

const includedItems = [
  "Custom design",
  "Commercial-grade lights",
  "Professional installation",
  "Season-long maintenance",
  "January takedown",
  "Storage between seasons",
];

export default function InvestmentGuide() {
  const [, setLocation] = useLocation();

  const goToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <PageHead
        title="Christmas Light Installation Pricing | Christmas Northwest"
        description="Christmas light installation pricing for Seattle: $800 rooflines to $4,000+ custom displays. Installation, maintenance, takedown, and storage included."
      />
      <StickyHeader onGetQuote={goToQuote} />

      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Badge variant="secondary" className="mb-5 border border-gold/20">
            <DollarSign className="mr-2 h-4 w-4" />
            Starting at $800
          </Badge>
          <h1 className="font-serif text-4xl font-black leading-tight text-primary-foreground md:text-6xl">
            Christmas light installation pricing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Most home displays fall between $800 and $3,500. Larger custom projects start around $4,000.
          </p>
          <Button
            onClick={goToQuote}
            size="lg"
            className="mt-8 border border-gold/20 bg-background px-8 text-lg font-bold text-foreground shadow-2xl hover:bg-background/90"
            data-testid="button-pricing-hero-quote"
          >
            Get My Quote
          </Button>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Four common project sizes</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              These examples are a guide. Your quote is based on your property and design.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`group relative h-96 cursor-pointer overflow-hidden rounded-lg shadow-lg hover-elevate ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
                data-testid={`card-pricing-${tier.id}`}
              >
                {tier.popular ? (
                  <div className="absolute right-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    MOST COMMON
                  </div>
                ) : null}
                <WatermarkedImage
                  src={tier.image}
                  alt={`${tier.name} example`}
                  className="h-full w-full"
                  enableLightbox={true}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl font-bold text-white">{tier.name}</h3>
                  <p className="mt-2 text-3xl font-black text-amber-400">{tier.range}</p>
                  <p className="mt-3 text-sm leading-snug text-white/85">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl">What changes the price?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingFactors.map((factor) => {
              const Icon = factor.icon;
              return (
                <Card key={factor.title} className="p-6 text-center shadow-sm">
                  <Icon className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-xl font-bold text-foreground">{factor.title}</h3>
                  <p className="mt-2 text-muted-foreground">{factor.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Every quote includes</h2>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-2 md:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">Want an exact price?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Send us your address and a few details.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={goToQuote} size="lg" className="min-w-[220px] text-lg font-bold" data-testid="button-get-quote">
              Get My Quote
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[220px] text-lg font-bold">
              <a href="tel:4252150935" data-testid="button-call">
                <Phone className="mr-3 h-5 w-5" />
                (425) 215-0935
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
