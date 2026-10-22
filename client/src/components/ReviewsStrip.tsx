import { ArrowRight, Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";

// Short, verbatim lines pulled from real Google reviews (full text in data/testimonials.ts).
const FEATURED_REVIEWS = [
  { name: "Kyle", text: "Dylan and the crew went above and beyond." },
  { name: "Nancy", text: "Lights look amazing, everyone has been most kind and responsive." },
  { name: "Sandy", text: "Exceptional customer service from a local company!" },
];

export default function ReviewsStrip() {
  return (
    <section className="home-review" aria-label="Customer reviews">
      <div className="home-container home-review-inner">
        <div className="home-review-head">
          <p className="home-review-label">
            <span className="home-review-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} />)}
            </span>
            {GOOGLE_RATING} from {GOOGLE_REVIEW_COUNT} Google reviews
          </p>
          <a href="https://share.google/lxhOxXmbPwABIqdNa" target="_blank" rel="noopener noreferrer" className="home-text-link">
            Read reviews <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="home-review-layout">
          {FEATURED_REVIEWS.map((review) => (
            <figure key={review.name}>
              <blockquote>&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
