import { useState } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
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
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
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
    { name: "Kenmore", slug: "kenmore" },
    { name: "Kirkland", slug: "kirkland" },
    { name: "Bothell", slug: "bothell" },
    { name: "Woodinville", slug: "woodinville" }
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
        description="Where Christmas Northwest installs holiday lighting: Kenmore, Kirkland, Bothell, Woodinville, Bellevue, Redmond, Sammamish, and nearby cities."
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
                Based in Kenmore, with our warehouse in Woodinville. We serve Greater Seattle and the Eastside.
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
                These communities are closest to our regular installation routes and service team.
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
                    <div className="font-semibold text-foreground">We serve your area.</div>
                    <div className="text-sm text-muted-foreground">Request a free quote and we will confirm availability for your address.</div>
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
                      Send your address and we'll check whether we can schedule a visit.
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
                title="Christmas Northwest service territory map"
                data-testid="map-service-areas"
              />
            </div>
            
            {/* Additional Service Areas List */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
                We Also Serve
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
                We also schedule projects in the following communities when route capacity allows.
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

        {/* CTA Section */}
        <section className="brand-cta py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Are we near you?
            </h2>
            <p className="mb-8 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
              Send your address, even if your area isn't listed. We'll confirm coverage and available dates.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-primary bg-primary font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
                data-testid="button-areas-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border border-brand-blue/40 bg-transparent font-semibold text-brand-blue hover:bg-brand-blue/5 sm:w-auto"
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
