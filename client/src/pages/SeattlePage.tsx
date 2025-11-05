import CityPage from "./CityPage";

export default function SeattlePage() {
  return (
    <CityPage
      cityName="Seattle"
      citySlug="seattle"
      zipCode="98101"
      county="King"
      latitude="47.6062"
      longitude="-122.3321"
      neighborhoods={[
        "Queen Anne",
        "Capitol Hill",
        "Ballard",
        "Fremont",
        "Green Lake",
        "Wallingford",
        "Madison Park",
        "Laurelhurst",
        "Windermere",
        "Magnolia",
        "West Seattle",
        "Seward Park"
      ]}
      nearbyLandmarks={[
        "Space Needle",
        "Pike Place Market",
        "Green Lake Park",
        "Discovery Park"
      ]}
    />
  );
}
