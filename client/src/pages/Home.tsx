import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import ReviewsStrip from "@/components/ReviewsStrip";
import Portfolio from "@/components/Portfolio";
import SimpleServices from "@/components/SimpleServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import QuoteFormSection from "@/components/QuoteFormSection";
import BeforeAfter from "@/components/BeforeAfter";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

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
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';
import gableWreathHome from '@assets/2023-12-22-3_1762398937574.jpg';
import residentialImage from '@assets/img4_1761853506443.webp';
import commercialImage from '@assets/img7_1761853506443.webp';
import customImage from '@assets/img16_1761853506444.webp';
import maintenanceImage from '@assets/img8_1761853506443.webp';
import teamImage from '@assets/img6_1761853506443.webp';
import beforeImage from '@assets/c641dcd4-0863-4aee-af16-36343abfeba4-min_1762397866171.png';
import afterImage from '@assets/IMG_5469-min_1762397650439.jpeg';
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Home() {
  const { toast } = useToast();



  const stats = [
    {
      icon: Award,
      number: "5.0",
      label: "Google Rating",
      description: "85+ reviews from real Seattle homeowners"
    },
    {
      icon: Clock,
      number: "24hr",
      label: "Response Time",
      description: "Quick replies and same-week repairs"
    },
    {
      icon: TrendingUp,
      number: "$800+",
      label: "Starting Price",
      description: "All-inclusive: install, maintain, remove"
    },
    {
      icon: Users,
      number: "100%",
      label: "Satisfaction",
      description: "We fix any issues at no extra cost"
    }
  ];

  const portfolioItems = [
    { id: 1, image: warmWhiteBushEstate, category: "Warm White", title: "Warm White Bushes" },
    { id: 2, image: strikingNightDisplay, category: "Multicolor", title: "Multicolor Peaks and Columns" },
    { id: 3, image: familyHolidayTradition, category: "Custom", title: "Family Photo" },
    { id: 4, image: completeHolidayScene, category: "Custom", title: "Full Yard Display" },
    { id: 5, image: premiumCustomDisplay, category: "Custom", title: "Wrapped Trees" },
    { id: 6, image: gableWreathHome, category: "Custom", title: "Gables and Wreaths" },
    { id: 7, image: img3, category: "Warm White", title: "Traditional Warm White" },
    { id: 8, image: redTreeSnowmen, category: "Trees", title: "Red Tree with Snowmen" },
    { id: 9, image: warmWhiteHouse, category: "Warm White", title: "Classic Warm White" },
    { id: 10, image: modernBellevueHome, category: "Warm White", title: "Bellevue Home with Tree Uplighting" },
    { id: 11, image: purpleHalloweenHouse, category: "Halloween", title: "Purple Halloween Display" },
    { id: 12, image: img7, category: "Houses", title: "Split-Level Home" },
    { id: 13, image: img8, category: "Trees", title: "Tree Canopy Entrance" },
    { id: 14, image: img9, category: "Houses", title: "Stone and Siding" },
    { id: 15, image: img10, category: "Houses", title: "Red and Blue" },
    { id: 16, image: img11, category: "Houses", title: "Warm White Roofline" },
    { id: 17, image: img12, category: "Houses", title: "Red and Warm White" },
    { id: 18, image: img13, category: "Trees", title: "Wreaths and Tree" },
    { id: 19, image: img14, category: "Trees", title: "Wrapped Tree" },
    { id: 20, image: img15, category: "Houses", title: "Multi-Roofline Estate" },
    { id: 21, image: img16, category: "Houses", title: "Two-Story Warm White" },
    { id: 22, image: img17, category: "Houses", title: "Single-Story with Wreath" },
    { id: 23, image: img18, category: "Houses", title: "Multi-Gable Home" },
    { id: 24, image: img19, category: "Houses", title: "Clean Modern Roofline" },
    { id: 25, image: img20, category: "Houses", title: "Red and Warm White" },
    { id: 26, image: img21, category: "Houses", title: "Red, Green, and Warm White" },
    { id: 27, image: img22, category: "Trees", title: "Family with Trees" },
    { id: 28, image: img23, category: "Houses", title: "Multicolor Installation" },
    { id: 29, image: img24, category: "Trees", title: "Tree Accent Lighting" },
    { id: 30, image: img25, category: "Houses", title: "Red, Green, and Warm White in Snow" },
    { id: 31, image: img26, category: "Trees", title: "Big Tree with Child" },
    { id: 32, image: img27, category: "Houses", title: "Brick Estate" },
    { id: 33, image: img28, category: "Houses", title: "Red and Warm White Split-Level" },
    { id: 34, image: img29, category: "Houses", title: "Multicolor Two-Story" },
    { id: 35, image: img30, category: "Houses", title: "Red and Warm White Modern" },
    { id: 36, image: img31, category: "Houses", title: "Craftsman Gables" },
    { id: 37, image: img32, category: "Houses", title: "Window Lights and Minions" },
    { id: 38, image: img33, category: "Houses", title: "Modern Warm White with Deer" },
    { id: 39, image: multicolorTree, category: "Trees", title: "Multicolor Tree" },
    { id: 40, image: halloweenHouse, category: "Halloween", title: "Halloween Display" },
    { id: 41, image: multicolorHouse2, category: "Houses", title: "Multicolor Rooflines" },
    { id: 42, image: winterTreeUplighting, category: "Trees", title: "Tree Uplighting in Snow" },
    { id: 43, image: mistletoeHouse2, category: "Custom", title: "Mistletoe Peaks" },
    { id: 44, image: redColumnsHouse, category: "Custom", title: "Red Column Accents" },
    { id: 45, image: ridgeRooflineHouse, category: "Houses", title: "Ridges and Rooflines" },
    { id: 46, image: img1, category: "Houses", title: "Classic Warm White" },
    { id: 47, image: img2, category: "Houses", title: "Modern Multicolor" },
    { id: 48, image: img4, category: "Houses", title: "Stone Accent Warm White" },
    { id: 49, image: img5, category: "Houses", title: "Large Estate" },
    { id: 50, image: img6, category: "Houses", title: "Gable Roofline" },
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


  useEffect(() => {
    // Add LocalBusiness schema markup for ChatGPT and search engines
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ChristmasNW",
      "alternateName": "Christmas Northwest",
      "description": "Professional Christmas light installation serving Greater Seattle and the Eastside. Based in Kenmore, serving Bellevue, Kirkland, Redmond, Woodinville, Bothell, Sammamish and surrounding communities. Same-week installation, commercial-grade equipment, free takedown and storage included. 5.0 stars on Google with 85+ reviews.",
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

      <ReviewsStrip />

      {/* Live Google Reviews - Elfsight */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="elfsight-app-e457d514-0aa4-432f-ae7d-750ec1ad470b" data-elfsight-app-lazy></div>
        </div>
      </section>

      <Portfolio items={portfolioItems} />

      <SimpleServices onGetQuote={scrollToQuote} />

      <QuoteFormSection />

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <Stats stats={stats} />

      <WhyChooseUs />

      <Process />

      <CTABanner onGetQuote={scrollToQuote} />

      <Footer />

      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
