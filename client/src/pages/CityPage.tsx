import { Link } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import LeadFormCard, { type LeadServiceOption } from "@/components/LeadFormCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, MapPin, Sparkles, TreePine } from "lucide-react";
import VideoShowcaseCard, { VIDEO_SHOWCASE_ITEMS } from "@/components/VideoShowcase";
import { getCityPhotos } from "@/data/installPhotos";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, businessSchema, BUSINESS_ID } from "@/lib/business";

const CITY_SERVICE_OPTIONS: LeadServiceOption[] = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New installation or redesign", icon: TreePine },
  { value: "christmas-2026-returning", label: "Returning Customer", sublabel: "Existing client support or rebook", icon: Sparkles },
];

const nearbyCitiesMap: Record<string, { name: string; slug: string }[]> = {
  seattle: [
    { name: "Kirkland", slug: "kirkland" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Edmonds", slug: "edmonds" },
    { name: "Kenmore", slug: "kenmore" },
  ],
  bellevue: [
    { name: "Kirkland", slug: "kirkland" },
    { name: "Redmond", slug: "redmond" },
    { name: "Mercer Island", slug: "mercer-island" },
    { name: "Issaquah", slug: "issaquah" },
  ],
  kirkland: [
    { name: "Bellevue", slug: "bellevue" },
    { name: "Woodinville", slug: "woodinville" },
    { name: "Redmond", slug: "redmond" },
    { name: "Bothell", slug: "bothell" },
  ],
  bothell: [
    { name: "Kenmore", slug: "kenmore" },
    { name: "Woodinville", slug: "woodinville" },
    { name: "Kirkland", slug: "kirkland" },
    { name: "Snohomish", slug: "snohomish" },
  ],
  kenmore: [
    { name: "Bothell", slug: "bothell" },
    { name: "Kirkland", slug: "kirkland" },
    { name: "Seattle", slug: "seattle" },
    { name: "Edmonds", slug: "edmonds" },
  ],
  woodinville: [
    { name: "Kirkland", slug: "kirkland" },
    { name: "Bothell", slug: "bothell" },
    { name: "Redmond", slug: "redmond" },
    { name: "Snohomish", slug: "snohomish" },
  ],
  redmond: [
    { name: "Bellevue", slug: "bellevue" },
    { name: "Kirkland", slug: "kirkland" },
    { name: "Woodinville", slug: "woodinville" },
    { name: "Sammamish", slug: "sammamish" },
  ],
  sammamish: [
    { name: "Redmond", slug: "redmond" },
    { name: "Issaquah", slug: "issaquah" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Woodinville", slug: "woodinville" },
  ],
  "mercer-island": [
    { name: "Bellevue", slug: "bellevue" },
    { name: "Seattle", slug: "seattle" },
    { name: "Issaquah", slug: "issaquah" },
    { name: "Sammamish", slug: "sammamish" },
  ],
  issaquah: [
    { name: "Sammamish", slug: "sammamish" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Mercer Island", slug: "mercer-island" },
    { name: "Redmond", slug: "redmond" },
  ],
  edmonds: [
    { name: "Seattle", slug: "seattle" },
    { name: "Kenmore", slug: "kenmore" },
    { name: "Bothell", slug: "bothell" },
    { name: "Snohomish", slug: "snohomish" },
  ],
  snohomish: [
    { name: "Bothell", slug: "bothell" },
    { name: "Woodinville", slug: "woodinville" },
    { name: "Edmonds", slug: "edmonds" },
    { name: "Kirkland", slug: "kirkland" },
  ],
};

interface CityPageProps {
  cityName: string;
  citySlug: string;
  zipCode: string;
  county: string;
  latitude: string;
  longitude: string;
  neighborhoods?: string[];
  videoId?: string;
}

export default function CityPage({
  cityName,
  citySlug,
  zipCode,
  county,
  latitude,
  longitude,
  neighborhoods = [],
  videoId,
}: CityPageProps) {
  const localVideo = VIDEO_SHOWCASE_ITEMS.find((item) => item.id === videoId);
  const { photos: installPhotos, isLocal: hasLocalPhotos } = getCityPhotos(citySlug, cityName);
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localBusinessSchema = businessSchema();

  const benefits = [
    { icon: Check, title: "Clear Scheduling", description: `We confirm available installation dates before you book` },
    { icon: Shield, title: "Licensed & Insured", description: "Professional crews and liability coverage" },
    { icon: Clock, title: "Free Fixes", description: "A light goes out, we fix it free" },
    { icon: Star, title: "Commercial-Grade Lights", description: "Outdoor-rated LEDs fitted to your property" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://christmasnw.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://christmasnw.com/service-areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityName,
        "item": `https://christmasnw.com/${citySlug}`
      }
    ]
  };

  const cityServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Christmas light installation in ${cityName}, WA`,
    "serviceType": "Christmas light installation",
    "url": `https://christmasnw.com/${citySlug}`,
    "provider": { "@id": BUSINESS_ID },
    "areaServed": { "@type": "City", "name": cityName, "address": { "addressRegion": "WA" } },
    "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "800", "description": "Installs start at $800, including free fixes and takedown." }
  };

  return (
    <>
      <PageHead
        title={`Christmas Light Installation ${cityName}, WA | Christmas Northwest`}
        description={`We hang Christmas and holiday lights on homes in ${cityName}, WA. Warm white or any color. Installs start at $800, with free fixes and takedown included.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* LocalBusiness Schema for this city */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <StickyHeader onGetQuote={scrollToQuote} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-4xl mx-auto">
                <Badge variant="default" className="mb-6 text-base px-6 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Serving {cityName}, WA
                </Badge>
                
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
                  Christmas light installation in {cityName}
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Rooflines, trees, bushes, and columns in warm white or any color, with free fixes and takedown included.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <Button
                    onClick={scrollToQuote}
                    size="lg"
                    className="text-lg font-bold px-10 py-7 shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                    data-testid="button-hero-quote"
                  >
                    Get a Quote
                  </Button>
                  <a href="tel:4252150935" data-testid="button-hero-call">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg font-bold px-10 py-7 border-2"
                    >
                      Call (425) 215-0935
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="font-semibold">{GOOGLE_RATING} Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{GOOGLE_REVIEW_COUNT} Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quote Form — city visitors get a form right on this page */}
          <section id="quote" className="scroll-mt-28 py-20 bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <LeadFormCard
                title="Get a free quote"
                description="Tell us about your home. We'll follow up with pricing and available dates."
                submitLabel="Request My Free Estimate"
                successTitle="Thanks. We've got your request."
                successDescription={`Our team will review the details and follow up with the best next step for your ${cityName} property.`}
                trackingLabel="city_page_quote"
                formLocation={`city_${citySlug}`}
                serviceOptions={CITY_SERVICE_OPTIONS}
                initialServiceType="christmas-2026-new"
                serviceBadgeText={`${cityName} estimate form`}
                responseNote="Thanks. We'll be in touch soon to talk through your project."
                testIdPrefix={`city-${citySlug}`}
              />
            </div>
          </section>

          <section className="py-16 bg-background" aria-labelledby="installs-heading" data-testid="city-photos">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="installs-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {hasLocalPhotos ? `Recent installs in ${cityName}` : "Recent installs"}
                </h2>
                <Link href="/gallery" className="text-base font-semibold text-primary underline-offset-4 hover:underline">
                  See the gallery
                </Link>
              </div>
              <div className="-mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:scroll-px-0">
                {installPhotos.map((photo) => (
                  <div key={photo.src} className="aspect-[4/3] w-[80%] shrink-0 snap-start overflow-hidden rounded-lg bg-muted md:w-auto">
                    <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" width={800} height={600} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {localVideo && (
            <section className="py-16 bg-background" aria-labelledby="local-video-heading" data-testid="city-video">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 id="local-video-heading" className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  See it in person.
                </h2>
                <div className="mx-auto mt-8 w-full max-w-[320px] text-left">
                  <VideoShowcaseCard item={localVideo} />
                </div>
              </div>
            </section>
          )}

          {/* Service details */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  What to expect
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 hover-elevate">
                    <benefit.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas in {cityName} */}
          {neighborhoods.length > 0 && (
            <section className="py-20 bg-background">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    Neighborhoods We Serve in {cityName}
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Fill out the form and we'll confirm availability.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {neighborhoods.map((neighborhood, index) => (
                    <Card key={index} className="p-4 text-center hover-elevate">
                      <p className="font-semibold text-foreground">{neighborhood}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Nearby Service Areas */}
          {nearbyCitiesMap[citySlug] && (
            <section className="py-20 bg-muted/30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Nearby Service Areas
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  {nearbyCitiesMap[citySlug].map((nearby) => (
                    <Link key={nearby.slug} href={`/${nearby.slug}`}>
                      <Card className="p-5 text-center cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                        <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-foreground">{nearby.name}</p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <nav aria-label="Lighting details" className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4 px-6 py-10 text-brand-teal">
            <Link href="/gallery" className="underline underline-offset-4">View our work</Link>
            <Link href="/investment-guide" className="underline underline-offset-4">See pricing</Link>
            <Link href="/services" className="underline underline-offset-4">Lighting options</Link>
          </nav>

          {/* CTA Section */}
          <section className="brand-cta py-24">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-brand-blue">
                Let's plan your lights.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Tell us what you'd like to light. We'll confirm pricing and available dates.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToQuote}
                  variant="outline"
                  size="lg"
                  className="border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-10"
                  data-testid={`button-${citySlug}-cta-quote`}
                >
                  Get a Quote
                </Button>
                <a href="tel:4252150935" data-testid={`button-${citySlug}-cta-call`}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-brand-blue/40 bg-transparent text-brand-blue hover:bg-brand-blue/5 font-bold text-lg px-10"
                  >
                    Call (425) 215-0935
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <StickyBottomCTA onGetQuote={scrollToQuote} />
      </div>
    </>
  );
}
