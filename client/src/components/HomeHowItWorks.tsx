import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// Plain facts only. They match the FAQ and pricing page, so keep them in sync.
export default function HomeHowItWorks() {
  return (
    <section className="home-how border-b border-border py-11 md:py-[72px]" aria-labelledby="home-how-heading">
      <div className="home-container">
        <div className="home-section-heading">
          <h2 id="home-how-heading">Our Christmas light hanging service.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <h3 className="text-lg font-semibold text-foreground">What we hang</h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Rooflines, trees, bushes, columns and wreaths, in warm white or any color. The lights are included.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">How it works</h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Fill out the form. We quote most homes from photos, so you don't need to be home. If a light goes out we fix it free, and takedown is included.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Where we work</h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              Seattle, Bellevue, Kirkland, Redmond, Woodinville, Bothell, Kenmore and the rest of the Eastside.
            </p>
            <Link href="/service-areas" className="home-text-link" data-testid="link-home-areas">
              See service areas <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
