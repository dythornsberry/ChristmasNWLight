import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Loader2, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { hasGooglePlacesApiKey, loadPlacesLibrary } from "@/lib/googleMaps";

interface AddressAutocompleteFieldProps {
  address: string;
  addressConfirmed: boolean;
  error?: string | null;
  inputId: string;
  label: string;
  onAddressChange: (value: string) => void;
  onAddressConfirmedChange: (value: boolean) => void;
  onZipCodeChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  resetKey?: number;
  zipCode: string;
}

type GoogleAddressComponent = {
  longText?: string;
  shortText?: string;
  types?: string[];
};

type PlaceAutocompleteElementInstance = HTMLElement & {
  includedPrimaryTypes?: string[];
  includedRegionCodes?: string[];
  locationBias?: unknown;
  placeholder?: string;
};

function getAddressComponent(
  addressComponents: GoogleAddressComponent[] | undefined,
  type: string,
) {
  return addressComponents?.find((component) => component.types?.includes(type))?.longText ?? "";
}

export default function AddressAutocompleteField({
  address,
  addressConfirmed,
  error,
  inputId,
  label,
  onAddressChange,
  onAddressConfirmedChange,
  onZipCodeChange,
  placeholder,
  required = false,
  resetKey = 0,
  zipCode,
}: AddressAutocompleteFieldProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    hasGooglePlacesApiKey() ? "loading" : "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const googleEnabled = useMemo(() => hasGooglePlacesApiKey(), []);

  useEffect(() => {
    if (!googleEnabled || !containerRef.current) {
      return;
    }

    let cancelled = false;
    let element: PlaceAutocompleteElementInstance | null = null;

    setStatus("loading");
    setStatusMessage("");

    loadPlacesLibrary()
      .then(({ PlaceAutocompleteElement }) => {
        if (cancelled || !containerRef.current) {
          return;
        }

        const nextElement = new PlaceAutocompleteElement() as PlaceAutocompleteElementInstance;
        nextElement.includedPrimaryTypes = ["street_address"];
        nextElement.includedRegionCodes = ["us"];
        nextElement.locationBias = {
          center: { lat: 47.615, lng: -122.205 },
          radius: 75000,
        };
        nextElement.placeholder = placeholder;
        nextElement.className = "address-autocomplete-element";

        const handleInput = () => {
          onAddressChange("");
          onAddressConfirmedChange(false);
        };

        const handleSelect = async (event: Event) => {
          const customEvent = event as Event & {
            placePrediction?: {
              toPlace: () => {
                fetchFields: (options: { fields: string[] }) => Promise<void>;
                addressComponents?: GoogleAddressComponent[];
                formattedAddress?: string;
              };
            };
            detail?: {
              placePrediction?: {
                toPlace: () => {
                  fetchFields: (options: { fields: string[] }) => Promise<void>;
                  addressComponents?: GoogleAddressComponent[];
                  formattedAddress?: string;
                };
              };
            };
          };

          const prediction = customEvent.placePrediction ?? customEvent.detail?.placePrediction;
          if (!prediction) {
            return;
          }

          setStatusMessage("Loading address details...");

          try {
            const place = prediction.toPlace();
            await place.fetchFields({
              fields: ["formattedAddress", "addressComponents"],
            });

            if (cancelled) {
              return;
            }

            const formattedAddress = place.formattedAddress ?? "";
            const selectedZipCode = getAddressComponent(place.addressComponents, "postal_code");

            onAddressChange(formattedAddress);
            onZipCodeChange(selectedZipCode);
            onAddressConfirmedChange(Boolean(formattedAddress));
            setStatusMessage("");
          } catch (_error) {
            if (!cancelled) {
              setStatus("error");
              setStatusMessage("We couldn't confirm that address. Try again or enter it manually.");
              onAddressConfirmedChange(false);
            }
          }
        };

        nextElement.addEventListener("input", handleInput);
        nextElement.addEventListener("gmp-select", handleSelect as EventListener);

        containerRef.current.replaceChildren(nextElement);
        element = nextElement;
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
          setStatusMessage("Address suggestions are temporarily unavailable. Enter your address manually.");
        }
      });

    return () => {
      cancelled = true;
      if (element) {
        element.replaceChildren();
      }
      if (containerRef.current) {
        containerRef.current.replaceChildren();
      }
    };
  }, [
    googleEnabled,
    onAddressChange,
    onAddressConfirmedChange,
    onZipCodeChange,
    placeholder,
    resetKey,
  ]);

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>
        {label}
        {required ? " *" : ""}
      </Label>

      {googleEnabled && status !== "error" ? (
        <>
          <div
            className={cn("address-autocomplete-shell", error && "border-destructive")}
            data-invalid={Boolean(error)}
          >
            <div ref={containerRef} className="w-full" data-testid={`${inputId}-autocomplete`} />
            {status === "loading" ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading address search...
              </div>
            ) : null}
          </div>
          <p className="text-xs text-muted-foreground">
            Start typing and pick the property from the Google suggestions. ZIP code fills automatically.
          </p>
          {addressConfirmed && address ? (
            <div className="rounded-md border border-status-online/30 bg-status-online/10 px-3 py-2 text-sm text-slate-900">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <div className="font-medium">Verified address</div>
                  <div>{address}</div>
                  {zipCode ? <div>ZIP: {zipCode}</div> : null}
                </div>
              </div>
            </div>
          ) : null}
          {statusMessage ? (
            <p className="text-sm text-muted-foreground">
              {statusMessage}
            </p>
          ) : null}
        </>
      ) : (
        <div className="space-y-2">
          <Input
            id={inputId}
            value={address}
            onChange={(event) => {
              onAddressChange(event.target.value);
              onAddressConfirmedChange(Boolean(event.target.value.trim()));
            }}
            autoComplete="street-address"
            placeholder={placeholder}
          />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {googleEnabled
              ? "Address suggestions are temporarily unavailable, so you can type the address manually."
              : "Enter the full service address. Google autocomplete can be enabled later without changing the form."}
          </div>
        </div>
      )}

      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
