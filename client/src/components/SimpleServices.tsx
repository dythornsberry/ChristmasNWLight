const services = [
  { title: "Install", description: "Lights fitted to your home." },
  { title: "Maintain", description: "We keep your display working." },
  { title: "Take down", description: "We return after the holidays." },
  { title: "Store", description: "Packed away until next season." },
];

export default function SimpleServices() {
  return (
    <section className="bg-[#f6f3ed] py-12 md:py-16" aria-labelledby="included-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="included-heading" className="font-serif text-3xl font-medium tracking-tight md:text-4xl">One service. All season.</h2>
          <p className="text-sm text-muted-foreground">All four included in your quote.</p>
        </div>
        <ol className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8">
          {services.map((service, index) => (
            <li key={service.title} className="border-t border-[#d8d4cb] pt-4">
              <span className="text-xs text-muted-foreground" aria-hidden="true">0{index + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
