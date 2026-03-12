import { useEffect, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";
import { useLocation } from "wouter";

// Import all gallery images
import img1 from '@assets/2024-11-25-min_1762058047474.jpg';
import img2 from '@assets/2024-11-17-3-min_1762058047475.jpg';
import img3 from '@assets/2023-11-10-3-min_1762058047475.jpg';
import img4 from '@assets/2024-11-17-4-min_1762058047475.jpg';
import img5 from '@assets/2022-12-01-min_1762058047475.jpg';
import img6 from '@assets/unnamed-14-min_1762058047475.jpg';
import img7 from '@assets/2023-11-14-min_1762058047475.jpg';
import img8 from '@assets/2024-11-23-min_1762058047475.jpg';
import img9 from '@assets/2025-10-28-min_1762058047476.jpg';
import img10 from '@assets/2024-12-25-min_1762058047476.jpg';
import img12 from '@assets/2024-12-03-min_1762058047476.jpg';
import img13 from '@assets/2025-10-28-2-min_1762058047476.jpg';
import img14 from '@assets/2024-10-27-min_1762058047476.jpg';
import img15 from '@assets/2024-11-11-2-min_1762058047476.jpg';
import img16 from '@assets/2024-11-28-2-min_1762058047476.jpg';
import img17 from '@assets/2025-09-04-min_1762058047477.jpg';
import img18 from '@assets/2025-10-28-3-min_1762064223709.jpg';
import img19 from '@assets/unnamed-15-min_1762064292781.jpg';
import img20 from '@assets/2024-11-28-2-min_1762064344572.jpg';
import img21 from '@assets/1-2-min_1762064533191_feature.webp';
import img22 from '@assets/IMG_5253_1762064572527.jpeg';
import img23 from '@assets/29ed3807d7952892033a68ec8781e744.jpg-2_1762395487269.webp';
import img24 from '@assets/990c3274b03bd096a71395c6d8043d8f.jpg_1762395519144.webp';
import img25 from '@assets/2a1755975470dff4557e8fe3d51e6f67_1762395568284.webp';
import img26 from '@assets/80b2ff7622e5483fa3a1f5036a13f509.jpg_1762395608101.webp';
import img27 from '@assets/a885e41a3786af553f91476ed6121d32.jpg-2_1762395700253.webp';
import img28 from '@assets/49563b654a08482eca22f0a3090b7ad0.jpg_1762395736248.webp';
import img29 from '@assets/46deed693d6a52e864742bf7ae390cfa_optimized.webp';
import img30 from '@assets/0c838ea46d9ea001809c0f8951533e07_optimized.webp';
import homeImg1 from '@assets/img2_1761853506442.webp';
import homeImg2 from '@assets/img3_1761853506443.webp';
import homeImg3 from '@assets/img4_1761853506443.webp';
import homeImg4 from '@assets/img5_1761853506443.webp';
import homeImg5 from '@assets/img6_1761853506443.webp';
import homeImg6 from '@assets/img7_1761853506443.webp';
import purpleHalloweenHouse from '@assets/IMG_5468-min_1762396975618.jpeg';
import redColumnAccentHome from '@assets/d8c6cab5281de0583599e22ee0ea1bbd_1762398220204.webp';
import landscapeLightingHome from '@assets/9f3e6664c053b1463aadbe6b559a13e9_1762398299920.webp';
import pergolaTreeHome from '@assets/2023-11-10-4_1762398479907.jpg';
import largeHomeWarmWhite from '@assets/unnamed-17_1762398507427.jpg';
import stunningEstate from '@assets/2023-12-07-2_optimized.webp';
import redBlueHalloween from '@assets/44acdea9569a33cda9a195b7b4f8df4b_1762398316523.webp';
import modernHomeWithDeer from '@assets/5b74f72f0d7ce55a601aed3e7375310a.jpg_1762398340287.webp';
import modernArchitectureHome from '@assets/2024-11-26-2_1762398937574.jpg';
import gableWreathHome from '@assets/2023-12-22-3_1762398937574.jpg';
import truckInstallHome from '@assets/2024-11-12-3_1762398937574.jpg';
import multicolorTreeHome from '@assets/2024-12-07_1762398937574.jpg';
import ultraModernLandscape from '@assets/unnamed-19_1762398937574.jpg';
import glassHomeMulticolor from '@assets/unnamed-18_1762398937574.jpg';
import luxuryModernDeck from '@assets/2024-11-13-4_1762398937574.jpg';
import bareTreeWrap from '@assets/581802931_10113409149773279_8492716573386177864_n_1762916125607.jpg';
import warmWhiteBushEstate from '@assets/2025-11-19-min_1763645900967.jpg';
import warmWhiteBushEstateAngle2 from '@assets/2025-11-19-2-min_1763645900967.jpg';
import multicolorModernDeck from '@assets/2024-11-13-5-min_1763645900967.jpg';
import multicolorTwoStoryHome from '@assets/2025-11-19-3-min_1763645900967.jpg';
import porchRailings from '@assets/IMG_0581-min_optimized.webp';
import modernTwoStoryRoofline from '@assets/IMG_6862-min_1763866884565.jpeg';
import rooflineWrappedTrees from '@assets/IMG_7339-min_1763866884565.jpeg';
import singleStoryWithWreath from '@assets/IMG_7362-min_optimized.webp';
import wrappedBushesDriveway from '@assets/IMG_7487-min_optimized.webp';
import twoStoryWithChimney from '@assets/IMG_2546-min_1763866884565.jpeg';
import multicolorTreeHouse from '@assets/IMG_6617-min_optimized.webp';
import twoStoryLawnDecorations from '@assets/IMG_6949-min_1763866884565.jpeg';
import hillsideHomeWithTrees from '@assets/IMG_7349-min_1763866884565.jpeg';
import multipleWrappedTrees from '@assets/IMG_7468-min_optimized.webp';
import warmWhiteGreenAccent1 from '@assets/IMG_1952-min_optimized.webp';
import rainbowWithTree from '@assets/IMG_8045-min_1764598984614.jpeg';
import warmWhiteWithColorAccents from '@assets/IMG_1958-min_optimized.webp';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface VideoShowcaseItem {
  id: string;
  title: string;
  location: string;
  description: string;
  youtubeId: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: stunningEstate, alt: "Estate with custom lighting, wrapped trees, column accents, and landscape features", category: "Custom", title: "Estate with Trees and Columns" },
  { id: 2, src: ultraModernLandscape, alt: "Modern home with landscape lighting, pathway lights, deck accent lighting, and wreath", category: "Custom", title: "Modern Home with Landscape Lighting" },
  { id: 3, src: warmWhiteBushEstate, alt: "Warm white roofline and wrapped bushes on estate home", category: "Warm White", title: "Warm White Bushes" },
  { id: 4, src: gableWreathHome, alt: "Home with warm white rooflines, multiple gables, decorative wreaths, and snowflake accents", category: "Custom", title: "Gables and Wreaths" },
  { id: 5, src: modernArchitectureHome, alt: "Modern home with warm white roofline and landscape lighting", category: "Warm White", title: "Modern Warm White Roofline" },
  { id: 6, src: luxuryModernDeck, alt: "Modern home with custom red and white roofline lighting and deck accents", category: "Custom", title: "Red and White Deck Lighting" },
  { id: 7, src: glassHomeMulticolor, alt: "Glass home with multicolor rooflines at dusk with sunset backdrop", category: "Multicolor", title: "Glass Home Multicolor" },
  { id: 8, src: img9, alt: "Custom tree display with wrapped trees", category: "Custom", title: "Wrapped Trees" },
  { id: 9, src: img8, alt: "Modern home with clean warm white", category: "Warm White", title: "Clean Warm White" },
  { id: 10, src: img12, alt: "Full yard custom design with decorations", category: "Custom", title: "Full Yard Display" },
  { id: 11, src: img16, alt: "Red tree wrap with blue snowmen", category: "Trees", title: "Red Tree with Snowmen" },
  { id: 12, src: img17, alt: "Multicolor lights on dark modern home with peaks and columns", category: "Multicolor", title: "Multicolor Peaks and Columns" },
  { id: 13, src: img21, alt: "Warm white Christmas lights on home", category: "Warm White", title: "Warm White Roofline" },
  { id: 14, src: img23, alt: "Tree uplighting in winter snow with warm white landscape lights", category: "Trees", title: "Tree Uplighting in Snow" },
  { id: 15, src: img25, alt: "Estate gate with red accent lights and warm white uplighting", category: "Custom", title: "Gate Lighting" },
  { id: 16, src: img28, alt: "Warm white Christmas lights on rooflines and ridges", category: "Warm White", title: "Ridges and Rooflines" },
  { id: 17, src: img29, alt: "Modern Bellevue home with warm white Christmas lights and tree uplighting", category: "Warm White", title: "Bellevue Home with Tree Uplighting" },
  { id: 18, src: img1, alt: "Multicolor roofline installation on large home", category: "Multicolor", title: "Multicolor Roofline" },
  { id: 19, src: img2, alt: "Family enjoying custom holiday lighting", category: "Custom", title: "Family Photo" },
  { id: 20, src: img3, alt: "Multicolor roofline with pillars", category: "Multicolor", title: "Multicolor with Pillars" },
  { id: 21, src: img4, alt: "Tree wrap with warm white lights", category: "Trees", title: "Warm White Tree Wrap" },
  { id: 22, src: img5, alt: "Tricolor lights in snow", category: "Multicolor", title: "Tricolor in Snow" },
  { id: 23, src: img6, alt: "Child admiring big lit tree", category: "Trees", title: "Big Wrapped Tree" },
  { id: 24, src: img7, alt: "Brick mansion with warm white lights", category: "Warm White", title: "Brick Mansion Warm White" },
  { id: 25, src: multicolorTreeHome, alt: "Modern home with multicolor rooflines and wrapped tree with landscape lighting", category: "Multicolor", title: "Multicolor Roofline and Tree" },
  { id: 26, src: truckInstallHome, alt: "Professional installation in progress with warm white rooflines and Christmas NW truck", category: "Warm White", title: "Installation in Progress" },
  { id: 27, src: img10, alt: "Home with unique architecture", category: "Warm White", title: "Unique Architecture" },
  { id: 28, src: img13, alt: "Tree with firework starburst lights", category: "Trees", title: "Starburst Tree" },
  { id: 29, src: img14, alt: "Warm white roofline with multicolor tree", category: "Multicolor", title: "Warm White and Multicolor Tree" },
  { id: 30, src: img15, alt: "Modern home with warm white and wreath", category: "Warm White", title: "Warm White with Wreath" },
  { id: 31, src: img18, alt: "Multicolor tree with full wrap", category: "Trees", title: "Multicolor Tree Wrap" },
  { id: 32, src: img20, alt: "Red tree wrap with blue snowmen decorations", category: "Trees", title: "Red Tree and Snowmen" },
  { id: 33, src: img22, alt: "Multicolor Christmas lights on rooflines", category: "Multicolor", title: "Multicolor Rooflines" },
  { id: 34, src: img24, alt: "Custom mistletoe style Christmas lights with red and green bulbs at peaks", category: "Custom", title: "Mistletoe Peaks" },
  { id: 35, src: multicolorModernDeck, alt: "Modern home with multicolor roofline, deck accent lighting, and illuminated columns", category: "Multicolor", title: "Multicolor Deck and Columns" },
  { id: 36, src: img27, alt: "Warm white roofline with red accent lights wrapping entry columns", category: "Custom", title: "Red Column Accents" },
  { id: 37, src: img30, alt: "Warm white roofline with multicolor Christmas tree", category: "Multicolor", title: "Warm White with Multicolor Tree" },
  { id: 38, src: pergolaTreeHome, alt: "Warm white roofline with pergola lighting and tree wrap", category: "Warm White", title: "Pergola and Tree" },
  { id: 39, src: largeHomeWarmWhite, alt: "Large home with comprehensive warm white roofline and landscape tree lighting", category: "Warm White", title: "Large Home Warm White" },
  { id: 40, src: homeImg1, alt: "Classic warm white roofline installation on home", category: "Warm White", title: "Classic Warm White" },
  { id: 41, src: homeImg2, alt: "Modern multicolor Christmas light display on home", category: "Multicolor", title: "Modern Multicolor" },
  { id: 42, src: homeImg3, alt: "Traditional warm white Christmas lights on home", category: "Warm White", title: "Traditional Warm White" },
  { id: 43, src: homeImg4, alt: "Contemporary home with stone accent and warm white lights", category: "Warm White", title: "Stone Accent Warm White" },
  { id: 44, src: homeImg5, alt: "Large estate with professional Christmas light installation", category: "Warm White", title: "Large Estate" },
  { id: 45, src: homeImg6, alt: "Modern gable design with warm white Christmas lights", category: "Warm White", title: "Gable Roofline" },
  { id: 46, src: purpleHalloweenHouse, alt: "Purple Halloween lighting display with yard decorations", category: "Halloween", title: "Purple Halloween Display" },
  { id: 47, src: redBlueHalloween, alt: "Red and blue Halloween lighting display with roofline coverage", category: "Halloween", title: "Red and Blue Halloween" },
  { id: 48, src: redColumnAccentHome, alt: "Warm white roofline with red column accents and tree lighting", category: "Custom", title: "Red Columns and Tree" },
  { id: 49, src: landscapeLightingHome, alt: "Warm white roofline with custom landscape lighting and red and white shrub wraps", category: "Custom", title: "Landscape and Shrub Lighting" },
  { id: 50, src: modernHomeWithDeer, alt: "Modern home with warm white roofline, entryway accents, planters with lights, and decorative deer", category: "Custom", title: "Modern Home with Deer" },
  { id: 51, src: bareTreeWrap, alt: "Bare tree wrapped in warm white lights at night with decorative fencing", category: "Trees", title: "Bare Tree Wrap" },
  { id: 52, src: warmWhiteBushEstateAngle2, alt: "Warm white estate with illuminated hedge wall and roofline from side angle", category: "Warm White", title: "Hedge Wall Lighting" },
  { id: 53, src: multicolorTwoStoryHome, alt: "Two-story home with multicolor roofline and warm white illuminated bushes", category: "Multicolor", title: "Multicolor with Warm White Bushes" },
  { id: 54, src: porchRailings, alt: "Home with warm white lights wrapping porch railings", category: "Warm White", title: "Porch Railings" },
  { id: 55, src: modernTwoStoryRoofline, alt: "Modern two-story home with warm white roofline lighting", category: "Warm White", title: "Modern Two-Story Roofline" },
  { id: 56, src: rooflineWrappedTrees, alt: "Home with warm white roofline and wrapped trees lighting", category: "Warm White", title: "Roofline and Wrapped Trees" },
  { id: 57, src: singleStoryWithWreath, alt: "Single-story home with warm white roofline and decorative wreath", category: "Warm White", title: "Single-Story with Wreath" },
  { id: 58, src: wrappedBushesDriveway, alt: "Warm white lights wrapping bushes along home driveway", category: "Warm White", title: "Wrapped Bushes Along Driveway" },
  { id: 59, src: twoStoryWithChimney, alt: "Two-story home with warm white roofline wrapping chimney", category: "Warm White", title: "Two-Story with Chimney" },
  { id: 60, src: multicolorTreeHouse, alt: "Home with multicolor tree and roofline lighting display", category: "Multicolor", title: "Multicolor Tree and House" },
  { id: 61, src: twoStoryLawnDecorations, alt: "Two-story home with multicolor roofline and lawn decorations", category: "Multicolor", title: "Two-Story with Lawn Decorations" },
  { id: 62, src: hillsideHomeWithTrees, alt: "Hillside home with warm white lighting and wrapped trees", category: "Trees", title: "Hillside Home with Trees" },
  { id: 63, src: multipleWrappedTrees, alt: "Multiple trees wrapped in warm white lights on residential property", category: "Trees", title: "Multiple Wrapped Trees" },
  { id: 64, src: warmWhiteGreenAccent1, alt: "Modern home with warm white roofline and green accent lights on entry", category: "Custom", title: "Warm White with Green Accents" },
  { id: 65, src: rainbowWithTree, alt: "Rainbow multicolor roofline with decorated wrapped tree and landscape lighting", category: "Multicolor", title: "Rainbow Roofline with Wrapped Tree" },
  { id: 66, src: warmWhiteWithColorAccents, alt: "Modern home with warm white roofline, green tree lighting, red shrub accents, and landscape lighting at dusk", category: "Custom", title: "Warm White with Green and Red Accents" }
];

