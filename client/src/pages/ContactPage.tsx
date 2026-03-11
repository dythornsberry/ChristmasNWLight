import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import LeadFormCard, { type LeadServiceOption } from "@/components/LeadFormCard";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Home, Mail, MapPin, MessageSquare, Phone, Sparkles, Sun, TreePine } from "lucide-react";

const CONTACT_SERVICE_OPTIONS: LeadServiceOption[] = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New installation or redesign", icon: TreePine },
  { value: "christmas-2026-returning", label: "Returning Customer", sublabel: "Existing client support or rebook", icon: Sparkles },
  { value: "permanent-lighting", label: "Permanent Lighting", sublabel: "Year-round programmable lighting", icon: Sun },
  { value: "year-round-services", label: "Year-Round Services", sublabel: "Gutters, bistro lights, and more", icon: Home },
  { value: "general-inquiry", label: "General Question", sublabel: "Fast callback without a project address", icon: MessageSquare },
];

export default function ContactPage() {
  const formId = "contact-request-form";

  const scrollToQuote = () => {
    const element = document.getElementById(formId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Contact Christmas Northwest | Request a Christmas Lighting Quote"
        description="Request a free quote from Christmas Northwest for Christmas lighting, permanent lighting, or year-round outdoor services in Greater Seattle."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
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
                Call us now or send a few project details below. We typically respond within 1 business day with
                next steps, pricing guidance, and the fastest available install dates.
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
              <div className="lg:col-span-2" id={formId}>
                <LeadFormCard
                  title="Request a Quote or Callback"
                  description="Short form, no obligation, and a cleaner way to tell us what you need without filling out a long page."
                  submitLabel="Request My Free Estimate"
                  successTitle="Thanks. We’ve got your request."
                  successDescription="Our team will review the details and follow up with the best next step, pricing guidance, or scheduling options."
                  trackingLabel="contact_page_quote"
                  formLocation="contact_page"
                  serviceOptions={CONTACT_SERVICE_OPTIONS}
                  initialServiceType="christmas-2026-new"
                  showServiceStep
                  serviceBadgeText="Contact page estimate form"
                  propertyStepDescription="If this is a true general question, you can leave the property fields blank. For quotes, the address helps us route and price the job accurately."
                  responseNote="Thanks. We'll reach out within 1 business day to talk through your project."
                  trustNote="Seattle-area service business, fast replies, and no-pressure estimate follow-up"
                  testIdPrefix="contact"
                />
              </div>

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
                    Based in Kenmore, WA. Serving Kirkland, Bothell, Woodinville, Bellevue, Seattle, and surrounding areas.
                  </p>

                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps?q=Kenmore%2C%20WA&z=11&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Christmas Northwest service area map centered on Kenmore, Washington"
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
