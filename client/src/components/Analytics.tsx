import { useEffect } from "react";
import { useLocation } from "wouter";
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from "@/lib/analytics";

export default function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function (...args: any[]) {
        window.dataLayer?.push(args);
      };

    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: false,
    });

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-ga-loader="${GA_MEASUREMENT_ID}"]`,
    );

    if (existingScript) {
      return;
    }

    const loadAnalytics = () => {
      if (document.querySelector(`script[data-ga-loader="${GA_MEASUREMENT_ID}"]`)) {
        return;
      }

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.dataset.gaLoader = GA_MEASUREMENT_ID;
      document.head.appendChild(script);
    };

    const interactionEvents: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    const handleFirstInteraction = () => {
      loadAnalytics();
      interactionEvents.forEach((eventName) => window.removeEventListener(eventName, handleFirstInteraction));
    };

    interactionEvents.forEach((eventName) =>
      window.addEventListener(eventName, handleFirstInteraction, { passive: true, once: true }),
    );
    const fallbackTimer = window.setTimeout(loadAnalytics, 10000);

    return () => {
      window.clearTimeout(fallbackTimer);
      interactionEvents.forEach((eventName) => window.removeEventListener(eventName, handleFirstInteraction));
    };
  }, []);

  useEffect(() => {
    if (!isAnalyticsEnabled() || typeof window.gtag !== "function") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      window.gtag?.("event", "page_view", {
        page_path: location,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location]);

  return null;
}
