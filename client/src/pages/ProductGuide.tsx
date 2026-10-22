import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import CTABanner from "@/components/CTABanner";

import warmWhitePhoto from '@assets/optimized/portfolio-warm-white.webp';
import multicolorPhoto from '@assets/optimized/portfolio-multicolor.webp';
import redWhitePhoto from '@assets/d8c6cab5281de0583599e22ee0ea1bbd_1762398220204.webp';
import rooflinePhoto from '@assets/IMG_6862-min_1763866884565.jpeg';
import garagePhoto from '@assets/optimized/portfolio-gables.webp';
import treesPhoto from '@assets/IMG_7468-min_optimized.webp';
import bushesPhoto from '@assets/IMG_7487-min_optimized.webp';
import columnsPhoto from '@assets/IMG_0581-min_optimized.webp';
import wreathPhoto from '@assets/IMG_7362-min_optimized.webp';

// Real installs only. Order follows what customers add most often (Jobber, 2023-2026).
const colors = [
  { name: "Warm white", note: "Most popular", image: warmWhitePhoto, alt: "Home with warm white roofline and wrapped bushes" },
  { name: "Multicolor", note: "Classic and bright", image: multicolorPhoto, alt: "Home with multicolor Christmas lights" },
  { name: "Mix it up", note: "Red and white, or your call", image: redWhitePhoto, alt: "Warm white roofline with red lights on the columns" },
];

const products = [
  { name: "Roofline", detail: "C9 bulbs along gutters and peaks. Every display starts here.", image: rooflinePhoto, alt: "Two-story home with warm white roofline lights" },
  { name: "Trees", detail: "Mini lights wrapped around trunks and branches, priced by size.", image: treesPhoto, alt: "Several trees wrapped in warm white lights" },
  { name: "Garage", detail: "An outline around the garage door to finish the front of the house.", image: garagePhoto, alt: "Home with lit roofline, wreath, and garage outline" },
  { name: "Columns & railings", detail: "Mini lights wrapped tight around posts, porches, and decks.", image: columnsPhoto, alt: "Porch railings wrapped in warm white lights" },
  { name: "Bushes & shrubs", detail: "An even layer of lights over the plants out front.", image: bushesPhoto, alt: "Bushes along a driveway covered in warm white lights" },
  { name: "Wreaths", detail: "Pre-lit wreaths in a few sizes, or we'll hang your own.", image: wreathPhoto, alt: "Single-story home with warm white roofline and a lit wreath" },
];

const reasons = [
  { title: "Brighter and more even", detail: "Faceted C9 bulbs and tight spacing. No dim spots or droopy strands." },
  { title: "Made for Seattle rain", detail: "Outdoor-rated lights with sealed connections that hold up through a wet December." },
  { title: "Our lights, our fix", detail: "We only use our own lights, so if one goes out we fix it free." },
];

export default function ProductGuide() {
  const [, setLocation] = useLocation();
  const goToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <PageHead title="Our Christmas Lights | Christmas Northwest" description="The commercial-grade Christmas lights we use on rooflines, trees, garages, columns, and bushes. Warm white or any color, same price." />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />
      <main>
        <section className="pt-12 md:pt-16" aria-labelledby="lights-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h1 id="lights-heading" className="font-serif text-4xl font-medium tracking-tight md:text-6xl">The lights we use.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              Commercial-grade LEDs on every home we do. Warm white or any color, same price.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="colors-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="colors-heading" className="font-serif text-3xl font-medium md:text-4xl">Pick your color.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {colors.map((color, index) => (
                <figure key={color.name} data-testid={`card-color-${index + 1}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                    <img src={color.image} alt={color.alt} className="h-full w-full object-cover" width={600} height={750} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                  </div>
                  <figcaption className="mt-3">
                    <span className="text-lg font-semibold">{color.name}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{color.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-soft py-12 md:py-16" aria-labelledby="products-heading">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="products-heading" className="font-serif text-3xl font-medium md:text-4xl">What we light.</h2>
              <Link href="/gallery" className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:underline">
                See more installs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <article key={product.name} data-testid={`card-product-${index + 1}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img src={product.image} alt={product.alt} className="h-full w-full object-cover" width={800} height={600} loading="lazy" decoding="async" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{product.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" aria-labelledby="reasons-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="reasons-heading" className="font-serif text-3xl font-medium md:text-4xl">Why commercial-grade.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="border-t border-border pt-5">
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">{reason.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner onGetQuote={goToQuote} />
      </main>
      <Footer />
      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
