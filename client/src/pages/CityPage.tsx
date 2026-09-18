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
import { FACEBOOK_URL, FIRST_SEASON_YEAR, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL, YOUTUBE_URL, servedCitiesSchema } from "@/lib/business";

const CITY_SERVICE_OPTIONS: LeadServiceOption[] = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New installation or redesign", icon: TreePine },
  { value: "christmas-2026-returning", label: "Returning Customer", sublabel: "Existing client support or rebook", icon: Sparkles },
];

const nearbyCitiesMap: Record<string, { name: string; slug: string }[]> = {
  seattle: [
    { name: "Shoreline", slug: "shoreline" },
    { name: "Kenmore", slug: "kenmore" },
    { name: "Kirkland", slug: "kirkland" },
    { name: "Bellevue", slug: "bellevue" },
  ],
  bellevue: [
    { name: "Kirkland", slug: "kirkland" },
    { name: "Redmond", slug: "redmond" },
    { name: "Newcastle", slug: "newcastle" },
    { name: "Mercer Island", slug: "mercer-island" },
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
    { name: "Mill Creek", slug: "mill-creek" },
  ],
  kenmore: [
    { name: "Bothell", slug: "bothell" },
    { name: "Shoreline", slug: "shoreline" },
    { name: "Lake Forest Park", slug: "lake-forest-park" },
    { name: "Kirkland", slug: "kirkland" },
  ],
  woodinville: [
    { name: "Kirkland", slug: "kirkland" },
    { name: "Bothell", slug: "bothell" },
    { name: "Redmond", slug: "redmond" },
    { name: "Sammamish", slug: "sammamish" },
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
  newcastle: [
    { name: "Bellevue", slug: "bellevue" },
    { name: "Mercer Island", slug: "mercer-island" },
    { name: "Issaquah", slug: "issaquah" },
    { name: "Redmond", slug: "redmond" },
  ],
  "mercer-island": [
    { name: "Bellevue", slug: "bellevue" },
    { name: "Newcastle", slug: "newcastle" },
    { name: "Seattle", slug: "seattle" },
    { name: "Issaquah", slug: "issaquah" },
  ],
  shoreline: [
    { name: "Seattle", slug: "seattle" },
    { name: "Kenmore", slug: "kenmore" },
    { name: "Lake Forest Park", slug: "lake-forest-park" },
    { name: "Bothell", slug: "bothell" },
  ],
  "lake-forest-park": [
    { name: "Kenmore", slug: "kenmore" },
    { name: "Shoreline", slug: "shoreline" },
    { name: "Bothell", slug: "bothell" },
    { name: "Seattle", slug: "seattle" },
  ],
  issaquah: [
    { name: "Sammamish", slug: "sammamish" },
    { name: "Newcastle", slug: "newcastle" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Mercer Island", slug: "mercer-island" },
  ],
  "mill-creek": [
    { name: "Bothell", slug: "bothell" },
    { name: "Woodinville", slug: "woodinville" },
    { name: "Kenmore", slug: "kenmore" },
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
}

export default function CityPage({
  cityName,
  citySlug,
  zipCode,
  county,
  latitude,
  longitude,
  neighborhoods = []
}: CityPageProps) {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "image": "https://christmasnw.com/logo.png",
    "description": `Professional Christmas light installation in ${cityName}, WA. Design, installation, maintenance, takedown, and storage from a local, insured team serving ${county} County.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.7573,
      "longitude": -122.2443
    },
    "url": `https://christmasnw.com/${citySlug}`,
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "priceRange": "$800-$4,000+",
    "foundingDate": String(FIRST_SEASON_YEAR),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": servedCitiesSchema(cityName),
    "sameAs": [
      FACEBOOK_URL,
      INSTAGRAM_URL,
      YOUTUBE_URL
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GOOGLE_RATING,
      "reviewCount": GOOGLE_REVIEW_COUNT,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const benefits = [
    { icon: Check, title: "Clear Scheduling", description: `We confirm available installation dates before you book` },
    { icon: Shield, title: "Licensed & Insured", description: "Professional crews and liability coverage" },
    { icon: Clock, title: "Storage Included", description: "Your display is organized and stored between seasons" },
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

  return (
    <>
      <PageHead
        title={`Christmas Light Installation ${cityName} WA | Christmas Northwest`}
        description={`Professional Christmas light installation in ${cityName}, WA. Design, installation, maintenance, takedown, and storage with commercial-grade LED lights.`}
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
                  Custom-fit rooflines, trees, landscaping, and accents with installation, maintenance, takedown, and storage included.
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
                    Send your address and we'll confirm availability.
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
