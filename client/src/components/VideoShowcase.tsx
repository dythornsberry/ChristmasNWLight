import { useState } from "react";
import { Play, Youtube } from "lucide-react";

export interface VideoShowcaseItem {
  id: string;
  title: string;
  location: string;
  description: string;
  youtubeId: string;
  uploadDate: string;
}

// Shared by the homepage and gallery. The YouTube iframe only loads after a click.
export const VIDEO_SHOWCASE_ITEMS: VideoShowcaseItem[] = [
  {
    id: "newcastle-warm-white",
    title: "Warm White Roofline",
    location: "Newcastle, WA",
    description: "A clean warm white roofline install, start to finish.",
    youtubeId: "AUn5oqnHJ_0",
    uploadDate: "2026-10-21T22:25:13-07:00",
  },
  {
    id: "yarrow-point-warm-white",
    title: "Warm White Home",
    location: "Yarrow Point, WA",
    description: "Warm white rooflines on a Yarrow Point home.",
    youtubeId: "5R1g4qEUPzo",
    uploadDate: "2026-10-21T22:21:01-07:00",
  },
  {
    id: "tree-woodinville",
    title: "Big Tree Installation",
    location: "Woodinville, WA",
    description: "Lights placed evenly across a large feature tree.",
    youtubeId: "kyQ0PU9XDIk",
    uploadDate: "2025-11-04T12:00:00-08:00",
  },
  {
    id: "multicolor-issaquah",
    title: "Multicolor Display",
    location: "Issaquah, WA",
    description: "A full multicolor roofline and tree for a bold look.",
    youtubeId: "mfZ_QQIDusE",
    uploadDate: "2022-12-18T12:00:00-08:00",
  },
  {
    id: "halloween-bellevue",
    title: "Halloween Display",
    location: "Bellevue, WA",
    description: "A big Halloween install we did in Bellevue.",
    youtubeId: "qcnKBhSJQW4",
    uploadDate: "2025-11-04T12:00:00-08:00",
  },
];

export const videoObjectSchema = (item: VideoShowcaseItem) => ({
  "@type": "VideoObject",
  name: `${item.title}, ${item.location}`,
  description: item.description,
  thumbnailUrl: `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`,
  uploadDate: item.uploadDate,
  contentUrl: `https://www.youtube.com/watch?v=${item.youtubeId}`,
  embedUrl: `https://www.youtube.com/embed/${item.youtubeId}`,
  publisher: {
    "@type": "Organization",
    name: "Christmas Northwest",
    logo: { "@type": "ImageObject", url: "https://christmasnw.com/logo.png" },
  },
});

export default function VideoShowcaseCard({ item }: { item: VideoShowcaseItem }) {
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
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width={480}
              height={360}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              <Youtube className="h-4 w-4" />
              <span>YouTube</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-5 py-3 text-base font-semibold text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
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
