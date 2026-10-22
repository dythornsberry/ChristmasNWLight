import { Link } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ramPhoto from "@assets/optimized/christmas-northwest-ram-1600.webp";
import ramPhotoSmall from "@assets/optimized/christmas-northwest-ram-800.webp";
import { FIRST_SEASON_YEAR } from "@/lib/business";

export default function HomeTeam() {
  return (
    <section className="home-team" aria-labelledby="home-team-title">
      <div className="home-container home-team-layout">
        <img
          src={ramPhoto}
          srcSet={`${ramPhotoSmall} 800w, ${ramPhoto} 1600w`}
          sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, calc(100vw - 40px)"
          alt="Christmas Northwest's wrapped Ram 1500 at a home with warm-white roofline lights"
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
          data-testid="img-home-ram"
        />
        <div>
          <p className="home-eyebrow">Based here. Lighting homes here.</p>
          <h2 id="home-team-title">Meet Christmas Northwest.</h2>
          <p>I'm Dylan. My crew and I have been lighting homes around Seattle and the Eastside since {FIRST_SEASON_YEAR}. If a light goes out, text us and we'll fix it.</p>
          <p className="home-team-credential"><ShieldCheck aria-hidden="true" /> Licensed, bonded &amp; insured</p>
          <Link href="/about" className="home-text-link" data-testid="link-home-team">Meet our team <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
