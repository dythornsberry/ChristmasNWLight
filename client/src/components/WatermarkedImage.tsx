import { useState, useEffect, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  enableLightbox?: boolean;
  watermarkText?: string;
}

export default function WatermarkedImage({ 
  src, 
  alt, 
  className = "", 
  enableLightbox = false,
  watermarkText = "ChristmasNW.com"
}: WatermarkedImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = () => {
    if (enableLightbox) {
      setIsLightboxOpen(true);
    }
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleKeyDown = (e: ReactKeyboardEvent) => {
    if (enableLightbox && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsLightboxOpen(true);
    }
  };

  // Add Escape key handler
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isLightboxOpen]);

  const Wrapper = enableLightbox ? 'button' : 'div';
  const wrapperProps = enableLightbox 
    ? {
        type: 'button' as const,
        onClick: handleImageClick,
        onKeyDown: handleKeyDown,
        className: `relative cursor-pointer border-0 p-0 bg-transparent w-full h-full ${className}`,
        'aria-label': `View ${alt} in full size`,
      }
    : {
        className: `relative ${className}`,
      };

  return (
    <>
      <Wrapper {...wrapperProps}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Watermark Overlay */}
        <div 
          className="absolute bottom-2 right-2 px-3 py-1 pointer-events-none"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '0.375rem'
          }}
        >
          <p className="text-white text-xs font-semibold tracking-wide">
            {watermarkText}
          </p>
        </div>
      </Wrapper>

      {/* Lightbox Modal */}
      {enableLightbox && isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={handleCloseLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={src} 
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {/* Watermark in lightbox too */}
            <div 
              className="absolute bottom-4 right-4 px-4 py-2"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '0.375rem'
              }}
            >
              <p className="text-white text-sm font-semibold tracking-wide">
                {watermarkText}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
