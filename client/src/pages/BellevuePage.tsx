import CityPage from "./CityPage";

export default function BellevuePage() {
  return (
    <CityPage
      cityName="Bellevue"
      citySlug="bellevue"
      note="We light homes all over Bellevue, including a handful in Somerset."
      zipCode="98004"
      county="King"
      latitude="47.6101"
      longitude="-122.2015"
      videoId="bellevue-red-and-white"
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
    />
  );
}
