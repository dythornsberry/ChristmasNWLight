import ColorOptions from '../ColorOptions';
import warmWhite from '@assets/generated_images/Residential_premium_installation_example_a02eac2c.png';
import pureWhite from '@assets/generated_images/Craftsman_home_roofline_lights_d0ca9edd.png';
import redWhite from '@assets/generated_images/Victorian_home_elaborate_display_1ea18e4a.png';
import multicolor from '@assets/generated_images/Custom_design_Christmas_display_522afc58.png';

export default function ColorOptionsExample() {
  const colors = [
    {
      name: "Warm White",
      image: warmWhite,
      description: "Classic, elegant glow perfect for traditional displays"
    },
    {
      name: "Pure White",
      image: pureWhite,
      description: "Crisp, modern brightness for contemporary homes"
    },
    {
      name: "Red + White",
      image: redWhite,
      description: "Festive candy cane colors for holiday cheer"
    },
    {
      name: "Multicolor",
      image: multicolor,
      description: "Vibrant rainbow lights for a playful display"
    }
  ];

  return <ColorOptions colors={colors} />;
}
