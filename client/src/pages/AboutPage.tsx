import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Sparkles } from "lucide-react";
import dylanPhoto from '@assets/dylan_owner_optimized.jpeg';
import crewTeamPhoto from '@assets/IMG_3713_optimized.webp';
import fleetPhoto from '@assets/IMG_9313_optimized.jpeg';
import { useLocation } from "wouter";
import { FACEBOOK_URL, FIRST_SEASON_YEAR, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL, YOUTUBE_URL, servedCitiesSchema } from "@/lib/business";

export default function AboutPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const credentials = [
    {
      icon: Shield,
      title: "Licensed, Bonded & Insured",
      description: "Full licensing and insurance coverage for your complete peace of mind and property protection."
    },
    {
      icon: Award,
      title: "Commercial-Grade LED Lights",
      description: "Energy-efficient LED lights selected for consistent color and wet Pacific Northwest winters."
    },
    {
      icon: Sparkles,
      title: "Custom Designs",
      description: "A lighting plan tailored to your property's architecture, priorities, and budget."
    },
    {
      icon: Clock,
      title: "Clear Scheduling",
      description: "We confirm scope, pricing, and the available installation window before you book."
    }
  ];

  const milestones = [
    { number: GOOGLE_RATING, label: "Google Rating", description: `${GOOGLE_REVIEW_COUNT} Google reviews` },
    { number: "24hr", label: "Response Time", description: "We respond within 24 hours" },
    { number: "Season-long", label: "Maintenance", description: "Display repairs are included" },
    { number: "Free", label: "Takedown", description: "Included in every package" }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://christmasnw.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://christmasnw.com/about" }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "description": "Christmas Northwest is a Greater Seattle holiday lighting company offering residential and commercial installations, seasonal support, and full-service displays including design, installation, maintenance, takedown, and storage.",
    "url": "https://christmasnw.com/about",
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "priceRange": "$800-$4,000+",
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
    "areaServed": servedCitiesSchema(),
    "foundingDate": String(FIRST_SEASON_YEAR),
    "founder": {
      "@type": "Person",
      "name": "Dylan Thornsberry",
      "jobTitle": "Owner"
    },
    "sameAs": [
      FACEBOOK_URL,
      INSTAGRAM_URL,
      YOUTUBE_URL
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GOOGLE_RATING,
      "bestRating": "5",
      "reviewCount": GOOGLE_REVIEW_COUNT,
      "ratingCount": GOOGLE_REVIEW_COUNT
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="About Christmas Northwest | Holiday Lighting Experts in Greater Seattle"
        description={`Meet Christmas Northwest, a local Greater Seattle team providing Christmas light design, installation, maintenance, takedown, and storage since ${FIRST_SEASON_YEAR}.`}
      />
      <StructuredData data={localBusinessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">About Christmas Northwest</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Locally owned.
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                Lighting homes across Greater Seattle since {FIRST_SEASON_YEAR}.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8" role="group" aria-label="Our fleet and team">
              <figure>
                <img
                  src={crewTeamPhoto}
                  alt="Christmas Northwest installation crew beside our branded truck"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                  width={1200}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  data-testid="img-crew-team"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground sm:text-base">Our installation crew</figcaption>
              </figure>
              <figure>
                <img
                  src={fleetPhoto}
                  alt="Christmas Northwest fleet at our Woodinville warehouse"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  data-testid="img-fleet"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground sm:text-base">Our fleet in Woodinville</figcaption>
              </figure>
            </div>

            {/* Milestones Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-4 text-center sm:p-6" data-testid={`card-milestone-${index}`}>
                  <div className="mb-2 text-3xl font-bold text-primary sm:text-4xl md:text-5xl" data-testid={`text-milestone-number-${index}`}>
                    {milestone.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {milestone.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {milestone.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local service and a small owner portrait */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
              <div>
                <h2 className="mb-5 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Local crew. Full-season service.
                </h2>
                <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg">
                  <p>
                    We serve homeowners across Greater Seattle with fitted rooflines, tree wrapping, landscape lighting, and larger custom displays.
                  </p>
                  <p className="font-semibold text-foreground">
                    We install, maintain, take down, and store your lights.
                  </p>
                </div>
                <Button
                  onClick={scrollToQuote}
                  className="mt-7 bg-primary font-semibold text-primary-foreground"
                  data-testid="button-about-quote"
                >
                  Get a Quote
                </Button>
              </div>
              <figure className="flex items-center gap-4 md:flex-col md:text-center" data-testid="owner-portrait">
                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full bg-muted sm:h-40 sm:w-40">
                  {/* Keep a relaxed head-and-shoulders crop; leave the original asset untouched. */}
                  <img
                    src={dylanPhoto}
                    alt="Dylan Thornsberry, owner of Christmas Northwest"
                    className="absolute -left-[19%] -top-[31%] h-auto w-[250%] max-w-none"
                    width={800}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    data-testid="img-about-dylan"
                  />
                </div>
                <figcaption>
                  <p className="font-semibold text-foreground">Dylan Thornsberry</p>
                  <p className="mt-1 text-sm text-muted-foreground">Owner</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Christmas Northwest?
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                Commercial-grade materials, careful installation, and responsive support throughout the season.
              </p>
            </div>
            
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
              {credentials.map((credential, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <credential.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3 text-foreground">
                        {credential.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Plan Your Display?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Tell us what you want to light and we will follow up with options, availability, and a custom estimate.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-2 border-primary-foreground/20 bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto"
                data-testid="button-about-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-about-cta-call"
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
  );
}
