import Hero from '../Hero';
import heroImage from '@assets/generated_images/Hero_home_Christmas_lights_dusk_a9a01c87.png';

export default function HeroExample() {
  return (
    <div style={{ backgroundImage: `url(${heroImage})` }}>
      <Hero onGetQuote={() => console.log('Get quote clicked')} />
    </div>
  );
}
