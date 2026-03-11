declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() ?? "";

export function isAnalyticsEnabled() {
  return Boolean(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes("XXXXXXXX");
}

export function trackLeadConversion(label: string, extraParams: Record<string, unknown> = {}) {
  if (!isAnalyticsEnabled() || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "generate_lead", {
    event_category: "lead",
    event_label: label,
    ...extraParams,
  });
}
