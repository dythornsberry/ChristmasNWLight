import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import SimpleServices from "@/components/SimpleServices";
import CTABanner from "@/components/CTABanner";
import { useLocation } from "wouter";
import { pricingExamples } from "@/lib/pricing";

// Facts here match the FAQ. Keep them in sync.
const PRICE_NOTES = [
  {
    title: "What changes the price",
    body: "How much you want lit. Every install starts with the roofline, and trees, bushes, columns, and wreaths add to it. Steep roofs and second stories take more time. Trees are priced by size, and trees over 20 feet need a lift. We price the whole job, not by the foot.",
  },
  {
    title: "Getting a quote",
    body: "Fill out the form with your address. We can quote most rooflines from photos and aerial views. For trees, bushes, or bigger displays we stop by for a free look. You don't need to be home.",
  },
  {
    title: "Payment",
    body: "New customers pay a 50% deposit to hold an install date. The rest is due after install, by credit or debit card.",
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
        description="What Christmas light installation costs in Seattle: installs start at $800, with real examples up to large custom holiday displays."
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
              {pricingExamples.map((tier) => (
                <article key={tier.id} data-testid={`card-pricing-${tier.id}`}>
                  <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                    <img
                      src={tier.image}
                      alt={tier.imageAlt}
                      className={`h-full w-full object-cover ${tier.imageClassName}`}
                      width={720}
                      height={405}
                      loading={tier === pricingExamples[0] ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{tier.name}</h2>
                  <p className="mt-2 text-2xl font-semibold tracking-tight text-primary">{tier.range}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{tier.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
              {PRICE_NOTES.map((note) => (
                <div key={note.title}>
                  <h2 className="text-xl font-semibold">{note.title}</h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{note.body}</p>
                </div>
              ))}
            </div>
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
