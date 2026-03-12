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
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16">
              <div className="mb-5 inline-block rounded-lg bg-primary/10 px-3.5 py-2 sm:mb-6 sm:px-4">
                <span className="text-primary font-semibold">Free Estimates</span>
              </div>
              <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-6xl">
                Talk to Christmas Northwest
              </h1>
              <p className="mb-6 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
                Call us now or send a few project details below. We reply quickly during the season and follow up
                with the best next step for your home or property.
              </p>
              <div className="grid grid-cols-1 gap-3 text-left text-foreground sm:grid-cols-2 sm:gap-4 md:flex md:flex-wrap md:justify-center md:gap-6">
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">24/7 Seasonal Support</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Most Homes $800-$2,000</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="lg:col-span-2" id={formId}>
                <LeadFormCard
                  title="Request a Quote or Callback"
                  description="Short form, no obligation, and a cleaner way to tell us what you need without filling out a long page."
                  submitLabel="Request My Free Estimate"
                  successTitle="Thanks. We’ve got your request."
                  successDescription="Our team will review the details and follow up with the best next step for your project."
                  trackingLabel="contact_page_quote"
                  formLocation="contact_page"
                  serviceOptions={CONTACT_SERVICE_OPTIONS}
                  initialServiceType="christmas-2026-new"
                  showServiceStep
                  serviceBadgeText="Contact page estimate form"
                  propertyStepDescription="If this is a true general question, you can leave the property fields blank. For quotes, the address helps us route and price the job accurately."
                  responseNote="Thanks. We'll be in touch soon to talk through your project."
                  trustNote="Seattle-area service business, fast replies, and no-pressure estimate follow-up"
                  testIdPrefix="contact"
                />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="p-5 sm:p-6" data-testid="card-contact-phone">
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

                <Card className="p-5 sm:p-6" data-testid="card-contact-email">
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
                    Send us an email and we'll get back to you as soon as we can.
                  </p>
                </Card>

                <Card className="p-5 sm:p-6" data-testid="card-contact-hours">
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

                <Card className="p-5 sm:p-6" data-testid="card-contact-location">
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
