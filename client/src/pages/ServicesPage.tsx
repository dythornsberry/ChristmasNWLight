import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import SimpleServices from "@/components/SimpleServices";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { FACEBOOK_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL, YOUTUBE_URL, servedCitiesSchema } from "@/lib/business";
import rooflineImage from '@assets/IMG_6862-min_1763866884565.jpeg';
import accentsImage from '@assets/2025-11-19-min_1763645900967.jpg';
import largerDisplayImage from '@assets/2023-12-07-2_optimized.webp';

const services = [
  {
    title: "Clean rooflines",
    description: "Lights fitted neatly along your roofline, peaks, and gutters.",
    image: rooflineImage,
    alt: "Warm white Christmas lights following the roofline of a modern two-story home",
  },
  {
    title: "Trees & accents",
    description: "Add wrapped trees, lit shrubs, or a wreath to your roofline display.",
    image: accentsImage,
    alt: "Warm white roofline and shrubs lighting the path to a home",
  },
  {
    title: "Larger properties",
    description: "Custom Christmas displays for larger homes, businesses, and managed properties.",
    image: largerDisplayImage,
    alt: "Large home with Christmas lights wrapping trees and entrance columns",
  },
];

export default function ServicesPage() {
  const [, setLocation] = useLocation();

  const goToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://christmasnw.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://christmasnw.com/services" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Christmas Light Installation Services",
    "description": "Professional Christmas light installation services including residential rooflines, tree wrapping, commercial displays, custom holiday lighting, maintenance, takedown, and storage in Greater Seattle.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Christmas Northwest",
      "telephone": "+14252150935",
      "url": "https://christmasnw.com"
    },
    "areaServed": servedCitiesSchema(),
    "serviceType": "Christmas Light Installation",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "minPrice": 800,
        "priceCurrency": "USD"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "description": "Professional Christmas light installation services in Greater Seattle including residential rooflines, tree wrapping, commercial displays, custom designs, maintenance, takedown, and storage.",
    "url": "https://christmasnw.com/services",
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
    "serviceType": [
      "Residential roofline lighting",
      "Tree and greenery wrapping",
      "Commercial holiday displays",
      "Custom lighting design",
      "Maintenance and takedown",
      "Light storage"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GOOGLE_RATING,
      "reviewCount": GOOGLE_REVIEW_COUNT
    },
    "sameAs": [FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Christmas Light Installation Services | Christmas Northwest"
        description="Christmas light installation in Greater Seattle, starting at $800. We install, maintain, take down, and store your lights."
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />

      <main className="flex-1">
        <section className="bg-[#f6f3ed] py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium text-primary">Christmas lighting in Greater Seattle</p>
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
              Christmas lights,<br className="hidden sm:block" /> taken care of.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">
              We install, maintain, take down, and store your lights. You enjoy the season.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button onClick={goToQuote} size="lg" className="w-full font-semibold sm:w-auto" data-testid="button-services-hero-quote">
                Get a Quote
              </Button>
              <Link href="/investment-guide" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                Starting at $800 · See pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16" aria-labelledby="service-options-heading">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="service-options-heading" className="font-serif text-3xl font-medium tracking-tight md:text-4xl">A display that fits your home.</h2>
              <p className="text-sm text-muted-foreground">Warm white or color. Your choice.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, index) => (
                <article key={service.title} data-testid={`card-service-${index}`}>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    data-testid={`img-service-${index}`}
                  />
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/gallery" className="text-sm font-medium text-primary underline-offset-4 hover:underline">See more of our work →</Link>
            </div>
          </div>
        </section>

        <SimpleServices />

        <section className="bg-background py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">Let's light your home.</h2>
            <p className="mt-4 text-base text-muted-foreground">Send your address. We'll put together a design and a free quote.</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button onClick={goToQuote} size="lg" className="w-full font-semibold sm:w-auto" data-testid="button-services-cta-quote">Get a Quote</Button>
              <a href="tel:4252150935" className="text-sm font-medium text-primary underline-offset-4 hover:underline" data-testid="button-services-cta-call">(425) 215-0935</a>
            </div>
            <p className="mt-8 text-sm leading-6 text-muted-foreground">
              Seasonal service using our own lights. <Link href="/faq" className="text-primary underline underline-offset-4">Questions? Read our FAQ.</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
