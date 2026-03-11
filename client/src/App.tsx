import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Analytics from "@/components/Analytics";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";

// Lazy-load all page components for code splitting
const Home = lazy(() => import("@/pages/Home"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceAreasPage = lazy(() => import("@/pages/ServiceAreasPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const ProductGuide = lazy(() => import("@/pages/ProductGuide"));
const InvestmentGuide = lazy(() => import("@/pages/InvestmentGuide"));
const YearRoundServices = lazy(() => import("@/pages/YearRoundServices"));
const PermanentLighting = lazy(() => import("@/pages/PermanentLighting"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const TestimonialsPage = lazy(() => import("@/pages/TestimonialsPage"));
const BellevuePage = lazy(() => import("@/pages/BellevuePage"));
const KirklandPage = lazy(() => import("@/pages/KirklandPage"));
const SeattlePage = lazy(() => import("@/pages/SeattlePage"));
const WoodinvillePage = lazy(() => import("@/pages/WoodinvillePage"));
const BothellPage = lazy(() => import("@/pages/BothellPage"));
const KenmorePage = lazy(() => import("@/pages/KenmorePage"));
const RedmondPage = lazy(() => import("@/pages/RedmondPage"));
const SammamishPage = lazy(() => import("@/pages/SammamishPage"));
const NewcastlePage = lazy(() => import("@/pages/NewcastlePage"));
const MercerIslandPage = lazy(() => import("@/pages/MercerIslandPage"));
const ShorelinePage = lazy(() => import("@/pages/ShorelinePage"));
const LakeForestParkPage = lazy(() => import("@/pages/LakeForestParkPage"));
const IssaquahPage = lazy(() => import("@/pages/IssaquahPage"));
const MillCreekPage = lazy(() => import("@/pages/MillCreekPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/product-guide" component={ProductGuide} />
        <Route path="/investment-guide" component={InvestmentGuide} />
        <Route path="/year-round-services" component={YearRoundServices} />
        <Route path="/permanent-lighting" component={PermanentLighting} />
        <Route path="/service-areas" component={ServiceAreasPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/testimonials" component={TestimonialsPage} />
        <Route path="/contact" component={ContactPage} />

        {/* City Landing Pages */}
        <Route path="/bellevue" component={BellevuePage} />
        <Route path="/kirkland" component={KirklandPage} />
        <Route path="/seattle" component={SeattlePage} />
        <Route path="/woodinville" component={WoodinvillePage} />
        <Route path="/bothell" component={BothellPage} />
        <Route path="/kenmore" component={KenmorePage} />
        <Route path="/redmond" component={RedmondPage} />
        <Route path="/sammamish" component={SammamishPage} />
        <Route path="/newcastle" component={NewcastlePage} />
        <Route path="/mercer-island" component={MercerIslandPage} />
        <Route path="/shoreline" component={ShorelinePage} />
        <Route path="/lake-forest-park" component={LakeForestParkPage} />
        <Route path="/issaquah" component={IssaquahPage} />
        <Route path="/mill-creek" component={MillCreekPage} />

        {/* Blog */}
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
