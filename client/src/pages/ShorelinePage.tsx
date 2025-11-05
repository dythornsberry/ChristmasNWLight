import CityPage from "./CityPage";

export default function ShorelinePage() {
  return (
    <CityPage
      cityName="Shoreline"
      citySlug="shoreline"
      zipCode="98133"
      county="King"
      latitude="47.7557"
      longitude="-122.3415"
      neighborhoods={[
        "Richmond Beach",
        "Ridgecrest",
        "Ballinger",
        "Parkwood",
        "Highlands",
        "Echo Lake",
        "Westminster Triangle"
      ]}
      nearbyLandmarks={[
        "Richmond Beach Saltwater Park",
        "Shoreline Community College",
        "Hamlin Park",
        "Boeing Creek Park"
      ]}
    />
  );
}
