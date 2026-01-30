import { useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Clock, MapPin } from "lucide-react";

interface CityPageProps {
  cityName: string;
  citySlug: string;
  zipCode: string;
  county: string;
  latitude: string;
  longitude: string;
  neighborhoods?: string[];
  nearbyLandmarks?: string[];
}

export default function CityPage({ 
  cityName, 
  citySlug, 
  zipCode, 
  county,
  latitude,
  longitude,
  neighborhoods = [],
  nearbyLandmarks = []
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
    "@type": "LocalBusiness",
    "name": `Christmas Northwest - ${cityName} Christmas Light Installation`,
    "image": "https://christmasnw.com/logo.png",
    "description": `Professional Christmas light installation in ${cityName}, WA. Premium, all-inclusive holiday lighting service with commercial-grade equipment. Serving ${cityName} and ${county} County since 2018.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "WA",
      "postalCode": zipCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "url": `https://christmasnw.com/${citySlug}`,
    "telephone": "+1-425-215-0935",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "State",
        "name": "Washington"
      }
    },
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

  return (
    <>
      <PageHead 
        title={`Christmas Light Installation ${cityName} WA 2026 | Professional Holiday Lighting`}
        description={`Professional Christmas light installation in ${cityName}, Washington. Premium, all-inclusive service with commercial-grade equipment. Same-week installation available. Serving ${cityName} since 2018. Free quote today!`}
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
