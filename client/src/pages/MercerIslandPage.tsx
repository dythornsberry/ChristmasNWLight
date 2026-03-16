import CityPage from "./CityPage";

export default function MercerIslandPage() {
  return (
    <CityPage
      cityName="Mercer Island"
      citySlug="mercer-island"
      zipCode="98040"
      county="King"
      latitude="47.5707"
      longitude="-122.2221"
      neighborhoods={[
        "Town Center",
        "East Seattle",
        "First Hill",
        "North Mercer",
        "South Mercer",
        "East Mercer"
      ]}
      nearbyLandmarks={[
        "Luther Burbank Park",
        "Mercer Island Community Center",
        "Pioneer Park",
        "Clarke Beach"
      ]}
      localContent={{
        intro: "Mercer Island is one of the most exclusive communities in the Greater Seattle area, and the homes here reflect it. Surrounded by Lake Washington and accessible via I-90, the island has a unique character -- quiet, residential, and private. Properties range from classic mid-century homes to multi-million dollar waterfront estates, and homeowners expect a level of service and quality that matches their properties. We have installed on Mercer Island for several seasons and are familiar with the access logistics, ferry schedules for equipment, and the high-end design expectations that come with working on the island.",
        lightingStyles: "Mercer Island homeowners overwhelmingly prefer warm white lighting with clean, sophisticated execution. Estate homes along the waterfront often request full-coverage displays including rooflines, wrapped trees, landscape lighting, pathway illumination, and accent features on docks or boat houses. North Mercer properties near Luther Burbank Park tend toward classic roofline packages with refined details. Town Center homes closer to the commercial area request modern accent lighting that complements their updated architecture. Multi-level lakefront homes are some of the most complex installations we do -- but also some of the most visually striking results.",
        neighborhoodHighlights: "North Mercer near Luther Burbank Park features waterfront properties with dock access and mature landscaping that looks incredible with professional lighting. The Town Center area has a mix of older and updated homes where walkable streets create a festive neighborhood atmosphere. First Hill has some of the island's largest estates with expansive rooflines and multiple structures. East Mercer and South Mercer have private, wooded lots where tree uplighting and accent features create an intimate holiday setting. Homes along the eastern shore have sunset views that pair beautifully with warm white displays as the light fades each evening."
      }}
    />
  );
}
