import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Check, CheckCircle2, Phone, type LucideIcon } from "lucide-react";
import AddressAutocompleteField from "@/components/AddressAutocompleteField";
import { Checkbox } from "@/components/ui/checkbox";
import FormSpamTrap from "@/components/FormSpamTrap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackLeadConversion } from "@/lib/analytics";
import {
  formatPhoneNumber,
  deliverQuoteLead,
  getEmailValidationError,
  getNameValidationError,
  getPhoneValidationError,
  requiresProjectAddress,
  toE164,
} from "@/lib/leads";
import { cn } from "@/lib/utils";
import dylanPhoto from "@assets/optimized/dylan-avatar-96.webp";

// Ordered by how often each add-on sells on real Jobber jobs (2023-2026); roofline is on 94% of installs.
export const LIGHTING_AREAS = [
  "Roofline",
  "Trees",
  "Garage",
  "Columns, pillars & railings",
  "Bushes & shrubs",
  "Wreaths & garland",
  "Large or custom display",
  "Not sure yet",
] as const;

export interface LeadServiceOption {
  value: string;
  label: string;
  sublabel?: string;
  icon?: LucideIcon;
}

interface LeadFormCardProps {
  title: string;
  description: string;
  submitLabel: string;
  successTitle: string;
  successDescription: string;
  trackingLabel: string;
  formLocation: string;
  serviceOptions?: LeadServiceOption[];
  initialServiceType?: string;
  responseNote?: string;
  serviceBadgeText?: string;
  addressLabel?: string;
  addressPlaceholder?: string;
  trustNote?: string;
  legalNote?: string;
  cardClassName?: string;
  testIdPrefix?: string;
}

