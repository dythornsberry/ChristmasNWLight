import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { pricingExamples } from "@/lib/pricing";

export default function PricingPreview() {
  return (
    <section id="pricing" className="border-y border-border bg-background py-12 md:py-16" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <h2 id="pricing-heading" className="font-serif text-3xl font-medium tracking-tight md:text-4xl">What does it cost?</h2>
          <Link href="/investment-guide" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline" data-testid="link-home-pricing">
            See pricing &amp; examples <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingExamples.map((example) => (
            <div key={example.id} className="border-t border-border py-5" data-testid={`home-pricing-${example.id}`}>
              <h3 className="text-sm font-medium text-muted-foreground">{example.name}</h3>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-primary">{example.range}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Examples, not fixed packages. Your quote depends on your home and the lights you choose.</p>
      </div>
    </section>
  );
}
