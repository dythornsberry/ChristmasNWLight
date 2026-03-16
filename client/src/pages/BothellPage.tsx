import CityPage from "./CityPage";

export default function BothellPage() {
  return (
    <CityPage
      cityName="Bothell"
      citySlug="bothell"
      zipCode="98011"
      county="King"
      latitude="47.7623"
      longitude="-122.2054"
      neighborhoods={[
        "Downtown Bothell",
        "Canyon Park",
        "Thrasher's Corner",
        "North Creek",
        "Queensborough",
        "Fitzgerald",
        "Wayne",
        "Maywood Hills"
      ]}
      nearbyLandmarks={[
        "Bothell Landing",
        "McMenamins Anderson School",
        "Bothell Crossings",
        "Burke-Gilman Trail"
      ]}
      localContent={{
        intro: "Bothell has seen massive growth over the past decade, and the mix of established homes near Downtown Bothell and newer construction in Canyon Park and North Creek gives us a wide variety of projects. Bothell homeowners value quality and convenience -- many are busy professionals who want a hassle-free, premium result without having to think about ladders, timers, or storage. We serve Bothell year after year and have built relationships with families who come back each season to add something new to their display. The Burke-Gilman Trail runs through Bothell, and homes along or near the trail corridor benefit from displays visible to walkers and cyclists throughout the holidays.",
        lightingStyles: "Downtown Bothell and the streets around Bothell Landing have older craftsman and ranch-style homes that look great with traditional warm white or multicolor C9 roofline lighting. Canyon Park and North Creek feature newer construction with clean architectural lines -- these homes are perfect for modern warm white displays with accent lighting on columns and entryways. Maywood Hills is a hillside neighborhood where elevated homes create dramatic displays visible from below. Queensborough homeowners often request tree wrapping and bush lighting to complement their roofline packages.",
        neighborhoodHighlights: "Canyon Park is one of our busiest Bothell neighborhoods, with newer homes that have straightforward rooflines perfect for efficient installs. Downtown Bothell near McMenamins Anderson School and Bothell Landing has charming older homes where classic lighting styles look best. Thrasher's Corner and Fitzgerald are family neighborhoods where full-coverage residential packages -- roofline, bushes, and a wrapped tree or two -- are the most popular request. North Creek and Wayne are newer developments where homeowners often start with a basic roofline package and build up each year. Maywood Hills properties with elevation offer great visibility for lighting displays."
      }}
    />
  );
}