export default function LeadFormCard({
  title,
  description,
  submitLabel,
  successTitle,
  successDescription,
  trackingLabel,
  formLocation,
  serviceOptions = [],
  initialServiceType = "",
  responseNote = "We'll follow up soon.",
  serviceBadgeText,
  addressLabel = "Property Address",
  addressPlaceholder = "Street address, city, ZIP",
  trustNote = "Licensed, bonded, and insured",
  legalNote = 'By submitting this form, you consent to receive text messages and calls from Christmas Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with third parties.',
  cardClassName,
  testIdPrefix = "lead-form",
}: LeadFormCardProps) {
  const { toast } = useToast();
  const submittingRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0);
  const [showErrors, setShowErrors] = useState(false);
  const [website, setWebsite] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    serviceType: initialServiceType,
    addressConfirmed: false,
    lightingAreas: ["Roofline"] as string[],
  });
  const [step, setStep] = useState<1 | 2>(1);
  const returningService = serviceOptions.find((option) => option.value.endsWith("-returning"));
  const addressRequired = requiresProjectAddress(formData.serviceType || initialServiceType);

  const resetForm = () => {
    setIsSubmitted(false);
    setShowErrors(false);
    setStep(1);
    setWebsite("");
    setFormResetKey((value) => value + 1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      serviceType: initialServiceType,
      addressConfirmed: false,
      lightingAreas: ["Roofline"],
    });
  };

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const payload = {
        ...data,
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        address: data.address.trim(),
        zipCode: data.zipCode.trim(),
        lightingAreas: data.lightingAreas.join(", "),
        phoneE164: toE164(data.phone),
        source: "christmasnw.com",
        formLocation,
        submittedAt: new Date().toISOString(),
      };
      await deliverQuoteLead(payload);
    },
    onSuccess: (_response, variables) => {
      setIsSubmitted(true);
      setWebsite("");
      toast({ title: "Request Received!", description: responseNote });
      trackLeadConversion(trackingLabel, {
        form_location: formLocation,
        service_type: variables.serviceType,
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Problem",
        description: error instanceof Error
          ? error.message
          : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      submittingRef.current = false;
    },
  });

  const fullNameError = getNameValidationError(formData.fullName, "full name");
  // Email is optional; only check it when someone types one.
  const emailError = formData.email.trim() ? getEmailValidationError(formData.email) : null;
  const phoneError = getPhoneValidationError(formData.phone);
  // Suggestions are optional; manually entered addresses remain valid.
  const addressError = addressRequired && !formData.address.trim() ? "Enter the service address." : null;
  const serviceTypeError = !formData.serviceType ? "Choose the service you need." : null;
  const lightingAreasError = formData.lightingAreas.length === 0 ? "Pick at least one, or choose Not sure yet." : null;

  const focusFirstInvalid = () =>
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());

  const toggleLightingArea = (area: string) => setFormData((current) => ({
    ...current,
    lightingAreas: current.lightingAreas.includes(area)
      ? current.lightingAreas.filter((item) => item !== area)
      : [...current.lightingAreas, area],
  }));

  const goToStepTwo = () => {
    setShowErrors(true);
    if (fullNameError || phoneError) {
      focusFirstInvalid();
      return;
    }
    setShowErrors(false);
    setStep(2);
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>(`#${testIdPrefix}-address`)?.focus());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;
    if (website) {
      // Keep bot submissions silent without recording a conversion.
      setIsSubmitted(true);
      return;
    }
    if (step === 1) {
      goToStepTwo();
      return;
    }
    setShowErrors(true);
    if (fullNameError || phoneError) {
      setStep(1);
      focusFirstInvalid();
      return;
    }
    if (serviceTypeError || emailError || addressError || lightingAreasError) {
      focusFirstInvalid();
      return;
    }
    submittingRef.current = true;
    createQuoteMutation.mutate(formData);
  };

  return (
    <Card className={cn("overflow-hidden border-border bg-white", cardClassName)}>
      {isSubmitted ? (
        <div className="px-6 py-10 text-center sm:px-8" data-testid={`${testIdPrefix}-success`}>
          <CheckCircle2 className="mx-auto mb-5 h-12 w-12 text-status-online" />
          <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{successTitle}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{successDescription}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="tel:4252150935" data-testid={`${testIdPrefix}-call`}>
                <Phone className="mr-2 h-5 w-5" /> Call (425) 215-0935
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={resetForm} data-testid={`${testIdPrefix}-reset`}>Submit Another Request</Button>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-8">
          {serviceBadgeText ? (
            <Badge variant="outline" className="mb-4">{serviceBadgeText}</Badge>
          ) : null}
          <div className="mb-5">
            <h2 className="font-serif text-2xl font-bold text-foreground">{title}</h2>
            {description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p> : null}
            <div className="mt-4 flex items-center gap-3" data-testid={`${testIdPrefix}-owner`}>
              <img
                src={dylanPhoto}
                alt="Dylan Thornsberry, owner of Christmas Northwest"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
              <p className="text-sm leading-5 text-muted-foreground">
                <span className="font-semibold text-foreground">Dylan, owner.</span> You'll hear back from me.
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-foreground" data-testid={`${testIdPrefix}-seasonal-note`}>
              Traditional Christmas lights, installed for the season and taken down after the holidays.{" "}
              <span className="font-semibold">Installs start at $800.</span> Most are up within a week.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative">
            <FormSpamTrap fieldId={`${testIdPrefix}-website`} value={website} onChange={setWebsite} />
            <fieldset disabled={createQuoteMutation.isPending} className="min-w-0 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground" data-testid={`${testIdPrefix}-step`}>
                Step {step} of 2
              </p>

              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-fullName`}>Full Name *</Label>
                    <Input
                      id={`${testIdPrefix}-fullName`}
                      value={formData.fullName}
                      onChange={(e) => setFormData((current) => ({ ...current, fullName: e.target.value }))}
                      required autoComplete="name" placeholder="Full name"
                      aria-invalid={showErrors && Boolean(fullNameError)}
                      aria-describedby={showErrors && fullNameError ? `${testIdPrefix}-name-error` : undefined}
                      data-testid={`${testIdPrefix}-full-name`}
                    />
                    {showErrors && fullNameError ? <p id={`${testIdPrefix}-name-error`} className="text-sm text-destructive">{fullNameError}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-phone`}>Phone Number *</Label>
                    <Input
                      id={`${testIdPrefix}-phone`} type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const phone = formatPhoneNumber(e.currentTarget.value);
                        setFormData((current) => ({ ...current, phone }));
                      }}
                      required maxLength={14} autoComplete="tel" inputMode="tel" placeholder="Phone number"
                      aria-invalid={showErrors && Boolean(phoneError)}
                      aria-describedby={showErrors && phoneError ? `${testIdPrefix}-phone-error` : undefined}
                      data-testid={`${testIdPrefix}-phone`}
                    />
                    {showErrors && phoneError ? <p id={`${testIdPrefix}-phone-error`} className="text-sm text-destructive">{phoneError}</p> : null}
                  </div>

                  <Button type="submit" size="lg" className="min-h-12 w-full text-base font-semibold" data-testid={`${testIdPrefix}-next`}>
                    Next
                  </Button>
                </>
              ) : (
                <>
                  <AddressAutocompleteField
                    address={formData.address}
                    addressConfirmed={formData.addressConfirmed}
                    error={showErrors ? addressError : null}
                    inputId={`${testIdPrefix}-address`}
                    label={addressRequired ? addressLabel : `${addressLabel} (optional)`}
                    onAddressChange={(address) => setFormData((current) => ({ ...current, address }))}
                    onAddressConfirmedChange={(addressConfirmed) => setFormData((current) => ({
                      ...current, addressConfirmed, zipCode: addressConfirmed ? current.zipCode : "",
                    }))}
                    onZipCodeChange={(zipCode) => setFormData((current) => ({ ...current, zipCode }))}
                    placeholder={addressPlaceholder}
                    required={addressRequired}
                    resetKey={formResetKey}
                    zipCode={formData.zipCode}
                  />

                  <div role="group" aria-labelledby={`${testIdPrefix}-areas-label`} data-testid={`${testIdPrefix}-areas`}>
                    <p id={`${testIdPrefix}-areas-label`} className="text-sm font-medium leading-none">What do you want lit up?</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {LIGHTING_AREAS.map((area) => {
                        const selected = formData.lightingAreas.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            aria-pressed={selected}
                            aria-invalid={showErrors && Boolean(lightingAreasError) && area === LIGHTING_AREAS[0]}
                            onClick={() => toggleLightingArea(area)}
                            className={cn(
                              "inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-colors",
                              selected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-white text-foreground hover:border-primary/60",
                            )}
                          >
                            {selected ? <Check className="h-4 w-4" aria-hidden="true" /> : null}
                            {area}
                          </button>
                        );
                      })}
                    </div>
                    {showErrors && lightingAreasError ? <p className="mt-2 text-sm text-destructive">{lightingAreasError}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-email`}>Email (optional)</Label>
                    <Input
                      id={`${testIdPrefix}-email`} type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                      autoComplete="email" inputMode="email" placeholder="Email address"
                      aria-invalid={showErrors && Boolean(emailError)}
                      aria-describedby={showErrors && emailError ? `${testIdPrefix}-email-error` : undefined}
                      data-testid={`${testIdPrefix}-email`}
                    />
                    {showErrors && emailError ? <p id={`${testIdPrefix}-email-error`} className="text-sm text-destructive">{emailError}</p> : null}
                  </div>

                  {returningService ? (
                    <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                      <Checkbox
                        checked={formData.serviceType === returningService.value}
                        onCheckedChange={(checked) => setFormData((current) => ({
                          ...current, serviceType: checked === true ? returningService.value : initialServiceType,
                        }))}
                        data-testid={`${testIdPrefix}-returning`}
                      />
                      Returning customer?
                    </label>
                  ) : null}
                  {showErrors && serviceTypeError ? <p className="text-sm text-destructive">{serviceTypeError}</p> : null}

                  <Button type="submit" size="lg" className="min-h-12 w-full text-base font-semibold"
                    disabled={createQuoteMutation.isPending} data-testid={`${testIdPrefix}-submit`}>
                    {createQuoteMutation.isPending ? "Submitting..." : submitLabel}
                  </Button>
                  <button
                    type="button"
                    onClick={() => { setShowErrors(false); setStep(1); }}
                    className="mx-auto flex min-h-11 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    data-testid={`${testIdPrefix}-back`}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                </>
              )}
            </fieldset>
          </form>

          <p className="mt-4 text-center text-xs leading-5 text-muted-foreground">{trustNote}</p>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">{legalNote}</p>
        </div>
      )}
    </Card>
  );
}
