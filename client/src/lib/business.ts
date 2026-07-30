export const CURRENT_SEASON_YEAR = 2026;
export const CURRENT_SEASON_NUMBER = 6;

export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 92;

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
