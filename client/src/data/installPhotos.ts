import largeHomeWarmWhite from "@assets/thumbs/unnamed-17_1762398507427-800.webp";
import stunningEstate from "@assets/thumbs/2023-12-07-2_optimized-800.webp";
import gableWreathHome from "@assets/thumbs/2023-12-22-3_1762398937574-800.webp";
import multicolorTreeHome from "@assets/thumbs/2024-12-07_1762398937574-800.webp";
import glassHomeMulticolor from "@assets/thumbs/unnamed-18_1762398937574-800.webp";
import luxuryModernDeck from "@assets/thumbs/2024-11-13-4_1762398937574-800.webp";
import warmWhiteBushEstate from "@assets/thumbs/2025-11-19-min_1763645900967-800.webp";
import multicolorTwoStoryHome from "@assets/thumbs/2025-11-19-3-min_1763645900967-800.webp";
import porchRailings from "@assets/thumbs/IMG_0581-min_optimized-800.webp";
import rooflineWrappedTrees from "@assets/thumbs/IMG_7339-min_1763866884565-800.webp";
import singleStoryWithWreath from "@assets/thumbs/IMG_7362-min_optimized-800.webp";
import twoStoryWithChimney from "@assets/thumbs/IMG_2546-min_1763866884565-800.webp";

export interface InstallPhoto {
  src: string;
  alt: string;
}

// Real installs used on city pages until that city has its own photos.
const GALLERY_POOL: InstallPhoto[] = [
  { src: warmWhiteBushEstate, alt: "Warm white roofline and wrapped bushes" },
  { src: glassHomeMulticolor, alt: "Multicolor rooflines on a modern home at dusk" },
  { src: rooflineWrappedTrees, alt: "Warm white roofline with wrapped trees" },
  { src: gableWreathHome, alt: "Warm white gables with wreaths" },
  { src: luxuryModernDeck, alt: "Red and white roofline with deck lighting" },
  { src: singleStoryWithWreath, alt: "Single-story home with warm white roofline and a wreath" },
  { src: multicolorTwoStoryHome, alt: "Multicolor roofline with warm white bushes" },
  { src: stunningEstate, alt: "Estate with wrapped trees and lit columns" },
  { src: porchRailings, alt: "Porch railings wrapped in warm white lights" },
  { src: largeHomeWarmWhite, alt: "Large home with warm white roofline and tree lighting" },
  { src: multicolorTreeHome, alt: "Multicolor roofline with a wrapped tree" },
  { src: twoStoryWithChimney, alt: "Two-story home with warm white roofline around the chimney" },
];

// A different set of three per city so the pages don't all look the same.
const PLACEHOLDER_PICKS: Record<string, number[]> = {
  seattle: [0, 1, 2],
  kirkland: [3, 4, 5],
  bellevue: [6, 7, 8],
  bothell: [9, 10, 11],
  kenmore: [1, 6, 11],
  woodinville: [0, 7, 9],
  sammamish: [2, 4, 10],
  redmond: [5, 8, 0],
  "mercer-island": [3, 9, 1],
  issaquah: [11, 2, 7],
  edmonds: [8, 3, 10],
  snohomish: [4, 11, 6],
};

// Dylan's own job photos: attached_assets/cities/<slug>/*.{jpg,jpeg,png,webp}
const CITY_PHOTOS = import.meta.glob<string>("@assets/cities/*/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const titleCase = (fileName: string) =>
  fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export function getCityPhotos(citySlug: string, cityName: string): { photos: InstallPhoto[]; isLocal: boolean } {
  const local = Object.entries(CITY_PHOTOS)
    .filter(([path]) => path.includes(`/cities/${citySlug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(0, 3)
    .map(([path, src]) => ({ src, alt: `${titleCase(path.split("/").pop() ?? "")}, ${cityName}` }));
  if (local.length > 0) return { photos: local, isLocal: true };

  const picks = PLACEHOLDER_PICKS[citySlug] ?? [0, 1, 2];
  return { photos: picks.map((i) => GALLERY_POOL[i]), isLocal: false };
}
