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
    <section className="overflow-hidden bg-[#17201c] text-white">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr]">
        <picture className="block h-[clamp(120px,22svh,180px)] sm:h-auto sm:aspect-[16/9] lg:order-2 lg:aspect-auto">
          <source media="(max-width: 1023px)" srcSet={heroImageMobile} />
          <img
            src={heroImage}
            alt="Warm white Christmas lights along a home's roofline, porch columns, and front walkway"
            className="h-full w-full object-cover object-[62%_center] lg:object-[58%_center]"
            width={1600}
            height={1000}
            loading="eager"
            // @ts-expect-error -- React 18 does not map fetchPriority; lowercase is valid HTML.
            fetchpriority="high"
          />
        </picture>

        <div className="flex flex-col justify-center px-6 py-6 sm:px-10 sm:py-12 lg:order-1 lg:px-12 lg:py-16 xl:px-16">
          <p className="mb-3 text-xs font-medium leading-6 tracking-[0.03em] text-white/65 sm:mb-5 sm:text-sm">
            Christmas lighting · Seattle &amp; Eastside
          </p>
          <h1 className="font-serif text-[2.15rem] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[clamp(2rem,3.8vw,3.25rem)]">
            <span className="block text-[#f1dfbb]">Christmas lights,</span>{" "}
            without the work.
          </h1>
          <p className="mt-3 max-w-md text-base leading-6 text-white/80 sm:mt-5 sm:text-lg sm:leading-7">
            We install, maintain, take down, and store your lights.
          </p>
          <div className="mt-5 sm:mt-7">
            <Button
              onClick={onGetQuote}
              size="lg"
              className="min-h-14 w-full px-5 text-base font-semibold sm:min-h-12 sm:w-auto sm:px-7"
              data-testid="button-hero-cta"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-5 sm:mt-3 sm:gap-x-6">
            <Link href="/gallery" className="inline-flex min-h-11 items-center text-sm text-[#f1dfbb] underline decoration-white/30 underline-offset-4 hover:decoration-white" data-testid="link-hero-gallery">
              See our work
            </Link>
            <Link href="/investment-guide" className="inline-flex min-h-11 items-center text-sm text-[#f1dfbb] underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Pricing · from $800
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-4 text-xs text-white/70 sm:mt-8 sm:pt-5 sm:text-sm">
            <a href="https://share.google/lxhOxXmbPwABIqdNa" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-6 items-center gap-2 hover:text-white">
              <Star className="h-3.5 w-3.5 fill-[#f1dfbb] text-[#f1dfbb]" aria-hidden="true" />
              {GOOGLE_RATING} · {GOOGLE_REVIEW_COUNT} Google reviews
            </a>
            <span>Licensed, bonded &amp; insured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
