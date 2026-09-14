import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section id="quote" className="home-quote-section">
      <div className="home-container home-quote-layout">
        <div>
          <h2>Let's plan your lights.</h2>
          <p>Tell us about your home. We'll follow up with a custom quote.</p>
        </div>
        <div className="home-quote-actions">
          <Button size="lg" className="home-quote-button" onClick={onGetQuote} data-testid="button-cta-quote">
            Get a Quote <ArrowRight aria-hidden="true" />
          </Button>
          <a href="tel:4252150935" data-testid="button-cta-call"><Phone aria-hidden="true" /> (425) 215-0935</a>
        </div>
      </div>
    </section>
  );
}
