import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import LeadFormCard, { type LeadServiceOption } from "@/components/LeadFormCard";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Sparkles, TreePine } from "lucide-react";
import { businessSchema } from "@/lib/business";

const CONTACT_SERVICE_OPTIONS: LeadServiceOption[] = [
  { value: "christmas-2026-new", label: "Christmas Lighting", sublabel: "New installation or redesign", icon: TreePine },
  { value: "christmas-2026-returning", label: "Returning Customer", sublabel: "Existing client support or rebook", icon: Sparkles },
];

const contactBusinessSchema = businessSchema();

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
        title="Get a Christmas Lights Quote | Christmas Northwest, Seattle"
        description="Free quote for professional Christmas light installation in Seattle and the Eastside. Installs start at $800. Call (425) 215-0935."
      />
      <StructuredData data={contactBusinessSchema} />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        <section className="bg-background py-8 md:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <h1 className="mb-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Get a Christmas lighting quote
              </h1>
              <p className="mb-4 text-base leading-7 text-muted-foreground">
                Tell us about your home and we'll get back to you with a quote.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div className="scroll-mt-28 lg:col-span-2" id={formId}>
                <LeadFormCard
                  title="Get a free quote"
                  description=""
                  submitLabel="Get a Quote"
                  successTitle="Thanks. We’ve got your request."
                  successDescription="We'll be in touch to discuss your lights and quote."
                  trackingLabel="contact_page_quote"
                  formLocation="contact_page"
                  serviceOptions={CONTACT_SERVICE_OPTIONS}
                  initialServiceType="christmas-2026-new"
                  responseNote="We respond within 24 hours."
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
                    Based in Kenmore. Serving Seattle and the Eastside.
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
