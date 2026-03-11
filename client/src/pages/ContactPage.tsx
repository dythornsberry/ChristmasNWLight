import { useState } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { trackLeadConversion } from "@/lib/analytics";
import { formatPhoneNumber, hasCompletePhoneNumber } from "@/lib/leads";
import { useMutation } from "@tanstack/react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
 
const CONTACT_SERVICE_OPTIONS = [
  { value: "christmas-2026-new", label: "Christmas Lighting" },
  { value: "christmas-2026-returning", label: "Returning Customer" },
  { value: "permanent-lighting", label: "Permanent Lighting" },
  { value: "year-round-services", label: "Year-Round Outdoor Services" },
  { value: "general-inquiry", label: "General Question" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const formId = "contact-request-form";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    serviceType: "christmas-2026-new",
  });

  const scrollToQuote = () => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const createQuoteMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/quote-requests", data);
    },
    onSuccess: (_response, variables) => {
      toast({
        title: "Request Received!",
        description: "Thanks. We'll reach out within 1 business day to talk through your project.",
      });
      trackLeadConversion("contact_page_quote", {
        form_location: "contact_page",
        service_type: variables.serviceType,
      });
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        serviceType: "christmas-2026-new",
      });
    },
    onError: () => {
      toast({
        title: "Submission Problem",
        description: "We couldn't submit your request. Please call us or try again in a moment.",
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

  const canSubmit =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    hasCompletePhoneNumber(formData.phone) &&
    /^\d{5}$/.test(formData.zipCode) &&
    formData.serviceType !== "";

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Contact Christmas Northwest | Request a Christmas Lighting Quote"
        description="Request a free quote from Christmas Northwest for Christmas lighting, permanent lighting, or year-round outdoor services in Greater Seattle."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Free Estimates</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Talk to Christmas Northwest
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Call us now or send a few project details below. We typically respond within 1 business day with next steps, pricing guidance, and the fastest available install dates.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">24/7 Seasonal Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Most Homes $800-$2,000</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-2 text-foreground">Request a Quote or Callback</h2>
                  <p className="text-muted-foreground mb-6">
                    Short form, no obligation. Tell us what you need and we'll reach out fast.
                  </p>
                  
                  <form id={formId} onSubmit={handleSubmit} className="space-y-6 scroll-mt-28">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">What can we help you with? *</Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger id="serviceType" data-testid="select-contact-service-type">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {CONTACT_SERVICE_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          data-testid="input-contact-full-name"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-contact-email"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
                          required
                          data-testid="input-contact-phone"
                          placeholder="(425) 555-0123"
                          maxLength={14}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code *</Label>
                        <Input
                          id="zipCode"
                          inputMode="numeric"
                          value={formData.zipCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              zipCode: e.target.value.replace(/\D/g, "").slice(0, 5),
                            })
                          }
                          required
                          data-testid="input-contact-zip-code"
                          placeholder="98028"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        data-testid="input-contact-address"
                        placeholder="123 Main St, Seattle, WA"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary text-primary-foreground font-semibold"
                      data-testid="button-contact-submit"
                      disabled={!canSubmit || createQuoteMutation.isPending}
                    >
                      {createQuoteMutation.isPending ? "Submitting..." : "Request My Free Estimate"}
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>We respond within 1 business day and usually much faster during the season.</span>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <Card className="p-6" data-testid="card-contact-phone">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <a 
                        href="tel:4252150935" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-phone"
                      >
                        (425) 215-0935
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Call us for immediate assistance or questions about our services.
                  </p>
                </Card>

                <Card className="p-6" data-testid="card-contact-email">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <a 
                        href="mailto:christmaslightsnw@gmail.com" 
                        className="text-primary hover:underline text-sm"
                        data-testid="link-contact-email"
                      >
                        christmaslightsnw@gmail.com
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                </Card>

                <Card className="p-6" data-testid="card-contact-hours">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Hours</div>
                      <div className="text-sm text-muted-foreground">October - January</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="font-semibold text-foreground">24/7 During Season</div>
                    <div>Seven Days a Week</div>
                  </div>
                </Card>

                <Card className="p-6" data-testid="card-contact-location">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Service Area</div>
                      <div className="text-sm text-muted-foreground">Greater Seattle</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based in Kenmore, WA. Serving Kirkland, Bothell, Woodinville, and surrounding areas.
                  </p>
                  
                  {/* Embedded Map for Kenmore, WA */}
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21493.75663829!2d-122.25914!3d47.7575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901507c9c3b3cd%3A0x5d6f3f8a8c8a8c8a!2sKenmore%2C%20WA!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%" 
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      data-testid="map-kenmore"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
