import CityPage from "./CityPage";

export default function IssaquahPage() {
  return (
    <CityPage
      cityName="Issaquah"
      citySlug="issaquah"
      zipCode="98027"
      county="King"
      latitude="47.5301"
      longitude="-122.0326"
      neighborhoods={[
        "Olde Town",
        "Issaquah Highlands",
        "Talus",
        "Sycamore",
        "Providence Point",
        "Sunset",
        "Squak Mountain",
        "Grand Ridge"
      ]}
      nearbyLandmarks={[
        "Gilman Village",
        "Lake Sammamish",
        "Cougar Mountain Zoo",
        "Issaquah Salmon Hatchery"
      ]}
      localContent={{
        intro: "Issaquah sits in a valley surrounded by Tiger, Squak, and Cougar mountains, and the natural beauty of the area makes holiday lighting displays stand out against a dramatic Pacific Northwest backdrop. From the charming Olde Town district to the modern Issaquah Highlands community perched above the valley, homeowners here take pride in their properties. We serve all Issaquah neighborhoods and have experience with the unique installation challenges that come with mountain-adjacent properties -- steep driveways, tall trees, and varied roof styles. Issaquah is also home to Gilman Village, one of the area's most popular shopping destinations, and the homes surrounding it set a festive tone each holiday season.",
        lightingStyles: "Issaquah Highlands is a master-planned community with modern homes that look sharp with warm white roofline lighting and clean accent features. The architectural consistency means a well-done display blends in beautifully with the community's aesthetic. Olde Town Issaquah has older craftsman and bungalow-style homes where classic multicolor or warm white C9 lighting creates a nostalgic holiday feel. Talus and Sycamore are hillside communities where elevated homes benefit from displays that are visible from I-90 and the valley below. Providence Point is a 55+ community where elegant, understated lighting is the standard.",
        neighborhoodHighlights: "Issaquah Highlands sits at the top of the plateau and homes there have views of the Cascades and valley floor -- lighting on these elevated properties creates a dramatic effect visible from miles away. Olde Town is Issaquah's historic core, and homes here have unique character that calls for thoughtful, custom installations. Talus and Grand Ridge are newer developments with larger homes and steep terrain that benefits from professional installation with proper safety equipment. Squak Mountain properties have wooded lots with tall trees perfect for wrapping projects. Sunset is a family neighborhood where classic full-coverage roofline packages are the go-to choice."
      }}
    />
  );
}
