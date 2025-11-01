import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

export default function ServiceAreasPage() {
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

  const primaryAreas = [
    { name: "Kenmore", description: "Our home base, serving the heart of North Seattle" },
    { name: "Kirkland", description: "Bringing holiday magic to lakeside homes" },
    { name: "Bothell", description: "Illuminating neighborhoods throughout Bothell" },
    { name: "Woodinville", description: "Custom lighting for wine country estates" }
  ];

  const additionalAreas = [
    "Redmond",
    "Sammamish",
    "Lake Forest Park",
    "Shoreline",
    "Mill Creek",
    "Mountlake Terrace",
    "Lynnwood",
    "Bellevue",
    "Issaquah",
    "Newcastle",
    "Mercer Island",
    "Seattle (North)"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Seasonal Promotional Banner */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-primary-border">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-center text-primary-foreground font-semibold text-sm md:text-base">
            Book Your 2025 Holiday Display Now - Limited Spots Available for Thanksgiving Week Installation!
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Service Areas</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Serving Greater Seattle
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Christmas Northwest proudly serves homeowners and businesses throughout the Greater Seattle area. Based in Kenmore, we bring premium holiday lighting to communities across North Seattle and the Eastside.
              </p>
              <Button 
                onClick={scrollToQuote}
                className="bg-primary text-primary-foreground font-semibold"
                data-testid="button-areas-hero-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Primary Service Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We focus on delivering exceptional service to these core communities where we've built strong relationships with hundreds of homeowners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {primaryAreas.map((area, index) => (
                <Card key={index} className="p-8 hover-elevate" data-testid={`card-area-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                        {area.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Service Territory
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our complete service area covering Greater Seattle and the Eastside.
              </p>
            </div>
            
            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden border-2 border-border shadow-xl mb-12">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=15rkY40rp-zfqZWUBMldquSqKXJ55HXo&ehbc=2E312F" 
                width="100%" 
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                data-testid="map-service-areas"
              />
            </div>
            
            {/* Additional Service Areas List */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                We Also Serve
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                In addition to our primary service areas, we extend our premium holiday lighting services to the following communities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {additionalAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border"
                  data-testid={`area-item-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <Card className="p-8 md:p-12">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Don't See Your Area Listed?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We may still be able to serve you! Contact us with your location and we'll let you know if we can accommodate your holiday lighting needs. We're always looking to expand our service area to help more homeowners enjoy beautiful, professionally installed holiday displays.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    onClick={() => setLocation('/contact')}
                    className="bg-primary text-primary-foreground font-semibold"
                    data-testid="button-areas-contact"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'tel:4252150935'}
                    data-testid="button-areas-call"
                  >
                    Call (425) 215-0935
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Light Up Your Home?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Serving hundreds of homes across Greater Seattle. Get your free quote today and join your neighbors in creating a stunning holiday display.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 font-semibold border-2 border-primary-foreground/20"
                data-testid="button-areas-cta-quote"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 font-semibold"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-areas-cta-call"
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
