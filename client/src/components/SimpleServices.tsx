const services = [
  { title: "Commercial-grade lights", description: "Brighter and more even than store-bought strands." },
  { title: "Warm white or any color", description: "Same price, whatever you pick." },
  { title: "Clean installs", description: "Straight lines, tidy cords, no holes in your roof." },
  { title: "Free fixes", description: "A light goes out, we fix it free." },
  { title: "Takedown included", description: "No extra charge." },
];

export default function SimpleServices() {
  return (
    <section className="home-included" aria-labelledby="included-heading">
      <div className="home-container">
        <div className="home-section-heading">
          <h2 id="included-heading">Every install includes</h2>
        </div>
        <ul className="home-services-grid">
          {services.map(({ title, description }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
