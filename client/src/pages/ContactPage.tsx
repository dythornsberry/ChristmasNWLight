import { useState } from "react";
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
import { Phone, Mail, Clock, MapPin } from "lucide-react";
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
    zipCode: "",
    serviceType: "",
    referralSource: "",
    message: ""
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
      description: "We'll contact you within 24 hours. Thank you for reaching out!",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      zipCode: "",
      serviceType: "",
      referralSource: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StickyHeader onGetQuote={scrollToQuote} />
      
      {/* Seasonal Promotional Banner */}
      <div className="bg-primary/95 backdrop-blur-sm border-b border-primary-border">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-center text-primary-foreground font-semibold text-sm md:text-base">
            10% OFF October Installations - Book Before October 31st for Priority Scheduling!
          </p>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg mb-6">
                <span className="text-primary font-semibold">Contact Us</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Let's Get Started
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your home with beautiful holiday lighting? Fill out the form below or give us a call. We typically respond within 24 hours and most installations are completed within a week of booking.
              </p>
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
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                        data-testid="input-contact-zip"
                        placeholder="98028"
                        maxLength={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service of Interest *</Label>
                      <Select 
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        required
                      >
                        <SelectTrigger id="serviceType" data-testid="select-contact-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
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

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        data-testid="textarea-contact-message"
                        placeholder="Tell us about your project, timeline, or any specific requirements..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground font-semibold"
                      data-testid="button-contact-submit"
                    >
                      Send Message
                    </Button>
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
                    <div>Monday - Friday: 8am - 7pm</div>
                    <div>Saturday: 9am - 5pm</div>
                    <div>Sunday: 10am - 4pm</div>
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
                  <p className="text-sm text-muted-foreground">
                    Based in Kenmore, WA. Serving Kirkland, Bothell, Woodinville, and surrounding areas.
                  </p>
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
