import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead
        title="Privacy Policy | Christmas Northwest"
        description="Privacy policy for Christmas Northwest. Learn how we collect, use, and protect your personal information."
      />
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/30 to-background py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h1 className="mb-8 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-10 text-sm text-muted-foreground">
              Last updated: April 2026
            </p>

            <div className="space-y-8 text-base leading-7 text-muted-foreground">
              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">Who We Are</h2>
                <p>
                  Christmas Northwest is a holiday lighting installation company serving the Greater Seattle area. This policy explains how we handle your personal information when you use our website at christmasnw.com.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">What Information We Collect</h2>
                <p className="mb-3">
                  When you submit a quote request through our website, we collect:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Your name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Property address</li>
                </ul>
                <p className="mt-3">
                  We also collect anonymous usage data through Google Analytics (see "Cookies" below).
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">How We Use Your Information</h2>
                <p className="mb-3">
                  We use the information you provide to:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Contact you about your quote request</li>
                  <li>Provide pricing and schedule your installation</li>
                  <li>Communicate about our services</li>
                  <li>Improve our website and customer experience</li>
                </ul>
                <p className="mt-3">
                  That's it. We're a local service business — we use your info to get back to you and do the job.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">Third-Party Services</h2>
                <p className="mb-3">
                  To process your form submission and run our website, we use a few third-party services:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li><strong>Zapier</strong> — Processes form submissions and routes them to our team so we can respond quickly.</li>
                  <li><strong>Resend</strong> — Sends a backup email notification of your form submission to ensure we never miss a lead.</li>
                  <li><strong>Google Analytics (GA4)</strong> — Collects anonymous data about how visitors use our site (pages visited, time on site, etc.). This helps us understand what's working and improve the experience.</li>
                </ul>
                <p className="mt-3">
                  These services have their own privacy policies and handle data according to their own terms. We only share the minimum information needed for each service to function.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">We Do Not Sell Your Information</h2>
                <p>
                  We will never sell, rent, or trade your personal information to third parties. Your data is used solely to provide you with our services and communicate with you about your project.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">Cookies</h2>
                <p>
                  Our website uses cookies from Google Analytics to understand site traffic and usage patterns. These cookies collect anonymous, aggregated data — they don't identify you personally. You can disable cookies in your browser settings if you prefer, though some site features may not work as expected.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">Data Retention</h2>
                <p>
                  We keep your contact information for as long as needed to provide services and follow up on your request. If you'd like us to delete your information, just reach out and we'll take care of it.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-foreground">Contact Us</h2>
                <p className="mb-3">
                  If you have any questions about this privacy policy or how we handle your data, reach out:
                </p>
                <ul className="space-y-1">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:christmaslightsnw@gmail.com" className="text-primary hover:underline">
                      christmaslightsnw@gmail.com
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:4252150935" className="text-primary hover:underline">
                      (425) 215-0935
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
