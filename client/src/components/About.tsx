interface AboutProps {
  teamImage: string;
}

export default function About({ teamImage }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image First */}
          <div className="order-2 lg:order-1">
            <img 
              src={teamImage} 
              alt="Christmas Northwest professional installation team"
              className="w-full rounded-lg shadow-2xl border-4 border-amber-500/10"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content Second */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 inline-block px-5 py-3 bg-gradient-to-r from-primary/15 to-primary/10 rounded-lg border border-amber-500/20">
              <span className="text-primary font-bold text-lg">Improve Your Holiday Experience</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8 text-foreground">
              Your Trusted Holiday Lighting Contractors
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Imagine stepping outside to a beautifully lit home after a long day. No more tangled lights or risky ladder climbs. Just a stunning holiday display designed for ultimate enjoyment.
              </p>
              <p>
                Now in our fourth season, Christmas Northwest has earned the trust of hundreds of homes every year across Greater Seattle. We transform tired holiday displays into stunning, low-maintenance showcases with expert installations completed within a week of booking.
              </p>
              <p>
                Our holiday lighting contractors provide everything from beautiful roofline and tree installations to full-scale custom designs that completely transform your property. Whatever your needs, our team will work efficiently to minimize disruptions and deliver results that exceed your expectations.
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
