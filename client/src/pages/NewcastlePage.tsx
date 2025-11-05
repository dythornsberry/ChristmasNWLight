import CityPage from "./CityPage";

export default function NewcastlePage() {
  return (
    <CityPage
      cityName="Newcastle"
      citySlug="newcastle"
      zipCode="98056"
      county="King"
      latitude="47.5340"
      longitude="-122.1651"
      neighborhoods={[
        "Newcastle Beach",
        "Sunset",
        "May Valley",
        "Coal Creek",
        "China Creek",
        "Lake Boren"
      ]}
      nearbyLandmarks={[
        "Newcastle Beach Park",
        "Coal Creek Falls",
        "Lake Boren Park",
        "Cougar Mountain Regional Park"
      ]}
    />
  );
}
