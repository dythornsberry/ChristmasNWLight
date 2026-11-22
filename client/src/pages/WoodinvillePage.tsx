import CityPage from "./CityPage";

export default function WoodinvillePage() {
  return (
    <CityPage
      cityName="Woodinville"
      citySlug="woodinville"
      note="Our warehouse is in Woodinville, and we light homes around Bear Creek."
      zipCode="98072"
      county="King"
      latitude="47.7543"
      longitude="-122.1637"
      videoId="columns-woodinville"
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
