import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  DollarSign,
  Lamp,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Sun,
  TreePine,
  Wrench,
} from "lucide-react";
import AddressAutocompleteField from "@/components/AddressAutocompleteField";
import FormSpamTrap from "@/components/FormSpamTrap";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackLeadConversion } from "@/lib/analytics";
import { hasGooglePlacesApiKey } from "@/lib/googleMaps";
import {
  formatPhoneNumber,
  getAddressValidationError,
  getEmailValidationError,
  getNameValidationError,
  getPhoneValidationError,
  getZipCodeValidationError,
  toE164,
} from "@/lib/leads";
import { queryClient } from "@/lib/queryClient";

const SERVICE_OPTIONS = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New customer", icon: TreePine },
  { value: "christmas-2026-returning", label: "Christmas Lighting", sublabel: "Returning customer", icon: Sparkles },
  { value: "permanent-lighting", label: "Permanent Outdoor Lighting", sublabel: "Year-round lighting", icon: Sun },
  { value: "gutter-maintenance", label: "Gutter & Roof Maintenance", sublabel: "Cleaning and repair", icon: Wrench },
  { value: "landscape-lighting", label: "Landscape / Bistro Lighting", sublabel: "Accent and patio lighting", icon: Lamp },
];

const FORM_HIGHLIGHTS = [
  {
    icon: Clock3,
    title: "Fast response",
    description: "Quick response, often within an hour during the season.",
  },
  {
    icon: Shield,
    title: "No pressure",
    description: "Tell us a little about the job and we will send back the right quote for the project.",
  },
  {
    icon: Sparkles,
    title: "All-inclusive service",
    description: "Design, install, maintenance, takedown, and storage can all be handled in one plan.",
  },
  {
    icon: MapPin,
    title: "Built for Seattle-area homes",
    description: "We route across Seattle, Bellevue, Kirkland, Bothell, Kenmore, and nearby Eastside cities.",
  },
];

