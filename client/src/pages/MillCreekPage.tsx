import CityPage from "./CityPage";

export default function MillCreekPage() {
  return (
    <CityPage
      cityName="Mill Creek"
      citySlug="mill-creek"
      zipCode="98012"
      county="Snohomish"
      latitude="47.8601"
      longitude="-122.2043"
      neighborhoods={[
        "Town Center",
        "Country Club Estates",
        "Highlands",
        "Silver Creek",
        "Village Green"
      ]}
      nearbyLandmarks={[
        "Mill Creek Town Center",
        "North Creek Trail",
        "Mill Creek Sports Park",
        "Heatherwood Park"
      ]}
    />
  );
}
