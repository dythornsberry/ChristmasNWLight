import { ArrowRight, Star } from "lucide-react";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";

export default function ReviewsStrip() {
  const featuredReview = CUSTOMER_TESTIMONIALS[1];

  return (
    <section className="border-y border-border bg-card py-16" aria-labelledby="customer-reviews-title">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-5 flex justify-center" aria-hidden="true">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h2 id="customer-reviews-title" className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Rated {GOOGLE_RATING} on Google
        </h2>
        <blockquote className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground/85 md:text-xl">
          “{featuredReview.text}”
        </blockquote>
        <p className="mt-4 font-semibold text-foreground">— {featuredReview.name}</p>
        <div className="mt-7 flex justify-center">
          <a
            href="https://share.google/lxhOxXmbPwABIqdNa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Read all {GOOGLE_REVIEW_COUNT} reviews
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
