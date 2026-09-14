import { ArrowRight } from "lucide-react";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";

export default function ReviewsStrip() {
  const featuredReview = CUSTOMER_TESTIMONIALS[1];

  return (
    <section className="home-review" aria-label="Customer review">
      <div className="home-container home-review-layout">
        <p className="home-review-label">From our customers</p>
        <figure>
          <blockquote>&ldquo;{featuredReview.text}&rdquo;</blockquote>
          <figcaption>{featuredReview.name} <span>/ Google review</span></figcaption>
        </figure>
        <a href="https://share.google/lxhOxXmbPwABIqdNa" target="_blank" rel="noopener noreferrer" className="home-text-link">
          Read reviews <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
