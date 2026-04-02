import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import InternalLinksSection from "@/components/InternalLinksSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home, TreePine, Building2, Sparkles, Wrench, Check, X } from "lucide-react";
import residentialImage from '@assets/img4_1761853506443.webp';
import commercialImage from '@assets/img7_1761853506443.webp';
import customImage from '@assets/img16_1761853506444.webp';
import treeImage from '@assets/img9_1761853506444_feature.webp';
import maintenanceImage from '@assets/img8_1761853506443.webp';
import { useLocation } from "wouter";

export default function ServicesPage() {
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

  const services = [
    {
      icon: Home,
      title: "Residential Roofline Installations",
      description: "Transform your home's exterior with expertly installed roofline lighting. We use color-matched clips, hidden wiring, and premium LED lights to create a clean, professional look that enhances your home's architecture. Perfect for traditional or modern homes.",
      features: [
        "Custom color selection (warm white, pure white, multicolor)",
        "Professional-grade mounting hardware",
        "Hidden wire placement",
        "Dusk-to-dawn smart timers",
        "Weather-resistant installation"
      ],
      image: residentialImage,
      startingPrice: "$800+"
    },
    {
      icon: TreePine,
      title: "Tree & Greenery Wrapping",
      description: "Bring your outdoor trees, bushes, and greenery to life with elegant wrapped lighting. Our expert installers carefully wrap each branch to create a magical glow that highlights your landscaping. Ideal for evergreens, deciduous trees, and decorative shrubs.",
      features: [
        "Precision branch-by-branch wrapping",
        "Customizable density and pattern",
        "Multiple color options available",
        "Safe installation without damage",
        "Stunning day and night appearance"
      ],
      image: treeImage,
      startingPrice: "$300+"
    },
    {
      icon: Building2,
      title: "Commercial Displays",
      description: "Make your business stand out this holiday season with professional commercial lighting installations. We work with retail stores, office buildings, restaurants, and property management companies to create impressive displays that attract customers and enhance your brand.",
      features: [
        "Large-scale installation capability",
        "Brand-aligned color schemes",
        "Flexible scheduling to minimize disruption",
        "Maintenance throughout the season",
        "Professional design consultation"
      ],
      image: commercialImage,
      startingPrice: "Custom Quote"
    },
    {
      icon: Sparkles,
      title: "Custom Design Packages",
      description: "Create a one-of-a-kind holiday display with our custom design services. From elaborate roofline patterns to ground displays, wreaths, garland, pathway lighting, and specialty features, we'll bring your unique vision to life with premium materials and expert installation.",
      features: [
        "Personalized design consultation",
        "Combination of multiple elements",
        "Wreaths, garland, and decorative features",
        "Pathway and landscape lighting",
        "Coordinated color schemes throughout"
      ],
      image: customImage,
      startingPrice: "$1,500+"
    },
    {
      icon: Wrench,
      title: "Maintenance & Takedown",
      description: "Enjoy worry-free holidays with our maintenance and takedown services. We handle bulb replacements, troubleshooting, and repairs throughout the season. When the holidays end, we professionally remove, organize, and store your lights in climate-controlled facilities.",
      features: [
        "24/7 seasonal availability for repairs",
        "Quick bulb and section replacement",
        "Careful removal to prevent damage",
        "Organized labeling and storage",
        "Climate-controlled storage facilities"
      ],
      image: maintenanceImage,
      startingPrice: "Included"
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://christmasnw.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://christmasnw.com/services" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Christmas Light Installation Services",
    "description": "Professional Christmas light installation services including residential rooflines, tree wrapping, commercial displays, custom holiday lighting, maintenance, takedown, and storage in Greater Seattle.",
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
    "serviceType": "Christmas Light Installation",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "800",
        "priceCurrency": "USD",
        "unitText": "starting price"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "description": "Professional Christmas light installation services in Greater Seattle including residential rooflines, tree wrapping, commercial displays, custom designs, maintenance, takedown, and storage.",
    "url": "https://christmasnw.com/services",
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
    "serviceType": [
      "Residential roofline lighting",
      "Tree and greenery wrapping",
      "Commercial holiday displays",
      "Custom lighting design",
      "Maintenance and takedown",
      "Light storage"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "85"
    },
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw",
      "https://www.youtube.com/@christmasnw"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Christmas Light Installation Services | Christmas Northwest"
        description="Professional Christmas light installation in Greater Seattle. Residential rooflines, tree wrapping, commercial displays, custom designs, maintenance, and storage."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <StructuredData data={localBusinessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">Our Services</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Professional Holiday Lighting Services
              </h1>
              <p className="mb-4 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                From residential rooflines to commercial displays, we offer comprehensive holiday lighting solutions designed to transform your property and exceed your expectations.
              </p>
              <p className="text-base font-semibold text-primary sm:text-lg">
                Starting at $800 for residential installations
              </p>
              <Button 
                onClick={scrollToQuote}
                className="mt-4 w-full bg-primary font-semibold text-primary-foreground sm:w-auto"
                data-testid="button-services-hero-quote"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="space-y-10 sm:space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`card-service-${index}`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        data-testid={`img-service-${index}`}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                      <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                            {service.title}
                          </h2>
                          <p className="text-sm text-primary font-semibold">
                            Starting at {service.startingPrice}
                          </p>
                        </div>
                      </div>
                      
                      <p className="mb-6 text-sm leading-7 text-muted-foreground sm:text-base">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <Button 
                          onClick={scrollToQuote}
                          className="bg-primary text-primary-foreground font-semibold"
                          data-testid={`button-service-quote-${index}`}
                        >
                          Get a Quote
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setLocation('/contact')}
                          data-testid={`button-service-contact-${index}`}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Comparison Table */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Compare Our Services
              </h2>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
                See which features are included with each service package to find the perfect fit for your needs.
              </p>
            </div>
            
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]" data-testid="table-service-comparison">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-4 text-left font-bold text-foreground">Feature</th>
                    <th className="p-4 text-center font-bold text-foreground">Roofline</th>
                    <th className="p-4 text-center font-bold text-foreground">Tree Wrapping</th>
                    <th className="p-4 text-center font-bold text-foreground">Commercial</th>
                    <th className="p-4 text-center font-bold text-foreground">Custom Design</th>
                    <th className="p-4 text-center font-bold text-foreground">Maintenance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Color Selection</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Professional Installation</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Custom Patterns</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Maintenance Included</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Takedown & Storage</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 text-sm text-muted-foreground">Design Consultation</td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><X className="w-5 h-5 text-muted-foreground mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-muted-foreground">24/7 Season Support</td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
                  </tr>
                </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Common questions about our holiday lighting services.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-service-faq">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  How long does installation take?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Most residential roofline installations are completed within 2-4 hours. Larger homes or custom design packages may take 4-8 hours depending on complexity. We work efficiently to minimize disruption to your day, and most projects are scheduled within a week of booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  Are replacement bulbs included in the price?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Yes! Bulb replacement is included at no additional cost throughout the season. If any lights malfunction, we'll come out and replace them quickly. Our commercial-grade LED lights are extremely reliable, but we stand behind every installation with 24/7 seasonal support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  What happens if lights go out during the season?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  We offer 24/7 support during the holiday season. Simply give us a call or send us a message, and we'll schedule a service visit to diagnose and fix the issue. Most problems can be resolved within 1-2 business days, and there's no charge for bulb replacement or minor repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  Do you provide the lights, or do I need to purchase them?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  We provide all lights, clips, timers, and installation materials as part of our service. You don't need to purchase anything. We use only commercial-grade LED lights that are weatherproof, energy-efficient, and designed to last for years. After the season, we professionally remove and store everything for you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  When do you take down the lights?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Takedown is included in all our installation packages. We typically remove lights in early to mid-January, depending on your preference and weather conditions. After removal, we carefully organize, label, and store your lights in our climate-controlled facility until the next season.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                  Can I choose different light colors?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                  Absolutely! We offer warm white, pure white, multicolor, red & green, red & white, and many other custom color combinations. During your consultation, we'll discuss your vision and recommend the best colors to complement your home's architecture and your personal style. You can even mix colors for a unique display.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <InternalLinksSection
          title="Plan the Rest of Your Project"
          description="These pages help homeowners compare options, confirm service area coverage, and build trust before they request a quote."
          links={[
            {
              href: "/service-areas",
              label: "Service Areas",
              description: "Check the Seattle and Eastside cities we serve before you request a quote.",
            },
            {
              href: "/gallery",
              label: "Photo Gallery",
              description: "See real residential and large-property installations completed by our team.",
            },
            {
              href: "/permanent-lighting",
              label: "Permanent Lighting",
              description: "Compare seasonal installs against year-round programmable lighting systems.",
            },
            {
              href: "/contact",
              label: "Contact & Quote",
              description: "Reach the team directly if you want a callback or a project-specific recommendation.",
            },
          ]}
        />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Not Sure Which Service You Need?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Our team will help you design the perfect holiday lighting solution for your property. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-2 border-primary-foreground/20 bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto"
                data-testid="button-services-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-services-cta-call"
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
