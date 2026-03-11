import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            See The Transformation
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Drag the slider to see how we turn ordinary homes into extraordinary holiday displays
          </p>
          <p className="text-sm text-muted-foreground">
            Same house, before and after our professional installation
          </p>
        </div>

        <Card className="overflow-hidden max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative aspect-video cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            data-testid="before-after-slider"
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img 
                src={afterImage} 
                alt="After professional Christmas light installation"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                decoding="async"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                draggable={false}
              />
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground pointer-events-none">
                After
              </Badge>
            </div>

            {/* Before Image (Overlay with clip) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src={beforeImage} 
                alt="Before Christmas light installation"
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
                decoding="async"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                draggable={false}
              />
              <Badge className="absolute top-4 left-4 bg-muted text-muted-foreground pointer-events-none">
                Before
              </Badge>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-none">
                <MoveHorizontal className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This stunning transformation showcases what professional-grade lights and expert installation can do for your home. 
            We handle everything from custom design to installation, maintenance, and seasonal storage.
          </p>
        </div>
      </div>
    </section>
  );
}
