import { useEffect } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import PageHead from "@/components/PageHead";
import StructuredData from "@/components/StructuredData";

export default function FAQPage() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.location.href = '/#quote';
    }
  };

  const faqCategories = [
    {
      category: "Common Questions",
      questions: [
        {
          question: "How quickly can you get me installed?",
          answer: "Within 3 days of your quote, we can book your installation date. The actual installation happens right after that, depending on how big the job is. Larger or more complex projects may take a bit longer to schedule, but we work hard to get you installed as quickly as possible."
        },
        {
          question: "Do you offer design help or do I pick the design?",
          answer: "We handle all the design work for you. During your free quote consultation, we discuss your vision: warm white (elegant), multicolor (festive), or a custom look. We then create a professional design recommendation based on your home's architecture and your preferences. You approve the design before we install, so you're in complete control."
        },
        {
          question: "What if I don't like my lights after installation?",
          answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with your installation, we'll make adjustments or provide a full refund. We've served 300+ homes annually and built our reputation on customer satisfaction, so your happiness is our top priority."
        },
        {
          question: "How do I know the price is fair?",
          answer: "We're transparent about pricing. Our Investment Guide shows real customer examples with actual photos and prices, so you can see exactly what installations cost. Pricing depends on roofline length, complexity, roof type/steepness, tree size, bush count, and design. We break down per-unit pricing ($5-$12/ft for rooflines, $275-$1,650+ per tree) so you understand what you're paying for. Get a free custom quote based on your specific home."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          question: "How much does Christmas light installation cost in 2026?",
          answer: "Our professional Christmas light installation starts at $800 for residential homes in the Seattle metro area. Most installations range from $1,000-$2,000 for typical homes. Here's what to expect: Basic rooflines without complex cuts usually cost $800-$1,500. Comprehensive displays with bushes, trees, and multiple design elements typically run $1,000-$2,000. Larger estates with extensive property coverage (50+ bushes, multiple trees, full roofline and ridgeline, columns, ground lights) can reach $10,000 or more, especially tree jobs which are labor-intensive due to setup and takedown time. All prices include commercial-grade LED lights, professional installation, maintenance throughout the season, professional takedown in January, and climate-controlled storage until next year. Get an exact quote based on your specific home and design preferences."
        },
        {
          question: "What's included in your Christmas light installation service?",
          answer: "Everything is included! You get commercial-grade LED lights and materials, professional design consultation, expert installation by our trained team, all necessary clips and mounting hardware, professional-grade timers, unlimited bulb replacement and repairs throughout the season, 24/7 seasonal support, professional takedown after the holidays, and year-round climate-controlled storage. It's completely done-for-you service. No ladder climbing, no storage hassles, no stress."
        },
        {
          question: "Is light takedown and storage included in the price?",
          answer: "Yes, absolutely. Professional takedown in January and year-round climate-controlled storage are included at no additional cost. We carefully remove all lights, organize them by home, and store them safely in our facilities until next season. You never have to worry about finding storage space or untangling lights."
        },
        {
          question: "Do you charge extra for bulb replacements or repairs during the season?",
          answer: "No! Bulb replacements and repairs are included at no extra charge throughout the entire holiday season. We use commercial-grade LED lights that are extremely reliable, but if anything goes out, we'll come fix it quickly (usually within 1-2 business days). This is part of our 100% satisfaction guarantee."
        }
      ]
    },
    {
      category: "Installation Process & Timeline",
      questions: [
        {
          question: "How long does Christmas light installation take?",
          answer: "Most residential installations are completed in 2-4 hours depending on your home's size and design complexity. Larger homes or custom design packages may take 4-8 hours. We work efficiently to minimize disruption to your day. After you book, most projects are scheduled and completed within one week during our busy season."
        },
        {
          question: "When should I schedule my Christmas light installation for 2026?",
          answer: "We recommend scheduling in October or early November to secure your preferred installation date and avoid the holiday rush. We offer installations from October through December, with priority given to early bookings. Our busiest time is mid-November through early December, so booking early ensures you get the exact date you want."
        },
        {
          question: "What's your installation process?",
          answer: "Our process is simple and stress-free: First, fill out our free quote form online or call us at (425) 215-0935. We'll discuss your design vision and provide a detailed quote. Once you approve the design, we'll book your installation date. Our professional team arrives on your scheduled date and completes the installation, typically within a few hours. We test everything to ensure it's perfect, then you simply enjoy your beautiful display all season long while we handle any maintenance needs."
        },
        {
          question: "How quickly can you install my lights?",
          answer: "We pride ourselves on same-week installation during most of the season. Once you book, we typically complete your installation within 5-7 days. During our busiest weeks in mid-November and early December, it may take slightly longer, which is why we encourage early booking."
        },
        {
          question: "When do you take down Christmas lights?",
          answer: "We professionally remove all lights in January, typically within 2-3 weeks after New Year's. We'll coordinate a specific takedown date with you. The takedown is just as careful and professional as the installation. We remove everything safely, organize your lights, and store them in our climate-controlled facilities until next season."
        }
      ]
    },
    {
      category: "Service Quality & Warranty",
      questions: [
        {
          question: "What if my lights go out or malfunction during the season?",
          answer: "We offer 24/7 support during the holiday season. Simply call us at (425) 215-0935 or send us a message, and we'll schedule a service visit to diagnose and fix the issue. Most problems can be resolved within 1-2 business days, and there's no charge for bulb replacement or minor repairs. Our commercial-grade LED lights are extremely reliable, but we stand behind every installation."
        },
        {
          question: "Do you offer a satisfaction guarantee?",
          answer: "Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with your installation, we'll make it right or provide a full refund. We've served over 300 homes annually and have built our reputation on quality workmanship and customer satisfaction. Your happiness is our top priority."
        },
        {
          question: "Are you licensed and insured?",
          answer: "Absolutely. ChristmasNW is fully licensed, bonded, and insured. We've been serving the Greater Seattle area since 2021 (entering our fourth season) and have completed installations for over 300 homes annually. Your property and our team are fully protected at every stage of installation and maintenance."
        },
        {
          question: "What makes your service different from competitors?",
          answer: "We offer same-week installation (not weeks of waiting), commercial-grade LED equipment (not flimsy consumer lights), included year-round storage (no clutter in your garage), 24/7 seasonal support with fast 48-hour touch-ups, and a true done-for-you experience. Plus, we're local to the Eastside, based in Kenmore with our warehouse in Woodinville, so we can respond quickly to any needs throughout the season."
        }
      ]
    },
    {
      category: "Equipment & Design",
      questions: [
        {
          question: "What type of Christmas lights do you use?",
          answer: "We use exclusively commercial-grade LED lights designed for professional installations. These are not the lights you buy at hardware stores. They're weatherproof, energy-efficient, significantly brighter, and built to last for years. We offer both warm white and multicolor options, along with specialty products like C9 bulbs, mini lights, ground stakes, tree wraps, and light spheres."
        },
        {
          question: "Can I choose custom colors or designs?",
          answer: "Yes! We offer fully customized designs tailored to your home and preferences. Choose from warm white (classic elegant look), multicolor (festive traditional look), or custom color combinations. We also offer specialty designs including tree wrapping, ground lighting, pathway lights, and architectural accent lighting. Our design consultation is included in every installation."
        },
        {
          question: "Can you install my client-owned lights or Govee lights?",
          answer: "No. We only install our own professional-grade commercial lighting equipment. We cannot install client-provided lights, Govee lights, or lights from other companies. This policy ensures consistent quality, safety standards, warranty coverage, and allows us to provide our comprehensive maintenance and support throughout the season. Using our equipment means we can guarantee everything will work perfectly and be maintained all season long."
        },
        {
          question: "Do you hang lights that I already own?",
          answer: "No. We only install our own professional-grade lighting and materials. Whether it's lights from previous years, consumer brand lights, smart home systems like Govee, or any other third-party equipment - we cannot use them. This ensures every installation meets our quality standards, safety requirements, and allows us to provide our full warranty and 24/7 maintenance support."
        },
        {
          question: "Can you match the lights I had from another company?",
          answer: "Yes, we can typically match or improve upon previous installations using our own commercial-grade equipment. During your design consultation, share photos or describe what you had before, and we'll create a similar or enhanced design using our professional-grade materials. We cannot use those previous lights - only our own equipment."
        },
        {
          question: "Do you install trees by themselves?",
          answer: "No. We only install trees as an addition to a roofline installation. Tree wrapping is labor-intensive and requires setup and takedown time equal to installation time, so we include it as part of a comprehensive home display. If you're interested in tree lighting, it must be combined with roofline or other primary home lighting as part of your project."
        }
      ]
    },
    {
      category: "Year-Round Services",
      questions: [
        {
          question: "Do you offer permanent outdoor lighting?",
          answer: "Yes, we offer permanent outdoor lighting, but we only install these in the off season because of the time and expertise required for a professional installation. These architectural LED lights can be controlled via smartphone app to display any color for any holiday or occasion. Contact us during the off season for a custom quote. Learn more on our Year-Round Services page."
        },
        {
          question: "Do you provide gutter cleaning services?",
          answer: "Yes, we can bundle gutter cleaning with your Christmas light installation service if your gutters are in decent shape. If they're really neglected or have heavy buildup, we'll recommend waiting until the off season when we can give them proper attention. During takedown in January, many homeowners bundle gutter cleaning as part of their overall maintenance."
        },
        {
          question: "Can you install landscape or bistro lighting?",
          answer: "Yes, we install custom landscape lighting and bistro lights for patios and outdoor entertainment areas, but all of these services are done in the off season. We focus exclusively on Christmas lighting from October through January, then handle our other specialty projects the rest of the year. Contact us during the off season for a custom quote based on your specific project."
        }
      ]
    },
    {
      category: "Booking & Payment",
      questions: [
        {
          question: "How do I book Christmas light installation for 2026?",
          answer: "Booking is easy! Fill out our free quote form on this page, or call us directly at (425) 215-0935. We'll discuss your design vision, provide a detailed quote, and once approved, we'll schedule your installation date."
        },
        {
          question: "When is payment due?",
          answer: "Payment is due after installation is complete. About 99% of our clients pay online by credit card, debit card, or ACH transfer. We also accept any other payment method you prefer."
        },
        {
          question: "Can I get a free quote without committing?",
          answer: "Yes! Our quotes are always free with no obligation. Fill out our quote form or call us, and we'll provide a detailed estimate based on your home and design preferences. You're under no obligation to book. We simply want to help you understand your options and pricing."
        }
      ]
    }
  ];

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
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kenmore",
      "addressRegion": "WA",
      "postalCode": "98028",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "reviewCount": "85",
      "ratingCount": "85"
    },
    "sameAs": [
      "https://www.facebook.com/ChristmasNW",
      "https://www.instagram.com/christmasnw/",
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
        description="Get answers to common questions about Christmas light installation in Seattle, Bellevue, Bothell, Kirkland, and Greater Seattle. Pricing, service areas, installation process, and more."
      />
      <StructuredData data={faqSchema} />
      <StructuredData data={localBusinessSchema} />
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
              Answers about pricing, timing, service areas, and how our installs work across Greater Seattle.
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
              We're here to help! Get in touch for personalized answers or request your free quote to get started with professional Christmas light installation in Greater Seattle and the Eastside.
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
