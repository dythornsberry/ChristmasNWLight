import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";
import ProductGuide from "@/pages/ProductGuide";
import InvestmentGuide from "@/pages/InvestmentGuide";
import YearRoundServices from "@/pages/YearRoundServices";
import FAQPage from "@/pages/FAQPage";
import BellevuePage from "@/pages/BellevuePage";
import KirklandPage from "@/pages/KirklandPage";
import SeattlePage from "@/pages/SeattlePage";
import WoodinvillePage from "@/pages/WoodinvillePage";
import BothellPage from "@/pages/BothellPage";
import KenmorePage from "@/pages/KenmorePage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/product-guide" component={ProductGuide} />
      <Route path="/investment-guide" component={InvestmentGuide} />
      <Route path="/year-round-services" component={YearRoundServices} />
      <Route path="/service-areas" component={ServiceAreasPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/contact" component={ContactPage} />
      
      {/* City Landing Pages */}
      <Route path="/bellevue" component={BellevuePage} />
      <Route path="/kirkland" component={KirklandPage} />
      <Route path="/seattle" component={SeattlePage} />
      <Route path="/woodinville" component={WoodinvillePage} />
      <Route path="/bothell" component={BothellPage} />
      <Route path="/kenmore" component={KenmorePage} />
      
      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Christmas Northwest",
    "alternateName": "ChristmasNW",
    "url": "https://christmasnw.com",
    "logo": "https://christmasnw.com/logo.png",
    "image": "https://christmasnw.com/logo.png",
    "description": "Professional Christmas and holiday lighting installation service serving Greater Seattle. Premium, all-inclusive, stress-free installations with commercial-grade equipment and year-round storage.",
    "telephone": "+1-425-215-0935",
    "email": "info@christmasnw.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kenmore",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Bothell",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Woodinville",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Kirkland",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Redmond",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Bellevue",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Seattle",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Issaquah",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Sammamish",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Mill Creek",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Lake Forest Park",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Shoreline",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Lynnwood",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      },
      {
        "@type": "City",
        "name": "Edmonds",
        "containedInPlace": {
          "@type": "State",
          "name": "Washington"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/christmasnorthwest",
      "https://www.instagram.com/christmasnw",
      "https://youtube.com/@christmasnw",
      "https://g.co/kgs/RMc1Vch"
    ],
    "priceRange": "$$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "foundingDate": "2018",
    "slogan": "Premium Holiday Lighting Installation - Stress-Free, All-Inclusive Service"
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Sitewide Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
