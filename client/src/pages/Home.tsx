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
import PageHead from "@/components/PageHead";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import StructuredData from "@/components/StructuredData";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import completeHolidayScene from '@assets/2024-12-03-min_1762058047476.jpg';
import familyHolidayTradition from '@assets/2024-11-17-3-min_1762058047475.jpg';
import premiumCustomDisplay from '@assets/2025-10-28-min_1762058047476.jpg';
import strikingNightDisplay from '@assets/2025-09-04-min_1762058047477.jpg';
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';
import gableWreathHome from '@assets/2023-12-22-3_1762398937574.jpg';
import beforeImage from '@assets/c641dcd4-0863-4aee-af16-36343abfeba4-min_1762397866171_optimized.webp';
import afterImage from '@assets/IMG_5469-min_1762397650439.jpeg';

export default function Home() {
  const googleReviewsUrl = "https://share.google/lxhOxXmbPwABIqdNa";

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
  ];

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "alternateName": "ChristmasNW",
    "description": "Professional Christmas light installation serving Seattle and the Eastside. Custom design, installation, maintenance, takedown, and storage for homeowners who want a polished holiday display without the hassle.",
    "url": "https://christmasnw.com",
    "image": "https://christmasnw.com/og-image.png",
    "logo": "https://christmasnw.com/logo.png",
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
      "bestRating": "5",
      "reviewCount": "85",
      "ratingCount": "85"
    },
    "serviceType": [
      "Christmas light installation",
      "Holiday lighting design",
      "Seasonal lighting maintenance",
      "Christmas light takedown and storage",
      "Permanent outdoor lighting"
    ],
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw/",
      googleReviewsUrl
    ]
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <PageHead
        title="Christmas Light Installation in Seattle & the Eastside | Christmas Northwest"
        description="Premium Christmas light installation for Seattle, Bellevue, Kirkland, Bothell, Kenmore, Woodinville, and nearby areas. Design, installation, maintenance, takedown, and storage included."
      />
      <StructuredData data={localBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <Hero onGetQuote={scrollToQuote} />

      <ReviewsStrip />

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
