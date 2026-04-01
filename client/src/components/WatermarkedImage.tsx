import { useState, useEffect, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { createPortal } from "react-dom";
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
          decoding="async"
        />
        {/* Watermark Overlay */}
        <div 
          className="absolute"
          style={{
            bottom: '12px',
            right: '12px',
            padding: '8px 16px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.05em',
            pointerEvents: 'none'
          }}
        >
          {watermarkText}
        </div>
      </Wrapper>

      {/* Lightbox Modal - Rendered via Portal */}
      {enableLightbox && isLightboxOpen && createPortal(
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center p-4 cursor-pointer"
          style={{ zIndex: 9999 }}
          onClick={handleCloseLightbox}
          data-testid="lightbox-overlay"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
            onClick={handleCloseLightbox}
            aria-label="Close lightbox"
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative max-w-7xl max-h-[90vh] cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={src} 
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
              decoding="async"
            />
            {/* Watermark in lightbox too */}
            <div 
              className="absolute"
              style={{
                bottom: '24px',
                right: '24px',
                padding: '10px 20px',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                borderRadius: '8px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                color: 'white',
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '0.05em',
                pointerEvents: 'none'
              }}
            >
              {watermarkText}
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm pointer-events-none">
            Click anywhere or press ESC to close
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
