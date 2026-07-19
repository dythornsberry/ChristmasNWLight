import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLocation } from "wouter";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";
import { CUSTOMER_TESTIMONIALS } from "@/data/testimonials";

export default function TestimonialsPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://christmasnw.com" },
      { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": "https://christmasnw.com/testimonials" }
    ]
  };

  const testimonials = CUSTOMER_TESTIMONIALS;

  const reviewSchemaItems = testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      reviewBody: t.text,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Christmas Northwest",
    url: "https://christmasnw.com",
    telephone: "+14252150935",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kenmore",
      addressRegion: "WA",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING,
      bestRating: 5,
      reviewCount: GOOGLE_REVIEW_COUNT,
    },
    review: reviewSchemaItems,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Customer Reviews | Christmas Northwest"
        description="Read Christmas Northwest customer reviews and testimonials from homeowners and commercial clients across Greater Seattle, Kenmore, Kirkland, Bothell, and Bellevue."
        path="/testimonials"
      />
      <StructuredData data={structuredData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Customer Testimonials</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                What Our Clients Say
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Read verified feedback from customers who hired Christmas Northwest for their holiday lighting.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{GOOGLE_RATING} Average Rating</span>
                <span className="text-muted-foreground">({GOOGLE_REVIEW_COUNT} Reviews)</span>
              </div>
              <Button 
                onClick={scrollToQuote}
                className="bg-primary text-primary-foreground font-semibold"
                data-testid="button-testimonials-hero-quote"
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Google review</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center" data-testid="stat-rating">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-rating">{GOOGLE_RATING}</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
              <div className="text-center" data-testid="stat-reviews">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-reviews">{GOOGLE_REVIEW_COUNT}</div>
                <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-clients">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">Included</div>
                <div className="text-sm text-muted-foreground">Seasonal Maintenance</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready for a Quote of Your Own?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Tell us about your home and the display you have in mind. We will follow up with clear next steps and pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 font-semibold border-2 border-primary-foreground/20"
                data-testid="button-testimonials-cta-quote"
              >
                Light Up My Home ✨
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 font-semibold"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-testimonials-cta-call"
              >
                Call (425) 215-0935
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