const VIDEO_SHOWCASE_ITEMS: VideoShowcaseItem[] = [
  {
    id: "halloween-bellevue",
    title: "Halloween Display",
    location: "Bellevue, WA",
    description: "Watch a real Halloween lighting install from design through final night reveal.",
    youtubeId: "qcnKBhSJQW4",
  },
  {
    id: "tree-woodinville",
    title: "Big Tree Installation",
    location: "Woodinville, WA",
    description: "See how we wrap a large tree safely and evenly for a premium holiday focal point.",
    youtubeId: "kyQ0PU9XDIk",
  },
  {
    id: "permanent-redmond",
    title: "Permanent Lighting Demo",
    location: "Redmond, WA",
    description: "A quick look at a color-changing permanent lighting system in action.",
    youtubeId: "f7vQhLxL9B8",
  },
  {
    id: "permanent-install",
    title: "Year-Round Permanent Lights",
    location: "Greater Seattle Area",
    description: "Our permanent lighting install process, start to finish, on a real home.",
    youtubeId: "ozZItKmCPKE",
  },
  {
    id: "halloween-2",
    title: "Halloween Light Display",
    location: "Greater Seattle Area",
    description: "Another seasonal transformation using professional outdoor-grade materials.",
    youtubeId: "fkd4TWuDYa4",
  },
  {
    id: "multicolor-issaquah",
    title: "Multicolor Display",
    location: "Issaquah, WA",
    description: "A full multicolor roofline and tree install for homeowners who want a bold look.",
    youtubeId: "mfZ_QQIDusE",
  },
];

