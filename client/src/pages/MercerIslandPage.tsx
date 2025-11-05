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
    />
  );
}
