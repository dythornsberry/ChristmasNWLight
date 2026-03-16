import CityPage from "./CityPage";

export default function SammamishPage() {
  return (
    <CityPage
      cityName="Sammamish"
      citySlug="sammamish"
      zipCode="98074"
      county="King"
      latitude="47.6163"
      longitude="-122.0356"
      neighborhoods={[
        "Klahanie",
        "Pine Lake",
        "Beaver Lake",
        "Sahalee",
        "Timberline",
        "Trossachs",
        "Inglewood",
        "East Sammamish",
        "Plateau"
      ]}
      nearbyLandmarks={[
        "Lake Sammamish State Park",
        "Beaver Lake Park",
        "Pine Lake Park",
        "Sammamish Commons"
      ]}
      localContent={{
        intro: "Sammamish is a residential community on the plateau east of Lake Sammamish, known for its family-friendly neighborhoods, excellent schools, and larger lot sizes. The homes here tend to be newer construction from the 1990s onward, with many custom-built properties in communities like Klahanie, Sahalee, and Trossachs. Sammamish homeowners invest in their properties and expect a premium result -- clean lines, no visible wiring, and displays that look intentional rather than haphazard. We have worked on homes throughout Sammamish and understand the unique roofline styles, HOA guidelines, and the type of quality these neighborhoods demand.",
        lightingStyles: "Sammamish homes are typically larger two-story construction with complex rooflines, covered entries, and attached multi-car garages. Warm white C9 roofline lighting is the most requested style, often paired with wrapped bushes and entry accents. Sahalee and Trossachs have some of the largest properties in the area -- these estates call for multi-element displays with tree wrapping, pathway lighting, and custom features. Klahanie homeowners often request full-coverage packages that include rooflines, all visible bushes, and at least one wrapped tree. The Plateau area has newer homes where modern accent lighting styles complement the contemporary architecture.",
        neighborhoodHighlights: "Klahanie is our busiest Sammamish neighborhood -- the community is tight-knit, and when one homeowner gets a professional install, neighbors tend to follow. Sahalee is a golf course community with estate properties that have long driveways, mature trees, and architectural details that benefit from custom lighting designs. Pine Lake and Beaver Lake neighborhoods have a mix of older and newer homes near the water, where warm lighting creates a cozy lakeside atmosphere. Trossachs and Inglewood have larger custom homes with complex rooflines that showcase professional installation at its best. Timberline is a family neighborhood where standard roofline packages are the most popular request."
      }}
    />
  );
}
