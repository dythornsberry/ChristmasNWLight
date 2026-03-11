import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FeaturableReview = {
  reviewId?: string;
  authorName?: string;
  reviewerName?: string;
  text?: string;
  comment?: string;
  rating?: number;
  publishTime?: string;
  createdAt?: string;
};

type FeaturableWidgetResponse = {
  averageRating?: number;
  totalReviewCount?: number | string;
  profileUrl?: string;
  reviews?: FeaturableReview[];
};

function getReviewAuthor(review: FeaturableReview) {
  return review.authorName || review.reviewerName || "Google reviewer";
}

function getReviewText(review: FeaturableReview) {
  return review.text || review.comment || "";
}

function getReviewDate(review: FeaturableReview) {
  const value = review.publishTime || review.createdAt;
  if (!value) {
    return "";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ReviewsStrip() {
  const googleReviewsUrl = "https://share.google/lxhOxXmbPwABIqdNa";
  const featurableWidgetId = import.meta.env.VITE_FEATURABLE_WIDGET_ID?.trim() ?? "";
  const { data } = useQuery<FeaturableWidgetResponse>({
    enabled: Boolean(featurableWidgetId),
    queryKey: [`/api/featurable-reviews/${featurableWidgetId}`],
  });

  const reviews = (data?.reviews ?? [])
    .filter((review) => getReviewText(review).trim().length > 0)
    .slice(0, 3);
  const averageRating = data?.averageRating ?? 5.0;
  const totalReviewCount = Number(data?.totalReviewCount ?? 85);
  const profileUrl = data?.profileUrl || googleReviewsUrl;

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Google Reviews</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Real feedback from local homeowners
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
              <span className="text-3xl font-bold text-foreground">{averageRating.toFixed(1)}</span>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{totalReviewCount}+ Google reviews</p>
              </div>
            </div>

            <a href={profileUrl} target="_blank" rel="noreferrer" data-testid="link-google-reviews">
              <Button variant="outline" className="border-primary/20">
                Read Google Reviews
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>

        {reviews.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <Card key={review.reviewId || index} className="rounded-3xl border-border/80 bg-background p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-foreground">{getReviewAuthor(review)}</p>
                    <p className="text-sm text-muted-foreground">{getReviewDate(review) || "Google review"}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 line-clamp-5 text-sm leading-7 text-muted-foreground">
                  "{getReviewText(review)}"
                </p>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border/80 bg-background px-6 py-8 text-center shadow-sm">
            <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground">
              Live Google reviews will show here as soon as we connect your Featurable widget ID.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <Link href="/testimonials">
            <Button variant="ghost" data-testid="button-home-testimonials">
              See More Customer Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
