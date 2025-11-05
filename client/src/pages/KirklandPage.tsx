import CityPage from "./CityPage";

export default function KirklandPage() {
  return (
    <CityPage
      cityName="Kirkland"
      citySlug="kirkland"
      zipCode="98033"
      county="King"
      latitude="47.6815"
      longitude="-122.2087"
      neighborhoods={[
        "Downtown Kirkland",
        "Juanita",
        "Totem Lake",
        "Finn Hill",
        "Kingsgate",
        "Houghton",
        "Everest",
        "Norkirk",
        "Moss Bay",
        "Market Street"
      ]}
      nearbyLandmarks={[
        "Marina Park",
        "Juanita Beach Park",
        "Totem Lake Mall",
        "Kirkland Waterfront"
      ]}
    />
  );
}
