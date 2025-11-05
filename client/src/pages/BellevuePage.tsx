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
    />
  );
}
