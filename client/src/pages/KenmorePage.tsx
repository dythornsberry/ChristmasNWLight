import CityPage from "./CityPage";

export default function KenmorePage() {
  return (
    <CityPage
      cityName="Kenmore"
      citySlug="kenmore"
      zipCode="98028"
      county="King"
      latitude="47.7573"
      longitude="-122.2443"
      neighborhoods={[
        "Downtown Kenmore",
        "Inglewood",
        "Moorlands",
        "Kenmore Highlands",
        "Northshore",
        "Log Boom Park Area",
        "St. Edward Park Area"
      ]}
      nearbyLandmarks={[
        "Log Boom Park",
        "St. Edward State Park",
        "Kenmore Air Harbor",
        "Burke-Gilman Trail"
      ]}
      localContent={{
        intro: "Kenmore is our home base -- this is where Christmas Northwest was founded and where we still live and operate. We know the streets, the neighborhoods, and the homeowners better than anywhere else. Kenmore sits at the north end of Lake Washington, and the mix of lakefront properties, hillside homes with views, and quiet residential streets means every project has its own character. Our response time in Kenmore is the fastest in our service area because we are literally minutes away. If a bulb goes out or a timer needs adjusting, we can be there the same day.",
        lightingStyles: "Kenmore homeowners tend to favor warm white roofline lighting that complements the natural lakeside setting. Properties near Log Boom Park and along the Burke-Gilman Trail often add wrapped trees and bush lighting to create a warm glow visible to trail users and neighbors. Kenmore Highlands and Inglewood have homes with elevation and mature landscaping -- tree uplighting and accent features work well in these areas. The Moorlands neighborhood features mid-century ramblers and split-levels that look sharp with clean C9 roofline lighting and wrapped entry columns.",
        neighborhoodHighlights: "Downtown Kenmore near the Kenmore Air Harbor has seen a lot of new development, and the modern townhomes and condos in this area are great candidates for clean, efficient roofline packages. Inglewood is a hillside neighborhood with larger lots, mature trees, and homes that benefit from full-coverage displays. Kenmore Highlands has some of the best views in the city, and lighting displays on these elevated homes are visible from blocks away. The Northshore area and properties near St. Edward State Park have a wooded, secluded feel where landscape lighting and tree wraps create a cozy, inviting atmosphere. Log Boom Park area homes along the lake are some of our favorite projects."
      }}
    />
  );
}
