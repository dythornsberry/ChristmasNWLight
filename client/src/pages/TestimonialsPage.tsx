import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLocation } from "wouter";

export default function TestimonialsPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const testimonials = [
    {
      name: "Kyle",
      location: "Greater Seattle Area",
      rating: 5,
      text: "This is the second year we used Christmas NW for our Christmas lights. Dylan and the crew went above and beyond to provide an exceptional stress free experience. They are reasonably priced, very knowledgeable, and have showcased a very high attention to even the smallest details.",
      detail: "Repeat customer - 2nd year installation",
      date: "December 2024"
    },
    {
      name: "Sandy Cocanour",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Outstanding professional service from the person answering the phone to the gentlemen installing the lights. Exceptional customer service from a local company!",
      detail: "Complete service experience",
      date: "November 2024"
    },
    {
      name: "Margaret Huddleston",
      location: "Greater Seattle Area",
      rating: 5,
      text: "What a fantastic business! I give my highest endorsement! From front office to the crew, all are professional, knowledgeable, friendly and do an amazing job creating a beautiful holiday display. They have above and beyond customer service.",
      detail: "Premium residential installation",
      date: "December 2024"
    },
    {
      name: "Nancy Greenup",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Dylan and his crew are the best! This is our 2nd install for the holidays and they have done an outstanding job both times. Lights look amazing, everyone has been most kind and responsive. I definitely recommend their service- you will be thrilled from start to finish!",
      detail: "Loyal customer - outstanding results",
      date: "November 2024"
    },
    {
      name: "Andrew Rampulla",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Can't say enough good things about these guys. I've always done my own Christmas lights, but this year I decided to finally get some help and I'm very glad I did.",
      detail: "First-time professional installation",
      date: "December 2024"
    },
    {
      name: "Shawn Bailey",
      location: "Greater Seattle Area",
      rating: 5,
      text: "These guys are the absolute best in the game, these lights not only made my wife love me again but they also gave us the best looking house on the block!",
      detail: "Show-stopping display",
      date: "November 2024"
    },
    {
      name: "Jennifer Martinez",
      location: "Kenmore, WA",
      rating: 5,
      text: "After years of struggling with tangled lights and unsafe ladders, hiring Christmas Northwest was the best decision. The installation was fast, professional, and the results are stunning. Our neighbors keep complimenting us!",
      detail: "Residential roofline installation",
      date: "November 2024"
    },
    {
      name: "Robert Chen",
      location: "Kirkland, WA",
      rating: 5,
      text: "Our commercial property needed a professional holiday display to attract customers. Christmas Northwest delivered beyond our expectations. The lights look incredible and their maintenance service gives us complete peace of mind.",
      detail: "Commercial installation",
      date: "October 2024"
    },
    {
      name: "Sarah Thompson",
      location: "Bothell, WA",
      rating: 5,
      text: "We wanted something special this year and the custom design package exceeded our vision. From the consultation to the final installation, every detail was perfect. Highly recommend!",
      detail: "Custom design package",
      date: "December 2024"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
                Don't just take our word for it. See why hundreds of homeowners across Greater Seattle trust Christmas Northwest for their holiday lighting needs.
              </p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">5.0 Average Rating</span>
                <span className="text-muted-foreground">(85+ Reviews)</span>
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Detail Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <span className="text-xs font-semibold text-primary">{testimonial.detail}</span>
                  </div>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-border">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-rating">5.0</div>
                <div className="text-sm text-muted-foreground">Google Rating</div>
              </div>
              <div className="text-center" data-testid="stat-reviews">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-reviews">85+</div>
                <div className="text-sm text-muted-foreground">Five-Star Reviews</div>
              </div>
              <div className="text-center" data-testid="stat-clients">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-clients">300+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center" data-testid="stat-satisfaction">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Join Hundreds of Satisfied Homeowners
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Experience the same exceptional service and stunning results. Get your free quote today and see why our clients give us 5-star reviews.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 font-semibold border-2 border-primary-foreground/20"
                data-testid="button-testimonials-cta-quote"
              >
                Get Free Quote
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
