import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ColorOptions from "@/components/ColorOptions";
import BeforeAfter from "@/components/BeforeAfter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Home as HomeIcon, Building2, Sparkles, Wrench, TrendingUp, Users, Award, Clock } from "lucide-react";

import img1 from '@assets/2023-01-08-min_1762050962742.jpg';
import img2 from '@assets/2023-11-07-2-min_1762050962742.jpg';
import img3 from '@assets/2023-11-16-min_1762050962743.jpg';
import img4 from '@assets/2024-11-28-min_1762050962743.jpg';
import img5 from '@assets/2023-11-24-min_1762050962743.jpg';
import img6 from '@assets/2024-11-25-min_1762050962743.jpg';
import img7 from '@assets/2024-11-17-3-min_1762050962743.jpg';
import img8 from '@assets/2023-11-10-3-min_1762050962743.jpg';
import img9 from '@assets/2024-11-17-4-min_1762050962743.jpg';
import img10 from '@assets/2022-12-01-min_1762050962743.jpg';
import img11 from '@assets/unnamed-14-min_1762050962743.jpg';
import img12 from '@assets/2023-11-14-min_1762050962743.jpg';
import img13 from '@assets/2024-11-17-5-min_1762050962743.jpg';

import residentialImage from '@assets/2023-01-08-min_1762050962742.jpg';
import commercialImage from '@assets/2023-11-14-min_1762050962743.jpg';
import customImage from '@assets/2024-11-17-4-min_1762050962743.jpg';
import maintenanceImage from '@assets/2024-11-28-min_1762050962743.jpg';
import teamImage from '@assets/2024-11-17-3-min_1762050962743.jpg';
import beforeImage from '@assets/img4_1761853506443.webp';
import afterImage from '@assets/2023-01-08-min_1762050962742.jpg';
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
    { id: 1, image: img1, category: "Residential", title: "Modern Two-Story Warm White" },
    { id: 2, image: img2, category: "Residential", title: "Elegant Single-Story with Wreath" },
    { id: 3, image: img3, category: "Residential", title: "Multi-Gable Contemporary Home" },
    { id: 4, image: img4, category: "Residential", title: "Clean Modern Roofline" },
    { id: 5, image: img5, category: "Custom", title: "Red & Green Traditional Display" },
    { id: 6, image: img6, category: "Custom", title: "Multi-Color Large Home" },
    { id: 7, image: img7, category: "Custom", title: "Family Display with Trees" },
    { id: 8, image: img8, category: "Custom", title: "Vibrant Multicolor Installation" },
    { id: 9, image: img9, category: "Residential", title: "Tree Lighting Accent Feature" },
    { id: 10, image: img10, category: "Custom", title: "Red & Green in Snow" },
    { id: 11, image: img11, category: "Details", title: "Majestic Tree with Child" },
    { id: 12, image: img12, category: "Residential", title: "Upscale Brick Estate" },
    { id: 13, image: img13, category: "Custom", title: "Red & Green Split-Level" },
  ];

  const colorOptions = [
    {
      name: "Warm White",
      image: img1,
      description: "Classic, elegant glow perfect for traditional displays"
    },
    {
      name: "Multicolor",
      image: img8,
      description: "Festive and vibrant for a playful holiday display"
    },
    {
      name: "Red + Green",
      image: img5,
      description: "Traditional Christmas colors for classic cheer"
    },
    {
      name: "Red + White",
      image: img13,
      description: "Candy cane colors for festive charm"
    }
  ];

  const faqItems = [
    {
      question: "What's your starting price for Christmas light installation?",
      answer: "Our residential installations start at $800. This includes professional-grade LED lights, expert installation, maintenance throughout the season, professional takedown in January, and climate-controlled storage until next year. Final pricing depends on your home's size, roofline complexity, and the lighting design you choose."
    },
    {
      question: "Is light takedown included in the price?",
      answer: "Absolutely! Our full-service package includes professional takedown after the holidays. We carefully remove all lights, organize them, and store them in our climate-controlled facilities until next season—at no additional cost to you."
    },
    {
      question: "What if a bulb burns out during the season?",
      answer: "We've got you covered! Bulb replacements and repairs are included at no extra charge. We're available 24/7 during the season to handle any maintenance issues and keep your display looking perfect throughout the holidays."
    },
    {
      question: "Are you a licensed and insured business?",
      answer: "Yes! Christmas Northwest is fully licensed, bonded, and insured. We've been serving the Greater Seattle area for three seasons and have completed over 300 homes annually. Your property and our team are protected at every stage of the installation and maintenance process."
    },
    {
      question: "What's your installation process?",
      answer: "Our process is simple: First, you fill out our quote form and we get in touch to discuss your design vision. We create a custom plan—sometimes in person for complex projects. Once you approve the design, you place a $100 deposit to secure your spot. Then we schedule and complete your professional installation, typically within a week of booking during our busy season."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within a few hours, depending on your home's size and design complexity. We pride ourselves on fast turnaround—often installing within a week of booking during the season."
    },
    {
      question: "Do you hang lights that I already own?",
      answer: "We only install our own professional-grade lighting and materials. This ensures consistent quality, safety standards, and allows us to provide our comprehensive warranty and maintenance coverage throughout the season."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the Greater Seattle area, including Kenmore, Kirkland, Bothell, Woodinville, Redmond, Sammamish, Bellevue, and surrounding communities. Check our Service Areas page for the complete list, or contact us if you don't see your location listed."
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

      <Process />

      <CTABanner onGetQuote={scrollToQuote} />

      <FAQ items={faqItems} />

      <Footer />

      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
