import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Shield, Clock, Award, Sparkles, CheckCircle2, TrendingUp, Users, Star } from "lucide-react";
import dylanPhoto from '@assets/dylan_owner_optimized.jpeg';
import crewTeamPhoto from '@assets/IMG_3713_optimized.webp';
import fleetPhoto from '@assets/IMG_9313_optimized.jpeg';
import truckActionShot from '@assets/IMG_1466_optimized.jpeg';
import { useLocation } from "wouter";

export default function AboutPage() {
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

  const credentials = [
    {
      icon: Shield,
      title: "Licensed, Bonded & Insured",
      description: "Full licensing and insurance coverage for your complete peace of mind and property protection."
    },
    {
      icon: Award,
      title: "Commercial-Grade LED Lights",
      description: "Premium, energy-efficient LED lights built to last multiple seasons with vibrant, consistent colors."
    },
    {
      icon: Sparkles,
      title: "Premium Custom Designs",
      description: "Tailored lighting designs that complement your property's architecture and exceed your vision."
    },
    {
      icon: Clock,
      title: "Week-of-Booking Installation",
      description: "Installations completed within a week of booking, so you can enjoy your lights quickly."
    }
  ];

  const milestones = [
    { number: "5.0", label: "Google Rating", description: "85+ five-star reviews" },
    { number: "24hr", label: "Response Time", description: "Quick replies, same-week repairs" },
    { number: "100%", label: "Satisfaction", description: "We fix issues at no extra cost" },
    { number: "Free", label: "Takedown", description: "Included in every package" }
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "description": "Christmas Northwest is a Greater Seattle holiday lighting company offering premium residential and commercial installations, fast response times, and full-service displays including design, install, maintenance, takedown, and storage.",
    "url": "https://christmasnw.com/about",
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "priceRange": "$800-$6,000+",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.7573,
      "longitude": -122.2443
    },
    "areaServed": [
      { "@type": "City", "name": "Seattle", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Bellevue", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Kirkland", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Bothell", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Kenmore", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Woodinville", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Redmond", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Sammamish", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Shoreline", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Mill Creek", "address": { "addressRegion": "WA" } }
    ],
    "foundingDate": "2021",
    "founder": {
      "@type": "Person",
      "name": "Dylan Thornsberry",
      "jobTitle": "Owner"
    },
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw/",
      "https://www.youtube.com/@christmasnw"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "reviewCount": "85",
      "ratingCount": "85"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="About Christmas Northwest | Holiday Lighting Experts in Greater Seattle"
        description="Learn about Christmas Northwest, the Greater Seattle holiday lighting team focused on premium installs, fast response times, and stress-free full-service displays."
      />
      <StructuredData data={localBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14 md:mb-16">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">About Christmas Northwest</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Your Trusted Holiday Lighting Experts
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                We've earned the trust of homeowners across Greater Seattle with premium installations, professional service, and stunning results.
              </p>
            </div>

            {/* Milestones Grid */}
            <div className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {milestones.map((milestone, index) => (
                <Card key={index} className="p-4 text-center sm:p-6" data-testid={`card-milestone-${index}`}>
                  <div className="mb-2 text-3xl font-bold text-primary sm:text-4xl md:text-5xl" data-testid={`text-milestone-number-${index}`}>
                    {milestone.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {milestone.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {milestone.description}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Story
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                From humble beginnings to serving hundreds of homes, Christmas Northwest has grown into Greater Seattle's trusted holiday lighting partner.
              </p>
            </div>

            <div className="mb-16 grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <img 
                  src={dylanPhoto} 
                  alt="Dylan Thornsberry, Owner of Christmas Northwest"
                  className="w-full rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-about-dylan"
                />
              </div>
              <div>
                <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-lg">
                  <p>
                    Christmas Northwest was founded on a simple belief: every home deserves a beautiful, professionally installed holiday lighting display that brings joy without the hassle.
                  </p>
                  <p>
                    We've had the privilege of serving homeowners across Greater Seattle. Our team combines technical expertise with artistic vision to create stunning displays that transform ordinary homes into extraordinary holiday showcases.
                  </p>
                  <p>
                    What sets us apart is our commitment to quality and speed. Installations are completed within a week of booking, using only commercial-grade LED lights and premium materials. We're fully licensed, bonded, and insured, giving you complete peace of mind.
                  </p>
                  <p className="font-semibold text-foreground">
                    From design consultation to professional takedown and storage, we handle every detail so you can simply enjoy the magic of the season.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <Button 
                    onClick={scrollToQuote}
                    className="bg-primary font-semibold text-primary-foreground sm:w-auto"
                    data-testid="button-about-quote"
                  >
                    Get a Quote
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setLocation('/contact')}
                    className="sm:w-auto"
                    data-testid="button-about-contact"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Company Timeline */}
            <div className="mb-16">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
                Our Journey
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <Card className="p-5 text-center sm:p-6" data-testid="card-timeline-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Year 1</div>
                  <div className="font-semibold text-foreground mb-2">Launched</div>
                  <div className="text-sm text-muted-foreground">
                    Founded Christmas Northwest to bring professional holiday lighting to Greater Seattle
                  </div>
                </Card>
                <Card className="p-5 text-center sm:p-6" data-testid="card-timeline-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Year 2</div>
                  <div className="font-semibold text-foreground mb-2">Rapid Growth</div>
                  <div className="text-sm text-muted-foreground">
                    Doubled our service area and began serving commercial properties
                  </div>
                </Card>
                <Card className="p-5 text-center sm:p-6" data-testid="card-timeline-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Year 3</div>
                  <div className="font-semibold text-foreground mb-2">5-Star Reviews</div>
                  <div className="text-sm text-muted-foreground">
                    Earned 85+ five-star Google reviews from happy customers
                  </div>
                </Card>
                <Card className="p-5 text-center sm:p-6" data-testid="card-timeline-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">Year 4</div>
                  <div className="font-semibold text-foreground mb-2">5-Star Excellence</div>
                  <div className="text-sm text-muted-foreground">
                    Achieved 85+ five-star reviews and industry-leading customer satisfaction
                  </div>
                </Card>
              </div>
            </div>

            {/* Meet the Owner */}
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
                Meet the Owner
              </h3>
              <div className="max-w-md mx-auto">
                <Card className="p-6 text-center" data-testid="card-team-0">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={dylanPhoto} alt="Dylan Thornsberry - Owner" />
                    <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">DT</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg text-foreground mb-1">Dylan Thornsberry</h4>
                  <p className="text-sm text-primary font-semibold mb-2">Owner</p>
                  <p className="text-sm text-muted-foreground">
                    Hands-on owner dedicated to delivering quality holiday lighting across Greater Seattle
                  </p>
                </Card>
              </div>
            </div>

            {/* Our Fleet & Team Photos */}
            <div className="mt-16">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
                Our Fleet & Team
              </h3>
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <img 
                    src={crewTeamPhoto} 
                    alt="Christmas Northwest installation crew"
                    className="w-full rounded-lg shadow-xl mb-4"
                    loading="lazy"
                    decoding="async"
                    data-testid="img-crew-team"
                  />
                  <p className="text-center text-muted-foreground">Our installation crew ready to light up your home</p>
                </div>
                <div>
                  <img 
                    src={fleetPhoto} 
                    alt="Christmas Northwest fleet at Woodinville warehouse"
                    className="w-full rounded-lg shadow-xl mb-4"
                    loading="lazy"
                    decoding="async"
                    data-testid="img-fleet"
                  />
                  <p className="text-center text-muted-foreground">Our fleet at our Woodinville warehouse</p>
                </div>
              </div>
              <div className="mt-8">
                <img 
                  src={truckActionShot} 
                  alt="Christmas Northwest truck during installation"
                  className="w-full rounded-lg shadow-xl mb-4 max-w-3xl mx-auto"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-truck-action"
                />
                <p className="text-center text-muted-foreground">Our crew during a professional installation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Christmas Northwest?
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                We combine years of experience with premium materials and professional service to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8">
              {credentials.map((credential, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <credential.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-3 text-foreground">
                        {credential.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Home?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Join hundreds of satisfied homeowners across Greater Seattle. Get your free quote today and experience the Christmas Northwest difference.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-2 border-primary-foreground/20 bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto"
                data-testid="button-about-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-about-cta-call"
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
