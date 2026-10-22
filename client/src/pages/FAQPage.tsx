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

  // Ordered by how often real customers ask (Gmail, Quo calls and texts, 2023-2026).
  const faqCategories = [
    {
      category: "Price & quotes",
      questions: [
        {
          question: "How much does Christmas light installation cost?",
          answer: "Installs start at $800. Most homes land between $900 and $1,600, depending on how much you want lit up. We price the whole job, not by the foot. Steep roofs and big trees cost more. The lights are included."
        },
        {
          question: "How do I get a quote? Do you need to come out?",
          answer: "Fill out the form with your address. We can quote most rooflines from photos and aerial views. For trees, bushes, or bigger displays we'll stop by for a free 30-minute look. You don't need to be home."
        },
        {
          question: "Can you match a cheaper quote?",
          answer: "We don't price match. Our price covers commercial-grade lights, a clean install, free fixes all season, and takedown. Booking early and our 3-year plan are the best ways to save."
        },
        {
          question: "How does payment work?",
          answer: "A deposit holds your install date. The rest is due after install, by credit or debit card."
        }
      ]
    },
    {
      category: "Your lights",
      questions: [
        {
          question: "What can you light?",
          answer: "Rooflines, peaks, garages, columns, railings, trees, bushes, and wreaths. Every display starts with the roofline, then you add whatever you want."
        },
        {
          question: "What kind of lights do you use? Can I pick the color?",
          answer: "Commercial-grade LED C9 bulbs on the roofline and mini lights on trees, bushes, and columns. Warm white is the most popular, but any color or mix costs the same."
        },
        {
          question: "Can you wrap my trees?",
          answer: "Yes. Trees are priced by size. We usually wrap the trunk and lower branches, or the whole tree if you want. Trees over 20 feet need a lift and cost more."
        },
        {
          question: "Can you hang lights I already own?",
          answer: "No. We only install our own commercial-grade lights so we can stand behind them and fix them fast. We're happy to hang your own wreath."
        },
        {
          question: "Will it damage my roof or gutters?",
          answer: "No. We use plastic clips on shingles and gutters, so there are no nails or holes in your roof."
        }
      ]
    },
    {
      category: "Scheduling & service",
      questions: [
        {
          question: "How soon can you install?",
          answer: "Usually within 1 to 2 weeks of approving your quote. November fills up fastest, so earlier is easier. We schedule by neighborhood and text you the day before."
        },
        {
          question: "When do you take them down?",
          answer: "Takedown is included. We start right after the holidays. If you want them up longer, just ask."
        },
        {
          question: "What if some lights go out?",
          answer: "Text us at (425) 215-0935 and we'll fix it for free, usually within a couple of days. You don't need to be home."
        },
        {
          question: "Is a timer included?",
          answer: "Yes. We set up a timer so your lights come on every evening without you touching anything."
        },
        {
          question: "My breaker keeps tripping. What do I do?",
          answer: "Usually it's too much on one outlet or water in a plug. Text us and we'll come split the load across outlets."
        },
        {
          question: "Do I need to be home for the install?",
          answer: "No. We just need access to one outdoor outlet."
        },
        {
          question: "Can you clean my gutters too?",
          answer: "Yes. We can clean your gutters while we're up there at takedown. Ask for a price with your quote."
        },
        {
          question: "Where do you work?",
          answer: "Seattle and the Eastside, including Kirkland, Bellevue, Bothell, Kenmore, Woodinville, Redmond, and Sammamish."
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
    "description": "Professional Christmas light installation serving Greater Seattle and the Eastside.",
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
        title="Christmas Light Installation FAQ, Seattle | Christmas Northwest"
        description="Real answers to the questions Seattle-area homeowners ask us most about Christmas light installation: cost, quotes, colors, timing, and takedown."
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
        <section className="brand-cta py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-brand-blue">
              Still Have Questions?
            </h2>
            <p className="mb-8 text-base leading-7 text-muted-foreground sm:text-lg md:text-xl">
              Call us or send a quote request. We'll help you plan your display.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                onClick={scrollToQuote}
                size="lg"
                variant="outline"
                className="border-primary bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:text-lg"
                data-testid="button-faq-get-quote"
              >
                Get a Quote
              </Button>
              <Button
                onClick={() => window.location.href = 'tel:+14252150935'}
                size="lg"
                variant="outline"
                className="border border-brand-blue/40 bg-transparent px-8 text-base font-semibold text-brand-blue hover:bg-brand-blue/5 sm:w-auto sm:text-lg"
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
