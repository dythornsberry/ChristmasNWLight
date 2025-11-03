import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface Review {
  author_name: string;
  author_url?: string;
  language?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsProps {
  widgetId: string;
}

export default function GoogleReviews({ widgetId }: GoogleReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: reviewsData, isLoading } = useQuery({
    queryKey: [`/api/featurable-reviews/${widgetId}`],
  });

  const reviews = (reviewsData as any)?.reviews || [];

  useEffect(() => {
    if (reviews.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [reviews.length]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return null;
  }

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  if (visibleReviews.length < 3 && reviews.length >= 3) {
    visibleReviews.push(...reviews.slice(0, 3 - visibleReviews.length));
  }

  return (
    <div className="space-y-8">
      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {visibleReviews.map((review: Review, idx: number) => (
          <Card 
            key={`${review.time}-${idx}`} 
            className="p-6 hover-elevate"
            data-testid={`card-review-${idx}`}
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating
                      ? "fill-amber-400 text-amber-400"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-base text-foreground mb-4 line-clamp-4 leading-relaxed">
              {review.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {review.profile_photo_url && (
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-foreground">
                  {review.author_name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {review.relative_time_description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2">
        {reviews.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover-elevate"
            }`}
            aria-label={`Go to review ${idx + 1}`}
            data-testid={`button-review-dot-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}
