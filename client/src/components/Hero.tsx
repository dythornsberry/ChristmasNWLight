import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage1 from '@assets/unnamed-14-min_1762058047475.jpg';
import heroImage2 from '@assets/2024-11-17-3-min_1762058047475.jpg';
import heroImage3 from '@assets/2023-11-14-min_1762058047475.jpg';
import heroImage4 from '@assets/2025-10-28-min_1762058047476.jpg';

interface HeroProps {
  onGetQuote?: () => void;
}

const heroImages = [
  { src: heroImage1, alt: "Child admiring beautifully lit Christmas tree" },
  { src: heroImage2, alt: "Family enjoying their custom holiday lighting" },
  { src: heroImage3, alt: "Elegant brick mansion with warm white lights" },
  { src: heroImage4, alt: "Spectacular custom tree display" }
];

export default function Hero({ onGetQuote }: HeroProps) {
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    serviceType: ""
  });

  // Auto-rotate hero images every 5 seconds, pause on user interaction
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Cleanup pause timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  // Pause auto-rotation when user interacts, resume after 10 seconds
  const handleUserInteraction = () => {
    setIsPaused(true);
    
    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Set new timeout to resume after 10 seconds
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      pauseTimeoutRef.current = null;
    }, 10000);
  };

  const handlePrevImage = () => {
    handleUserInteraction();
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNextImage = () => {
    handleUserInteraction();
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handleIndicatorClick = (index: number) => {
    handleUserInteraction();
    setCurrentImageIndex(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours with your custom estimate.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      serviceType: ""
    });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
          aria-label={image.alt}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/65" />
      
      {/* Carousel Navigation Buttons */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Previous image"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
        aria-label="Next image"
        data-testid="button-hero-next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
            data-testid={`indicator-hero-${index}`}
          />
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Headline & Offer */}
          <div className="text-white">
            {/* Pricing & Urgency Banner */}
            <div className="inline-flex items-center gap-3 bg-primary/95 backdrop-blur-sm px-6 py-3 rounded-lg mb-6 border-2 border-primary-border shadow-xl" data-testid="banner-hero-offer">
              <span className="text-2xl font-bold">$800+</span>
              <div className="h-6 w-px bg-primary-foreground/30" />
              <div>
                <div className="text-sm font-semibold">Residential Installations</div>
                <div className="flex items-center gap-1 text-xs text-primary-foreground/90">
                  <Clock className="w-3 h-3" />
                  <span>Same-Week Installation</span>
                </div>
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              Fast, Beautiful, and Premium Holiday Lighting
            </h1>
            
            <p className="text-2xl md:text-3xl mb-10 text-white/95 leading-relaxed font-semibold">
              Installed within a week of booking!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">5.0 (85+ Reviews)</span>
              </div>
              <div className="text-sm font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                24/7 Seasonal Availability
              </div>
            </div>

            <div className="space-y-4 text-white/90 text-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">Serving Hundreds of Homes Every Season</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-bold text-white">Licensed, Bonded & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-medium">Commercial-Grade LED Lights</span>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div id="quote" className="bg-card border border-border rounded-lg p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-2 text-foreground">Get Your Free Quote</h2>
            <p className="text-muted-foreground mb-6">Fill out the form below for a free installation estimate</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    data-testid="input-first-name"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    data-testid="input-last-name"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-phone"
                  placeholder="(425) 555-0123"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  required
                  data-testid="input-zip-code"
                  placeholder="98028"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Interest *</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                >
                  <SelectTrigger data-testid="select-service-type">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Installation</SelectItem>
                    <SelectItem value="commercial">Commercial Installation</SelectItem>
                    <SelectItem value="custom">Custom Design</SelectItem>
                    <SelectItem value="full-service">Full White-Glove Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg font-bold mt-6"
                data-testid="button-submit-quote"
              >
                Get My Free Quote
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="font-semibold">Licensed, Bonded & Insured Professional Service</span>
              </div>

              <p className="text-xs text-muted-foreground">
                By submitting this form, you consent to receive text messages and calls from Christmas Light Installers Northwest for marketing and customer care. Message frequency may vary. Reply "STOP" to unsubscribe. We will never share your information with 3rd parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
