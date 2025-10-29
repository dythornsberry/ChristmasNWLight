interface AboutProps {
  teamImage: string;
}

export default function About({ teamImage }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image First */}
          <div className="order-2 lg:order-1">
            <img 
              src={teamImage} 
              alt="Christmas Northwest professional installation team"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          {/* Content Second */}
          <div className="order-1 lg:order-2">
            <div className="mb-4 inline-block px-4 py-2 bg-primary/10 rounded-lg">
              <span className="text-primary font-semibold">Improve Your Holiday Experience</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Trusted Holiday Lighting Contractors
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Imagine stepping outside to a beautifully lit home after a long day. No more tangled lights or risky ladder climbs. Just a stunning holiday display designed for ultimate enjoyment.
              </p>
              <p>
                At Christmas Northwest, we transform tired holiday displays into stunning, low-maintenance showcases. Our expert holiday lighting contractors provide everything from beautiful roofline and tree installations in as little as one day to full-scale custom designs that completely transform your property.
              </p>
              <p>
                Whatever your needs, our team will work efficiently to minimize disruptions in your home and deliver results that exceed your expectations. We create dream holiday displays and deliver premier experiences.
              </p>
              <p className="font-semibold text-foreground">
                Contact Christmas Northwest today and turn your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
