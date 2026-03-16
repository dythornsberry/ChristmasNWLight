import CityPage from "./CityPage";

export default function NewcastlePage() {
  return (
    <CityPage
      cityName="Newcastle"
      citySlug="newcastle"
      zipCode="98056"
      county="King"
      latitude="47.5340"
      longitude="-122.1651"
      neighborhoods={[
        "Newcastle Beach",
        "Sunset",
        "May Valley",
        "Coal Creek",
        "China Creek",
        "Lake Boren"
      ]}
      nearbyLandmarks={[
        "Newcastle Beach Park",
        "Coal Creek Falls",
        "Lake Boren Park",
        "Cougar Mountain Regional Park"
      ]}
      localContent={{
        intro: "Newcastle is a small, upscale community perched on the hillside between Bellevue and Renton, with many homes offering sweeping views of Lake Washington, the Seattle skyline, and the Olympic Mountains. The elevated position of most Newcastle homes means lighting displays are visible from a long distance, making professional installation especially worthwhile here. Newcastle homeowners value quality and craftsmanship -- the properties here are well-maintained, and residents expect their holiday lighting to meet that same standard. We have been installing in Newcastle for years and understand the terrain, steep driveways, and roofline complexity that comes with hillside construction.",
        lightingStyles: "Newcastle homes are predominantly larger custom builds with complex multi-level rooflines. Warm white C9 lighting along the roofline is the most popular choice, often with coordinated accent lighting on columns, entryways, and garages. The views from Newcastle mean many homeowners want their displays to look great not just from the street but also from the distance -- clean, consistent lighting is key. Lake Boren area homes near the water favor warm, inviting displays with wrapped trees and landscape lighting. Coal Creek corridor properties have wooded lots where tree uplighting creates a dramatic forest glow effect.",
        neighborhoodHighlights: "Newcastle Beach is an exclusive waterfront area where homes along Lake Washington command premium displays with estate-level coverage. The Sunset neighborhood sits at Newcastle's highest elevations with panoramic views -- displays here are visible from I-405 and across the lake. Coal Creek and China Creek are wooded neighborhoods where the natural setting pairs beautifully with warm lighting. Lake Boren properties have lakeside charm that benefits from coordinated roofline and landscape lighting. May Valley is a quieter area on Newcastle's eastern edge with larger lots and a rural feel where full-coverage packages with wrapped trees are popular."
      }}
    />
  );
}
