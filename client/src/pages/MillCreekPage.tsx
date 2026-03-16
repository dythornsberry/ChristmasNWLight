import CityPage from "./CityPage";

export default function MillCreekPage() {
  return (
    <CityPage
      cityName="Mill Creek"
      citySlug="mill-creek"
      zipCode="98012"
      county="Snohomish"
      latitude="47.8601"
      longitude="-122.2043"
      neighborhoods={[
        "Town Center",
        "Country Club Estates",
        "Highlands",
        "Silver Creek",
        "Village Green"
      ]}
      nearbyLandmarks={[
        "Mill Creek Town Center",
        "North Creek Trail",
        "Mill Creek Sports Park",
        "Heatherwood Park"
      ]}
      localContent={{
        intro: "Mill Creek is a master-planned community in Snohomish County known for its well-maintained neighborhoods, walking trails, and family-friendly atmosphere. The community was designed with aesthetics in mind, and homeowners here care about how their properties look -- which extends to holiday lighting. Mill Creek's HOA guidelines tend to be reasonable about holiday displays, and the consistent architecture within each neighborhood means professional lighting creates a cohesive, polished look. We serve Mill Creek regularly and appreciate the community's emphasis on quality and curb appeal.",
        lightingStyles: "Mill Creek homes are predominantly newer construction with clean architectural lines. Warm white C9 roofline lighting is the most popular choice, creating a unified look along Mill Creek's well-planned streets. Country Club Estates has larger homes with more complex rooflines that benefit from multi-element displays including wrapped entry columns, lit bushes, and accent features. The Highlands and Silver Creek neighborhoods feature family homes where full-coverage packages with rooflines and bushes are the standard request. Village Green homes near the Town Center are visible to a lot of foot traffic, making professional lighting a worthwhile investment.",
        neighborhoodHighlights: "Country Club Estates is Mill Creek's premier neighborhood, with larger homes on spacious lots that allow for comprehensive lighting displays including tree wraps, landscape lighting, and custom features. The Town Center area is the community hub -- homes near Mill Creek Town Center benefit from high visibility and foot traffic. Highlands sits at a higher elevation within the community, and the larger homes there are some of our most popular projects. Silver Creek has a mix of single-family homes with great curb appeal. The North Creek Trail connects several neighborhoods, and homes along the trail corridor benefit from displays enjoyed by walkers and runners throughout the holiday season."
      }}
    />
  );
}
