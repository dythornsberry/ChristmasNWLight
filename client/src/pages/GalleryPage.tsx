import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Youtube } from "lucide-react";
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
import img21 from '@assets/1-2-min_1762064533191.jpeg';
import img22 from '@assets/IMG_5253_1762064572527.jpeg';
import img23 from '@assets/29ed3807d7952892033a68ec8781e744.jpg-2_1762395487269.webp';
import img24 from '@assets/990c3274b03bd096a71395c6d8043d8f.jpg_1762395519144.webp';
import img25 from '@assets/2a1755975470dff4557e8fe3d51e6f67_1762395568284.webp';
import img26 from '@assets/80b2ff7622e5483fa3a1f5036a13f509.jpg_1762395608101.webp';
import img27 from '@assets/a885e41a3786af553f91476ed6121d32.jpg-2_1762395700253.webp';
import img28 from '@assets/49563b654a08482eca22f0a3090b7ad0.jpg_1762395736248.webp';
import img29 from '@assets/46deed693d6a52e864742bf7ae390cfa.jpg_1762395777011.webp';
import img30 from '@assets/0c838ea46d9ea001809c0f8951533e07.jpg_1762395809963.webp';
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
import stunningEstate from '@assets/2023-12-07-2_1762398525155.jpg';
import redBlueHalloween from '@assets/44acdea9569a33cda9a195b7b4f8df4b_1762398316523.webp';
import modernHomeWithDeer from '@assets/5b74f72f0d7ce55a601aed3e7375310a.jpg_1762398340287.webp';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: img1, alt: "Multicolor roofline installation on large home", category: "Multicolor", title: "Festive Multicolor Display" },
  { id: 2, src: img2, alt: "Family enjoying custom holiday lighting", category: "Custom", title: "Family Holiday Tradition" },
  { id: 3, src: img3, alt: "Vibrant multicolor roofline with pillars", category: "Multicolor", title: "Bold Multicolor Design" },
  { id: 4, src: img4, alt: "Elegant tree wrap with warm white lights", category: "Trees", title: "Atmospheric Tree Lighting" },
  { id: 5, src: img5, alt: "Beautiful tricolor lights in snow", category: "Multicolor", title: "Winter Wonderland" },
  { id: 6, src: img6, alt: "Child admiring massive lit tree", category: "Trees", title: "Magical Tree Experience" },
  { id: 7, src: img7, alt: "Elegant brick mansion with warm white", category: "Warm White", title: "Classic Mansion Elegance" },
  { id: 8, src: stunningEstate, alt: "Stunning estate with extensive custom lighting, wrapped trees, column accents, and landscape features", category: "Custom", title: "Elegant Estate Masterpiece" },
  { id: 9, src: img8, alt: "Modern home with clean warm white", category: "Warm White", title: "Contemporary Classic" },
  { id: 10, src: img9, alt: "Spectacular custom tree display", category: "Custom", title: "Premium Custom Display" },
  { id: 11, src: img10, alt: "Elegant home with unique architecture", category: "Warm White", title: "Architectural Showcase" },
  { id: 12, src: img12, alt: "Full yard custom design with decorations", category: "Custom", title: "Complete Holiday Scene" },
  { id: 13, src: img13, alt: "Tree with firework starburst lights", category: "Trees", title: "Starburst Tree Magic" },
  { id: 14, src: img14, alt: "Warm white roofline with multicolor tree", category: "Multicolor", title: "Mixed Color Harmony" },
  { id: 15, src: img15, alt: "Modern home with warm white and wreath", category: "Warm White", title: "Modern Holiday Elegance" },
  { id: 16, src: img16, alt: "Red tree wrap with blue snowmen", category: "Trees", title: "Creative Tree Design" },
  { id: 17, src: img17, alt: "Vibrant multicolor on dark modern home", category: "Multicolor", title: "Striking Night Display" },
  { id: 18, src: img18, alt: "Stunning multicolor tree with full wrap", category: "Trees", title: "Majestic Multicolor Tree" },
  { id: 19, src: img20, alt: "Red tree wrap with blue snowmen decorations", category: "Trees", title: "Red Tree with Snowmen" },
  { id: 20, src: img21, alt: "Elegant warm white Christmas lights on home", category: "Warm White", title: "Classic Warm White Elegance" },
  { id: 21, src: img22, alt: "Vibrant multicolor Christmas lights on rooflines", category: "Multicolor", title: "Festive Multicolor Display" },
  { id: 22, src: img23, alt: "Professional tree uplighting in winter snow with warm white landscape lights", category: "Trees", title: "Winter Landscape Lighting" },
  { id: 23, src: img24, alt: "Custom mistletoe style Christmas lights with red and green bulbs at peaks", category: "Custom", title: "Mistletoe Peak Design" },
  { id: 24, src: img25, alt: "Elegant estate gate decorated with red accent lights and warm white uplighting", category: "Custom", title: "Grand Estate Entrance" },
  { id: 25, src: img26, alt: "Complete Christmas light installation on home in winter snow", category: "Warm White", title: "Classic Winter Wonderland" },
  { id: 26, src: img27, alt: "Warm white roofline with red accent lights wrapping entry columns", category: "Custom", title: "Red Column Accent Design" },
  { id: 27, src: img28, alt: "Warm white Christmas lights on rooflines and ridges", category: "Warm White", title: "Ridge and Roofline Display" },
  { id: 28, src: img29, alt: "Modern Bellevue home with warm white Christmas lights and tree uplighting", category: "Warm White", title: "Contemporary Bellevue Home" },
  { id: 29, src: img30, alt: "Warm white roofline with vibrant multicolor Christmas tree", category: "Multicolor", title: "Mixed Style Display" },
  { id: 30, src: pergolaTreeHome, alt: "Warm white roofline with elegant pergola lighting and tree wrap", category: "Warm White", title: "Pergola and Tree Accent" },
  { id: 31, src: largeHomeWarmWhite, alt: "Large home with comprehensive warm white roofline and landscape tree lighting", category: "Warm White", title: "Complete Warm White Display" },
  { id: 32, src: homeImg1, alt: "Classic warm white roofline installation on home", category: "Warm White", title: "Classic Warm White Roofline" },
  { id: 33, src: homeImg2, alt: "Modern multicolor Christmas light display on home", category: "Multicolor", title: "Modern Multicolor Display" },
  { id: 34, src: homeImg3, alt: "Traditional warm white Christmas lights on home", category: "Warm White", title: "Traditional Warm White" },
  { id: 35, src: homeImg4, alt: "Contemporary home with stone accent and warm white lights", category: "Warm White", title: "Contemporary Stone Accent" },
  { id: 36, src: homeImg5, alt: "Large estate with professional Christmas light installation", category: "Warm White", title: "Large Estate Installation" },
  { id: 37, src: homeImg6, alt: "Modern gable design with warm white Christmas lights", category: "Warm White", title: "Modern Gable Design" },
  { id: 38, src: purpleHalloweenHouse, alt: "Spectacular purple Halloween lighting display with yard decorations", category: "Halloween", title: "Purple Halloween Spectacular" },
  { id: 39, src: redBlueHalloween, alt: "Bold red and blue Halloween lighting display with dramatic roofline coverage", category: "Halloween", title: "Red and Blue Halloween Display" },
  { id: 40, src: redColumnAccentHome, alt: "Warm white roofline with red column accents and tree lighting", category: "Custom", title: "Red Column Accent Display" },
  { id: 41, src: landscapeLightingHome, alt: "Warm white roofline with custom landscape lighting and red and white shrub wraps", category: "Custom", title: "Landscape Accent Lighting" },
  { id: 42, src: modernHomeWithDeer, alt: "Modern home with warm white roofline, entryway accents, planters with lights, and decorative deer", category: "Custom", title: "Modern Holiday Elegance" }
];

