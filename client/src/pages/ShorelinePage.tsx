import CityPage from "./CityPage";

export default function ShorelinePage() {
  return (
    <CityPage
      cityName="Shoreline"
      citySlug="shoreline"
      zipCode="98133"
      county="King"
      latitude="47.7557"
      longitude="-122.3415"
      neighborhoods={[
        "Richmond Beach",
        "Ridgecrest",
        "Ballinger",
        "Parkwood",
        "Highlands",
        "Echo Lake",
        "Westminster Triangle"
      ]}
      nearbyLandmarks={[
        "Richmond Beach Saltwater Park",
        "Shoreline Community College",
        "Hamlin Park",
        "Boeing Creek Park"
      ]}
      localContent={{
        intro: "Shoreline sits just north of Seattle's city limits, bordering both Puget Sound to the west and Lake Forest Park to the east. The city has a mix of classic mid-century ramblers, split-levels, and newer infill construction that reflects its transition from a suburban commuter community into a growing city with its own identity. Shoreline homeowners are practical and value-conscious -- they want professional results without unnecessary upselling. We have installed on streets throughout Shoreline and understand the common roof styles, lot sizes, and the neighborhood feel that makes each area distinct.",
        lightingStyles: "Richmond Beach homes along the Puget Sound have larger lots and varied architecture that benefit from custom roofline packages with accent features. Ridgecrest and Highlands neighborhoods feature classic mid-century homes where warm white or traditional multicolor C9 lighting looks right at home. Ballinger homes near the lake tend toward warmer, inviting displays that complement the waterside setting. Echo Lake and Parkwood are residential neighborhoods where standard roofline packages are the most common request. The new light rail station area has brought modern townhomes and condos that look great with clean, minimal accent lighting.",
        neighborhoodHighlights: "Richmond Beach is Shoreline's premium neighborhood -- the Puget Sound views, larger lots, and unique architecture make for impressive lighting displays. Ridgecrest and the Highlands area have well-kept mid-century homes on quiet streets where coordinated neighborhood lighting looks fantastic. Ballinger is a lakeside community near the Snohomish County border where warm lighting creates a cozy holiday atmosphere. Echo Lake and Parkwood are great family neighborhoods for full-coverage residential packages. The Westminster Triangle area near Aurora is seeing new development, and the modern homes there are perfect for contemporary lighting styles."
      }}
    />
  );
}
