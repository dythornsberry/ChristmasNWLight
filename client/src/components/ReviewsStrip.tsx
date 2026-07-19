import { ArrowRight, Star } from "lucide-react";
import { Link } from "wouter";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";
import { Card } from "@/components/ui/card";

export default function ReviewsStrip() {
  const featuredReviews = CUSTOMER_TESTIMONIALS.slice(0, 3);

  return (
    <section className="border-y border-border bg-card py-16" aria-labelledby="customer-reviews-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">Verified Google feedback</p>
            <h2 id="customer-reviews-title" className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              What customers say
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex" aria-hidden="true">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong className="text-foreground">{GOOGLE_RATING}</strong> from {GOOGLE_REVIEW_COUNT} Google reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredReviews.map((review) => (
            <Card key={review.name} className="flex h-full flex-col p-6">
              <div className="mb-4 flex" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 leading-7 text-foreground/85">“{review.text}”</blockquote>
              <p className="mt-5 border-t border-border pt-4 font-semibold text-foreground">{review.name}</p>
              <p className="text-sm text-muted-foreground">Google review</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="https://share.google/lxhOxXmbPwABIqdNa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Read all reviews on Google
          </a>
          <Link href="/testimonials" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
            More customer stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
