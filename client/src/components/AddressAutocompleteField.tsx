import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

type LegacyAddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

function getAddressComponent(
  components: LegacyAddressComponent[] | undefined,
  type: string,
) {
  return components?.find((c) => c.types.includes(type))?.long_name ?? "";
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autocompleteRef = useRef<any>(null);
  const googleEnabled = useMemo(() => hasGooglePlacesApiKey(), []);

  // Keep stable refs to callbacks so the place_changed listener never goes stale
  const callbacksRef = useRef({ onAddressChange, onAddressConfirmedChange, onZipCodeChange });
  useEffect(() => {
    callbacksRef.current = { onAddressChange, onAddressConfirmedChange, onZipCodeChange };
  }, [onAddressChange, onAddressConfirmedChange, onZipCodeChange]);

  // Clear input value when resetKey changes (form reset)
  useEffect(() => {
    if (resetKey > 0 && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [resetKey]);

  useEffect(() => {
    if (!googleEnabled || !inputRef.current) {
      return;
    }

    let cancelled = false;

    setStatus("loading");
    setStatusMessage("");

    loadPlacesLibrary()
      .then((placesLib: any) => {
        if (cancelled || !inputRef.current) {
          return;
        }

        const autocomplete = new placesLib.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "us" },
          types: ["address"],
          fields: ["formatted_address", "address_components"],
        });

        // Bias results toward Seattle area
        const gMaps = (window as any).google?.maps;
        if (gMaps) {
          const seattleBounds = new gMaps.LatLngBounds(
            new gMaps.LatLng(47.0, -122.7),
            new gMaps.LatLng(48.2, -121.7),
          );
          autocomplete.setBounds(seattleBounds);
        }

        autocomplete.addListener("place_changed", () => {
          if (cancelled) return;

          const place = autocomplete.getPlace();
          if (!place || !place.formatted_address) {
            callbacksRef.current.onAddressConfirmedChange(false);
            return;
          }

          const formattedAddress = place.formatted_address;
          const selectedZipCode = getAddressComponent(
            place.address_components,
            "postal_code",
          );

          callbacksRef.current.onAddressChange(formattedAddress);
          callbacksRef.current.onZipCodeChange(selectedZipCode);
          callbacksRef.current.onAddressConfirmedChange(true);
          setStatusMessage("");
        });

        autocompleteRef.current = autocomplete;
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
          setStatusMessage(
            "Address suggestions are temporarily unavailable. Enter your address manually.",
          );
        }
      });

    return () => {
      cancelled = true;
      if (autocompleteRef.current) {
        const gMaps = (window as any).google?.maps;
        if (gMaps) {
          gMaps.event.clearInstanceListeners(autocompleteRef.current);
        }
        autocompleteRef.current = null;
      }
    };
    // Only re-create when googleEnabled or resetKey changes — callbacks use refs
  }, [googleEnabled, resetKey]);

  const handleInputChange = useCallback(() => {
    callbacksRef.current.onAddressChange("");
    callbacksRef.current.onAddressConfirmedChange(false);
  }, []);

  return (
    <div className="space-y-2">
      <Label htmlFor={inputId}>
        {label}
        {required ? " *" : ""}
      </Label>

      {googleEnabled && status !== "error" ? (
        <>
          <div
            className={cn(
              "address-autocomplete-shell",
              error && "border-destructive",
            )}
            data-invalid={Boolean(error)}
          >
            <Input
              ref={inputRef}
              id={inputId}
              type="text"
              autoComplete="off"
              placeholder={placeholder}
              className="border-0 shadow-none focus-visible:ring-0 px-0 h-auto"
              onChange={handleInputChange}
            />
            {status === "loading" ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading address search...
              </div>
            ) : null}
          </div>
          <p className="text-xs text-muted-foreground">
            Start typing and pick the property from the Google suggestions. ZIP
            code fills automatically.
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
            <p className="text-sm text-muted-foreground">{statusMessage}</p>
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
