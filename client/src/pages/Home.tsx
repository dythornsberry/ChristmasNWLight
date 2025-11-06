import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import QuoteFormSection from "@/components/QuoteFormSection";
import PromiseSection from "@/components/PromiseSection";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ColorOptions from "@/components/ColorOptions";
import BeforeAfter from "@/components/BeforeAfter";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Building2, Sparkles, Wrench, TrendingUp, Users, Award, Clock } from "lucide-react";

import img1 from '@assets/img2_1761853506442.webp';
import img2 from '@assets/img3_1761853506443.webp';
import img3 from '@assets/img4_1761853506443.webp';
import img4 from '@assets/img5_1761853506443.webp';
import img5 from '@assets/img6_1761853506443.webp';
import img6 from '@assets/img7_1761853506443.webp';
import img7 from '@assets/img8_1761853506443.webp';
import img8 from '@assets/img9_1761853506444.webp';
import img9 from '@assets/img10_1761853506444.webp';
import img10 from '@assets/img11_1761853506444.webp';
import img11 from '@assets/img12_1761853506444.webp';
import img12 from '@assets/img13_1761853506444.webp';
import img13 from '@assets/img14_1761853506444.webp';
import img14 from '@assets/img15_1761853506444.webp';
import img15 from '@assets/img16_1761853506444.webp';

import img16 from '@assets/2023-01-08-min_1762050962742.jpg';
import img17 from '@assets/2023-11-07-2-min_1762050962742.jpg';
import img18 from '@assets/2023-11-16-min_1762050962743.jpg';
import img19 from '@assets/2024-11-28-min_1762050962743.jpg';
import img20 from '@assets/2023-11-24-min_1762050962743.jpg';
import img21 from '@assets/2024-11-25-min_1762050962743.jpg';
import img22 from '@assets/2024-11-17-3-min_1762050962743.jpg';
import img23 from '@assets/2023-11-10-3-min_1762050962743.jpg';
import img24 from '@assets/2024-11-17-4-min_1762050962743.jpg';
import img25 from '@assets/2022-12-01-min_1762050962743.jpg';
import img26 from '@assets/unnamed-14-min_1762050962743.jpg';
import img27 from '@assets/2023-11-14-min_1762050962743.jpg';
import img28 from '@assets/2024-11-17-5-min_1762050962743.jpg';

import img29 from '@assets/northwest-christmas-light-installer-18-scaled-1-3-min_1762050980953.jpg';
import img30 from '@assets/northwest-christmas-light-installer-13-scaled-1-1-2-min_1762050980953.jpg';
import img31 from '@assets/northwest-christmas-light-installer-17-scaled-1-2-min_1762050980953.jpg';
import img32 from '@assets/northwest-christmas-light-installer-15-scaled-1-min_1762050980954.jpg';
import img33 from '@assets/northwest-christmas-light-installer-10-scaled-1-min_1762050980954.jpg';

