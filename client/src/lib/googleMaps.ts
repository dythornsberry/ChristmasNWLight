let placesLibraryPromise: Promise<any> | null = null;

export function hasGooglePlacesApiKey() {
  return Boolean(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
}

export async function loadPlacesLibrary() {
  if (!hasGooglePlacesApiKey()) {
    throw new Error("Google Places API key is not configured.");
  }

  if (!placesLibraryPromise) {
    placesLibraryPromise = (async () => {
      const { importLibrary, setOptions } = await import("@googlemaps/js-api-loader");

      setOptions({
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        v: "weekly",
      });

      return await importLibrary("places");
    })();
  }

  return placesLibraryPromise;
}
