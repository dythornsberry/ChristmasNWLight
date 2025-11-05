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
        "Overlake",
        "Education Hill",
        "Grass Lawn",
        "Idylwood",
        "North Redmond",
        "Redmond Ridge",
        "Bear Creek",
        "Trilogy",
        "Sammamish Valley"
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
