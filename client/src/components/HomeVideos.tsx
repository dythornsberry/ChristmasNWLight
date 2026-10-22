import { ArrowRight } from "lucide-react";
import VideoShowcaseCard, { VIDEO_SHOWCASE_ITEMS } from "@/components/VideoShowcase";
import { YOUTUBE_URL } from "@/lib/business";

export default function HomeVideos() {
  return (
    <section className="home-videos" aria-labelledby="home-videos-heading">
      <div className="home-container">
        <div className="home-section-heading">
          <div>
            <h2 id="home-videos-heading">See it in person.</h2>
            <p>Real installs around Seattle and the Eastside.</p>
          </div>
          <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="home-text-link" data-testid="link-home-youtube">
            More on YouTube <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="home-videos-grid">
          {VIDEO_SHOWCASE_ITEMS.slice(0, 3).map((item) => (
            <VideoShowcaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
