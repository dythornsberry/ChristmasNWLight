import CityPage from "./CityPage";

export default function EdmondsPage() {
  return (
    <CityPage
      cityName="Edmonds"
      citySlug="edmonds"
      zipCode="98020"
      county="Snohomish"
      latitude="47.8107"
      longitude="-122.3774"
      installCount="30"
      averageInstall="$1,450"
      neighborhoods={[
        "Downtown Edmonds",
        "Perrinville",
        "Seaview",
        "Westgate",
        "Esperance",
        "Meadowdale",
        "Five Corners"
      ]}
    />
  );
}
