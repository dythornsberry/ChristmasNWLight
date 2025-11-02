import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Sparkles, TreePine, MapPin, Home, Zap } from "lucide-react";

import c9RooflinePhoto from '@assets/81s3L7gNl1L_1762096860729.jpg';
import miniLightsPhoto from '@assets/Incan-Clear-6x15-Column-Wrap-02-lifestyle_1762096913912.jpg';
import groundLightsPhoto from '@assets/2025-10-28-3-min_1762064223709.jpg';
import treeWrapsPhoto from '@assets/81yZtNElctL_1762096926030.jpg';

export default function ProductGuide() {
  const scrollToQuote = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const quoteSection = document.getElementById('quote-form');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const products = [
    {
      id: 1,
      name: "C9 Bulbs",
      icon: Lightbulb,
      image: c9RooflinePhoto,
      description: "Our premium commercial-grade C9 bulbs are the industry standard for roofline installations. These classic, bright bulbs create a bold, timeless holiday display that's visible from the street.",
      colors: ["Warm White", "Multicolor", "Red", "Green", "Blue", "Purple"],
      useCases: [
        "Rooflines and gutters",
        "Peaks and architectural features",
        "Large-scale displays",
        "Commercial properties"
      ],
      benefits: [
        "Durable commercial-grade quality",
        "Energy-efficient LED technology",
        "Brilliant, consistent color",
        "Weather-resistant for Pacific Northwest winters",
        "Professional, polished appearance"
      ]
    },
    {
      id: 2,
      name: "Mini Lights",
      icon: Sparkles,
      image: miniLightsPhoto,
      description: "Delicate yet durable mini lights perfect for detailed work and creating elegant, sophisticated displays. These versatile lights add warmth and charm to any feature.",
      colors: ["Warm White", "Cool White", "Multicolor"],
      useCases: [
        "Bushes and shrubs",
        "Column wraps",
        "Tree branches and trunks",
        "Garden features",
        "Fence lines"
      ],
      benefits: [
        "Elegant, refined appearance",
        "Perfect for detailed landscaping",
        "Energy-efficient",
        "Creates warm, inviting glow",
        "Versatile for multiple applications"
      ]
    },
    {
      id: 3,
      name: "Ground & Pathway Lights",
      icon: MapPin,
      image: groundLightsPhoto,
      description: "Professional-grade stake lights that illuminate walkways, driveways, and landscape features. Perfect for guiding guests safely while adding sophisticated accent lighting.",
      colors: ["Warm White", "Red", "Green", "Blue"],
      useCases: [
        "Walkways and paths",
        "Driveway borders",
        "Garden bed edges",
        "Garage door outlines",
        "Landscape accent lighting"
      ],
      benefits: [
        "Safe pathway illumination",
        "Professional landscape lighting",
        "Weather-resistant stakes",
        "Easy to position and adjust",
        "Creates depth and dimension"
      ]
    },
    {
      id: 4,
      name: "Tree Wraps & Light Spheres",
      icon: TreePine,
      image: treeWrapsPhoto,
      description: "Transform trees into stunning focal points with professional trunk wraps and hanging light spheres. Create magical vertical elements that draw the eye upward.",
      colors: ["Warm White", "Multicolor", "Red & Green"],
      useCases: [
        "Tree trunk wrapping",
        "Hanging from branches",
        "Creating focal points",
        "Adding vertical interest",
        "Complementing roofline displays"
      ],
      benefits: [
        "Creates dramatic visual impact",
        "Professional installation technique",
        "Adds dimension to your display",
        "Weather-resistant construction",
        "Complements any home style"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHead 
        title="Premium Christmas Lighting Products | C9 Bulbs, Mini Lights | Christmas Northwest"
        description="Discover our commercial-grade LED Christmas lighting products: C9 Bulbs for rooflines, Mini Lights for bushes, Ground Lights for pathways, and Tree Wraps. Energy-efficient, weather-resistant, professional quality. Seattle area."
      />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 border border-gold/20">
              <Home className="w-4 h-4 mr-2" />
              Premium Products
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Professional-Grade
              <br />
              Holiday Lighting Products
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We use only commercial-grade, energy-efficient LED products designed to withstand Pacific Northwest weather while creating stunning displays.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={product.id} 
                  className={`overflow-hidden shadow-xl ${index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'}`}
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Photo Column */}
                    <div className={`lg:col-span-2 relative h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img 
                        src={product.image} 
                        alt={`${product.name} installation example`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        data-testid={`img-product-${product.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-3 p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-gold/20">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                            {product.name}
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {product.colors.map((color) => (
                              <Badge key={color} variant="secondary" className="border border-gold/20">
                                {color}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-500" />
                            Perfect For
                          </h3>
                          <ul className="space-y-3">
                            {product.useCases.map((useCase, i) => (
                              <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {useCase}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            Key Benefits
                          </h3>
                          <ul className="space-y-3">
                            {product.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-24 bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Our Products Stand Out
            </h2>
            <p className="text-xl text-muted-foreground">
              We exclusively use commercial-grade products that exceed residential standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-lg hover-elevate">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gold/20">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Energy Efficient
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                LED technology uses 90% less energy than traditional bulbs while lasting 25x longer
              </p>
            </Card>

            <Card className="p-8 text-center shadow-lg hover-elevate">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gold/20">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Weather Resistant
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Designed specifically for Pacific Northwest rain, wind, and occasional snow
              </p>
            </Card>

            <Card className="p-8 text-center shadow-lg hover-elevate">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-gold/20">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Professional Quality
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Commercial-grade products used by professional installers nationwide
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
