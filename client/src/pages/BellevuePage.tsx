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
        intro: "Bellevue includes established estates in West Bellevue, modern builds near the Spring District, and classic homes along the Bridle Trails corridor. That mix creates projects with very different rooflines, access needs, landscaping, and HOA requirements. We design each display around the property rather than forcing every home into the same layout.",
        lightingStyles: "Warm white roofline installations dominate in Bellevue, especially in Somerset, Enatai, and Clyde Hill where large homes with multiple roofline peaks make for dramatic displays. Residents near Downtown Bellevue and the Bel-Red corridor often request modern accent lighting with clean lines. Custom color combinations -- warm white rooflines paired with red or green column accents -- are popular on homes with architectural details like stone columns or covered entries. Tree wrapping is common in neighborhoods with mature landscaping, particularly along 108th Avenue and around Meydenbauer Bay.",
        neighborhoodHighlights: "In Bridle Trails, we frequently work on properties with long driveways and tall trees that benefit from uplighting and trunk wraps. West Bellevue and Vuecrest homes near the waterfront often have expansive rooflines with lake-facing displays that look incredible from the road and the water. Lake Hills and Crossroads are great neighborhoods for full-coverage roofline packages, and Eastgate and Factoria homes are a great fit for clean roofline lighting with professional takedown in January. Somerset residents love estate-style displays with multiple wrapped trees, ground lighting, and coordinated color themes."
      }}
    />
  );
}
