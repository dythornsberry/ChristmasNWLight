import { useState } from "react";
import UrgencyBanner from "@/components/UrgencyBanner";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import StickyBottomCTA from "@/components/StickyBottomCTA";
import { Card } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function ContactPage() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    referralSource: ""
  });

  const scrollToQuote = () => {
    setLocation('/');
    setTimeout(() => {
      const element = document.getElementById('quote');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "Thank you for reaching out! We'll get back to you within 1 business day with a custom quote and answer to any questions you have.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      referralSource: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBanner />
      <StickyHeader onGetQuote={scrollToQuote} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Contact Us</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Ready to transform your home with beautiful holiday lighting? We're here to help! Fill out the form below or give us a call. Our team is responsive and friendly, and we typically get back to you within 1 business day.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-semibold">24/7 Seasonal Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          data-testid="input-contact-first-name"
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
                          data-testid="input-contact-last-name"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-contact-email"
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
                          data-testid="input-contact-phone"
                          placeholder="(206) 555-1234"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        data-testid="input-contact-address"
                        placeholder="123 Main St, Seattle, WA 98103"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="referralSource">How Did You Hear About Us?</Label>
                      <Select 
                        value={formData.referralSource}
                        onValueChange={(value) => setFormData({ ...formData, referralSource: value })}
                      >
                        <SelectTrigger id="referralSource" data-testid="select-contact-referral">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="nextdoor">Nextdoor</SelectItem>
                          <SelectItem value="neighbor">Neighbor / Friend Referral</SelectItem>
                          <SelectItem value="yard-sign">Yard Sign</SelectItem>
                          <SelectItem value="returning">Returning Customer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-primary text-primary-foreground font-semibold"
                      data-testid="button-contact-submit"
                    >
                      Send Message
                    </Button>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>We'll respond within 1 business day</span>
                    </div>
                  </form>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <Card className="p-6" data-testid="card-contact-phone">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <a 
                        href="tel:4252150935" 
                        className="text-primary hover:underline"
                        data-testid="link-contact-phone"
                      >
                        (425) 215-0935
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Call us for immediate assistance or questions about our services.
                  </p>
                </Card>

                <Card className="p-6" data-testid="card-contact-email">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <a 
                        href="mailto:christmaslightsnw@gmail.com" 
                        className="text-primary hover:underline text-sm"
                        data-testid="link-contact-email"
                      >
                        christmaslightsnw@gmail.com
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Send us an email and we'll respond within 24 hours.
                  </p>
                </Card>

                <Card className="p-6" data-testid="card-contact-hours">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Hours</div>
                      <div className="text-sm text-muted-foreground">October - January</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="font-semibold text-foreground">24/7 During Season</div>
                    <div>Seven Days a Week</div>
                  </div>
                </Card>

                <Card className="p-6" data-testid="card-contact-location">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Service Area</div>
                      <div className="text-sm text-muted-foreground">Greater Seattle</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Based in Kenmore, WA. Serving Kirkland, Bothell, Woodinville, and surrounding areas.
                  </p>
                  
                  {/* Embedded Map for Kenmore, WA */}
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21493.75663829!2d-122.25914!3d47.7575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901507c9c3b3cd%3A0x5d6f3f8a8c8a8c8a!2sKenmore%2C%20WA!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%" 
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      data-testid="map-kenmore"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBottomCTA onGetQuote={scrollToQuote} />
    </div>
  );
}