import multicolorHouse from '@assets/2025-09-04-min_1762064099390.jpg';
import redWarmWhiteHouse from '@assets/2024-11-17-3-min_1762064188331.jpg';
import multicolorTree from '@assets/2025-10-28-3-min_1762064223709.jpg';
import halloweenHouse from '@assets/unnamed-15-min_1762064292781.jpg';
import redTreeSnowmen from '@assets/2024-11-28-2-min_1762064344572.jpg';
import redGreenWarmWhiteHouse from '@assets/northwest-christmas-light-installer-17-scaled-1-2-min_1762064486263.jpg';
import mistletoeHouse from '@assets/2024-11-11-2-min_1762064400632.jpg';
import warmWhiteHouse from '@assets/1-2-min_1762064533191.jpeg';
import multicolorHouse2 from '@assets/IMG_5253_1762064572527.jpeg';
import redGreenHouse from '@assets/IMG_2529-min-min_1762065264434.jpeg';
import completeHolidayScene from '@assets/2024-12-03-min_1762058047476.jpg';
import winterTreeUplighting from '@assets/29ed3807d7952892033a68ec8781e744.jpg-2_1762395487269.webp';
import mistletoeHouse2 from '@assets/990c3274b03bd096a71395c6d8043d8f.jpg_1762395519144.webp';
import estateGate from '@assets/2a1755975470dff4557e8fe3d51e6f67_1762395568284.webp';
import winterHomeDisplay from '@assets/80b2ff7622e5483fa3a1f5036a13f509.jpg_1762395608101.webp';
import redColumnsHouse from '@assets/a885e41a3786af553f91476ed6121d32.jpg-2_1762395700253.webp';
import ridgeRooflineHouse from '@assets/49563b654a08482eca22f0a3090b7ad0.jpg_1762395736248.webp';
import modernBellevueHome from '@assets/46deed693d6a52e864742bf7ae390cfa.jpg_1762395777011.webp';
import purpleHalloweenHouse from '@assets/IMG_5468-min_1762396975618.jpeg';
import familyHolidayTradition from '@assets/2024-11-17-3-min_1762058047475.jpg';
import premiumCustomDisplay from '@assets/2025-10-28-min_1762058047476.jpg';
import strikingNightDisplay from '@assets/2025-09-04-min_1762058047477.jpg';
import residentialImage from '@assets/img4_1761853506443.webp';
import commercialImage from '@assets/img7_1761853506443.webp';
import customImage from '@assets/img16_1761853506444.webp';
import maintenanceImage from '@assets/img8_1761853506443.webp';
import teamImage from '@assets/img6_1761853506443.webp';
import beforeImage from '@assets/img4_1761853506443.webp';
import afterImage from '@assets/img11_1761853506444.webp';
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Home() {
  const { toast } = useToast();

  const services = [
    {
      title: "Custom Design",
      description: "Free design estimate tailored to your home's architecture with premium materials and attention to every detail.",
      icon: Sparkles,
      image: customImage
    },
    {
      title: "Professional Installation",
      description: "Expert installation with color-matched clips, hidden cords, smart timers, and dusk testing for perfection.",
      icon: HomeIcon,
      image: residentialImage
    },
    {
      title: "Complete Packages",
      description: "Rooflines, trees, wreaths, garlands, and path lighting for a cohesive, designer look throughout your property.",
      icon: Building2,
      image: commercialImage
    },
    {
      title: "White-Glove Service",
      description: "24/7 seasonal availability, maintenance guarantee, professional takedown, and climate-controlled storage.",
      icon: Wrench,
      image: maintenanceImage
    }
  ];


  const stats = [
    {
      icon: Award,
      number: "5.0",
      label: "Google Rating",
      description: "85+ five-star reviews from satisfied clients"
    },
    {
      icon: Users,
      number: "300+",
      label: "Homes Served",
      description: "Serving hundreds of homes every season"
    },
    {
      icon: TrendingUp,
      number: "$800+",
      label: "Starting Price",
      description: "Complete white-glove service included"
    },
    {
      icon: Clock,
      number: "4 Years",
      label: "Experience",
      description: "Now in our fourth season of excellence"
    }
  ];

  const portfolioItems = [
    { id: 1, image: completeHolidayScene, category: "Custom", title: "Complete Holiday Scene" },
    { id: 2, image: familyHolidayTradition, category: "Custom", title: "Family Holiday Tradition" },
    { id: 3, image: premiumCustomDisplay, category: "Custom", title: "Premium Custom Display" },
    { id: 4, image: strikingNightDisplay, category: "Multicolor", title: "Striking Night Display" },
    { id: 5, image: winterHomeDisplay, category: "Warm White", title: "Classic Winter Wonderland" },
    { id: 6, image: estateGate, category: "Custom", title: "Grand Estate Entrance" },
    { id: 7, image: img3, category: "Warm White", title: "Traditional Warm White" },
    { id: 8, image: redTreeSnowmen, category: "Trees", title: "Creative Tree Design" },
    { id: 9, image: warmWhiteHouse, category: "Warm White", title: "Classic Warm White Elegance" },
    { id: 10, image: modernBellevueHome, category: "Warm White", title: "Contemporary Bellevue Home" },
    { id: 11, image: purpleHalloweenHouse, category: "Halloween", title: "Purple Halloween Spectacular" },
    { id: 12, image: img7, category: "Houses", title: "Split-Level Contemporary" },
    { id: 13, image: img8, category: "Trees", title: "Tree Canopy Entrance" },
    { id: 14, image: img9, category: "Houses", title: "Stone & Siding Combo" },
    { id: 15, image: img10, category: "Houses", title: "Patriotic Red & Blue" },
    { id: 16, image: img11, category: "Houses", title: "Elegant Warm White" },
    { id: 17, image: img12, category: "Houses", title: "Red & Warm White Display" },
    { id: 18, image: img13, category: "Trees", title: "Wreaths & Accents" },
    { id: 19, image: img14, category: "Trees", title: "Wrapped Tree Feature" },
    { id: 20, image: img15, category: "Houses", title: "Multi-Roofline Estate" },
    { id: 21, image: img16, category: "Houses", title: "Modern Two-Story Warm White" },
    { id: 22, image: img17, category: "Houses", title: "Elegant Single-Story with Wreath" },
    { id: 23, image: img18, category: "Houses", title: "Multi-Gable Contemporary Home" },
    { id: 24, image: img19, category: "Houses", title: "Clean Modern Roofline" },
    { id: 25, image: img20, category: "Houses", title: "Red & Warm White Traditional" },
    { id: 26, image: img21, category: "Houses", title: "Red, Green & Warm White Large Home" },
    { id: 27, image: img22, category: "Trees", title: "Family Display with Trees" },
    { id: 28, image: img23, category: "Houses", title: "Vibrant Multicolor Installation" },
    { id: 29, image: img24, category: "Trees", title: "Tree Lighting Accent Feature" },
    { id: 30, image: img25, category: "Houses", title: "Red, Green & Warm White in Snow" },
    { id: 31, image: img26, category: "Trees", title: "Majestic Tree with Child" },
    { id: 32, image: img27, category: "Houses", title: "Upscale Brick Estate" },
    { id: 33, image: img28, category: "Houses", title: "Red & Warm White Split-Level" },
    { id: 34, image: img29, category: "Houses", title: "Stunning Multicolor Two-Story" },
    { id: 35, image: img30, category: "Houses", title: "Red & Warm White Modern Display" },
    { id: 36, image: img31, category: "Houses", title: "Traditional Craftsman Gables" },
    { id: 37, image: img32, category: "Houses", title: "Window Lights & Minions Display" },
    { id: 38, image: img33, category: "Houses", title: "Elegant Modern Warm White with Deer" },
    { id: 39, image: multicolorTree, category: "Trees", title: "Stunning Multicolor Tree Display" },
    { id: 40, image: halloweenHouse, category: "Halloween", title: "Spooky Halloween Display" },
    { id: 41, image: multicolorHouse2, category: "Houses", title: "Vibrant Multicolor Rooflines" },
    { id: 42, image: winterTreeUplighting, category: "Trees", title: "Winter Landscape Lighting" },
    { id: 43, image: mistletoeHouse2, category: "Custom", title: "Mistletoe Peak Design" },
    { id: 44, image: redColumnsHouse, category: "Custom", title: "Red Column Accent Design" },
    { id: 45, image: ridgeRooflineHouse, category: "Houses", title: "Ridge and Roofline Display" },
    { id: 46, image: img1, category: "Houses", title: "Classic Warm White Roofline" },
    { id: 47, image: img2, category: "Houses", title: "Modern Multicolor Display" },
    { id: 48, image: img4, category: "Houses", title: "Contemporary Stone Accent" },
    { id: 49, image: img5, category: "Houses", title: "Large Estate Installation" },
    { id: 50, image: img6, category: "Houses", title: "Modern Gable Design" },
  ];

  const colorOptions = [
    {
      name: "Warm White",
      image: img3,
      description: "Classic, elegant glow perfect for traditional displays"
    },
    {
      name: "Multicolor",
      image: multicolorHouse,
      description: "Festive and vibrant for a playful holiday display"
    },
    {
      name: "Red + White",
      image: redWarmWhiteHouse,
      description: "Candy cane colors for festive charm"
    },
    {
      name: "Red, Green & Warm White",
      image: redGreenWarmWhiteHouse,
      description: "Classic tri-color combination for a traditional look"
    }
  ];

  const faqItems = [
    {
      question: "What's your starting price for Christmas light installation?",
      answer: "Our residential installations start at $800. This includes professional-grade LED lights, expert installation, maintenance throughout the season, professional takedown in January, and climate-controlled storage until next year. Final pricing depends on your home's size, roofline complexity, and the lighting design you choose."
    },
    {
      question: "Is light takedown included in the price?",
      answer: "Absolutely! Our full-service package includes professional takedown after the holidays. We carefully remove all lights, organize them, and store them in our climate-controlled facilities until next season at no additional cost to you."
    },
    {
      question: "What if a bulb burns out during the season?",
      answer: "We've got you covered! Bulb replacements and repairs are included at no extra charge. We're available 24/7 during the season to handle any maintenance issues and keep your display looking perfect throughout the holidays."
    },
    {
      question: "Are you a licensed and insured business?",
      answer: "Yes! Christmas Northwest is fully licensed, bonded, and insured. We've been serving the Greater Seattle area for three seasons and have completed over 300 homes annually. Your property and our team are protected at every stage of the installation and maintenance process."
    },
    {
      question: "What's your installation process?",
      answer: "Our process is simple: First, you fill out our quote form and we get in touch to discuss your design vision. We create a custom plan, sometimes in person for complex projects. Once you approve the design, you place a $100 deposit to secure your spot. Then we schedule and complete your professional installation, typically within a week of booking during our busy season."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within a few hours, depending on your home's size and design complexity. We pride ourselves on fast turnaround, often installing within a week of booking during the season."
    },
    {
      question: "Do you hang lights that I already own?",
      answer: "We only install our own professional-grade lighting and materials. This ensures consistent quality, safety standards, and allows us to provide our comprehensive warranty and maintenance coverage throughout the season."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the Greater Seattle area, including Kenmore, Kirkland, Bothell, Woodinville, Redmond, Sammamish, Bellevue, and surrounding communities. Check our Service Areas page for the complete list, or contact us if you don't see your location listed."
    }
  ];

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteSubmit = (data: any) => {
    console.log('Quote request submitted:', data);
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with a detailed estimate.",
    });
  };

  const handleServiceLearnMore = (serviceTitle: string) => {
    console.log('Learn more about:', serviceTitle);
    toast({
      title: `Learn More: ${serviceTitle}`,
      description: "Scroll down to request a quote for this service.",
    });
  };

  useEffect(() => {
    // Load Featurable script dynamically
    const script = document.createElement('script');
    script.src = 'https://featurable.com/assets/bundle.js';
    script.defer = true;
    script.charset = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Add LocalBusiness schema markup for ChatGPT and search engines
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ChristmasNW",
      "alternateName": "Christmas Northwest",
      "description": "Professional Christmas light installation serving north Seattle metro area since 2021. 300+ homes annually with same-week installation, commercial-grade equipment, and full-service experience including storage.",
      "image": "https://christmasnw.com/logo.png",
      "telephone": "+14252150935",
      "email": "christmaslightsnw@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kenmore",
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
      "url": "https://christmasnw.com",
      "priceRange": "$800-$6000+",
      "areaServed": [
        { "@type": "City", "name": "Seattle", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Kenmore", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Bothell", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Kirkland", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Lynnwood", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Woodinville", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Bellevue", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Medina", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Clyde Hill", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Yarrow Point", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Sammamish", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Redmond", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Edmonds", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Shoreline", "address": { "addressRegion": "WA" } },
        { "@type": "City", "name": "Mill Creek", "address": { "addressRegion": "WA" } }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "85",
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah M."
          },
          "datePublished": "2024-12-10",
          "reviewBody": "ChristmasNW made our holiday season absolutely magical! Their team was professional, on time, and the lights look absolutely stunning. Worth every penny!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Michael T."
          },
          "datePublished": "2024-11-28",
          "reviewBody": "We've used ChristmasNW for three years running, and they never disappoint. The quality of their lights and installation is top notch. Highly recommend!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Jennifer K."
          },
          "datePublished": "2024-12-05",
          "reviewBody": "Finally found a Christmas light company that actually does what they promise! They installed our lights within a week of booking, and the design is exactly what we wanted. Professional from start to finish.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "David R."
          },
          "datePublished": "2024-11-22",
          "reviewBody": "Best decision we made this holiday season. ChristmasNW handled everything including storage for next year. No more climbing ladders or dealing with tangled lights!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Lisa W."
          },
          "datePublished": "2024-12-01",
          "reviewBody": "The crew was incredibly professional and detail oriented. Our house looks like something out of a magazine. Neighbors keep asking who did our lights!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Robert H."
          },
          "datePublished": "2024-11-15",
          "reviewBody": "ChristmasNW transformed our home for the holidays. Commercial grade lights that actually stay bright all season. Their team knows what they're doing.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ],
      "sameAs": [
        "https://www.facebook.com/ChristmasNW",
        "https://www.instagram.com/christmasnw/",
        "https://youtube.com/@christmasnw",
        "https://share.google/lxhOxXmbPwABIqdNa"
      ]
    };

    const businessSchemaScript = document.createElement('script');
    businessSchemaScript.type = 'application/ld+json';
    businessSchemaScript.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(businessSchemaScript);

    return () => {
      if (document.head.contains(businessSchemaScript)) {
        document.head.removeChild(businessSchemaScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <Hero onGetQuote={scrollToQuote} />

      <QuoteFormSection />

      {/* Google Reviews - Real social proof right after quote form */}
      <section className="py-24 bg-background" data-testid="section-google-reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Are Saying
            </h2>
            <p className="text-xl text-muted-foreground">
              Join 300+ Greater Seattle homeowners who trust us every holiday season
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div 
              id="featurable-70aae94b-1709-4c03-986e-fd112d51273d" 
              data-featurable-async
              data-testid="google-reviews-widget"
            ></div>
          </div>
        </div>
      </section>

      <PromiseSection />

      {/* Service Area Section */}
      <section className="py-20 bg-muted/30" data-testid="section-service-areas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
              <span className="text-primary font-semibold">Proudly Serving</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              North Seattle Metro Area
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Based in Kenmore, we bring professional Christmas light installation to homeowners throughout the Greater Seattle area. Serving 300+ homes annually across 15 communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              "Seattle",
              "Kenmore",
              "Bothell",
              "Kirkland",
              "Lynnwood",
              "Woodinville",
              "Bellevue",
              "Medina",
              "Clyde Hill",
              "Yarrow Point",
              "Sammamish",
              "Redmond",
              "Edmonds",
              "Shoreline",
              "Mill Creek"
            ].map((city) => (
              <div
                key={city}
                className="bg-card border border-border rounded-lg p-4 text-center hover-elevate active-elevate-2 transition-all"
                data-testid={`city-${city.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <p className="font-semibold text-foreground">{city}</p>
                <p className="text-sm text-muted-foreground mt-1">Washington</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Don't see your city listed? We often service surrounding communities in the Greater Seattle area.
            </p>
            <Button
              onClick={scrollToQuote}
              size="lg"
              variant="default"
              className="font-semibold"
              data-testid="button-service-area-quote"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Services services={services} onLearnMore={handleServiceLearnMore} />

      <Portfolio items={portfolioItems} />

      <ColorOptions colors={colorOptions} />

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <Stats stats={stats} />

      <About teamImage={teamImage} />

      <Process />

      <CTABanner onGetQuote={scrollToQuote} />

      <FAQ items={faqItems} />

      <Footer />

      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
