import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Leaf, Trees, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function LightingOptions() {
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

  const lightingOptions = [
    {
      id: 1,
      title: "Roofline Lighting",
      icon: Zap,
      priceRange: "Starting at $800",
      description: "Outline your home's roofline and peaks with professional C9 or mini LED lights. Our most popular option that instantly transforms your home's curb appeal.",
      details: [
        "C9 or mini LED options",
        "Peak and ridge highlighting",
        "Multiple color choices",
        "Professional grade bulbs"
      ]
    },
    {
      id: 2,
      title: "Tree & Shrub Lighting",
      icon: Trees,
      priceRange: "From $300-$800 per tree",
      description: "Showcase your landscaping with carefully wrapped trees and bushes. Perfect for creating depth and dimension around your property.",
      details: [
        "Custom tree wrapping",
        "Bush and hedge lighting",
        "Column wraps available",
        "Multi-color or warm white"
      ]
    },
    {
      id: 3,
      title: "Landscape Lighting",
      icon: Leaf,
      priceRange: "Varies by design",
      description: "Accent lights along pathways, driveways, and flower beds create layers of visual interest and guide guests through your yard.",
      details: [
        "Pathway lighting",
        "Driveway accents",
        "Garden bed highlights",
        "Gate and entry lighting"
      ]
    },
    {
      id: 4,
      title: "Greenery & Wreaths",
      icon: Sparkles,
      priceRange: "Starting at $150",
      description: "Add festive greenery, pre-lit wreaths, and garland to complete your holiday display. Perfect finishing touches for any installation.",
      details: [
        "Pre-lit wreaths",
        "Garland installation",
        "Greenery placement",
        "Entry accents"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <PageHead 
        title="Holiday Lighting Options | Roofline, Trees, Landscape | Christmas Northwest"
        description="Explore our professional holiday lighting options: roofline lighting, tree & shrub wrapping, landscape accents, and greenery. Find the perfect combination for your home."
      />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Lighting Options
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Choose the lighting types that best fit your vision. Mix and match options to create your perfect holiday display.
            </p>
          </div>
        </div>
      </section>

      {/* Lighting Options Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {lightingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <Card 
                  key={option.id}
                  className="p-8 hover-elevate shadow-lg"
                  data-testid={`card-lighting-option-${option.id}`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gold/20 flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary">
                        {option.priceRange}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {option.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {option.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={scrollToQuote}
                    className="w-full bg-primary text-primary-foreground"
                    data-testid={`button-option-${option.id}`}
                  >
                    Get Free Quote
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Info Box */}
          <Card className="mt-12 p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-gold/20 max-w-3xl mx-auto">
            <p className="text-base text-center text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Most customers combine multiple options</strong> to create a comprehensive display. The example homes in our Investment Guide mix roofline, trees, shrubs, and landscape lighting for stunning results. Let's design something perfect for your home.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Design Your Display?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Every combination is unique. Get a custom quote based on exactly what you want for your home.
          </p>
          <Button
            onClick={scrollToQuote}
            size="lg"
            className="text-xl font-bold shadow-2xl hover:shadow-primary/20 border border-gold/20"
            data-testid="button-cta-quote"
          >
            Get Your Free Quote
          </Button>
        </div>
      </section>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
