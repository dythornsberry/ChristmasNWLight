import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import CTABanner from "@/components/CTABanner";

import c9RooflinePhoto from '@assets/81s3L7gNl1L_optimized.webp';
import miniLightsPhoto from '@assets/Incan-Clear-6x15-Column-Wrap-02-lifestyle_1762096913912.jpg';
import warmWhiteBushEstate from '@assets/optimized/portfolio-warm-white.webp';
import groundLightsPhoto from '@assets/Ground-Lighting-Installation-Fort-Collins-CO_1762096982865.jpg';
import treeWrapsPhoto from '@assets/81yZtNElctL_optimized.webp';
import lightSpheresPhoto from '@assets/spritzers_1762145407991.jpg';

const products = [
  { name: "Roofline lights", image: c9RooflinePhoto, description: "C9 bulbs for a crisp outline along gutters and peaks." },
  { name: "Mini lights", image: miniLightsPhoto, description: "Small lights wrapped around columns, railings, and branches." },
  { name: "Bush & shrub lights", image: warmWhiteBushEstate, description: "An even layer of light across your front-yard greenery." },
  { name: "Pathway lights", image: groundLightsPhoto, description: "Staked bulbs along walkways, driveways, and garden beds." },
  { name: "Tree wraps", image: treeWrapsPhoto, description: "Lights wrapped around trunks and branches." },
  { name: "Light spheres", image: lightSpheresPhoto, description: "Glowing spheres hung among tree branches." },
];

export default function ProductGuide() {
  const [, setLocation] = useLocation();
  const goToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <PageHead title="Our Christmas Lights | Christmas Northwest" description="See the lights we use for rooflines, trees, shrubs, and pathways. Installation, maintenance, takedown, and storage handled for you." />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />
      <main>
        <section className="py-12 md:py-16" aria-labelledby="lights-heading">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 id="lights-heading" className="font-serif text-4xl font-medium tracking-tight md:text-5xl">The lights we use.</h1>
                <p className="mt-4 text-base leading-7 text-muted-foreground">Warm white or color. We’ll help you choose a look.</p>
              </div>
              <Link href="/gallery" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline">
                See our installations <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <article key={product.name} data-testid={`card-product-${index + 1}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img src={product.image} alt={product.description} className="h-full w-full object-cover" width={800} height={600} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
                </article>
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
