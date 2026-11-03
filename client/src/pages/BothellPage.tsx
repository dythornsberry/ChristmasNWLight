import CityPage from "./CityPage";

export default function BothellPage() {
  return (
    <CityPage
      cityName="Bothell"
      citySlug="bothell"
      zipCode="98011"
      county="King"
      latitude="47.7623"
      longitude="-122.2054"
      videoId="night-bothell"
      neighborhoods={[
        "Downtown Bothell",
        "Canyon Park",
        "Thrasher's Corner",
        "North Creek",
        "Queensborough",
        "Fitzgerald",
        "Wayne",
        "Maywood Hills"
      ]}
    />
  );
}
