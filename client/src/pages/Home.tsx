import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Home as HomeIcon, Building2, Sparkles, Wrench } from "lucide-react";

import heroImage from '@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87.png';
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
      title: "Residential Premium",
      description: "Transform your home with elegant, professionally installed Christmas lights tailored to your architecture.",
      icon: HomeIcon,
      image: residentialImage
    },
    {
      title: "Commercial",
      description: "Make your business shine with eye-catching holiday displays that attract customers all season.",
      icon: Building2,
      image: commercialImage
    },
    {
      title: "Custom Design",
      description: "Unique, artistic light installations that make your property the talk of the neighborhood.",
      icon: Sparkles,
      image: customImage
    },
    {
      title: "Maintenance",
      description: "Keep your lights shining bright all season with our expert maintenance and repair services.",
      icon: Wrench,
      image: maintenanceImage
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

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Portland, OR",
      rating: 5,
      text: "ChristmasNW transformed our home into a winter wonderland! The installation was flawless and the lights look absolutely stunning.",
      detail: "250ft roofline installation with tree wrapping"
    },
    {
      name: "David Chen",
      location: "Seattle, WA",
      rating: 5,
      text: "Professional, punctual, and the results exceeded our expectations. Our business has never looked better during the holidays!",
      detail: "Commercial storefront installation"
    },
    {
      name: "Jennifer Armstrong",
      location: "Beaverton, OR",
      rating: 5,
      text: "We've used ChristmasNW for three years now. They're reliable, creative, and make the holiday season magical for our family.",
      detail: "3-story home with custom design elements"
    },
    {
      name: "Michael Roberts",
      location: "Vancouver, WA",
      rating: 5,
      text: "The team was incredibly professional and safety-conscious. They made our vision come to life perfectly!",
      detail: "Large residential property installation"
    },
    {
      name: "Lisa Thompson",
      location: "Hillsboro, OR",
      rating: 5,
      text: "From quote to installation, the entire process was smooth. The maintenance service throughout the season was excellent too.",
      detail: "Residential premium package with maintenance"
    },
    {
      name: "Robert Garcia",
      location: "Gresham, OR",
      rating: 5,
      text: "Outstanding work! Our neighbors are all asking who did our lights. Worth every penny for the quality and service.",
      detail: "Custom artistic light design"
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
    <div className="min-h-screen">
      <Header onGetQuote={scrollToQuote} />
      
      <div style={{ backgroundImage: `url(${heroImage})` }}>
        <Hero onGetQuote={scrollToQuote} />
      </div>

      <div id="services">
        <Services services={services} onLearnMore={handleServiceLearnMore} />
      </div>

      <div id="portfolio">
        <Portfolio items={portfolioItems} />
      </div>

      <BeforeAfter beforeImage={beforeImage} afterImage={afterImage} />

      <Testimonials testimonials={testimonials} />

      <div id="about">
        <About teamImage={teamImage} />
      </div>

      <QuoteForm onSubmit={handleQuoteSubmit} />

      <Footer />
    </div>
  );
}
