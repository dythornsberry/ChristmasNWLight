import { Card } from "@/components/ui/card";

interface ColorOption {
  name: string;
  image: string;
  description: string;
}

interface ColorOptionsProps {
  colors: ColorOption[];
}

export default function ColorOptions({ colors }: ColorOptionsProps) {
  return (
    <section id="colors" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Choose Your Color Scheme
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From classic warm white to festive multicolor, we have the perfect lighting option for your style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colors.map((color, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              data-testid={`card-color-${index}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={color.image}
                  alt={color.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {color.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {color.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
