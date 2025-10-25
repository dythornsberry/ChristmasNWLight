import Testimonials from '../Testimonials';

export default function TestimonialsExample() {
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

  return <Testimonials testimonials={testimonials} />;
}
