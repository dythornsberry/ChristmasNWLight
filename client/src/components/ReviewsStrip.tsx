import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ReviewsStrip() {
  const quickReviews = [
    { name: "Kyle", text: "Second year using Christmas NW - exceptional stress-free experience!" },
    { name: "Margaret H.", text: "Fantastic business! Professional, knowledgeable, amazing holiday display." },
    { name: "Nancy G.", text: "Dylan and his crew are the best! 2nd install, outstanding job both times." }
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Rating Display */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-5xl font-bold text-foreground">5.0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-base text-muted-foreground font-medium">85+ Google Reviews</p>
            </div>
            <div className="hidden lg:block h-16 w-px bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="text-base text-muted-foreground">Satisfaction Guarantee</p>
            </div>
          </div>

          {/* Quick Reviews Carousel */}
          <div className="flex-1 max-w-2xl">
            <div className="grid md:grid-cols-3 gap-4">
              {quickReviews.map((review, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex gap-0.5 mb-2 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground italic line-clamp-2">
                    "{review.text}"
                  </p>
                  <p className="text-sm text-foreground font-medium mt-1">- {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
