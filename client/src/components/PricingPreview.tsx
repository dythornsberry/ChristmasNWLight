import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { pricingExamples } from "@/lib/pricing";

export default function PricingPreview() {
  return (
    <section id="pricing" className="home-pricing" aria-labelledby="pricing-heading">
      <div className="home-container">
        <div className="home-section-heading">
          <h2 id="pricing-heading">A display that fits your home.</h2>
          <Link href="/investment-guide" className="home-text-link" data-testid="link-home-pricing">
            See pricing &amp; examples <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="home-pricing-grid">
          {pricingExamples.map((example) => (
            <div key={example.id} className="border-t border-border py-5" data-testid={`home-pricing-${example.id}`}>
              <h3 className="text-sm font-medium text-muted-foreground">{example.name}</h3>
              <p className="home-price">{example.range}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Examples, not fixed packages. Your quote depends on your home and the lights you choose.</p>
      </div>
    </section>
  );
}
