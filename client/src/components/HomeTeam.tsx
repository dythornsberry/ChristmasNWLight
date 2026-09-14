import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import fleetPhoto from "@assets/IMG_9313_optimized.jpeg";
import { FIRST_SEASON_YEAR } from "@/lib/business";

export default function HomeTeam() {
  return (
    <section className="home-team" aria-labelledby="home-team-title">
      <div className="home-container home-team-layout">
        <img src={fleetPhoto} alt="Christmas Northwest trucks at our Woodinville warehouse" width={1200} height={900} loading="lazy" decoding="async" />
        <div>
          <p className="home-eyebrow">Based here. Lighting homes here.</p>
          <h2 id="home-team-title">Meet Christmas Northwest.</h2>
          <p>We're Dylan and the Christmas Northwest team, lighting homes across Greater Seattle since {FIRST_SEASON_YEAR}. From the first installation to takedown, you know who to call.</p>
          <p className="home-team-credential"><ShieldCheck aria-hidden="true" /> Licensed, bonded &amp; insured</p>
          <Link href="/about" className="home-text-link" data-testid="link-home-team">Meet our team <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
