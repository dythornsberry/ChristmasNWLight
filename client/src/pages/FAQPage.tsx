import { useEffect } from "react";
import { useLocation } from "wouter";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";
import { CURRENT_SEASON_YEAR, FACEBOOK_URL, FIRST_SEASON_YEAR, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL } from "@/lib/business";

export default function FAQPage() {
  const [, setLocation] = useLocation();

  const scrollToQuote = () => {
    setLocation('/contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const faqCategories = [
    {
      category: "Pricing & what's included",
      questions: [
        {
          question: `How much does Christmas light installation cost in ${CURRENT_SEASON_YEAR}?`,
          answer: "A clean roofline starts at $800. Roofline + accents typically runs $1,000–$2,000, a full-property display $2,500–$3,500, and a large custom display $4,000+. Your quote depends on coverage, roof access, and design."
        },
        {
          question: "What's included?",
          answer: "We provide the lights, clips, and timers, plan the display, install it, and maintain it through the season. January takedown and storage until next season are included."
        },
        {
          question: "What if a light goes out?",
          answer: "Call or message us. Seasonal bulb replacement and display repairs are included. We'll arrange a service visit as weather and the route allow."
        },
        {
          question: "Is the quote free?",
          answer: "Yes. Send us your address or call (425) 215-0935. We'll recommend a design and price it for your home, with no obligation to book."
        }
      ]
    },
    {
      category: "Design & lights",
      questions: [
        {
          question: "Can you help me choose a design?",
          answer: "Yes. We plan rooflines, wreaths, bushes, and trees around your home. Choose warm white, multicolor, or custom colors, and approve the design before installation."
        },
        {
          question: "What kind of lights do you use?",
          answer: "We use commercial-grade outdoor LED lights, fitted to your roofline, with matching lights for trees, shrubs, and other accents."
        },
        {
          question: "Do you install lights I already own?",
          answer: "We only install and maintain our own lighting and materials. We don't install customer-provided lights, including Govee."
        },
        {
          question: "Do you offer permanent lighting?",
          answer: "Our service is seasonal: we install in the fall, maintain your display, then take down and store the lights in January. We don't install permanent lighting."
        },
        {
          question: "Can you recreate a display I had before?",
          answer: "Share a photo with us. We can usually create a similar design using our own lights."
        },
        {
          question: "Can I book tree lighting on its own?",
          answer: "Tree lighting is available as an addition to a roofline or primary home display. We don't book standalone tree installations."
        }
      ]
    },
    {
      category: "Booking & timing",
      questions: [
        {
          question: `When should I book for ${CURRENT_SEASON_YEAR}?`,
          answer: "Book early for the best choice of dates. Installations run from October through December, and the weeks around Thanksgiving fill quickly. We confirm availability before you book."
        },
        {
          question: "What happens after I request a quote?",
          answer: "We review your property and follow up with options and pricing. Once you approve your quote, we schedule installation."
        },
        {
          question: "When do you take down and store the lights?",
          answer: "We coordinate takedown in January, allowing for weather and access. We label and store your lights for next season. Both are included in your quote."
        },
        {
          question: "When is payment due?",
          answer: "Payment is due after installation. You can pay online by credit card, debit card, or ACH transfer, or contact us about another payment method."
        }
      ]
    },
    {
      category: "Our team",
      questions: [
        {
          question: "Do you offer a satisfaction guarantee?",
          answer: "If something doesn't match the approved design, contact us. We'll review it and make reasonable adjustments."
        },
        {
          question: "Are you licensed and insured?",
          answer: `Yes. Christmas Northwest is licensed, bonded, and insured. We've served Greater Seattle since ${FIRST_SEASON_YEAR}.`
        },
        {
          question: "Where do you work?",
          answer: "We serve Seattle and the Eastside, including Kenmore, Bothell, Kirkland, Woodinville, and Bellevue. Our team is based in Kenmore, with a warehouse in Woodinville."
        }
      ]
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://christmasnw.com" },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://christmasnw.com/faq" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Christmas Northwest",
    "alternateName": "ChristmasNW",
    "description": "Professional Christmas light installation serving Greater Seattle and the Eastside with custom design, installation, maintenance, takedown, and storage.",
    "url": "https://christmasnw.com/faq",
    "image": "https://christmasnw.com/og-image.png",
    "logo": "https://christmasnw.com/logo.png",
    "telephone": "+14252150935",
    "email": "christmaslightsnw@gmail.com",
    "foundingDate": String(FIRST_SEASON_YEAR),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": GOOGLE_RATING,
      "bestRating": "5",
      "reviewCount": GOOGLE_REVIEW_COUNT,
      "ratingCount": GOOGLE_REVIEW_COUNT
    },
    "sameAs": [
      FACEBOOK_URL,
      INSTAGRAM_URL,
      "https://share.google/lxhOxXmbPwABIqdNa"
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHead 
        title="Christmas Light Installation FAQ | Christmas Northwest"
        description="Answers to common Christmas light installation questions for Greater Seattle: pricing, process, timing, service areas, and what's included."
      />
      <StructuredData data={faqSchema} />
      <StructuredData data={localBusinessSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen bg-background">
        <UrgencyBanner />
        <StickyHeader onGetQuote={scrollToQuote} />

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background pb-12 pt-24 sm:pb-16 sm:pt-28 md:pt-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:mb-6 sm:h-16 sm:w-16">
              <HelpCircle className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
            </div>
            <h1 className="mb-5 font-serif text-3xl font-bold text-foreground sm:text-4xl md:mb-6 md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
              Pricing, booking, and what to expect.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12" data-testid={`faq-category-${categoryIndex}`}>
                <h2 className="mb-6 font-serif text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`category-${categoryIndex}-question-${questionIndex}`}
                      className="rounded-lg border bg-card px-4 sm:px-6"
                      data-testid={`faq-item-${categoryIndex}-${questionIndex}`}
                    >
                      <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary sm:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-muted-foreground sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-primary to-primary/90 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-base leading-7 text-primary-foreground/90 sm:text-lg md:text-xl">
              Call us or send a quote request. We'll help you plan your display.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                onClick={scrollToQuote}
                size="lg"
                variant="outline"
                className="bg-background px-8 text-base font-semibold text-foreground hover:bg-background/90 sm:w-auto sm:text-lg"
                data-testid="button-faq-get-quote"
              >
                Get a Quote
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+14252150935'}
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/50 bg-transparent px-8 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto sm:text-lg"
                data-testid="button-faq-call"
              >
                Call (425) 215-0935
              </Button>
            </div>
          </div>
        </section>

        <Footer />
        <StickyBottomCTA onGetQuote={scrollToQuote} />
      </div>
    </>
  );
}
