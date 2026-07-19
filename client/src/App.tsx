import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useEffect, type ComponentType } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Analytics from "@/components/Analytics";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Loader2 } from "lucide-react";

type PageModule = { default: ComponentType };
type PageLoader = () => Promise<PageModule>;

const pageLoaders: Record<string, PageLoader> = {
  "/": () => import("@/pages/Home"),
  "/about": () => import("@/pages/AboutPage"),
  "/services": () => import("@/pages/ServicesPage"),
  "/service-areas": () => import("@/pages/ServiceAreasPage"),
  "/contact": () => import("@/pages/ContactPage"),
  "/gallery": () => import("@/pages/GalleryPage"),
  "/product-guide": () => import("@/pages/ProductGuide"),
  "/investment-guide": () => import("@/pages/InvestmentGuide"),
  "/faq": () => import("@/pages/FAQPage"),
  "/testimonials": () => import("@/pages/TestimonialsPage"),
  "/bellevue": () => import("@/pages/BellevuePage"),
  "/kirkland": () => import("@/pages/KirklandPage"),
  "/seattle": () => import("@/pages/SeattlePage"),
  "/woodinville": () => import("@/pages/WoodinvillePage"),
  "/bothell": () => import("@/pages/BothellPage"),
  "/kenmore": () => import("@/pages/KenmorePage"),
  "/redmond": () => import("@/pages/RedmondPage"),
  "/sammamish": () => import("@/pages/SammamishPage"),
  "/newcastle": () => import("@/pages/NewcastlePage"),
  "/mercer-island": () => import("@/pages/MercerIslandPage"),
  "/shoreline": () => import("@/pages/ShorelinePage"),
  "/lake-forest-park": () => import("@/pages/LakeForestParkPage"),
  "/issaquah": () => import("@/pages/IssaquahPage"),
  "/mill-creek": () => import("@/pages/MillCreekPage"),
  "/blog": () => import("@/pages/BlogPage"),
  "/privacy-policy": () => import("@/pages/PrivacyPolicy"),
};

const blogPostLoader: PageLoader = () => import("@/pages/BlogPostPage");
const notFoundLoader: PageLoader = () => import("@/pages/not-found");

function loaderForPath(pathname: string) {
  return pageLoaders[pathname] ?? (pathname.startsWith("/blog/") ? blogPostLoader : notFoundLoader);
}

export async function preloadInitialPage(pathname: string) {
  return (await loaderForPath(pathname)()).default;
}

// Route changes remain code-split. The initial route is preloaded in main.tsx so
// React can hydrate the static prerender without showing a loading fallback.
const Home = lazy(pageLoaders["/"]);
const AboutPage = lazy(pageLoaders["/about"]);
const ServicesPage = lazy(pageLoaders["/services"]);
const ServiceAreasPage = lazy(pageLoaders["/service-areas"]);
const ContactPage = lazy(pageLoaders["/contact"]);
const GalleryPage = lazy(pageLoaders["/gallery"]);
const ProductGuide = lazy(pageLoaders["/product-guide"]);
const InvestmentGuide = lazy(pageLoaders["/investment-guide"]);
const FAQPage = lazy(pageLoaders["/faq"]);
const TestimonialsPage = lazy(pageLoaders["/testimonials"]);
const BellevuePage = lazy(pageLoaders["/bellevue"]);
const KirklandPage = lazy(pageLoaders["/kirkland"]);
const SeattlePage = lazy(pageLoaders["/seattle"]);
const WoodinvillePage = lazy(pageLoaders["/woodinville"]);
const BothellPage = lazy(pageLoaders["/bothell"]);
const KenmorePage = lazy(pageLoaders["/kenmore"]);
const RedmondPage = lazy(pageLoaders["/redmond"]);
const SammamishPage = lazy(pageLoaders["/sammamish"]);
const NewcastlePage = lazy(pageLoaders["/newcastle"]);
const MercerIslandPage = lazy(pageLoaders["/mercer-island"]);
const ShorelinePage = lazy(pageLoaders["/shoreline"]);
const LakeForestParkPage = lazy(pageLoaders["/lake-forest-park"]);
const IssaquahPage = lazy(pageLoaders["/issaquah"]);
const MillCreekPage = lazy(pageLoaders["/mill-creek"]);
const BlogPage = lazy(pageLoaders["/blog"]);
const BlogPostPage = lazy(blogPostLoader);
const PrivacyPolicy = lazy(pageLoaders["/privacy-policy"]);
const NotFound = lazy(notFoundLoader);

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}

interface RouterProps {
  initialPath: string;
  InitialPage: ComponentType;
}

function Router({ initialPath, InitialPage }: RouterProps) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  if (location === initialPath) {
    return <InitialPage />;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/product-guide" component={ProductGuide} />
        <Route path="/investment-guide" component={InvestmentGuide} />
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

        {/* Legal */}
        <Route path="/privacy-policy" component={PrivacyPolicy} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

interface AppProps {
  initialPath: string;
  InitialPage: ComponentType;
}

function App({ initialPath, InitialPage }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Analytics />
        <Toaster />
        <Router initialPath={initialPath} InitialPage={InitialPage} />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
