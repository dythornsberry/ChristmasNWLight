import CityPage from "./CityPage";

export default function WoodinvillePage() {
  return (
    <CityPage
      cityName="Woodinville"
      citySlug="woodinville"
      zipCode="98072"
      county="King"
      latitude="47.7543"
      longitude="-122.1637"
      neighborhoods={[
        "Hollywood Hill",
        "Wellington",
        "Northshore",
        "Cottage Lake",
        "Westwood",
        "Sunrise",
        "Maplewood",
        "Woodinville Village"
      ]}
      nearbyLandmarks={[
        "Chateau Ste. Michelle Winery",
        "Columbia Winery",
        "Wilmot Gateway Park",
        "Woodinville Wine Country"
      ]}
      localContent={{
        intro: "Woodinville sits at the intersection of wine country and suburban family living, and the homes here reflect that mix. From the estates on Hollywood Hill with sweeping valley views to the newer developments in Wellington and Maplewood, Woodinville homeowners invest in their properties and want lighting displays that reflect that investment. Our warehouse is located in Woodinville, so we know these streets better than any other market -- it is literally our home turf. The proximity means fast response times for maintenance calls and same-day service when bulbs need replacing during the season.",
        lightingStyles: "Hollywood Hill estates are some of our most impressive projects. These larger properties with long driveways, multiple outbuildings, and mature landscaping call for estate-level displays with wrapped trees, ground lighting, column accents, and coordinated roofline coverage. Wellington and Northshore subdivisions are popular for clean warm white roofline packages that give the neighborhood a unified holiday feel. Cottage Lake homeowners often have larger lots with tall trees that make for dramatic wrapping projects. Wine country properties near Chateau Ste. Michelle sometimes request lighting for special events and private gatherings in addition to holiday displays.",
        neighborhoodHighlights: "Hollywood Hill is where we do some of our biggest installations -- properties with 200+ feet of roofline, multiple trees, and custom features like lit entryway gates and pathway lighting. Wellington is a newer community where consistent warm white rooflines create a cohesive neighborhood look. Northshore and Sunrise are great family neighborhoods where we install a lot of residential packages with rooflines and wrapped bushes. Maplewood and Woodinville Village are walkable areas where neighbors appreciate coordinated displays. Cottage Lake properties with wooded lots benefit from tree uplighting that highlights the natural landscape."
      }}
    />
  );
}
