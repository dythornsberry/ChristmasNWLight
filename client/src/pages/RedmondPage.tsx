import CityPage from "./CityPage";

export default function RedmondPage() {
  return (
    <CityPage
      cityName="Redmond"
      citySlug="redmond"
      zipCode="98052"
      county="King"
      latitude="47.6740"
      longitude="-122.1215"
      neighborhoods={[
        "Downtown Redmond",
        "Education Hill",
        "Overlake",
        "Grass Lawn",
        "Sammamish Valley",
        "Bear Creek",
        "Idylwood",
        "Rose Hill",
        "Union Hill",
        "Novelty Hill"
      ]}
      nearbyLandmarks={[
        "Microsoft Campus",
        "Marymoor Park",
        "Redmond Town Center",
        "Sammamish River Trail"
      ]}
    />
  );
}
