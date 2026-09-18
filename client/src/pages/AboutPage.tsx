import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dylanPhoto from '@assets/dylan_owner_optimized.jpeg';
import boxTruckPhoto from '@assets/optimized/christmas-northwest-box-truck-1600.webp';
import boxTruckPhotoSmall from '@assets/optimized/christmas-northwest-box-truck-800.webp';
import { useLocation } from "wouter";
import { FACEBOOK_URL, FIRST_SEASON_YEAR, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL, YOUTUBE_URL, servedCitiesSchema } from "@/lib/business";

const installers = [
  {
    name: "Ryder",
    photo: "/images/team/ryder.webp",
    bio: "Ryder is in his third year with our team. When he's not installing Christmas lights, he enjoys the outdoors and working on cars.",
    scale: 1.45,
    origin: "50% 70%",
  },
  {
    name: "James",
    photo: "/images/team/james.webp",
    bio: "James is in his first year installing Christmas lights. Outside work, he enjoys snowboarding and photography.",
    scale: 1.8,
    origin: "50% 85%",
  },
];

export default function AboutPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

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

            <div className="mx-auto max-w-3xl">
              <figure>
                <img
                  src={boxTruckPhoto}
                  srcSet={`${boxTruckPhotoSmall} 800w, ${boxTruckPhoto} 1600w`}
                  sizes="(min-width: 1440px) 912px, (min-width: 1024px) 864px, (min-width: 816px) 768px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
                  alt="Christmas Northwest box truck beside a completed multicolor Christmas light installation at dusk"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                  width={1600}
                  height={1200}
                  fetchPriority="high"
                  decoding="async"
                  data-testid="img-fleet"
                />
                <figcaption className="mt-3 text-sm text-muted-foreground sm:text-base">Our box truck beside a completed holiday lighting installation.</figcaption>
              </figure>
            </div>

            <section className="mx-auto mt-12 max-w-3xl sm:mt-16" aria-labelledby="meet-the-crew">
              <h2 id="meet-the-crew" className="mb-8 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Meet the crew
              </h2>
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
                {installers.map((installer) => (
                  <article key={installer.name} data-testid={`installer-${installer.name.toLowerCase()}`}>
                    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                      <img
                        src={installer.photo}
                        alt={`${installer.name}, Christmas Northwest installer`}
                        className="h-full w-full object-cover"
                        style={{ transform: `scale(${installer.scale})`, transformOrigin: installer.origin }}
                        width={800}
                        height={1000}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-foreground">{installer.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">Installer</p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">{installer.bio}</p>
                  </article>
                ))}
              </div>
            </section>

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
                    We supply commercial-grade lights for rooflines, trees, and landscaping across Greater Seattle.
                  </p>
                  <p className="font-semibold text-foreground">
                    We install, maintain, take down, and store your lights.
                  </p>
                  <p>Licensed, bonded, and insured.</p>
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

        {/* CTA Section */}
        <section className="brand-cta py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Let's plan your lights.
            </h2>
            <p className="mb-8 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
              Tell us about your home. We'll follow up with a custom quote.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-primary bg-primary font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
                data-testid="button-about-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border border-brand-blue/40 bg-transparent font-semibold text-brand-blue hover:bg-brand-blue/5 sm:w-auto"
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
