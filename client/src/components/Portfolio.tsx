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
    <section id="portfolio" className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">A few homes we've lit.</h2>
          </div>
          <Link href="/gallery" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline" data-testid="button-view-gallery">
            View gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <Link key={item.id} href="/gallery" className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4" data-testid={`card-portfolio-${item.id}`}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]" width={720} height={540} loading="lazy" decoding="async" />
              </div>
              <h3 className="mt-4 text-base font-medium">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
