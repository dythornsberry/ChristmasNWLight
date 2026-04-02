import { useState } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import InternalLinksSection from "@/components/InternalLinksSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function ServiceAreasPage() {
  const [, setLocation] = useLocation();
  const [zipCode, setZipCode] = useState("");
  const [zipCheckResult, setZipCheckResult] = useState<"unknown" | "covered" | "not-covered">("unknown");

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Service area zip codes
  const serviceZipCodes = [
    "98028", "98033", "98034", "98011", "98012", "98021", "98041", "98043", 
    "98072", "98052", "98029", "98027", "98074", "98006", "98007", "98008",
    "98040", "98075", "98077", "98115", "98103", "98117", "98125", "98133",
    "98155", "98177", "98026", "98036", "98037", "98046"
  ];

  const handleZipCheck = () => {
    if (zipCode.length === 5) {
      if (serviceZipCodes.includes(zipCode)) {
        setZipCheckResult("covered");
      } else {
        setZipCheckResult("not-covered");
      }
    }
  };

  const primaryAreas = [
    { name: "Kenmore", slug: "kenmore", description: "Our home base in the heart of the Eastside" },
    { name: "Kirkland", slug: "kirkland", description: "Bringing holiday magic to lakeside homes" },
    { name: "Bothell", slug: "bothell", description: "Illuminating neighborhoods throughout Bothell" },
    { name: "Woodinville", slug: "woodinville", description: "Custom lighting for wine country estates" }
  ];

  const additionalAreas = [
    { name: "Seattle", slug: "seattle" },
    { name: "Bellevue", slug: "bellevue" },
    { name: "Redmond", slug: "redmond" },
    { name: "Sammamish", slug: "sammamish" },
    { name: "Newcastle", slug: "newcastle" },
    { name: "Mercer Island", slug: "mercer-island" },
    { name: "Shoreline", slug: "shoreline" },
    { name: "Lake Forest Park", slug: "lake-forest-park" },
    { name: "Issaquah", slug: "issaquah" },
    { name: "Mill Creek", slug: "mill-creek" },
    { name: "Mountlake Terrace", slug: null },
    { name: "Lynnwood", slug: null },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Service Areas | Christmas Northwest"
        description="See where Christmas Northwest installs holiday lighting across Greater Seattle, including Kenmore, Kirkland, Bothell, Woodinville, Bellevue, Redmond, Sammamish, and nearby areas."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">Service Areas</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Serving Greater Seattle
              </h1>
              <p className="mb-6 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                Christmas Northwest proudly serves homeowners and businesses throughout Greater Seattle and the Eastside. Based in Kenmore with our warehouse in Woodinville, we bring premium holiday lighting to communities across Bellevue, Kirkland, Redmond, Bothell, Sammamish, and surrounding areas.
              </p>
              <Button 
                onClick={scrollToQuote}
                className="w-full bg-primary font-semibold text-primary-foreground sm:w-auto"
                data-testid="button-areas-hero-quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Primary Service Areas */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Primary Service Areas
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                We focus on delivering exceptional service to these core communities where we've built strong relationships with hundreds of homeowners.
              </p>
            </div>
            
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {primaryAreas.map((area, index) => (
                <Link key={index} href={`/${area.slug}`}>
                  <Card className="p-6 hover-elevate sm:p-8 cursor-pointer transition-all hover:border-primary/30" data-testid={`card-area-${index}`}>
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Service Territory
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                Explore our complete service area covering Greater Seattle and the Eastside.
              </p>
            </div>
            
            {/* Zip Code Checker */}
            <Card className="mx-auto mb-12 max-w-2xl p-5 sm:p-8" data-testid="card-zip-checker">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">
                  Check Your Zip Code
                </h3>
                <p className="text-muted-foreground">
                  Enter your zip code to see if we serve your area
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1">
                  <Label htmlFor="zipCode" className="sr-only">Zip Code</Label>
                  <Input
                    id="zipCode"
                    type="text"
                    maxLength={5}
                    placeholder="Enter your zip code (e.g., 98028)"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                      setZipCheckResult("unknown");
                    }}
                    data-testid="input-zip-code"
                  />
                </div>
                <Button 
                  onClick={handleZipCheck}
                  disabled={zipCode.length !== 5}
                  className="w-full sm:w-auto"
                  data-testid="button-check-zip"
                >
                  Check Coverage
                </Button>
              </div>

              {zipCheckResult === "covered" && (
                <div className="mt-4 p-4 bg-primary/10 rounded-lg flex items-start gap-3" data-testid="result-covered">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Great news! We serve your area.</div>
                    <div className="text-sm text-muted-foreground">Get your free quote today and join hundreds of satisfied homeowners.</div>
                    <Button 
                      onClick={scrollToQuote}
                      className="mt-3 w-full sm:w-auto"
                      data-testid="button-zip-quote"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </div>
              )}

              {zipCheckResult === "not-covered" && (
                <div className="mt-4 p-4 bg-muted rounded-lg flex items-start gap-3" data-testid="result-not-covered">
                  <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">Not in our current service area</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      We may still be able to help! Contact us to discuss your location and we'll see what we can arrange.
                    </div>
                    <Button 
                      onClick={() => setLocation('/contact')}
                      variant="outline"
                      className="w-full sm:w-auto"
                      data-testid="button-zip-contact"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Embedded Google Map */}
            <div className="mb-12 overflow-hidden rounded-lg border-2 border-border shadow-xl">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=15rkY40rp-zfqZWUBMldquSqKXJ55HXo&ehbc=2E312F" 
                width="100%" 
                className="h-[360px] w-full sm:h-[480px] md:h-[600px]"
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
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {additionalAreas.map((area, index) => (
                area.slug ? (
                  <Link key={index} href={`/${area.slug}`}>
                    <div
                      className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border cursor-pointer transition-colors hover:border-primary/30"
                      data-testid={`area-item-${index}`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{area.name}</span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-card p-4 rounded-lg border border-border"
                    data-testid={`area-item-${index}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{area.name}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <Card className="p-6 sm:p-8 md:p-12">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Don't See Your Area Listed?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We may still be able to serve you! Contact us with your location and we'll let you know if we can accommodate your holiday lighting needs. We're always looking to expand our service area to help more homeowners enjoy beautiful, professionally installed holiday displays.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                  <Button 
                    onClick={() => setLocation('/contact')}
                    className="bg-primary font-semibold text-primary-foreground sm:w-auto"
                    data-testid="button-areas-contact"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = 'tel:4252150935'}
                    className="sm:w-auto"
                    data-testid="button-areas-call"
                  >
                    Call (425) 215-0935
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <InternalLinksSection
          title="Explore Nearby Pages"
          description="These pages help visitors move from service-area research into trust-building content and quote-ready pages."
          links={[
            {
              href: "/kenmore",
              label: "Kenmore Lighting",
              description: "See our city-specific page for our home base and nearby neighborhoods.",
            },
            {
              href: "/kirkland",
              label: "Kirkland Lighting",
              description: "Browse a local landing page built for one of our core Eastside markets.",
            },
            {
              href: "/services",
              label: "All Services",
              description: "Compare roofline lighting, tree wrapping, commercial work, and seasonal support.",
            },
            {
              href: "/contact",
              label: "Request a Quote",
              description: "Go straight to the step-by-step lead form if you already know we serve your area.",
            },
          ]}
        />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Light Up Your Home?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Serving hundreds of homes across Greater Seattle. Get your free quote today and join your neighbors in creating a stunning holiday display.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-2 border-primary-foreground/20 bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto"
                data-testid="button-areas-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
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
