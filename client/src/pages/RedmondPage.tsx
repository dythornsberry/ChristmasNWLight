import CityPage from "./CityPage";

export default function RedmondPage() {
  return (
    <CityPage
      cityName="Redmond"
      citySlug="redmond"
      zipCode="98052"
      county="King"
      latitude="47.6740"
      longitude="-122.1215"
      neighborhoods={[
        "Downtown Redmond",
        "Overlake",
        "Education Hill",
        "Grass Lawn",
        "Idylwood",
        "North Redmond",
        "Redmond Ridge",
        "Bear Creek",
        "Trilogy",
        "Sammamish Valley"
      ]}
      nearbyLandmarks={[
        "Microsoft Campus",
        "Marymoor Park",
        "Redmond Town Center",
        "Sammamish River Trail"
      ]}
      localContent={{
        intro: "Redmond is one of the Eastside's largest cities, and the range of homes -- from compact townhomes near Overlake to sprawling properties on Education Hill and out toward Redmond Ridge -- keeps us busy every season. Redmond homeowners are tech-savvy and detail-oriented, which means they appreciate clean installations, smart timers, and energy-efficient LED products. We serve all of Redmond including the newer communities along Novelty Hill Road and the established neighborhoods closer to Marymoor Park. The Sammamish River Trail runs through Redmond, and homes near the trail benefit from displays that add to the community's holiday atmosphere.",
        lightingStyles: "Education Hill is one of our most popular Redmond neighborhoods for full-coverage displays. The larger homes with multiple roofline peaks, dormers, and attached garages look incredible with warm white C9 lighting and wrapped entry features. Overlake and Idylwood have a mix of older ranch homes and newer construction -- we adjust installation methods to match each home's style. Redmond Ridge and Trilogy are master-planned communities where consistent warm white rooflines create a unified look. North Redmond properties along Bear Creek tend to have larger lots with trees that are perfect for wrapping projects.",
        neighborhoodHighlights: "Education Hill is a standout Redmond neighborhood for holiday lighting -- the homes are large, well-maintained, and sit on streets where neighbors coordinate their displays. Downtown Redmond near the Town Center has charming older homes mixed with new development, making for interesting projects that blend classic and modern styles. Overlake is close to the Microsoft campus and has a mix of property types. Grass Lawn is a family neighborhood with great curb appeal potential. Redmond Ridge and Bear Creek are farther east but worth the drive -- these communities love full-service holiday lighting with everything included from design through storage."
      }}
    />
  );
}
