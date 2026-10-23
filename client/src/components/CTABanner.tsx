import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

export default function CTABanner({ onGetQuote }: { onGetQuote: () => void }) {
  return (
    <section id="quote" className="home-quote-section">
      <div className="home-container home-quote-layout">
        <div>
          <h2>Let's plan your lights.</h2>
          <p>Free quote. Most installs within a week.<br />If anything's off, we come back and fix it, free.</p>
        </div>
        <div className="home-quote-actions">
          <Button size="lg" className="home-quote-button" onClick={onGetQuote} data-testid="button-cta-quote">
            Get a Quote <ArrowRight aria-hidden="true" />
          </Button>
          <a href="tel:4252150935" data-testid="button-cta-call"><Phone aria-hidden="true" /> (425) 215-0935</a>
          <a href="sms:4252150935" data-testid="button-cta-text"><MessageSquare aria-hidden="true" /> Text us</a>
        </div>
      </div>
    </section>
  );
}
