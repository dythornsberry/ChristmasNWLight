import Services from '../Services';
import { Home, Building2, Sparkles, Wrench } from "lucide-react";
import residentialImage from '@assets/generated_images/Residential_premium_installation_example_a02eac2c.png';
import commercialImage from '@assets/generated_images/Commercial_building_Christmas_lights_3229c92b.png';
import customImage from '@assets/generated_images/Custom_design_Christmas_display_522afc58.png';
import maintenanceImage from '@assets/generated_images/Professional_installation_service_work_c902915b.png';

export default function ServicesExample() {
  const services = [
    {
      title: "Residential Premium",
      description: "Transform your home with elegant, professionally installed Christmas lights tailored to your architecture.",
      icon: Home,
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

  return <Services services={services} onLearnMore={(title) => console.log('Learn more:', title)} />;
}
