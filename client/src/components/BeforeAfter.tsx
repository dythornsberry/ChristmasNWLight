import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            See The Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how we turn ordinary homes into extraordinary holiday displays
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img 
                src={beforeImage} 
                alt="Before installation"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-muted text-muted-foreground">
                Before
              </Badge>
            </div>
            <div className="relative aspect-video md:aspect-auto">
              <img 
                src={afterImage} 
                alt="After installation"
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                After
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
