import { useEffect, useState } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import LeadFormCard from "@/components/LeadFormCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Smartphone, Zap, Shield, Palette, Clock, Youtube, Play } from "lucide-react";

import permanentLighting1 from "@assets/Gallery_GeorgeS_Edited-scaled-square_1762286184697.jpg";
import permanentLighting2 from "@assets/dsc00331_edited_1762286184697.jpg";

const permanentLightingVideos = [
  {
    title: "Permanent Lighting Demo",
    location: "Redmond, WA",
    description: "See a finished color-changing system in action on a real home.",
    youtubeId: "f7vQhLxL9B8",
  },
  {
    title: "Permanent Lighting Install",
    location: "Greater Seattle Area",
    description: "A quick look at how our permanent lighting installs come together from start to finish.",
    youtubeId: "ozZItKmCPKE",
  },
];

export default function PermanentLighting() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("permanent-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Permanent Outdoor Lighting Installation",
    "description": "Permanent outdoor lighting systems with smartphone control, millions of colors, and professional installation. One-time install for year-round use across Greater Seattle.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Christmas Northwest",
      "telephone": "+14252150935",
      "url": "https://christmasnw.com"
    },
    "areaServed": {
      "@type": "State",
      "name": "Washington",
      "containedInPlace": {
        "@type": "Country",
        "name": "United States"
      }
    },
    "serviceType": "Permanent Outdoor Lighting",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2000",
        "priceCurrency": "USD",
        "unitText": "starting price"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Permanent Outdoor Lighting | Christmas Northwest"
        description="Permanent outdoor lighting with smartphone control and millions of colors. Professional installation starting at $2,000 in Greater Seattle."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-14 sm:py-20 md:py-32">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <Badge 
              variant="outline" 
              className="mb-5 border-2 border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold sm:mb-6 sm:px-6 sm:py-2.5 sm:text-base md:text-lg"
              data-testid="badge-permanent-hero"
            >
              <Sparkles className="w-5 h-5 mr-2 text-amber-600" />
              High Demand Service
            </Badge>
            <h1 className="mb-5 font-serif text-3xl font-bold leading-tight text-foreground sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
              One Installation.<br />Every Holiday. Forever.
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-xl md:mb-10 md:max-w-3xl md:text-2xl">
              Permanent outdoor lighting that transforms with the seasons. Christmas red and green, Fourth of July, Halloween, or elegant white year-round. All from your phone.
            </p>
            <div className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Button 
                size="lg" 
                onClick={scrollToQuote}
                className="w-full px-8 py-6 text-base font-bold shadow-2xl hover:shadow-amber-500/20 sm:w-auto sm:px-10 sm:py-7 sm:text-xl"
                data-testid="button-permanent-hero-quote"
              >
                Get a Free Estimate
              </Button>
              <p className="text-base text-muted-foreground sm:text-lg">Most homes $2,000-$5,000</p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Why Homeowners Love Permanent Lighting
              </h2>
            </div>

            <div className="mb-16 grid gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Control From Your Phone</h3>
                <p className="text-muted-foreground">
                  Change colors, set schedules, and create custom patterns from anywhere. No climbing ladders ever again.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Millions of Colors</h3>
                <p className="text-muted-foreground">
                  Red and green for Christmas, pastels for Easter, team colors for game day. One system, endless possibilities.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">No Annual Setup</h3>
                <p className="text-muted-foreground">
                  Skip the yearly install and takedown. Your lights stay up, look great, and work perfectly year after year.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Energy Efficient</h3>
                <p className="text-muted-foreground">
                  Commercial-grade LEDs use a fraction of the power of traditional bulbs. Beautiful lighting without the electric bill shock.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Built to Last</h3>
                <p className="text-muted-foreground">
                  Weather-resistant construction handles Seattle rain, snow, and everything in between. 5-year warranty included.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Invisible by Day</h3>
                <p className="text-muted-foreground">
                  Low-profile track system matches your roofline and fascia. Stunning at night, nearly invisible during the day.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                See It In Action
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                Local installations by our team in the Greater Seattle area.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-5 sm:gap-8 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-perm-gallery-1">
                <img
                  src={permanentLighting1}
                  alt="Permanent lighting system showing rainbow colors on home roofline"
                  className="w-full aspect-video object-cover"
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                />
                <div className="bg-background p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Custom Color Display</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-testid="card-perm-gallery-2">
                <img
                  src={permanentLighting2}
                  alt="Multi-color permanent lighting on residential roofline"
                  className="w-full aspect-video object-cover"
                  width={640}
                  height={360}
                  loading="lazy"
                  decoding="async"
                />
                <div className="bg-background p-4 text-center">
                  <p className="text-sm font-semibold text-foreground">Year-Round Versatility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
              <Badge
                variant="outline"
                className="mb-4 border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold"
              >
                Permanent Lighting Videos
              </Badge>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Watch Real Permanent Lighting Projects
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                These quick videos give homeowners a better feel for the look, color control, and finish of a permanent lighting system.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {permanentLightingVideos.map((video) => (
                <div
                  key={video.youtubeId}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    {playingVideos[video.youtubeId] ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          setPlayingVideos((current) => ({
                            ...current,
                            [video.youtubeId]: true,
                          }))
                        }
                        className="relative h-full w-full text-left"
                        data-testid={`button-permanent-video-${video.youtubeId}`}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={`${video.title} video thumbnail`}
                          loading="lazy"
                          decoding="async"
                          width={480}
                          height={360}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-3 py-1.5 text-sm font-semibold text-white shadow-lg">
                          <Youtube className="h-4 w-4" />
                          <span>YouTube</span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-5 py-3 text-base font-semibold text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                            <Play className="h-5 w-5 fill-current" />
                            <span>Play Video</span>
                          </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                          <p className="text-sm font-medium text-white/80">{video.location}</p>
                          <h3 className="mt-1 text-xl font-semibold">{video.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/80">{video.description}</p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                Transparent Pricing
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
                Permanent lighting is custom to the roofline, but these ranges are a better starting point for real homes.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
              <Card className="p-6 text-center sm:p-8">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Small Homes</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$2,000 - $3,000</div>
                <p className="text-muted-foreground">
                  Cleaner rooflines, fewer peaks, and shorter runs for a simple permanent lighting layout.
                </p>
              </Card>

              <Card className="border-2 border-amber-500/40 p-6 text-center sm:p-8">
                <Badge className="mb-4 bg-amber-500/10 text-amber-600 border-amber-500/40">Most Popular</Badge>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Medium Homes</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$3,000 - $5,000</div>
                <p className="text-muted-foreground">
                  Full roofline coverage with more corners, peaks, and a fuller look around the main home.
                </p>
              </Card>

              <Card className="p-6 text-center sm:p-8">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Extra Large Homes</h3>
                <div className="text-3xl font-bold text-foreground mb-4">$5,000 - $8,000+</div>
                <p className="text-muted-foreground">
                  Larger rooflines, detached structures, and more complex architecture that takes more material and install time.
                </p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              All ranges include professional installation, materials, and our 5-year warranty. Final pricing depends on roofline length, complexity, and access.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="permanent-quote" className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <LeadFormCard
              title="Get Your Free Estimate"
              description="Short form, fast callback, and enough detail for us to quote the right permanent lighting system for your home."
              submitLabel="Get My Free Estimate"
              successTitle="Permanent lighting request received"
              successDescription="We’ll review your home and reach out with pricing guidance, scope, and the best next step for your lighting project."
              trackingLabel="permanent_lighting_quote"
              formLocation="permanent_lighting_page"
              initialServiceType="permanent-lighting"
              serviceBadgeText="Permanent lighting estimates"
              contactStepDescription="Use the best name, email, and phone number for proposal follow-up and scheduling."
              propertyStepDescription="We use the installation address to estimate roofline complexity, access, and the right permanent lighting layout."
              addressLabel="Installation Address"
              addressPlaceholder="Start typing the installation address"
              responseNote="We'll be in touch soon to talk through your permanent lighting project."
              trustNote="Permanent systems, commercial-grade materials, and local installation expertise"
              testIdPrefix="permanent"
            />
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