const FEATURED_IMAGE_COUNT = 9;
const DEFAULT_REMAINING_VISIBLE = 12;

function GalleryImageCard({
  image,
  index,
  onOpen,
  eager = false,
}: {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
  eager?: boolean;
}) {
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(index);
    }
  };

  return (
    <Card
      className="group overflow-hidden hover-elevate cursor-pointer"
      onClick={() => onOpen(index)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      data-testid={`card-gallery-${image.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 select-none pointer-events-none"
          onContextMenu={(event) => event.preventDefault()}
          onDragStart={(event) => event.preventDefault()}
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
        />
        <div
          className="absolute bottom-3 right-3 px-4 py-2 pointer-events-none z-10"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            borderRadius: "0.375rem",
          }}
        >
          <p className="text-white text-sm font-bold tracking-wide">ChristmasNW.com</p>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Full Size
          </span>
        </div>
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="mb-2">
          {image.category}
        </Badge>
        <h3 className="font-semibold text-foreground">{image.title}</h3>
      </div>
    </Card>
  );
}

function VideoShowcaseCard({ item }: { item: VideoShowcaseItem }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="group block overflow-hidden rounded-2xl border border-border bg-background shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
      data-testid={`card-video-${item.id}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-950 sm:aspect-[9/16]">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.title}
            className="h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            data-testid={`iframe-video-${item.id}`}
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="relative h-full w-full text-left"
            data-testid={`button-video-${item.id}`}
          >
            <img
              src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
              alt={`${item.title} video thumbnail`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <Youtube className="h-4 w-4" />
              <span>YouTube</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#ff0000] px-5 py-3 text-base font-semibold text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Play className="h-5 w-5 fill-current" />
                <span>Play Video</span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <p className="text-xs font-medium text-white/80 sm:text-sm">{item.location}</p>
              <h3 className="mt-1 text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/80">{item.description}</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleRemainingCount, setVisibleRemainingCount] = useState(DEFAULT_REMAINING_VISIBLE);

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const categories = ["All", "Warm White", "Multicolor", "Trees", "Custom", "Halloween"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  const featuredImages = filteredImages.slice(0, FEATURED_IMAGE_COUNT);
  const remainingImages = filteredImages.slice(FEATURED_IMAGE_COUNT);
  const remainingImagesToRender = remainingImages.slice(0, visibleRemainingCount);
  const hasMoreRemainingImages = remainingImages.length > visibleRemainingCount;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    setVisibleRemainingCount(DEFAULT_REMAINING_VISIBLE);
    setLightboxIndex(null);
  }, [selectedCategory]);

  const videoSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": "Halloween Light Installation in Bellevue WA",
        "description": "Watch our professional Halloween lighting installation in Bellevue, Washington. See the complete transformation from start to finish with purple and orange commercial-grade lights creating a spooky holiday display.",
        "thumbnailUrl": "https://img.youtube.com/vi/qcnKBhSJQW4/maxresdefault.jpg",
        "uploadDate": "2024-10-15T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=qcnKBhSJQW4",
        "embedUrl": "https://www.youtube.com/embed/qcnKBhSJQW4",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": "Big Tree Christmas Light Installation in Woodinville WA",
        "description": "Professional Christmas tree lighting installation in Woodinville, Washington. Watch as we transform a big tree with thousands of commercial-grade lights creating a holiday centerpiece.",
        "thumbnailUrl": "https://img.youtube.com/vi/kyQ0PU9XDIk/maxresdefault.jpg",
        "uploadDate": "2024-11-20T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=kyQ0PU9XDIk",
        "embedUrl": "https://www.youtube.com/embed/kyQ0PU9XDIk",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": "Permanent Outdoor Lighting System Demo in Redmond WA",
        "description": "See our year-round permanent lighting system in action in Redmond, Washington. Customizable RGB lights that work for every holiday and season, professionally installed for long-term durability.",
        "thumbnailUrl": "https://img.youtube.com/vi/f7vQhLxL9B8/maxresdefault.jpg",
        "uploadDate": "2024-09-10T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=f7vQhLxL9B8",
        "embedUrl": "https://www.youtube.com/embed/f7vQhLxL9B8",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": "Year-Round Permanent Lighting Installation Process",
        "description": "Complete walk-through of our permanent outdoor lighting installation. See the professional process from planning to final installation for a year-round lighting system in Greater Seattle.",
        "thumbnailUrl": "https://img.youtube.com/vi/ozZItKmCPKE/maxresdefault.jpg",
        "uploadDate": "2024-08-25T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=ozZItKmCPKE",
        "embedUrl": "https://www.youtube.com/embed/ozZItKmCPKE",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": "Professional Halloween Lighting Display Installation",
        "description": "Another Halloween lighting installation in the Greater Seattle area. Watch our team create a spooky display with professional-grade outdoor lights.",
        "thumbnailUrl": "https://img.youtube.com/vi/fkd4TWuDYa4/maxresdefault.jpg",
        "uploadDate": "2024-10-20T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=fkd4TWuDYa4",
        "embedUrl": "https://www.youtube.com/embed/fkd4TWuDYa4",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": "Multicolor Christmas Light Installation in Issaquah WA",
        "description": "Watch a complete multicolor Christmas light installation in Issaquah, Washington. See how we create a festive holiday display with commercial-grade multicolor C9 bulbs.",
        "thumbnailUrl": "https://img.youtube.com/vi/mfZ_QQIDusE/maxresdefault.jpg",
        "uploadDate": "2024-11-25T12:00:00Z",
        "contentUrl": "https://www.youtube.com/watch?v=mfZ_QQIDusE",
        "embedUrl": "https://www.youtube.com/embed/mfZ_QQIDusE",
        "publisher": {
          "@type": "Organization",
          "name": "Christmas Northwest",
          "logo": {
            "@type": "ImageObject",
            "url": "https://christmasnw.com/logo.png"
          }
        }
      }
    ]
  };

  return (
    <>
      <PageHead 
        title="Christmas Light Installation Gallery 2026 | Seattle, Bellevue, Bothell | Christmas Northwest"
        description="View our portfolio of professional Christmas light installations across Greater Seattle. See completed projects in Bellevue, Bothell, Kirkland, Redmond, and Kenmore. Watch installation videos and get inspired for your 2026 holiday display."
      />
      
      {/* VideoObject Schema Markup for YouTube Shorts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchemas)
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <UrgencyBanner />
        <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">Our Work</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Installation Gallery
              </h1>
              <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                Explore our collection of beautiful holiday lighting installations. Every home tells a story, and we're proud to showcase the magic we've created for families across Greater Seattle.
              </p>
            </div>

            {/* Category Filters */}
            <div className="mb-10 grid grid-cols-2 gap-2 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  className="w-full px-4 py-2 text-sm font-semibold sm:w-auto sm:px-6"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Top 9 Premium Photos */}
        <section className="bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Featured Premium Installations
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                {selectedCategory === "All" 
                  ? "Our most impressive custom work showcasing the quality and variety we bring to every project" 
                  : `Showcasing our best ${selectedCategory} installations`}
              </p>
            </div>

            {/* Top 9 Gallery Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {featuredImages.map((image, index) => (
                <GalleryImageCard
                  key={image.id}
                  image={image}
                  index={index}
                  onOpen={openLightbox}
                  eager={index < 3}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Video Section - "See These Come to Life" */}
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">Watch Our Work</span>
              </div>
              <h2 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-5xl">
                See These Installations Come to Life
              </h2>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Watch real installations from start to finish. See the quality, craftsmanship, and care we bring to every project across Greater Seattle.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {VIDEO_SHOWCASE_ITEMS.map((item) => (
                <VideoShowcaseCard key={item.id} item={item} />
              ))}
            </div>

            {/* Channel CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to see more? Check out our YouTube channel for additional videos and behind-the-scenes content.
              </p>
              <Button 
                variant="outline"
                className="w-full font-semibold sm:w-auto"
                onClick={() => window.open('https://youtube.com/@christmasnw?si=N5gu7fRN9vyEFMUd', '_blank')}
                data-testid="button-youtube-channel"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Visit Our YouTube Channel
              </Button>
            </div>
          </div>
        </section>

        {/* Remaining Photos Section */}
        <section className="bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">
                More Premium Installations
              </h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                {selectedCategory === "All" 
                  ? `Browse ${remainingImages.length} more beautiful installations` 
                  : `${remainingImages.length} more ${selectedCategory} installations`}
              </p>
            </div>

            {/* Remaining Photos Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {remainingImagesToRender.map((image, index) => (
                <GalleryImageCard
                  key={image.id}
                  image={image}
                  index={index + FEATURED_IMAGE_COUNT}
                  onOpen={openLightbox}
                />
              ))}
            </div>

            {hasMoreRemainingImages ? (
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    setVisibleRemainingCount((current) =>
                      Math.min(current + DEFAULT_REMAINING_VISIBLE, remainingImages.length),
                    )
                  }
                >
                  Show 12 More Installations
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setVisibleRemainingCount(remainingImages.length)}
                >
                  Show All {remainingImages.length}
                </Button>
              </div>
            ) : null}

            {filteredImages.length <= FEATURED_IMAGE_COUNT && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">All installations shown above.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Home?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Let's create a beautiful holiday display for your home. Get your free quote today and join the hundreds of satisfied homeowners we serve every season.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="border-2 border-primary-foreground/20 bg-background font-semibold text-foreground hover:bg-background/90 sm:w-auto"
                data-testid="button-gallery-cta-quote"
              >
                Get a Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                onClick={() => window.location.href = 'tel:4252150935'}
                data-testid="button-gallery-cta-call"
              >
                Call (425) 215-0935
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />

      {/* Lightbox using React Portal for proper z-index */}
      {lightboxIndex !== null && createPortal(
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Close lightbox"
            data-testid="button-lightbox-close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Previous image"
            data-testid="button-lightbox-prev"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Next image"
            data-testid="button-lightbox-next"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-[90vh] p-4 relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain select-none pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              data-testid="img-lightbox"
            />
            {/* Watermark in lightbox */}
            <div 
              className="absolute bottom-20 right-8 px-5 py-2.5 pointer-events-none"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '0.5rem'
              }}
            >
              <p className="text-white text-lg font-bold tracking-wide">
                ChristmasNW.com
              </p>
            </div>
            <div className="text-center mt-4">
              <Badge variant="secondary" className="mb-2">
                {filteredImages[lightboxIndex].category}
              </Badge>
              <h3 className="text-white font-semibold text-lg">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-white/70 text-sm mt-1">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
      </div>
    </>
  );
}