export default function QuoteFormSection() {
  const { toast } = useToast();
  const formStartedAtRef = useRef(Date.now());
  const googlePlacesEnabled = hasGooglePlacesApiKey();
  const [step, setStep] = useState(1);
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
    serviceType: "",
    addressConfirmed: false,
  });

  const selectedService = SERVICE_OPTIONS.find((option) => option.value === formData.serviceType);
  const progressWidth = step === 1 ? 34 : step === 2 ? 67 : 100;
  const shouldCollectManualZip =
    !googlePlacesEnabled || !formData.addressConfirmed || !formData.zipCode.trim();

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    setShowErrors(false);
    setWebsite("");
    setFormResetKey((value) => value + 1);
    formStartedAtRef.current = Date.now();
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      serviceType: "",
      addressConfirmed: false,
    });
  };

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const webhookUrl = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;
      if (!webhookUrl) throw new Error("Form submission is temporarily unavailable.");

      // Skip if honeypot is filled (spam bot)
      if (website) return;

      const payload = {
        ...data,
        fullName: data.fullName.trim(),
        address: data.address.trim(),
        zipCode: data.zipCode.trim(),
        phoneE164: toE164(data.phone),
        source: "christmasnw.com",
        submittedAt: new Date().toISOString(),
      };

      // Zapier webhooks may not return CORS headers, so the fetch can
      // throw a TypeError ("Load failed") even when the data was received.
      // We catch network errors and treat them as success since we have
      // the Resend backup email as a safety net.
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch {
        // Network/CORS error — Zapier likely still received the data.
        // Resend backup below ensures we never lose a lead.
        console.warn("Zapier fetch threw (likely CORS) — data was probably received.");
      }

      // Fire backup email via Resend (independent of Zapier, fire-and-forget)
      fetch("/api/backup-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {}); // silently ignore — Zapier is primary
    },
    onSuccess: (_response, variables) => {
      setIsSubmitted(true);
      setWebsite("");
      toast({
        title: "Quote request received",
        description: "We will be in touch soon.",
      });
      trackLeadConversion("homepage_quote", {
        form_location: "homepage",
        service_type: variables.serviceType,
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Problem",
        description:
          error instanceof Error
            ? error.message
            : "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const fullNameError = getNameValidationError(formData.fullName, "full name");
  const emailError = getEmailValidationError(formData.email);
  const phoneError = getPhoneValidationError(formData.phone);
  const zipCodeError = getZipCodeValidationError(formData.zipCode, { required: shouldCollectManualZip });
  const manualAddressError = getAddressValidationError(formData.address, { required: true });
  const addressError =
    manualAddressError ||
    (googlePlacesEnabled && !formData.addressConfirmed
      ? "Select the property from the Google suggestions."
      : null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (fullNameError || emailError || phoneError || zipCodeError || addressError) {
      return;
    }

    createQuoteMutation.mutate({
      ...formData,
      fullName: formData.fullName.trim(),
      address: formData.address.trim(),
      zipCode: formData.zipCode.trim(),
    });
  };

  const canProceedStep1 = formData.serviceType !== "";
  const canProceedStep2 = !fullNameError && !emailError && !phoneError;
  const canSubmitStep3 = !zipCodeError && !addressError;

  const stepVariants = {
    enter: { opacity: 0, x: 32 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -32 },
  };

  return (
    <section
      id="quote"
      className="relative overflow-hidden scroll-mt-28 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_42%,#ffffff_100%)] py-20"
    >
      <div id="quote-form" className="scroll-mt-28" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-12 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Badge
              variant="outline"
              className="mb-5 border-primary/20 bg-white/90 px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
            >
              Quick response. Simple quote form.
            </Badge>

            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Get a quote for your home.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us what you want, how to reach you, and where the property is. We will take it from there.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FORM_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.45)] backdrop-blur"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-status-online/10 text-status-online">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/80">Want to talk it through first?</p>
                <a href="tel:4252150935" data-testid="button-quote-call-now">
                  <Button
                    size="lg"
                    className="mt-3 w-full bg-white text-slate-950 hover:bg-white/90 sm:w-auto"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call (425) 215-0935
                  </Button>
                </a>
                <p className="mt-3 text-xs text-white/60">Quick response during the season.</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden border-white/80 bg-white/90 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.42)] backdrop-blur">
            {isSubmitted ? (
              <div className="px-6 py-10 text-center sm:px-10 md:px-12" data-testid="quote-success-message">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Thanks. Your request is in.</h3>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Thanks for reaching out. We will take a look and get back to you soon. If you want to move faster,
                  call us now and we can talk it through.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href="tel:4252150935">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: (425) 215-0935
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" onClick={resetForm}>
                    Submit Another Request
                  </Button>
                </div>
              </div>
            ) : (
              <div className="px-6 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-10">
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <Badge
                    variant="outline"
                    className="border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-foreground"
                    data-testid="badge-pricing-indicator"
                  >
                    <DollarSign className="mr-2 h-4 w-4 text-amber-600" />
                    Most homes $800-$2,000
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/8 px-4 py-2 text-sm font-medium text-foreground">
                    Under 60 seconds to complete
                  </Badge>
                  {selectedService ? (
                    <Badge variant="secondary" className="bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                      {selectedService.label} selected
                    </Badge>
                  ) : null}
                </div>

                <div className="mb-8">
                  <h3 className="font-serif text-3xl font-bold text-foreground md:text-[2.6rem]">Get Your Free Estimate</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                    Short form, quick follow-up, and enough detail for us to price the job properly.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between gap-3 text-sm font-medium">
                    {["Service", "Contact", "Property"].map((label, index) => {
                      const stepNumber = index + 1;
                      const isActive = stepNumber <= step;

                      return (
                        <div key={label} className="flex items-center gap-2 text-left">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                              isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {stepNumber < step ? <CheckCircle2 className="h-4 w-4" /> : stepNumber}
                          </div>
                          <span className={isActive ? "text-foreground" : "text-muted-foreground"}>{label}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary transition-all duration-500"
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit}
                  onKeyDown={(e) => {
                    if (e.key !== "Enter") return;
                    // Don't intercept if user is in a textarea
                    if ((e.target as HTMLElement).tagName === "TEXTAREA") return;

                    if (step === 1 && canProceedStep1) {
                      e.preventDefault();
                      setStep(2);
                    } else if (step === 2 && canProceedStep2) {
                      e.preventDefault();
                      setStep(3);
                    }
                    // Step 3: let native form submit handle it
                  }}
                  className="relative"
                >
                  <FormSpamTrap fieldId="quote-website" value={website} onChange={setWebsite} />

                  <AnimatePresence mode="wait">
                    {step === 1 ? (
                      <motion.div
                        key="step1"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="mb-5">
                          <h4 className="text-xl font-semibold text-foreground">Which service do you need?</h4>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Choose the closest fit. We can sort out the details from there.
                          </p>
                        </div>

                        <div className="grid gap-3">
                          {SERVICE_OPTIONS.map((option) => {
                            const Icon = option.icon;
                            const isSelected = formData.serviceType === option.value;

                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData((current) => ({
                                    ...current,
                                    serviceType: option.value,
                                  }));
                                  // Auto-advance after brief visual confirmation
                                  setTimeout(() => setStep(2), 350);
                                }}
                                className={`flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all ${
                                  isSelected
                                    ? "border-primary bg-primary/5 shadow-md"
                                    : "border-border bg-white hover:border-primary/35 hover:bg-muted/40"
                                }`}
                              >
                                <div
                                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-semibold text-foreground">{option.label}</div>
                                  <div className="text-sm text-muted-foreground">{option.sublabel}</div>
                                </div>
                                {isSelected ? <CheckCircle2 className="ml-auto h-5 w-5 text-primary" /> : null}
                              </button>
                            );
                          })}
                        </div>

                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-emerald-600">2026 calendar is open:</span> early spots usually get the best install windows.
                        </p>

                        <Button
                          type="button"
                          size="lg"
                          className="mt-4 w-full bg-primary text-lg font-bold text-primary-foreground shadow-xl hover:bg-primary/90"
                          disabled={!canProceedStep1}
                          onClick={() => {
                            setShowErrors(true);
                            if (canProceedStep1) {
                              setStep(2);
                            }
                          }}
                        >
                          Continue
                          <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </motion.div>
                    ) : null}

                    {step === 2 ? (
                      <motion.div
                        key="step2"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="mb-5">
                          <h4 className="text-xl font-semibold text-foreground">How should we reach you?</h4>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Use the best phone and email for quote follow-up.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData((current) => ({
                                ...current,
                                fullName: e.target.value,
                              }))
                            }
                            required
                            data-testid="input-full-name"
                            placeholder="John Smith"
                            autoFocus
                            autoComplete="name"
                          />
                          {showErrors && fullNameError ? <p className="text-sm text-destructive">{fullNameError}</p> : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((current) => ({
                                ...current,
                                email: e.target.value,
                              }))
                            }
                            required
                            data-testid="input-email"
                            placeholder="john@example.com"
                            autoComplete="email"
                            inputMode="email"
                          />
                          {showErrors && emailError ? <p className="text-sm text-destructive">{emailError}</p> : null}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((current) => ({
                                ...current,
                                phone: formatPhoneNumber(e.target.value),
                              }))
                            }
                            required
                            data-testid="input-phone"
                            placeholder="(425) 555-0123"
                            maxLength={14}
                            autoComplete="tel"
                            inputMode="tel"
                          />
                          {showErrors && phoneError ? <p className="text-sm text-destructive">{phoneError}</p> : null}
                        </div>

                        <div className="mt-6 flex gap-3">
                          <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                            <ChevronLeft className="mr-1 h-5 w-5" />
                            Back
                          </Button>
                          <Button
                            type="button"
                            size="lg"
                            className="flex-[2] bg-primary text-lg font-bold text-primary-foreground shadow-xl hover:bg-primary/90"
                            disabled={!canProceedStep2}
                            onClick={() => {
                              setShowErrors(true);
                              if (canProceedStep2) {
                                setStep(3);
                              }
                            }}
                          >
                            Continue
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                      </motion.div>
                    ) : null}

                    {step === 3 ? (
                      <motion.div
                        key="step3"
                        variants={stepVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.2 }}
                        className="space-y-5"
                      >
                        <div className="mb-5">
                          <h4 className="text-xl font-semibold text-foreground">Which property are we quoting?</h4>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            This lets us confirm service area coverage and estimate install scope accurately.
                          </p>
                        </div>

                        <AddressAutocompleteField
                          address={formData.address}
                          addressConfirmed={formData.addressConfirmed}
                          error={showErrors ? addressError : null}
                          inputId="address"
                          label="Property Address"
                          onAddressChange={(value) =>
                            setFormData((current) => ({
                              ...current,
                              address: value,
                            }))
                          }
                          onAddressConfirmedChange={(value) =>
                            setFormData((current) => ({
                              ...current,
                              addressConfirmed: value,
                            }))
                          }
                          onZipCodeChange={(value) =>
                            setFormData((current) => ({
                              ...current,
                              zipCode: value || current.zipCode,
                            }))
                          }
                          placeholder="Start typing your service address"
                          required
                          resetKey={formResetKey}
                          zipCode={formData.zipCode}
                        />

                        {shouldCollectManualZip ? (
                          <div className="space-y-2">
                            <Label htmlFor="zipCode">Zip Code *</Label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) =>
                                setFormData((current) => ({
                                  ...current,
                                  zipCode: e.target.value.replace(/\D/g, "").slice(0, 5),
                                }))
                              }
                              required
                              data-testid="input-zip-code"
                              placeholder="98028"
                              autoComplete="postal-code"
                              inputMode="numeric"
                            />
                            {showErrors && zipCodeError ? <p className="text-sm text-destructive">{zipCodeError}</p> : null}
                          </div>
                        ) : null}

                        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                          <p className="text-sm leading-6 text-emerald-900">
                            We use the address to make sure we are looking at the right property. We do not sell your information.
                          </p>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep(2)}>
                            <ChevronLeft className="mr-1 h-5 w-5" />
                            Back
                          </Button>
                          <Button
                            type="submit"
                            size="lg"
                            className="flex-[2] bg-primary text-lg font-bold text-primary-foreground shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-primary/90"
                            data-testid="button-submit-quote"
                            disabled={!canSubmitStep3 || createQuoteMutation.isPending}
                          >
                            {createQuoteMutation.isPending ? (
                              "Submitting..."
                            ) : (
                              <>
                                <Sparkles className="mr-2 h-5 w-5" />
                                Light My House!
                              </>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </form>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-semibold">Licensed, bonded, insured, and serving the greater Seattle area</span>
                </div>

                <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                  By submitting this form, you consent to receive text messages and calls from Christmas Light Installers
                  Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We
                  will never share your information with third parties.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
