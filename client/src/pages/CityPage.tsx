import { useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import InternalLinksSection from "@/components/InternalLinksSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, MapPin } from "lucide-react";

interface CityLocalContent {
  intro: string;
  lightingStyles: string;
  neighborhoodHighlights: string;
}

interface CityPageProps {
  cityName: string;
  citySlug: string;
  zipCode: string;
  county: string;
  latitude: string;
  longitude: string;
  neighborhoods?: string[];
  nearbyLandmarks?: string[];
  localContent?: CityLocalContent;
}

export default function CityPage({
  cityName,
  citySlug,
  zipCode,
  county,
  latitude,
  longitude,
  neighborhoods = [],
  nearbyLandmarks = [],
  localContent
}: CityPageProps) {
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "image": "https://christmasnw.com/logo.png",
    "description": `Professional Christmas light installation in ${cityName}, WA. Premium, all-inclusive holiday lighting service with commercial-grade equipment. Serving ${cityName} and ${county} County since 2021.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "url": `https://christmasnw.com/${citySlug}`,
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "priceRange": "$800-$6,000+",
    "foundingDate": "2021",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": cityName, "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Seattle", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Bellevue", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Kirkland", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Bothell", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Kenmore", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Woodinville", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Redmond", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Sammamish", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Shoreline", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Mill Creek", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Lake Forest Park", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Issaquah", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Newcastle", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Mercer Island", "address": { "addressRegion": "WA" } }
    ],
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw",
      "https://www.youtube.com/@christmasnw"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const benefits = [
    { icon: Check, title: "Same-Week Installation", description: `Fast, professional service in ${cityName}` },
    { icon: Shield, title: "100% Satisfaction Guarantee", description: "We make it right or you don't pay" },
    { icon: Clock, title: "Storage Included", description: "Free storage until next season" },
    { icon: Star, title: "Commercial-Grade Lights", description: "Premium C9 bulbs that last" },
  ];

  const relatedLinks = [
    {
      href: "/services",
      label: "Holiday Lighting Services",
      description: `Compare the installation styles, pricing ranges, and service types we offer in and around ${cityName}.`,
    },
    {
      href: "/gallery",
      label: "Project Gallery",
      description: "Browse real installs to see rooflines, tree wrapping, and larger custom displays.",
    },
    {
      href: "/service-areas",
      label: "All Service Areas",
      description: "See the other Seattle and Eastside communities we serve year after year.",
    },
    {
      href: "/contact",
      label: "Request a Quote",
      description: "Go straight to the lead form if you want availability, pricing guidance, or a callback.",
    },
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
        description={`Professional Christmas light installation in ${cityName}, WA. Premium all-inclusive service with commercial-grade LED lights and same-week installation.`}
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
                  Professional Christmas Light Installation in {cityName}
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Transform your {cityName} home into a holiday showcase. Premium, all-inclusive service with commercial-grade equipment and same-week installation.
                </p>

                <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <Button
                    onClick={scrollToQuote}
                    size="lg"
                    className="text-lg font-bold px-10 py-7 shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                    data-testid="button-hero-quote"
                  >
                    Light Up My Home ✨
                  </Button>
                  <Button
                    onClick={() => window.location.href = 'tel:4252150935'}
                    variant="outline"
                    size="lg"
                    className="text-lg font-bold px-10 py-7 border-2"
                    data-testid="button-hero-call"
                  >
                    Call (425) 215-0935
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="font-semibold">5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="font-semibold">85+ Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us for {cityName} */}
          <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Why {cityName} Homeowners Choose Us
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Trusted by families throughout {cityName}{neighborhoods.length > 0 ? `, including ${neighborhoods.slice(0, 3).join(', ')}` : ''}
                </p>
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
                    Professional installation throughout all {cityName} areas
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

          {/* Local Landmarks */}
          {nearbyLandmarks.length > 0 && (
            <section className="py-20 bg-muted/30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Serving Homes Near {cityName}'s Landmarks
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We've installed beautiful holiday displays near: {nearbyLandmarks.join(', ')}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Local Content Section */}
          {localContent && (
            <section className="py-20 bg-background">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
                    Christmas Light Installation in {cityName}
                  </h2>
                  <div className="space-y-6 text-base leading-7 text-muted-foreground sm:text-lg">
                    <p>{localContent.intro}</p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground pt-4">
                      Popular Lighting Styles in {cityName}
                    </h3>
                    <p>{localContent.lightingStyles}</p>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground pt-4">
                      Neighborhoods We Know Best
                    </h3>
                    <p>{localContent.neighborhoodHighlights}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          <InternalLinksSection
            title={`More ${cityName} Planning Resources`}
            description={`These pages help ${cityName} homeowners compare services, confirm coverage, and move toward a quote with less friction.`}
            links={relatedLinks}
          />

          {/* CTA Section */}
          <section className="py-24 bg-gradient-to-r from-primary via-primary to-primary/90">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary-foreground">
                Ready to Transform Your {cityName} Home?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Join hundreds of satisfied homeowners in {cityName}. Get your free quote today and experience the premium difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToQuote}
                  variant="outline"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 font-bold text-lg px-10 border-2"
                  data-testid={`button-${citySlug}-cta-quote`}
                >
                  Light Up My Home ✨
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 font-bold text-lg px-10"
                  onClick={() => window.location.href = 'tel:4252150935'}
                  data-testid={`button-${citySlug}-cta-call`}
                >
                  Call (425) 215-0935
                </Button>
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
