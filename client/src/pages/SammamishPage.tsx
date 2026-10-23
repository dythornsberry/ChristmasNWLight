import CityPage from "./CityPage";

export default function SammamishPage() {
  return (
    <CityPage
      cityName="Sammamish"
      citySlug="sammamish"
      zipCode="98074"
      county="King"
      latitude="47.6163"
      longitude="-122.0356"
      neighborhoods={[
        "Klahanie",
        "Pine Lake",
        "Beaver Lake",
        "Sahalee",
        "Timberline",
        "Trossachs",
        "Inglewood",
        "East Sammamish",
        "Plateau"
      ]}
    />
  );
}
