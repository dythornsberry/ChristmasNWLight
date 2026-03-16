import CityPage from "./CityPage";

export default function BellevuePage() {
  return (
    <CityPage
      cityName="Bellevue"
      citySlug="bellevue"
      zipCode="98004"
      county="King"
      latitude="47.6101"
      longitude="-122.2015"
      neighborhoods={[
        "Downtown Bellevue",
        "Crossroads",
        "Eastgate",
        "Factoria",
        "Lake Hills",
        "Newport Hills",
        "Wilburton",
        "West Bellevue",
        "Bridle Trails",
        "Somerset",
        "Enatai",
        "Clyde Hill"
      ]}
      nearbyLandmarks={[
        "Bellevue Square",
        "Meydenbauer Bay Park",
        "Downtown Park",
        "Bellevue Botanical Garden"
      ]}
      localContent={{
        intro: "Bellevue is one of the most popular markets we serve, and for good reason. The mix of established estates in West Bellevue, modern builds near the Spring District, and classic homes along the Bridle Trails corridor means every project is different. Bellevue homeowners tend to prefer clean, polished displays that complement their architecture rather than overpower it. We have installed hundreds of homes across all Bellevue neighborhoods and understand the HOA requirements, access challenges with steep driveways, and the high standards residents expect.",
        lightingStyles: "Warm white roofline installations dominate in Bellevue, especially in Somerset, Enatai, and Clyde Hill where large homes with multiple roofline peaks make for dramatic displays. Residents near Downtown Bellevue and the Bel-Red corridor often request modern accent lighting with clean lines. Custom color combinations -- warm white rooflines paired with red or green column accents -- are popular on homes with architectural details like stone columns or covered entries. Tree wrapping is common in neighborhoods with mature landscaping, particularly along 108th Avenue and around Meydenbauer Bay.",
        neighborhoodHighlights: "In Bridle Trails, we frequently work on properties with long driveways and tall trees that benefit from uplighting and trunk wraps. West Bellevue and Vuecrest homes near the waterfront often have expansive rooflines with lake-facing displays that look incredible from the road and the water. Lake Hills and Crossroads are great neighborhoods for full-coverage roofline packages, and Eastgate and Factoria homeowners often bundle gutter cleaning with their light takedown in January. Somerset residents love estate-style displays with multiple wrapped trees, ground lighting, and coordinated color themes."
      }}
    />
  );
}
