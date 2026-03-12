import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Sparkles,
  type LucideIcon,
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
  requiresProjectAddress,
} from "@/lib/leads";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { cn } from "@/lib/utils";

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
  showServiceStep?: boolean;
  serviceStepTitle?: string;
  serviceStepDescription?: string;
  contactStepTitle?: string;
  contactStepDescription?: string;
  propertyStepTitle?: string;
  propertyStepDescription?: string;
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
  showServiceStep = false,
  serviceStepTitle = "What can we help you with?",
  serviceStepDescription = "Choose the service that best fits your project. We can fine-tune details after we review the property.",
  contactStepTitle = "How should we reach you?",
  contactStepDescription = "Use the best name, email, and phone number for estimate follow-up.",
  propertyStepTitle = "Which property should we review?",
  propertyStepDescription = "We use the service address to confirm routing, scope, and the right next step.",
  responseNote = "We'll follow up soon.",
  serviceBadgeText,
  addressLabel = "Property Address",
  addressPlaceholder = "Start typing the service address",
  trustNote = "Licensed, bonded, insured, and serving the greater Seattle area",
  legalNote = 'By submitting this form, you consent to receive text messages and calls from Christmas Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with third parties.',
  cardClassName,
  testIdPrefix = "lead-form",
}: LeadFormCardProps) {
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
    serviceType: initialServiceType,
    addressConfirmed: false,
  });

  const hasServiceStep = Boolean(showServiceStep && serviceOptions.length > 0);
  const contactStep = hasServiceStep ? 2 : 1;
  const propertyStep = hasServiceStep ? 3 : 2;
  const stepLabels = hasServiceStep ? ["Service", "Contact", "Property"] : ["Contact", "Property"];
  const selectedService = serviceOptions.find((option) => option.value === formData.serviceType);
  const addressRequired = requiresProjectAddress(formData.serviceType || initialServiceType);
  const shouldCollectManualZip =
    !googlePlacesEnabled || !formData.addressConfirmed || !formData.zipCode.trim();
  const zipRequired = (addressRequired || Boolean(formData.address.trim())) && shouldCollectManualZip;

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
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
      serviceType: initialServiceType,
      addressConfirmed: false,
    });
  };

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) =>
      apiRequest("POST", "/api/quote-requests", {
        ...data,
        fullName: data.fullName.trim(),
        address: data.address.trim(),
        zipCode: data.zipCode.trim(),
        website,
        formStartedAt: formStartedAtRef.current,
      }),
    onSuccess: (_response, variables) => {
      setIsSubmitted(true);
      setWebsite("");
      toast({
        title: "Request Received!",
        description: responseNote,
      });
      trackLeadConversion(trackingLabel, {
        form_location: formLocation,
        service_type: variables.serviceType,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: (error) => {
      toast({
        title: "Submission Problem",
        description:
          error instanceof Error
            ? error.message
            : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const fullNameError = getNameValidationError(formData.fullName, "full name");
  const emailError = getEmailValidationError(formData.email);
  const phoneError = getPhoneValidationError(formData.phone);
  const zipCodeError = getZipCodeValidationError(formData.zipCode, { required: zipRequired });
  const manualAddressError = getAddressValidationError(formData.address, { required: addressRequired });
  const addressError =
    manualAddressError ||
    (addressRequired && googlePlacesEnabled && !formData.addressConfirmed
      ? "Select the property from the Google suggestions."
      : null);
  const serviceTypeError = !formData.serviceType ? "Choose the service you need." : null;

  const canProceedService = !serviceTypeError;
  const canProceedContact = !fullNameError && !emailError && !phoneError;
  const canSubmitProperty = !zipCodeError && !addressError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (serviceTypeError || fullNameError || emailError || phoneError || zipCodeError || addressError) {
      return;
    }

    createQuoteMutation.mutate(formData);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  const progressWidth = `${(step / stepLabels.length) * 100}%`;

  return (
    <Card className={cn("overflow-hidden border-white/80 bg-white/95 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.34)]", cardClassName)}>
      {isSubmitted ? (
        <div className="px-6 py-10 text-center sm:px-10 md:px-12" data-testid={`${testIdPrefix}-success`}>
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-10 w-10 text-emerald-600" />
            </div>
          </div>
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{successTitle}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{successDescription}</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:4252150935" data-testid={`${testIdPrefix}-call`}>
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
        <div className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 lg:px-12 lg:py-10">
          <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3">
            {serviceBadgeText ? (
              <Badge variant="outline" className="border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-foreground">
                {serviceBadgeText}
              </Badge>
            ) : null}
            {selectedService ? (
              <Badge variant="secondary" className="bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                {selectedService.label}
              </Badge>
            ) : null}
            <Badge variant="secondary" className="bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              Short, step-by-step form
            </Badge>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl md:text-[2.6rem]">{title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">{description}</p>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="mb-3 flex items-start justify-between gap-2 text-xs font-medium sm:items-center sm:gap-3 sm:text-sm">
              {stepLabels.map((label, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber <= step;

                return (
                  <div key={label} className="flex min-w-0 flex-1 flex-col items-center gap-1 text-center sm:flex-none sm:flex-row sm:gap-2 sm:text-left">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {stepNumber < step ? <CheckCircle2 className="h-4 w-4" /> : stepNumber}
                    </div>
                    <span className={cn("leading-tight", isActive ? "text-foreground" : "text-muted-foreground")}>{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary transition-all duration-500" style={{ width: progressWidth }} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <FormSpamTrap fieldId={`${testIdPrefix}-website`} value={website} onChange={setWebsite} />

            <AnimatePresence mode="wait">
              {hasServiceStep && step === 1 ? (
                <motion.div
                  key="service-step"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold text-foreground">{serviceStepTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{serviceStepDescription}</p>
                  </div>

                  <div className="grid gap-3">
                    {serviceOptions.map((option) => {
                      const Icon = option.icon ?? Sparkles;
                      const isSelected = formData.serviceType === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            setFormData((current) => ({
                              ...current,
                              serviceType: option.value,
                              addressConfirmed: requiresProjectAddress(option.value) ? current.addressConfirmed : false,
                            }))
                          }
                          className={`flex items-center gap-3 rounded-2xl border-2 p-3.5 text-left transition-all sm:gap-4 sm:p-4 ${
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
                            {option.sublabel ? <div className="text-sm leading-5 text-muted-foreground">{option.sublabel}</div> : null}
                          </div>
                          {isSelected ? <CheckCircle2 className="ml-auto h-5 w-5 text-primary" /> : null}
                        </button>
                      );
                    })}
                  </div>

                  {showErrors && serviceTypeError ? <p className="text-sm text-destructive">{serviceTypeError}</p> : null}

                  <Button
                    type="button"
                    size="lg"
                    className="mt-4 w-full text-lg font-bold"
                    disabled={!canProceedService}
                    onClick={() => {
                      setShowErrors(true);
                      if (canProceedService) {
                        setStep(contactStep);
                      }
                    }}
                    data-testid={`${testIdPrefix}-next-service`}
                  >
                    Continue
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              ) : null}

              {step === contactStep ? (
                <motion.div
                  key="contact-step"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold text-foreground">{contactStepTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{contactStepDescription}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-fullName`}>Full Name *</Label>
                    <Input
                      id={`${testIdPrefix}-fullName`}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((current) => ({
                          ...current,
                          fullName: e.target.value,
                        }))
                      }
                      required
                      autoFocus
                      autoComplete="name"
                      placeholder="John Smith"
                      data-testid={`${testIdPrefix}-full-name`}
                    />
                    {showErrors && fullNameError ? <p className="text-sm text-destructive">{fullNameError}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-email`}>Email *</Label>
                    <Input
                      id={`${testIdPrefix}-email`}
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((current) => ({
                          ...current,
                          email: e.target.value,
                        }))
                      }
                      required
                      autoComplete="email"
                      inputMode="email"
                      placeholder="john@example.com"
                      data-testid={`${testIdPrefix}-email`}
                    />
                    {showErrors && emailError ? <p className="text-sm text-destructive">{emailError}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`${testIdPrefix}-phone`}>Phone Number *</Label>
                    <Input
                      id={`${testIdPrefix}-phone`}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((current) => ({
                          ...current,
                          phone: formatPhoneNumber(e.target.value),
                        }))
                      }
                      required
                      maxLength={14}
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="(425) 555-0123"
                      data-testid={`${testIdPrefix}-phone`}
                    />
                    {showErrors && phoneError ? <p className="text-sm text-destructive">{phoneError}</p> : null}
                  </div>

                  <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                    {hasServiceStep ? (
                      <Button type="button" variant="outline" size="lg" className="w-full sm:flex-1" onClick={() => setStep(1)}>
                        <ChevronLeft className="mr-1 h-5 w-5" />
                        Back
                      </Button>
                    ) : null}
                    <Button
                      type="button"
                      size="lg"
                      className={cn("w-full text-lg font-bold", hasServiceStep ? "sm:flex-[2]" : "w-full")}
                      disabled={!canProceedContact}
                      onClick={() => {
                        setShowErrors(true);
                        if (canProceedContact) {
                          setStep(propertyStep);
                        }
                      }}
                      data-testid={`${testIdPrefix}-next-contact`}
                    >
                      Continue
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              ) : null}

              {step === propertyStep ? (
                <motion.div
                  key="property-step"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <div className="mb-5">
                    <h3 className="text-xl font-semibold text-foreground">{propertyStepTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{propertyStepDescription}</p>
                  </div>

                  <AddressAutocompleteField
                    address={formData.address}
                    addressConfirmed={formData.addressConfirmed}
                    error={showErrors ? addressError : null}
                    inputId={`${testIdPrefix}-address`}
                    label={addressRequired ? addressLabel : `${addressLabel} (optional)`}
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
                    placeholder={addressPlaceholder}
                    required={addressRequired}
                    resetKey={formResetKey}
                    zipCode={formData.zipCode}
                  />

                  {shouldCollectManualZip ? (
                    <div className="space-y-2">
                      <Label htmlFor={`${testIdPrefix}-zipCode`}>
                        ZIP Code {zipRequired ? "*" : "(optional)"}
                      </Label>
                      <Input
                        id={`${testIdPrefix}-zipCode`}
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData((current) => ({
                            ...current,
                            zipCode: e.target.value.replace(/\D/g, "").slice(0, 5),
                          }))
                        }
                        required={zipRequired}
                        autoComplete="postal-code"
                        inputMode="numeric"
                        placeholder="98028"
                        data-testid={`${testIdPrefix}-zip-code`}
                      />
                      {showErrors && zipCodeError ? <p className="text-sm text-destructive">{zipCodeError}</p> : null}
                    </div>
                  ) : null}

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 text-emerald-700" />
                      <p className="text-sm leading-6 text-emerald-900">
                        We use the property details to confirm service area coverage and give you a more accurate next step.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row">
                    <Button type="button" variant="outline" size="lg" className="w-full sm:flex-1" onClick={() => setStep(contactStep)}>
                      <ChevronLeft className="mr-1 h-5 w-5" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg font-bold shadow-xl transition-all duration-300 hover:shadow-2xl sm:flex-[2]"
                      disabled={!canSubmitProperty || createQuoteMutation.isPending || Boolean(serviceTypeError)}
                      data-testid={`${testIdPrefix}-submit`}
                    >
                      {createQuoteMutation.isPending ? "Submitting..." : submitLabel}
                    </Button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-semibold">{trustNote}</span>
          </div>

          <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">{legalNote}</p>
        </div>
      )}
    </Card>
  );
}
