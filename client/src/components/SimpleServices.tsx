const services = [
  { title: "Design & installation", description: "Commercial-grade lights, custom fitted to your home." },
  { title: "Season-long maintenance", description: "A light goes out? We take care of it." },
  { title: "After-holiday takedown", description: "We return to remove your display." },
  { title: "Storage included", description: "Your lights are packed away for next season." },
];

export default function SimpleServices() {
  return (
    <section className="home-included" aria-labelledby="included-heading">
      <div className="home-container">
        <div className="home-section-heading">
          <h2 id="included-heading">Your whole season, covered.</h2>
          <p>Included in every installation.</p>
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
