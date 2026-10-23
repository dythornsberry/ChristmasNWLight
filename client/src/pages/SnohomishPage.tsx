import CityPage from "./CityPage";

export default function SnohomishPage() {
  return (
    <CityPage
      cityName="Snohomish"
      citySlug="snohomish"
      zipCode="98290"
      county="Snohomish"
      latitude="47.9129"
      longitude="-122.0982"
      installCount="25+"
      averageInstall="$1,400"
      neighborhoods={[
        "Downtown Snohomish",
        "Clearview",
        "Maltby",
        "Cathcart",
        "Three Lakes",
        "Seattle Hill",
        "Machias"
      ]}
    />
  );
}
