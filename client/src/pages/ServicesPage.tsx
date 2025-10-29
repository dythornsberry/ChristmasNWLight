import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, TreePine, Building2, Sparkles, Wrench } from "lucide-react";
import residentialImage from '@assets/generated_images/Residential_premium_installation_example_a02eac2c.png';
import commercialImage from '@assets/generated_images/Commercial_building_Christmas_lights_3229c92b.png';
import customImage from '@assets/generated_images/Custom_design_Christmas_display_522afc58.png';
import treeImage from '@assets/generated_images/Wrapped_tree_front_yard_22286bba.png';
import maintenanceImage from '@assets/generated_images/Professional_installation_service_work_c902915b.png';
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
        "Seamless wire concealment",
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

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Seasonal Promotional Banner */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-primary-border">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-center text-primary-foreground font-semibold text-sm md:text-base">
            🎄 10% OFF October Installations - Book Before October 31st for Priority Scheduling! 🎄
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Our Services</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Professional Holiday Lighting Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From residential rooflines to commercial displays, we offer comprehensive holiday lighting solutions designed to transform your property and exceed your expectations.
              </p>
              <Button 
                onClick={scrollToQuote}
                className="bg-primary text-primary-foreground font-semibold"
                data-testid="button-services-hero-quote"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-16">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden" data-testid={`card-service-${index}`}>
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-sm text-primary font-semibold">
                            Starting at {service.startingPrice}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
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
                      
                      <div className="flex flex-wrap gap-3">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our team will help you design the perfect holiday lighting solution for your property. Get a free consultation and quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 font-semibold border-2 border-primary-foreground/20"
                data-testid="button-services-cta-quote"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 font-semibold"
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
