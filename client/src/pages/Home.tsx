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
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/business";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import completeHolidayScene from '@assets/optimized/portfolio-yard.webp';
import familyHolidayTradition from '@assets/optimized/portfolio-family.webp';
import premiumCustomDisplay from '@assets/optimized/portfolio-trees.webp';
import strikingNightDisplay from '@assets/optimized/portfolio-multicolor.webp';
import warmWhiteBushEstate from '@assets/optimized/portfolio-warm-white.webp';
import gableWreathHome from '@assets/optimized/portfolio-gables.webp';
import beforeImage from '@assets/optimized/before-home.webp';
import afterImage from '@assets/optimized/after-home.webp';

export default function Home() {
  const googleReviewsUrl = "https://share.google/lxhOxXmbPwABIqdNa";

  const stats = [
    {
      icon: Award,
      number: GOOGLE_RATING,
      label: "Google Rating",
      description: `${GOOGLE_REVIEW_COUNT} reviews from real Seattle homeowners`
    },
    {
      icon: Clock,
      number: "24hr",
      label: "Response Time",
      description: "Quick replies throughout the season"
    },
    {
      icon: TrendingUp,
      number: "$800+",
      label: "Starting Price",
      description: "All-inclusive: install, maintain, remove"
    },
    {
      icon: Users,
      number: "Season-long",
      label: "Maintenance",
      description: "Repairs are included while your display is up"
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
    "description": "Professional Christmas light installation serving Seattle and the Eastside. Custom design, installation, maintenance, takedown, and storage for homeowners who want a polished holiday display without the hassle.",
    "url": "https://christmasnw.com",
    "image": "https://christmasnw.com/og-image.png",
    "logo": "https://christmasnw.com/logo.png",
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "priceRange": "$800-$4,000+",
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
      { "@type": "City", "name": "Mill Creek", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Lake Forest Park", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Issaquah", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Newcastle", "address": { "addressRegion": "WA" } },
      { "@type": "City", "name": "Mercer Island", "address": { "addressRegion": "WA" } }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GOOGLE_RATING,
      "bestRating": "5",
      "reviewCount": GOOGLE_REVIEW_COUNT,
      "ratingCount": GOOGLE_REVIEW_COUNT
    },
    "serviceType": [
      "Christmas light installation",
      "Holiday lighting design",
      "Seasonal lighting maintenance",
      "Christmas light takedown and storage"
    ],
    "foundingDate": "2021",
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw/",
      "https://www.youtube.com/@christmasnw",
      googleReviewsUrl
    ]
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <PageHead
        title="Christmas Light Installation in Seattle & the Eastside | Christmas Northwest"
        description="Full-service Christmas light installation for Seattle, Bellevue, Kirkland, Bothell, Kenmore, Woodinville, and nearby areas. Design, installation, maintenance, takedown, and storage included."
      />
      <StructuredData data={localBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <Hero onGetQuote={scrollToQuote} />

      <QuoteFormSection />

      <SimpleServices onGetQuote={scrollToQuote} />

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <Stats stats={stats} />

      <WhyChooseUs />

      <Portfolio items={portfolioItems} />

      <ReviewsStrip />

      <Process />

      <CTABanner onGetQuote={scrollToQuote} />

      <Footer />

      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
