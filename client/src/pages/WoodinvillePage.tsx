import CityPage from "./CityPage";

export default function WoodinvillePage() {
  return (
    <CityPage
      cityName="Woodinville"
      citySlug="woodinville"
      zipCode="98072"
      county="King"
      latitude="47.7543"
      longitude="-122.1637"
      videoId="tree-woodinville"
      neighborhoods={[
        "Hollywood Hill",
        "Wellington",
        "Northshore",
        "Cottage Lake",
        "Westwood",
        "Sunrise",
        "Maplewood",
        "Woodinville Village"
      ]}
    />
  );
}
