import CityPage from "./CityPage";

export default function LakeForestParkPage() {
  return (
    <CityPage
      cityName="Lake Forest Park"
      citySlug="lake-forest-park"
      zipCode="98155"
      county="King"
      latitude="47.7565"
      longitude="-122.2807"
      neighborhoods={[
        "Town Center",
        "Sheridan Beach",
        "Lyon Creek",
        "Burke-Gilman",
        "McAleer Creek"
      ]}
      nearbyLandmarks={[
        "Third Place Commons",
        "Lyon Creek Park",
        "Pfingst Animal Acres Park",
        "Burke-Gilman Trail"
      ]}
      localContent={{
        intro: "Lake Forest Park is a small, tree-covered community at the north end of Lake Washington, right next door to our home base in Kenmore. The city is known for its lush, wooded lots, winding residential streets, and the Burke-Gilman Trail that runs through it. Homes in Lake Forest Park are surrounded by tall evergreens and deciduous trees, which creates both opportunities and challenges for holiday lighting. We know Lake Forest Park well and have installed on many of its streets -- the short drive from our Kenmore location means fast service and quick turnaround for any maintenance calls during the season.",
        lightingStyles: "Lake Forest Park homes are typically nestled among tall trees, which makes tree wrapping and uplighting popular additions to standard roofline packages. The wooded setting means warm white lighting works especially well -- it creates a welcoming glow through the trees without overwhelming the natural landscape. Sheridan Beach properties along Lake Washington have waterfront exposure that benefits from displays visible from the lake. The Town Center area near Third Place Commons has a walkable, community feel where holiday lighting adds to the neighborhood atmosphere. Many homes have steep driveways and elevated positions that create dramatic displays visible from the street.",
        neighborhoodHighlights: "Sheridan Beach is Lake Forest Park's lakefront neighborhood, with properties along the Burke-Gilman Trail and Lake Washington that create stunning displays reflected on the water. The Town Center area near Third Place Commons is the heart of the community, and homes here benefit from foot traffic and visibility. Lyon Creek runs through several neighborhoods, and properties along the creek corridor have lush landscaping perfect for accent lighting. McAleer Creek homes in the southern part of the city border Shoreline and have a similar mid-century residential character. Burke-Gilman Trail-adjacent properties are especially popular for lighting because the displays are enjoyed by hundreds of trail users daily."
      }}
    />
  );
}
