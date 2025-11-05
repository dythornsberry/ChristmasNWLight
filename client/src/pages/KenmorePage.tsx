import CityPage from "./CityPage";

export default function KenmorePage() {
  return (
    <CityPage
      cityName="Kenmore"
      citySlug="kenmore"
      zipCode="98028"
      county="King"
      latitude="47.7573"
      longitude="-122.2443"
      neighborhoods={[
        "Downtown Kenmore",
        "Inglewood",
        "Moorlands",
        "Kenmore Highlands",
        "Northshore",
        "Log Boom Park Area",
        "St. Edward Park Area"
      ]}
      nearbyLandmarks={[
        "Log Boom Park",
        "St. Edward State Park",
        "Kenmore Air Harbor",
        "Burke-Gilman Trail"
      ]}
    />
  );
}
