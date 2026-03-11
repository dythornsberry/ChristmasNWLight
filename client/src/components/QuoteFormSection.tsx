import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { trackLeadConversion } from "@/lib/analytics";
import { formatPhoneNumber, hasCompletePhoneNumber } from "@/lib/leads";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { DollarSign, CheckCircle2, Phone, ChevronRight, ChevronLeft, Sparkles, TreePine, Sun, Wrench, Lamp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_OPTIONS = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New Customer", icon: TreePine },
  { value: "christmas-2026-returning", label: "Christmas Lighting", sublabel: "Returning Customer", icon: Sparkles },
  { value: "permanent-lighting", label: "Permanent Outdoor Lighting", sublabel: "Year-round solution", icon: Sun },
  { value: "gutter-maintenance", label: "Gutter & Roof Maintenance", sublabel: "Cleaning & repair", icon: Wrench },
  { value: "landscape-lighting", label: "Landscape / Bistro Lighting", sublabel: "Accent & patio lighting", icon: Lamp },
];

export default function QuoteFormSection() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    serviceType: ""
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: (_response, variables) => {
      setIsSubmitted(true);
      toast({
        title: "Quote Request Received!",
        description: "We'll contact you within 24 hours with your custom estimate.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
      trackLeadConversion("homepage_quote", {
        form_location: "homepage",
        service_type: variables.serviceType,
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was a problem submitting your quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createQuoteMutation.mutate({
      ...formData,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      address: formData.address.trim(),
      zipCode: formData.zipCode.trim(),
    });
  };

  const canProceedStep1 = formData.serviceType !== "";
  const canProceedStep2 =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    hasCompletePhoneNumber(formData.phone);
  const canSubmitStep3 = /^\d{5}$/.test(formData.zipCode);

  const stepVariants = {
    enter: { opacity: 0, x: 30 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section id="quote" className="py-20 bg-muted/30 scroll-mt-28">
      <div id="quote-form" className="scroll-mt-28" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-6">
        {/* Quick Call CTA - Mobile Optimized */}
        <div className="mb-8 md:mb-10">
          <div className="bg-primary/90 rounded-lg p-6 md:p-8 text-center">
            <p className="text-primary-foreground text-sm md:text-base mb-3">
              Want to talk to our team right now?
            </p>
            <a
              href="tel:4252150935"
              data-testid="button-quote-call-now"
            >
              <Button
                size="lg"
                className="w-full md:w-auto bg-white text-primary hover:bg-white/90 font-bold text-lg"
              >
                Call Now: (425) 215-0935
              </Button>
            </a>
            <p className="text-primary-foreground/80 text-xs mt-3">
              Available 7am-8pm daily. Free consultation, no obligation.
            </p>
          </div>
        </div>

        <Card className="p-10 md:p-14 shadow-2xl border-2 border-amber-500/10">
          {isSubmitted ? (
            <div className="text-center py-8" data-testid="quote-success-message">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-serif">
                Thank You!
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Your quote request has been received. We'll contact you within 24 hours.
              </p>
              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <p className="text-foreground font-medium mb-2">Want to speed things up?</p>
                <a href="tel:4252150935">
                  <Button size="lg" className="bg-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (425) 215-0935
                  </Button>
                </a>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    address: "",
                    zipCode: "",
                    serviceType: ""
                  });
                }}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
          <>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Badge
                variant="outline"
                className="px-6 py-2.5 text-base md:text-lg font-semibold border-2 border-amber-500/40 bg-amber-500/10 text-foreground"
                data-testid="badge-pricing-indicator"
              >
                <DollarSign className="w-5 h-5 mr-2 text-amber-600" />
                Most homes $800-$2,000 &bull; All-inclusive service
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-serif">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Quick 3-step form. No obligation. We'll contact you within 24 hours.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  <span className={`ml-2 text-sm font-medium hidden sm:inline ${
                    s <= step ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {s === 1 ? 'Service' : s === 2 ? 'Contact' : 'Property'}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Service Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">What can we help you with?</h3>
                  <div className="grid gap-3">
                    {SERVICE_OPTIONS.map((option) => {
                      const Icon = option.icon;
                      const isSelected = formData.serviceType === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: option.value })}
                          className={`flex items-center gap-4 p-4 rounded-lg border-2 text-left transition-all ${
                            isSelected
                              ? 'border-primary bg-primary/5 shadow-md'
                              : 'border-border hover:border-primary/40 hover:bg-muted/50'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{option.label}</div>
                            <div className="text-sm text-muted-foreground">{option.sublabel}</div>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-primary ml-auto" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-600 font-medium">Book now for 2026:</span> Early reservations get first choice of install dates
                  </p>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full mt-4 text-lg font-bold"
                    disabled={!canProceedStep1}
                    onClick={() => setStep(2)}
                  >
                    Next <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">How can we reach you?</h3>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      data-testid="input-full-name"
                      placeholder="John Smith"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
                      required
                      data-testid="input-phone"
                      placeholder="(425) 555-0123"
                      maxLength={14}
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      <ChevronLeft className="w-5 h-5 mr-1" /> Back
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      className="flex-[2] text-lg font-bold"
                      disabled={!canProceedStep2}
                      onClick={() => setStep(3)}
                    >
                      Next <ChevronRight className="w-5 h-5 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Property Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">Where's the property?</h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      data-testid="input-address"
                      placeholder="123 Main Street (optional)"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          zipCode: e.target.value.replace(/\D/g, "").slice(0, 5),
                        })
                      }
                      required
                      data-testid="input-zip-code"
                      placeholder="98028"
                    />
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(2)}
                    >
                      <ChevronLeft className="w-5 h-5 mr-1" /> Back
                    </Button>
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-[2] text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                      data-testid="button-submit-quote"
                      disabled={!canSubmitStep3 || createQuoteMutation.isPending}
                    >
                      {createQuoteMutation.isPending ? "Submitting..." : "Light Up My Home ✨"}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-semibold">Licensed, Bonded & Insured Professional Service</span>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-3">
            By submitting this form, you consent to receive text messages and calls from Christmas Light Installers Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with 3rd parties.
          </p>
          </>
          )}
        </Card>
      </div>
    </section>
  );
}