export default function GalleryPage() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const videoSchemas = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        "name": "Spectacular Halloween Light Installation in Bellevue WA",
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
        "name": "Massive Tree Christmas Light Installation in Woodinville WA",
        "description": "Professional Christmas tree lighting installation in Woodinville, Washington. Watch as we transform a massive tree with thousands of commercial-grade lights creating a stunning holiday centerpiece.",
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
        "description": "Another spectacular Halloween lighting installation in the Greater Seattle area. Watch our team create an amazing spooky display with professional-grade outdoor lights.",
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
        "name": "Vibrant Multicolor Christmas Light Installation in Issaquah WA",
        "description": "Watch a complete multicolor Christmas light installation in Issaquah, Washington. See how we create a festive, vibrant holiday display with commercial-grade multicolor C9 bulbs.",
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
        title="Christmas Light Installation Gallery 2025 | Seattle, Bellevue, Bothell | ChristmasNW"
        description="View our portfolio of professional Christmas light installations across Greater Seattle. See completed projects in Bellevue, Bothell, Kirkland, Redmond, and Kenmore. Watch installation videos and get inspired for your 2025 holiday display."
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Our Work</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Installation Gallery
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our collection of beautiful holiday lighting installations. Every home tells a story, and we're proud to showcase the magic we've created for families across Greater Seattle.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="px-6 py-2 cursor-pointer text-sm font-semibold"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`badge-gallery-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <Card 
                  key={image.id} 
                  className="group overflow-hidden hover-elevate cursor-pointer"
                  onClick={() => openLightbox(index)}
                  data-testid={`card-gallery-${image.id}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Watermark */}
                    <div 
                      className="absolute bottom-2 right-2 px-3 py-1 pointer-events-none z-10"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '0.375rem'
                      }}
                    >
                      <p className="text-white text-xs font-semibold tracking-wide">
                        ChristmasNW.com
                      </p>
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
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Watch Our Work</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
                See Complete Install Walk-Throughs
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Watch real installations from start to finish. See the quality, craftsmanship, and care we bring to every project across Greater Seattle.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Halloween Install - Bellevue */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-halloween-bellevue">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/qcnKBhSJQW4"
                    title="Halloween Lighting Installation in Bellevue WA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-halloween-bellevue">
                  <h3 className="font-semibold text-foreground mb-1">Spectacular Halloween Display</h3>
                  <p className="text-sm text-muted-foreground">Bellevue, WA</p>
                </div>
              </div>

              {/* Tree Lighting - Woodinville */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-tree-woodinville">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/kyQ0PU9XDIk"
                    title="Tree Lighting Installation in Woodinville WA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-tree-woodinville">
                  <h3 className="font-semibold text-foreground mb-1">Massive Tree Installation</h3>
                  <p className="text-sm text-muted-foreground">Woodinville, WA</p>
                </div>
              </div>

              {/* Permanent Lighting Demo - Redmond */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-permanent-redmond">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/f7vQhLxL9B8"
                    title="Permanent Lighting Demo in Redmond WA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-permanent-redmond">
                  <h3 className="font-semibold text-foreground mb-1">Permanent Lighting Demo</h3>
                  <p className="text-sm text-muted-foreground">Redmond, WA</p>
                </div>
              </div>

              {/* Permanent Lighting Install */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-permanent-install">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/ozZItKmCPKE"
                    title="Permanent Lighting Installation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-permanent-install">
                  <h3 className="font-semibold text-foreground mb-1">Year-Round Permanent Lights</h3>
                  <p className="text-sm text-muted-foreground">Greater Seattle Area</p>
                </div>
              </div>

              {/* Halloween Install 2 */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-halloween-2">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/fkd4TWuDYa4"
                    title="Halloween Lighting Installation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-halloween-2">
                  <h3 className="font-semibold text-foreground mb-1">Halloween Light Display</h3>
                  <p className="text-sm text-muted-foreground">Greater Seattle Area</p>
                </div>
              </div>

              {/* Multicolor Install - Issaquah */}
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-background" data-testid="card-video-multicolor-issaquah">
                <div className="aspect-[9/16] relative">
                  <iframe
                    src="https://www.youtube.com/embed/mfZ_QQIDusE"
                    title="Multicolor Christmas Lighting Installation in Issaquah WA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4 text-center" data-testid="caption-video-multicolor-issaquah">
                  <h3 className="font-semibold text-foreground mb-1">Vibrant Multicolor Display</h3>
                  <p className="text-sm text-muted-foreground">Issaquah, WA</p>
                </div>
              </div>
            </div>

            {/* Channel CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Want to see more? Check out our YouTube channel for additional videos and behind-the-scenes content.
              </p>
              <Button 
                variant="outline"
                className="font-semibold"
                onClick={() => window.open('https://youtube.com/@christmasnw?si=N5gu7fRN9vyEFMUd', '_blank')}
                data-testid="button-youtube-channel"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Visit Our YouTube Channel
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's create a beautiful holiday display for your home. Get your free quote today and join the hundreds of satisfied homeowners we serve every season.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={scrollToQuote}
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 font-semibold border-2 border-primary-foreground/20"
                data-testid="button-gallery-cta-quote"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground/50 hover:bg-primary-foreground/10 font-semibold"
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

          <div className="max-w-6xl max-h-[90vh] p-4 pointer-events-none relative">
            <img 
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain"
              data-testid="img-lightbox"
            />
            {/* Watermark in lightbox */}
            <div 
              className="absolute bottom-20 right-8 px-4 py-2"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '0.375rem'
              }}
            >
              <p className="text-white text-sm font-semibold tracking-wide">
                ChristmasNW.com
              </p>
            </div>
            <div className="text-center mt-4 pointer-events-auto">
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
