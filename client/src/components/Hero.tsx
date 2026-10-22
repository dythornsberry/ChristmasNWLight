import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";
import heroImage from "@assets/optimized/hero-real-desktop.webp";
import heroImageMobile from "@assets/optimized/hero-real-mobile.webp";

interface HeroProps {
  onGetQuote?: () => void;
}

export default function Hero({ onGetQuote }: HeroProps) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <picture className="home-hero-photo">
        <source media="(max-width: 639px)" srcSet={heroImageMobile} />
        <img
          src={heroImage}
          alt="Christmas Northwest installation with warm white rooflines, a wreath, and wrapped columns"
          width={1600}
          height={1000}
          loading="eager"
          // @ts-expect-error -- React 18 does not map fetchPriority; lowercase is valid HTML.
          fetchpriority="high"
          data-testid="home-hero-image"
        />
      </picture>
      <div className="home-hero-shade" aria-hidden="true" />
      <div className="home-container home-hero-content">
        <p className="home-eyebrow">Christmas Northwest / Seasonal holiday lighting</p>
        <h1 id="home-title">Christmas light installation in Seattle &amp; the Eastside</h1>
        <p className="home-hero-description">A beautiful home for the holidays.<br />You never touch a ladder.</p>
        <div className="home-hero-actions">
          <Button onClick={onGetQuote} size="lg" className="home-quote-button" data-testid="button-hero-cta">
            Get a Quote <ArrowRight aria-hidden="true" />
          </Button>
          <Link href="/gallery" data-testid="link-hero-gallery">See our work <ArrowRight aria-hidden="true" /></Link>
        </div>
        <a href="https://share.google/lxhOxXmbPwABIqdNa" target="_blank" rel="noopener noreferrer" className="home-hero-rating">
          <Star aria-hidden="true" /> {GOOGLE_RATING} / {GOOGLE_REVIEW_COUNT} Google reviews
        </a>
      </div>
    </section>
  );
}
