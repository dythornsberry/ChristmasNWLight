import FAQ from '../FAQ';

export default function FAQExample() {
  const items = [
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
      answer: "We do not install permanent or year-round lighting systems. Our focus is on seasonal holiday lighting, where we provide full-service installation, maintenance, takedown, and storage each year. If you're looking for a bright, festive, and custom-designed display for the holidays, that's exactly what we specialize in."
    },
    {
      question: "When should I schedule my Christmas light installation?",
      answer: "We recommend scheduling as early as possible, ideally in September or October. Our calendar fills up fast as the holidays approach, and early bookings guarantee your installation."
    },
    {
      question: "What's included in your service?",
      answer: "We handle everything from custom design and installation to maintenance, takedown, and storage. We provide all lights, clips, cords, timers, and other materials needed for a flawless setup."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed in a few hours or less, depending on the home and design. Larger homes and commercial jobs may take a full day."
    }
  ];

  return <FAQ items={items} />;
}
