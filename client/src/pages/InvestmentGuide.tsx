import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import SimpleServices from "@/components/SimpleServices";
import CTABanner from "@/components/CTABanner";
import { useLocation } from "wouter";

import modernTwoStoryRoofline from '@assets/IMG_6862-min_1763866884565.jpeg';
import signaturePhoto from '@assets/2024-11-11-2-min_1762058047476.jpg';
import warmWhiteBushEstate from '@assets/optimized/portfolio-warm-white.webp';
import largeCustomDisplay from '@assets/optimized/portfolio-yard.webp';

const pricingTiers = [
  {
    id: 1,
    name: "Clean Roofline",
    range: "Starting at $800",
    image: modernTwoStoryRoofline,
    description: "A clean roofline on a straightforward home.",
  },
  {
    id: 2,
    name: "Roofline + Accents",
    range: "$1,500–$1,800",
    image: signaturePhoto,
    popular: true,
    description: "Roofline plus an entry, wreath, bushes, or a small tree.",
  },
  {
    id: 3,
    name: "Full-Property Display",
    range: "$2,500–$3,500",
    image: warmWhiteBushEstate,
    description: "Broader roofline coverage with landscape or tree lighting.",
  },
  {
    id: 4,
    name: "Large Custom Display",
    range: "$4,000+",
    image: largeCustomDisplay,
    description: "Multi-level rooflines, larger trees, and custom features.",
  },
];


export default function InvestmentGuide() {
  const [, setLocation] = useLocation();
  const goToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <PageHead
        title="Christmas Light Installation Pricing | Christmas Northwest"
        description="Christmas light installation pricing for Seattle: $800 rooflines to $4,000+ custom displays. Installation, maintenance, takedown, and storage included."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />
      <main>
        <section className="bg-background py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10 max-w-2xl">
              <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Christmas lighting pricing</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                Four examples to help you plan. Your quote will fit your home and the lights you choose.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
              {pricingTiers.map((tier) => (
                <article key={tier.id} data-testid={`card-pricing-${tier.id}`}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img src={tier.image} alt={`${tier.name} Christmas lighting example`} className="h-full w-full object-cover" width={720} height={540} loading="lazy" decoding="async" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{tier.name}</h2>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-primary">{tier.range}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
              Final pricing depends on coverage, roof height, access, and the number of trees or accents.
            </p>
          </div>
        </section>
        <SimpleServices />
        <CTABanner onGetQuote={goToQuote} />
      </main>
      <Footer />
      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
