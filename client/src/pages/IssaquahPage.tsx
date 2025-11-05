import CityPage from "./CityPage";

export default function IssaquahPage() {
  return (
    <CityPage
      cityName="Issaquah"
      citySlug="issaquah"
      zipCode="98027"
      county="King"
      latitude="47.5301"
      longitude="-122.0326"
      neighborhoods={[
        "Olde Town",
        "Issaquah Highlands",
        "Talus",
        "Sycamore",
        "Providence Point",
        "Sunset",
        "Squak Mountain",
        "Grand Ridge"
      ]}
      nearbyLandmarks={[
        "Gilman Village",
        "Lake Sammamish",
        "Cougar Mountain Zoo",
        "Issaquah Salmon Hatchery"
      ]}
    />
  );
}
