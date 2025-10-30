import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ColorOptions from "@/components/ColorOptions";
import BeforeAfter from "@/components/BeforeAfter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Home as HomeIcon, Building2, Sparkles, Wrench, TrendingUp, Users, Award, Clock } from "lucide-react";

import img1 from '@assets/img2_1761853506442.webp';
import img2 from '@assets/img3_1761853506443.webp';
import img3 from '@assets/img4_1761853506443.webp';
import img4 from '@assets/img5_1761853506443.webp';
import img5 from '@assets/img6_1761853506443.webp';
import img6 from '@assets/img7_1761853506443.webp';
import img7 from '@assets/img8_1761853506443.webp';
import img8 from '@assets/img9_1761853506444.webp';
import img9 from '@assets/img10_1761853506444.webp';
import img10 from '@assets/img11_1761853506444.webp';
import img11 from '@assets/img12_1761853506444.webp';
import img12 from '@assets/img13_1761853506444.webp';
import img13 from '@assets/img14_1761853506444.webp';
import img14 from '@assets/img15_1761853506444.webp';
import img15 from '@assets/img16_1761853506444.webp';

import residentialImage from '@assets/img4_1761853506443.webp';
import commercialImage from '@assets/img7_1761853506443.webp';
import customImage from '@assets/img16_1761853506444.webp';
import maintenanceImage from '@assets/img8_1761853506443.webp';
import teamImage from '@assets/img6_1761853506443.webp';
import beforeImage from '@assets/img4_1761853506443.webp';
import afterImage from '@assets/img11_1761853506444.webp';
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const services = [
    {
      title: "Designer Consultation",
      description: "Custom design tailored to your home's architecture with premium materials and attention to every detail.",
      icon: Sparkles,
      image: customImage
    },
    {
      title: "Professional Installation",
      description: "Expert installation with color-matched clips, hidden cords, smart timers, and dusk testing for perfection.",
      icon: HomeIcon,
      image: residentialImage
    },
    {
      title: "Complete Packages",
      description: "Rooflines, trees, wreaths, garlands, and path lighting for a cohesive, designer look throughout your property.",
      icon: Building2,
      image: commercialImage
    },
    {
      title: "White-Glove Service",
      description: "24/7 seasonal availability, maintenance guarantee, professional takedown, and climate-controlled storage.",
      icon: Wrench,
      image: maintenanceImage
    }
  ];

  const testimonials = [
    {
      name: "Kyle",
      location: "Greater Seattle Area",
      rating: 5,
      text: "This is the second year we used Christmas NW for our Christmas lights. Dylan and the crew went above and beyond to provide an exceptional stress free experience. They are reasonably priced, very knowledgeable, and have showcased a very high attention to even the smallest details.",
      detail: "Repeat customer - 2nd year installation"
    },
    {
      name: "Sandy Cocanour",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Outstanding professional service from the person answering the phone to the gentlemen installing the lights. Exceptional customer service from a local company!",
      detail: "Complete service experience"
    },
    {
      name: "Margaret Huddleston",
      location: "Greater Seattle Area",
      rating: 5,
      text: "What a fantastic business! I give my highest endorsement! From front office to the crew, all are professional, knowledgeable, friendly and do an amazing job creating a beautiful holiday display. They have above and beyond customer service.",
      detail: "Premium residential installation"
    },
    {
      name: "Nancy Greenup",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Dylan and his crew are the best! This is our 2nd install for the holidays and they have done an outstanding job both times. Lights look amazing, everyone has been most kind and responsive. I definitely recommend their service- you will be thrilled from start to finish!",
      detail: "Loyal customer - outstanding results"
    },
    {
      name: "Andrew Rampulla",
      location: "Greater Seattle Area",
      rating: 5,
      text: "Can't say enough good things about these guys. I've always done my own Christmas lights, but this year I decided to finally get some help and I'm very glad I did.",
      detail: "First-time professional installation"
    },
    {
      name: "Shawn Bailey",
      location: "Greater Seattle Area",
      rating: 5,
      text: "These guys are the absolute best in the game, these lights not only made my wife love me again but they also gave us the best looking house on the block!",
      detail: "Show-stopping display"
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "5.0",
      label: "Google Rating",
      description: "85+ five-star reviews from satisfied clients"
    },
    {
      icon: Users,
      number: "300+",
      label: "Homes Served",
      description: "Serving hundreds of homes every season"
    },
    {
      icon: TrendingUp,
      number: "$800+",
      label: "Starting Price",
      description: "Complete white-glove service included"
    },
    {
      icon: Clock,
      number: "4 Years",
      label: "Experience",
      description: "Now in our fourth season of excellence"
    }
  ];

  const portfolioItems = [
    { id: 1, image: img1, category: "Residential", title: "Classic Warm White Roofline" },
    { id: 2, image: img2, category: "Custom", title: "Modern Multicolor Display" },
    { id: 3, image: img3, category: "Residential", title: "Traditional Warm White" },
    { id: 4, image: img4, category: "Residential", title: "Contemporary Stone Accent" },
    { id: 5, image: img5, category: "Residential", title: "Large Estate Installation" },
    { id: 6, image: img6, category: "Residential", title: "Modern Gable Design" },
    { id: 7, image: img7, category: "Residential", title: "Split-Level Contemporary" },
    { id: 8, image: img8, category: "Custom", title: "Tree Canopy Entrance" },
    { id: 9, image: img9, category: "Residential", title: "Stone & Siding Combo" },
    { id: 10, image: img10, category: "Custom", title: "Patriotic Red & Blue" },
    { id: 11, image: img11, category: "Residential", title: "Elegant Warm White" },
    { id: 12, image: img12, category: "Custom", title: "Traditional Red & Green" },
    { id: 13, image: img13, category: "Details", title: "Wreaths & Accents" },
    { id: 14, image: img14, category: "Details", title: "Wrapped Tree Feature" },
    { id: 15, image: img15, category: "Custom", title: "Multi-Roofline Estate" },
  ];

  const colorOptions = [
    {
      name: "Warm White",
      image: img3,
      description: "Classic, elegant glow perfect for traditional displays"
    },
    {
      name: "Multicolor",
      image: img2,
      description: "Festive and vibrant for a playful holiday display"
    },
    {
      name: "Red + Green",
      image: img12,
      description: "Traditional Christmas colors for classic cheer"
    },
    {
      name: "Red + White",
      image: img14,
      description: "Candy cane colors for festive charm"
    }
  ];

  const faqItems = [
    {
      question: "What's your starting price for Christmas light installation?",
      answer: "Our installations typically start at around $800 for smaller homes. That includes custom-cut commercial-grade lights, professional installation, maintenance throughout the season, takedown in January, and storage. Final pricing depends on roof size, design complexity, and the type of lighting used."
    },
    {
      question: "Do you hang lights that I already own?",
      answer: "We do not install customer-provided lights. To ensure safety, consistent quality, and warranty coverage, we only install our own professional-grade lighting and materials that meet our standards."
    },
    {
      question: "Do you install permanent lighting?",
      answer: "We do not install permanent or year-round lighting systems. Our focus is on seasonal holiday lighting, where we provide full-service installation, maintenance, takedown, and storage each year."
    },
    {
      question: "When should I schedule my Christmas light installation?",
      answer: "We recommend scheduling as early as possible — ideally in September or October. Our calendar fills up fast as the holidays approach, and early bookings guarantee your installation."
    },
    {
      question: "What's included in your service?",
      answer: "We handle everything — from custom design and installation to maintenance, takedown, and storage. We provide all lights, clips, cords, timers, and other materials needed for a flawless setup."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed in a few hours or less, depending on the home and design. Larger homes and commercial jobs may take a full day."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes — Christmas Northwest is fully licensed, bonded, and insured. Your home and property are protected at every stage of the process."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the greater Seattle area, including Kenmore, Kirkland, Bothell, Woodinville, and surrounding communities."
    }
  ];

  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteSubmit = (data: any) => {
    console.log('Quote request submitted:', data);
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with a detailed estimate.",
    });
  };

  const handleServiceLearnMore = (serviceTitle: string) => {
    console.log('Learn more about:', serviceTitle);
    toast({
      title: `Learn More: ${serviceTitle}`,
      description: "Scroll down to request a quote for this service.",
    });
  };

  return (
    <div className="min-h-screen pb-20">
      <StickyHeader onGetQuote={scrollToQuote} />
      
      <Hero />

      <Services services={services} onLearnMore={handleServiceLearnMore} />

      <Portfolio items={portfolioItems} />

      <ColorOptions colors={colorOptions} />

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <Stats stats={stats} />

      <Testimonials testimonials={testimonials} />

      <About teamImage={teamImage} />

      <CTABanner onGetQuote={scrollToQuote} />

      <FAQ items={faqItems} />

      <Footer />

      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
