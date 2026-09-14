import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  image: string;
  category: string;
  title: string;
}

export default function Portfolio({ items }: { items: PortfolioItem[] }) {
  return (
    <section id="portfolio" className="home-portfolio">
      <div className="home-container">
        <div className="home-section-heading">
          <div>
            <h2>See the difference.</h2>
            <p>Our installations. Warm white is our most popular choice.</p>
          </div>
          <Link href="/gallery" className="home-text-link" data-testid="button-view-gallery">
            View gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="home-portfolio-grid">
          {items.slice(0, 3).map((item) => (
            <Link key={item.id} href="/gallery" className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" data-testid={`card-portfolio-${item.id}`}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]" width={720} height={540} loading="lazy" decoding="async" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
