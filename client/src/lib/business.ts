export const FIRST_SEASON_YEAR = 2022;
export const CURRENT_SEASON_YEAR = 2026;
export const CURRENT_SEASON_NUMBER = CURRENT_SEASON_YEAR - FIRST_SEASON_YEAR + 1;

export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 96;

export const FACEBOOK_URL = "https://www.facebook.com/ChristmasNorthwest";
export const INSTAGRAM_URL = "https://www.instagram.com/christmasnw";
export const YOUTUBE_URL = "https://www.youtube.com/@christmasnw";

// Every city we serve — single source of truth for areaServed schema.
export const SERVED_CITIES = [
  "Seattle",
  "Bellevue",
  "Kirkland",
  "Bothell",
  "Kenmore",
  "Woodinville",
  "Redmond",
  "Sammamish",
  "Shoreline",
  "Mill Creek",
  "Lake Forest Park",
  "Issaquah",
  "Newcastle",
  "Mercer Island",
  "Edmonds",
  "Snohomish",
];

// areaServed city list for JSON-LD; pass a city name to hoist it to the front
// (used by city landing pages) without duplicating it.
export const servedCitiesSchema = (firstCity?: string) => {
  const rest = SERVED_CITIES.filter((name) => name !== firstCity);
  const ordered = firstCity ? [firstCity, ...rest] : rest;
  return ordered.map((name) => ({
    "@type": "City",
    name,
    address: { addressRegion: "WA" },
  }));
};

export const SITE_URL = "https://christmasnw.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

// The one LocalBusiness entity. Every page emits this same object (same @id)
// so search engines and AI tools see one business, not one per page.
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: "Christmas Northwest",
  alternateName: "Christmas Light Installers Northwest",
  description:
    "Christmas light installation for homes in Seattle and the Eastside. We hang commercial-grade lights in warm white or any color, fix anything that goes out for free, and take everything down after the holidays. Installs start at $800.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.png`,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+14252150935",
  email: "christmaslightsnw@gmail.com",
  priceRange: "$800-$4,000+",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kenmore",
    addressRegion: "WA",
    postalCode: "98028",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.7573, longitude: -122.2443 },
  areaServed: servedCitiesSchema(),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: GOOGLE_RATING,
    bestRating: "5",
    worstRating: "1",
    reviewCount: GOOGLE_REVIEW_COUNT,
  },
  knowsAbout: [
    "Christmas light installation",
    "Holiday light installation",
    "Christmas light takedown",
    "Roofline Christmas lights",
    "Tree wrapping",
  ],
  foundingDate: String(FIRST_SEASON_YEAR),
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL],
});
