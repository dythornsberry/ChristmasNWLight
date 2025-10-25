import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">
              ChristmasNW
            </h3>
            <p className="text-muted-foreground mb-4">
              Premium Christmas light installation services across the Pacific Northwest
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Residential Installation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Installation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance & Repair</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Service Areas</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Portland, OR</li>
              <li>Seattle, WA</li>
              <li>Vancouver, WA</li>
              <li>Beaverton, OR</li>
              <li>Hillsboro, OR</li>
              <li>Gresham, OR</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ChristmasNW.com. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">License #12345</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
