import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import LeadFormCard, { type LeadServiceOption } from "@/components/LeadFormCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Sun, Droplets, Home, ArrowRight } from "lucide-react";
import { Link } from "wouter";

import gutterBefore1 from "@assets/BeforeAfter-gutter_optimized.webp";
import gutterBefore2 from "@assets/images-2_1762287067360.jpeg";
import gutterBefore3 from "@assets/image3-2_1762287067360.jpeg";
import permanentLighting1 from "@assets/Gallery_GeorgeS_Edited-scaled-square_1762286184697.jpg";
import landscapeLighting1 from "@assets/pennsylvania-landscape-lighting_optimized.webp";
import bistroLights1 from "@assets/w-String-lights_Wedgewood2_Courtesy-of-Britescape.jpg_1762286120625.webp";
import bistroLights2 from "@assets/tzr-string-lights-highlands-home-daylight_Courtesy-of-Britescape.jpg_1762286120625.webp";

const YEAR_ROUND_SERVICE_OPTIONS: LeadServiceOption[] = [
  { value: "gutter-cleaning", label: "Gutter Cleaning", sublabel: "Roof and gutter maintenance", icon: Droplets },
  { value: "permanent-lighting", label: "Permanent Lighting", sublabel: "Year-round programmable lighting", icon: Sparkles },
  { value: "landscape-bistro-event", label: "Landscape / Bistro / Event Lighting", sublabel: "Custom outdoor lighting", icon: Home },
];

