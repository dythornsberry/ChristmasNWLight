import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import SimpleServices from "@/components/SimpleServices";
import CTABanner from "@/components/CTABanner";
import { useLocation } from "wouter";
import { pricingExamples } from "@/lib/pricing";

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
                      loading="lazy"
                      decoding="async"
                    />
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
