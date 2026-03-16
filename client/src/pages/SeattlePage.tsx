import CityPage from "./CityPage";

export default function SeattlePage() {
  return (
    <CityPage
      cityName="Seattle"
      citySlug="seattle"
      zipCode="98101"
      county="King"
      latitude="47.6062"
      longitude="-122.3321"
      neighborhoods={[
        "Queen Anne",
        "Capitol Hill",
        "Ballard",
        "Fremont",
        "Green Lake",
        "Wallingford",
        "Madison Park",
        "Laurelhurst",
        "Windermere",
        "Magnolia",
        "West Seattle",
        "Seward Park"
      ]}
      nearbyLandmarks={[
        "Space Needle",
        "Pike Place Market",
        "Green Lake Park",
        "Discovery Park"
      ]}
      localContent={{
        intro: "Seattle is a diverse city with neighborhoods ranging from dense urban streets to sprawling residential lots with waterfront views. We serve homeowners across Seattle's north end, including Green Lake, Laurelhurst, Windermere, Madison Park, Magnolia, and Queen Anne. The Pacific Northwest weather means installations need to handle wind, rain, and the occasional snow -- which is exactly why professional installation with commercial-grade clips and weather-resistant hardware matters more here than in drier climates. We know Seattle's mix of historic homes, mid-century ramblers, and modern builds, and we tailor every display to fit.",
        lightingStyles: "Seattle homeowners tend to lean toward warm white or classic multicolor depending on the neighborhood. Laurelhurst and Windermere properties along the lake often go with warm white displays that create a refined glow visible from Lake Washington. Queen Anne and Magnolia homes with steep rooflines and dramatic architecture benefit from accent lighting that highlights specific features rather than blanket coverage. Green Lake and Wallingford are popular for full roofline packages with wrapped trees and bushes. Ballard and Fremont are more eclectic -- we see creative requests for multicolor, themed colors, and unique custom work in those neighborhoods.",
        neighborhoodHighlights: "Laurelhurst and Madison Park are two of our most popular Seattle neighborhoods. The tree-lined streets and lakefront properties create a backdrop where professional lighting really shines. Queen Anne homes, especially on the south slope, have rooflines that are visible from across the city -- making a well-done display worth the investment. Green Lake is a family neighborhood where full-coverage packages are common. Magnolia homeowners love warm white displays along long driveways and mature landscaping. Seward Park and Capitol Hill round out our Seattle service area with a mix of traditional and modern homes."
      }}
    />
  );
}
