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

import residentialImage from '@assets/generated_images/Residential_premium_installation_example_a02eac2c.png';
import commercialImage from '@assets/generated_images/Commercial_building_Christmas_lights_3229c92b.png';
import customImage from '@assets/generated_images/Custom_design_Christmas_display_522afc58.png';
import maintenanceImage from '@assets/generated_images/Professional_installation_service_work_c902915b.png';
import teamImage from '@assets/generated_images/Installation_team_with_van_02da6032.png';
import beforeImage from '@assets/generated_images/Home_before_lights_installation_bd4baf00.png';
import afterImage from '@assets/generated_images/Home_after_lights_stunning_b02d705c.png';

import img1 from '@assets/generated_images/Residential_premium_installation_example_a02eac2c.png';
import img2 from '@assets/generated_images/Craftsman_home_roofline_lights_d0ca9edd.png';
import img3 from '@assets/generated_images/Victorian_home_elaborate_display_1ea18e4a.png';
import img4 from '@assets/generated_images/Commercial_building_Christmas_lights_3229c92b.png';
import img5 from '@assets/generated_images/Commercial_storefront_holiday_lights_9184c2f3.png';
import img6 from '@assets/generated_images/Office_building_entrance_lights_de349746.png';
import img7 from '@assets/generated_images/Custom_design_Christmas_display_522afc58.png';
import img8 from '@assets/generated_images/Wrapped_tree_front_yard_22286bba.png';
import img9 from '@assets/generated_images/Icicle_lights_detail_closeup_02c54991.png';
import img10 from '@assets/generated_images/Illuminated_wreath_front_door_c83a974c.png';
import img11 from '@assets/generated_images/Illuminated_pathway_entrance_lighting_aa3c2728.png';
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
      number: "100+",
      label: "Happy Clients",
      description: "Homes transformed across Greater Seattle"
    },
    {
      icon: TrendingUp,
      number: "$800+",
      label: "Starting Price",
      description: "Complete white-glove service included"
    },
    {
      icon: Clock,
      number: "5+ Years",
      label: "Experience",
      description: "Trusted designer lighting expertise"
    }
  ];

  const portfolioItems = [
    { id: 1, image: img1, category: "Residential", title: "Elegant Estate Lighting" },
    { id: 2, image: img2, category: "Residential", title: "Craftsman Home Display" },
    { id: 3, image: img3, category: "Residential", title: "Victorian Showcase" },
    { id: 4, image: img4, category: "Commercial", title: "Downtown Business" },
    { id: 5, image: img5, category: "Commercial", title: "Retail Storefront" },
    { id: 6, image: img6, category: "Commercial", title: "Office Building Entrance" },
    { id: 7, image: img7, category: "Custom", title: "Artistic Tree Display" },
    { id: 8, image: img8, category: "Custom", title: "Wrapped Evergreen" },
    { id: 9, image: img9, category: "Details", title: "Icicle Light Detail" },
    { id: 10, image: img10, category: "Details", title: "Illuminated Wreath" },
    { id: 11, image: img11, category: "Details", title: "Pathway Lighting" },
  ];

  const colorOptions = [
    {
      name: "Warm White",
      image: img1,
      description: "Classic, elegant glow perfect for traditional displays"
    },
    {
      name: "Pure White",
      image: img2,
      description: "Crisp, modern brightness for contemporary homes"
    },
    {
      name: "Red + White",
      image: img3,
      description: "Festive candy cane colors for holiday cheer"
    },
    {
      name: "Multicolor",
      image: img7,
      description: "Vibrant rainbow lights for a playful display"
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
