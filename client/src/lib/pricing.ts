import cleanRooflinePhoto from "@assets/thumbs/IMG_6862-min_1763866884565-800.webp";
import accentsPhoto from "@assets/thumbs/2024-11-11-2-min_1762058047476-800.webp";
import fullPropertyPhoto from "@assets/optimized/portfolio-warm-white.webp";
import largeCustomPhoto from "@assets/thumbs/large-custom-display-night-1000.webp";

// Shared by the homepage and full pricing page. Every tier shows a real install.
export const pricingExamples = [
  {
    id: 1,
    name: "Clean Roofline",
    range: "Starting at $800",
    description: "Clean roofline.",
    image: cleanRooflinePhoto,
    imageAlt: "Two-story home with a clean warm white roofline",
    imageClassName: "",
  },
  {
    id: 2,
    name: "Roofline + Accents",
    range: "$1,000–$2,000",
    description: "Roofline plus an entry, wreath, bushes, or a small tree.",
    image: accentsPhoto,
    imageAlt: "Home with a lit roofline plus wreath and accent lighting",
    imageClassName: "",
  },
  {
    id: 3,
    name: "Full-Property Display",
    range: "$2,500–$3,500",
    description: "Broader roofline coverage with landscape or tree lighting.",
    image: fullPropertyPhoto,
    imageAlt: "Home with warm white roofline and fully lit bushes",
    imageClassName: "",
  },
  {
    id: 4,
    name: "Large Custom Display",
    range: "$4,000+",
    description: "Multi-level rooflines, larger trees, and custom features.",
    image: largeCustomPhoto,
    imageAlt: "Large custom display with roofline, tree, and landscape lights",
    imageClassName: "origin-[90%_85%] scale-[1.4]",
  },
];
