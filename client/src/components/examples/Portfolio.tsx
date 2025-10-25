import Portfolio from '../Portfolio';
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

export default function PortfolioExample() {
  const items = [
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

  return <Portfolio items={items} />;
}
