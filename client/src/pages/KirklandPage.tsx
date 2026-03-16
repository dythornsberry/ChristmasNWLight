import CityPage from "./CityPage";

export default function KirklandPage() {
  return (
    <CityPage
      cityName="Kirkland"
      citySlug="kirkland"
      zipCode="98033"
      county="King"
      latitude="47.6815"
      longitude="-122.2087"
      neighborhoods={[
        "Downtown Kirkland",
        "Juanita",
        "Totem Lake",
        "Finn Hill",
        "Kingsgate",
        "Houghton",
        "Everest",
        "Norkirk",
        "Moss Bay",
        "Market Street"
      ]}
      nearbyLandmarks={[
        "Marina Park",
        "Juanita Beach Park",
        "Totem Lake Mall",
        "Kirkland Waterfront"
      ]}
      localContent={{
        intro: "Kirkland sits right on the shores of Lake Washington, and its waterfront charm extends into how homeowners light up their properties. From the walkable downtown streets along the waterfront to the hillside homes above Juanita, Kirkland has a unique mix of older craftsman bungalows, mid-century ranchers, and newer custom construction. We have been serving Kirkland homeowners for years and know the streets, slopes, and styles that make each neighborhood distinct. Many of our repeat clients are in Kirkland, and we take pride in helping them build on their display each season.",
        lightingStyles: "Downtown Kirkland and Houghton homeowners often go with classic warm white roofline lighting that complements the neighborhood's character. Juanita and Finn Hill are popular areas for tree wrapping -- the tall evergreens and mature maples along the hillsides look stunning with carefully wrapped trunks and branches. Multicolor displays are more common in Totem Lake and Kingsgate, where families with kids love the festive look. Homes along the Kirkland waterfront near Marina Park tend to favor elegant, restrained displays that work with the property's natural setting rather than competing with it.",
        neighborhoodHighlights: "Finn Hill and Juanita are two of our busiest Kirkland neighborhoods. The hillside properties often have tall trees that make for spectacular wrapping projects, and the views from these homes mean the displays are visible for blocks. Downtown Kirkland and Moss Bay residents love walkable neighborhoods where neighbors coordinate their lighting. Norkirk and Market Street homes feature classic architecture that looks great with traditional C9 roofline lighting. Kingsgate is a family-heavy neighborhood where we do a lot of full-coverage residential packages with rooflines, bushes, and entryway accents."
      }}
    />
  );
}
