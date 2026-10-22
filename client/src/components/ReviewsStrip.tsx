import { ArrowRight } from "lucide-react";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";

const FEATURED_NAMES = ["Kyle", "Nancy Greenup", "Margaret Huddleston"];

// First name only on the homepage; full reviews live on Google.
const firstName = (name: string) => name.split(" ")[0];

export default function ReviewsStrip() {
  const featuredReviews = FEATURED_NAMES
    .map((name) => CUSTOMER_TESTIMONIALS.find((review) => review.name === name))
    .filter((review): review is (typeof CUSTOMER_TESTIMONIALS)[number] => Boolean(review));

  return (
    <section className="home-review" aria-label="Customer reviews">
      <div className="home-container home-review-layout">
        <div className="home-review-head">
          <p className="home-review-label">{GOOGLE_RATING} stars from {GOOGLE_REVIEW_COUNT} Google reviews</p>
          <a href="https://share.google/lxhOxXmbPwABIqdNa" target="_blank" rel="noopener noreferrer" className="home-text-link">
            Read reviews <ArrowRight aria-hidden="true" />
          </a>
        </div>
        {featuredReviews.map((review) => (
          <figure key={review.name}>
            <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption>{firstName(review.name)} <span>/ Google review</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
