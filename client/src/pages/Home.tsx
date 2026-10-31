import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import ReviewsStrip from "@/components/ReviewsStrip";
import Portfolio from "@/components/Portfolio";
import PricingPreview from "@/components/PricingPreview";
import HomeVideos from "@/components/HomeVideos";
import HomeTeam from "@/components/HomeTeam";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import StructuredData from "@/components/StructuredData";
import { businessSchema } from "@/lib/business";
import { useLocation } from "wouter";
import warmWhiteGables from '@assets/optimized/portfolio-gables.webp';
import warmWhiteEntry from '@assets/optimized/residential-card.webp';
import warmWhiteBushEstate from '@assets/optimized/portfolio-warm-white.webp';

export default function Home() {
  const [, setLocation] = useLocation();

  const portfolioItems = [
    { id: 1, image: warmWhiteGables, category: "Warm White", title: "Rooflines & wreaths" },
    { id: 2, image: warmWhiteEntry, category: "Warm White", title: "Columns & walkways" },
    { id: 3, image: warmWhiteBushEstate, category: "Warm White", title: "Rooflines & landscape lighting" },
  ];

  const goToQuote = () => {
    setLocation('/contact');
  };

  const localBusinessSchema = businessSchema();

  return (
    <div className="home-page min-h-screen pb-24 md:pb-0">
      <PageHead
        title="Christmas & Holiday Light Installation, Seattle | Christmas Northwest"
        description="We hang Christmas lights on homes in Seattle, Bellevue, Kirkland and the Eastside. Commercial-grade lights, free fixes, takedown included. Installs start at $800."
      />
      <StructuredData data={localBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={goToQuote} />
      
      <main>
        <Hero onGetQuote={goToQuote} />
        <ReviewsStrip />
        <Portfolio items={portfolioItems} />
        <HomeVideos />
        <PricingPreview />
        <HomeTeam />
        <CTABanner onGetQuote={goToQuote} />
      </main>

      <Footer />

      <StickyBottomCTA onGetQuote={goToQuote} />
    </div>
  );
}
