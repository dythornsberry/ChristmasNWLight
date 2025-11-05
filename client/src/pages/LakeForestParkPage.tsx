import CityPage from "./CityPage";

export default function LakeForestParkPage() {
  return (
    <CityPage
      cityName="Lake Forest Park"
      citySlug="lake-forest-park"
      zipCode="98155"
      county="King"
      latitude="47.7565"
      longitude="-122.2807"
      neighborhoods={[
        "Town Center",
        "Sheridan Beach",
        "Lyon Creek",
        "Burke-Gilman",
        "McAleer Creek"
      ]}
      nearbyLandmarks={[
        "Third Place Commons",
        "Lyon Creek Park",
        "Pfingst Animal Acres Park",
        "Burke-Gilman Trail"
      ]}
    />
  );
}
