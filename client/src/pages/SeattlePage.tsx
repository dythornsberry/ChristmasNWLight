import CityPage from "./CityPage";

export default function SeattlePage() {
  return (
    <CityPage
      cityName="Seattle"
      citySlug="seattle"
      note="A lot of the Seattle homes we light are older, with plenty of roofline detail like gables, dormers and porch trim."
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
    />
  );
}