export default function YearRoundServices() {
  const scrollToQuote = () => {
    const quoteSection = document.getElementById("year-round-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Year-Round Services - Christmas Northwest | Gutter Cleaning & Permanent Lighting"
        description="Premium year-round outdoor lighting and property care services in Greater Seattle. Professional gutter cleaning $300-$500, permanent lighting systems starting at $1,500, and custom landscape lighting by your trusted Christmas light experts."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-14 sm:py-20 md:py-32">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Badge 
              variant="outline" 
              className="mb-5 border-2 border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold sm:mb-6 sm:px-6 sm:py-2.5 sm:text-base md:text-lg"
              data-testid="badge-year-round"
            >
              <Sun className="w-5 h-5 mr-2 text-amber-600" />
              Premium Outdoor Lighting & Property Care
            </Badge>
            <h1 className="mb-5 font-serif text-3xl font-bold leading-tight text-foreground sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
              We Don't Hibernate<br />After the Holidays
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl md:mb-10 md:max-w-3xl md:text-2xl">
              Premium year-round lighting and exterior services for Greater Seattle homeowners who already trust our Christmas work.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToQuote}
              className="w-full px-8 py-6 text-base font-bold shadow-2xl hover:shadow-amber-500/20 sm:w-auto sm:px-10 sm:py-7 sm:text-xl"
              data-testid="button-hero-quote"
            >
              Get a Quote
            </Button>
          </div>
        </section>

        {/* Permanent Lighting Section - Link to Dedicated Page */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="overflow-hidden">
                  <img 
                    src={permanentLighting1} 
                    alt="Permanent lighting system with rainbow colors on home roofline"
                    className="w-full h-full object-cover min-h-[300px]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                  <Badge 
                    variant="outline" 
                    className="mb-4 px-4 py-1.5 text-sm font-semibold border-amber-500/40 bg-amber-500/10 w-fit"
                    data-testid="badge-permanent-lighting"
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-amber-600" />
                    High Demand
                  </Badge>
                  <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                    Permanent Lighting Solutions
                  </h2>
                  <p className="mb-6 text-base leading-7 text-muted-foreground sm:text-lg">
                    One installation, every holiday, forever. Control colors from your phone for Christmas, Fourth of July, Halloween, or elegant white year-round.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-foreground">Starting at $1,500</span>
                  </div>
                  <Link href="/permanent-lighting">
                    <Button 
                      size="lg"
                      className="w-full text-base font-semibold sm:w-auto sm:text-lg"
                      data-testid="button-permanent-learn-more"
                    >
                      Learn More <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Gutter Cleaning Section */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <Badge 
                variant="outline" 
                className="mb-4 px-5 py-2 text-base font-semibold border-amber-500/40 bg-amber-500/10"
                data-testid="badge-gutter-cleaning"
              >
                <Droplets className="w-4 h-4 mr-2 text-amber-600" />
                Bundled Service
              </Badge>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Professional Gutter & Roof Maintenance
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                Powered by our sister company Seattle ProWash, offering the same premium quality you trust for Christmas lights.
              </p>
            </div>

            <div className="mb-12 grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
              <Card className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Seamless Convenience</h3>
                <p className="mb-4 text-base text-muted-foreground sm:text-lg">
                  Why hire two companies when one can do it all? When we take down your Christmas lights in early January, we can clean your gutters at the same time. Already on your roof. Already insured. Already trusted.
                </p>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-3xl font-bold text-foreground">$300-$500</span>
                  <span className="text-base text-muted-foreground sm:text-lg">Most homes</span>
                </div>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Premium Service Includes</h3>
                <ul className="space-y-3 text-base text-muted-foreground sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Complete gutter cleaning and debris removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Downspout flushing and inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Roof debris removal and inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Photo documentation of problem areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Same professional team you already trust</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-gutter-photo-1">
                <img 
                  src={gutterBefore1} 
                  alt="Before and after gutter cleaning showing dramatic transformation from debris-filled to clean gutters"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-gutter-photo-2">
                <img 
                  src={gutterBefore2} 
                  alt="Professional gutter cleaning before and after comparison"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-gutter-photo-3">
                <img 
                  src={gutterBefore3} 
                  alt="Gutter maintenance showing clean results after Seattle ProWash service"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Landscape/Bistro/Event Lighting Section */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <Badge 
                variant="outline" 
                className="mb-4 px-5 py-2 text-base font-semibold border-amber-500/40 bg-amber-500/10"
                data-testid="badge-landscape-lighting"
              >
                <Home className="w-4 h-4 mr-2 text-amber-600" />
                Custom Solutions
              </Badge>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Landscape, Bistro & Event Lighting
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                Create unforgettable outdoor spaces with professional lighting design. Perfect for entertaining, ambiance, or special events.
              </p>
            </div>

            <div className="mb-12 grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
              <Card className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Transform Your Outdoor Space</h3>
                <p className="mb-4 text-base text-muted-foreground sm:text-lg">
                  From elegant pathway lighting to stunning bistro string lights for your patio, we bring the same attention to detail that makes your home shine at Christmas. Professional installation, premium materials, beautiful results.
                </p>
                <div className="flex items-baseline gap-2 mt-6">
                  <span className="text-2xl font-bold text-foreground">Contact for Custom Quote</span>
                </div>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Popular Applications</h3>
                <ul className="space-y-3 text-base text-muted-foreground sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Bistro string lights for patios and decks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Landscape and pathway accent lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Special event and wedding lighting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Tree uplighting and garden features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span>Outdoor dining and entertainment areas</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-landscape-photo-1">
                <img 
                  src={landscapeLighting1} 
                  alt="Professional landscape pathway lighting with uplighting on trees and shrubs creating warm outdoor ambiance"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-muted/30 p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Pathway & Landscape Lighting</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-landscape-photo-2">
                <img 
                  src={bistroLights1} 
                  alt="Bistro string lights creating magical atmosphere over outdoor patio and fire pit area"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-muted/30 p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Bistro String Lights</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-landscape-photo-3">
                <img 
                  src={bistroLights2} 
                  alt="Professional bistro light installation over outdoor entertainment area with dining and seating"
                  className="w-full aspect-video object-cover"
                  loading="lazy"
                />
                <div className="bg-muted/30 p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Outdoor Entertainment Lighting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="year-round-quote" className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <LeadFormCard
              title="Get Your Free Estimate"
              description="Tell us which year-round service you want, then we’ll follow up with the best next step and pricing guidance."
              submitLabel="Get My Free Estimate"
              successTitle="Request received"
              successDescription="We’ll review the service type, property, and access details, then reach out with the best plan for your project."
              trackingLabel="year_round_services_quote"
              formLocation="year_round_services_page"
              serviceOptions={YEAR_ROUND_SERVICE_OPTIONS}
              showServiceStep
              serviceBadgeText="Year-round outdoor services"
              serviceStepTitle="Which service are you interested in?"
              serviceStepDescription="Choose the project type first so we can route your request to the right estimate workflow."
              propertyStepDescription="We use the address to confirm service area coverage and give you a more accurate estimate for the selected service."
              addressPlaceholder="Start typing the service address"
              responseNote="We'll be in touch soon to talk through your project."
              trustNote="Same professional team, same premium quality, and a cleaner year-round estimate flow"
              testIdPrefix="year-round"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">When is the best time to clean gutters?</h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  We recommend cleaning gutters at least twice a year - once in late fall after leaves drop, and again in early spring. Many of our clients schedule gutter cleaning when we take down their Christmas lights in January, making it convenient and efficient.
                </p>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">How long does permanent lighting last?</h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Our commercial-grade permanent lighting systems are built to last 10+ years with minimal maintenance. The LED bulbs are rated for 50,000+ hours, and the track system is designed to withstand Pacific Northwest weather year-round.
                </p>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Do you serve the same areas as your Christmas lighting service?</h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Yes! We serve the entire Greater Seattle area including Bothell, Woodinville, Kirkland, Redmond, Sammamish, Issaquah, Bellevue, and surrounding communities. Same trusted team, same service area.
                </p>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Is Seattle ProWash a separate company?</h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Seattle ProWash is our sister company specializing in professional gutter and roof cleaning. It's the same ownership, same quality standards, and often the same crew you know from Christmas lights. We simply wanted a dedicated brand for year-round property maintenance.
                </p>
              </Card>

              <Card className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3 text-foreground">Can I get multiple services at once?</h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Absolutely! Many clients bundle gutter cleaning with Christmas light takedown in January, or add permanent lighting to their annual Christmas service. We're happy to provide package pricing for multiple services.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
