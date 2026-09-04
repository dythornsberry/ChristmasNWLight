import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import ReviewsStrip from "@/components/ReviewsStrip";
import Portfolio from "@/components/Portfolio";
import SimpleServices from "@/components/SimpleServices";
import BeforeAfter from "@/components/BeforeAfter";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import StructuredData from "@/components/StructuredData";
import { FACEBOOK_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL, YOUTUBE_URL } from "@/lib/business";
import { useLocation } from "wouter";
import completeHolidayScene from '@assets/optimized/portfolio-yard.webp';
import premiumCustomDisplay from '@assets/optimized/portfolio-trees.webp';
import warmWhiteBushEstate from '@assets/optimized/portfolio-warm-white.webp';
import beforeImage from '@assets/optimized/before-home.webp';
import afterImage from '@assets/optimized/after-home.webp';

export default function Home() {
  const [, setLocation] = useLocation();
  const googleReviewsUrl = "https://share.google/lxhOxXmbPwABIqdNa";

  const portfolioItems = [
    { id: 1, image: warmWhiteBushEstate, category: "Warm White", title: "Warm White Bushes" },
    { id: 2, image: completeHolidayScene, category: "Custom", title: "Full Yard Display" },
    { id: 3, image: premiumCustomDisplay, category: "Custom", title: "Wrapped Trees" },
  ];

  const goToQuote = () => {
    setLocation('/contact');
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
      FACEBOOK_URL,
      INSTAGRAM_URL,
      YOUTUBE_URL,
      googleReviewsUrl
    ]
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <PageHead
        title="Seattle Christmas Light Installation | Christmas Northwest"
        description="Full-service Christmas light installation for Seattle and the Eastside. Design, install, maintenance, takedown, and storage — one local team handles it all."
      />
      <StructuredData data={localBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />
      
      <Hero onGetQuote={goToQuote} />

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <SimpleServices onGetQuote={goToQuote} />

      <Portfolio items={portfolioItems} />

      <ReviewsStrip />

      <CTABanner onGetQuote={goToQuote} />

      <Footer />

      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
