import { useEffect } from "react";

const ELFSIGHT_SCRIPT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_APP_CLASS = "elfsight-app-e457d514-0aa4-432f-ae7d-750ec1ad470b";

export default function ReviewsStrip() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${ELFSIGHT_SCRIPT_SRC}"]`,
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.async = true;
    script.dataset.elfsight = "google-reviews";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={ELFSIGHT_APP_CLASS}
          data-elfsight-app-lazy
          data-testid="home-google-reviews-widget"
        />
      </div>
    </section>
  );
}
