import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { servedCitiesSchema, businessSchema, BUSINESS_ID } from "@/lib/business";
import rentonHyundai from '@assets/renton-hyundai-dealership-warm-white-roofline.webp';
import rentonHyundaiSmall from '@assets/thumbs/renton-hyundai-dealership-warm-white-roofline-800.webp';
import rentonKia from '@assets/renton-kia-dealership-warm-white-roofline.webp';
import rentonKiaSmall from '@assets/thumbs/renton-kia-dealership-warm-white-roofline-800.webp';

// Real commercial jobs only. Add a job here once we have a photo of it.
const installs = [
  {
    name: "Go Hyundai of Renton",
    detail: "Warm white C9s along the roofline.",
    image: rentonHyundai,
    small: rentonHyundaiSmall,
    alt: "Warm white C9 lights along the roofline of Go Hyundai of Renton",
    width: 1300,
    height: 975,
  },
  {
    name: "Go Kia Renton",
    detail: "Warm white C9s along the roofline and the service canopy.",
    image: rentonKia,
    small: rentonKiaSmall,
    alt: "Warm white C9 lights along the curved roofline and service canopy of Go Kia Renton",
    width: 1512,
    height: 1134,
  },
];

const included = [
  "We stop by for a free look before we quote.",
  "We bring our own commercial-grade lights and hang them with plastic clips. No nails or holes.",
  "If a light goes out, we fix it free.",
  "Takedown included.",
];

export default function CommercialPage() {
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
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://christmasnw.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Commercial", "item": "https://christmasnw.com/commercial" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Christmas light installation",
    "serviceType": "Commercial Christmas light installation",
    "description": "Christmas light installation for businesses in Greater Seattle, with free fixes and takedown included.",
    "url": "https://christmasnw.com/commercial",
    "provider": { "@id": BUSINESS_ID },
    "areaServed": servedCitiesSchema()
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Commercial Christmas Light Installation, Seattle | Christmas Northwest"
        description="We hang Christmas lights on businesses around Seattle and the Eastside, including Go Hyundai of Renton and Go Kia Renton. Free fixes and takedown included."
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={businessSchema()} />
      <StructuredData data={breadcrumbSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />

      <main className="flex-1">
        <section className="bg-brand-soft py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium text-primary">Christmas lights for businesses</p>
            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-6xl">
              Commercial Christmas light installation
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">
              We light businesses around Seattle and the Eastside. Rooflines, entries, canopies and trees, in warm white or any color.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button onClick={goToQuote} size="lg" className="w-full font-semibold sm:w-auto" data-testid="button-commercial-hero-quote">
                Get a quote for your business
              </Button>
              <a href="tel:4252150935" className="text-sm font-medium text-primary underline-offset-4 hover:underline" data-testid="button-commercial-hero-call">(425) 215-0935</a>
            </div>
          </div>
        </section>

        <section className="bg-background py-12 md:py-16" aria-labelledby="commercial-installs-heading">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="commercial-installs-heading" className="mb-8 font-serif text-3xl font-medium tracking-tight md:text-4xl">Businesses we lit this season.</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {installs.map((install, index) => (
                <figure key={install.name} data-testid={`card-commercial-${index}`}>
                  <img
                    src={install.image}
                    srcSet={`${install.small} 800w, ${install.image} ${install.width}w`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt={install.alt}
                    className="aspect-[4/3] w-full rounded-lg object-cover"
                    width={install.width}
                    height={install.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <figcaption className="mt-3">
                    <span className="block text-lg font-semibold text-foreground">{install.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{install.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-soft py-12 md:py-16" aria-labelledby="commercial-included-heading">
          <div className="mx-auto max-w-3xl px-6">
            <h2 id="commercial-included-heading" className="font-serif text-3xl font-medium tracking-tight md:text-4xl">Same crew that does our homes.</h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-muted-foreground md:text-lg">
              {included.map((line) => (
                <li key={line} className="border-l-2 border-primary/40 pl-4">{line}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Lighting a home instead? <Link href="/services" className="text-primary underline underline-offset-4">See what we do for homes.</Link>
            </p>
          </div>
        </section>

        <section className="bg-background py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">Let's light your business.</h2>
            <p className="mt-4 text-base text-muted-foreground">Fill out the form and we'll set up a time to stop by.</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button onClick={goToQuote} size="lg" className="w-full font-semibold sm:w-auto" data-testid="button-commercial-cta-quote">Get a Quote</Button>
              <a href="tel:4252150935" className="text-sm font-medium text-primary underline-offset-4 hover:underline" data-testid="button-commercial-cta-call">(425) 215-0935</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
