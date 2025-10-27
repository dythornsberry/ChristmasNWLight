import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail } from "lucide-react";
import logo from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761493054119.png';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="h-16 mb-4">
              <img 
                src={logo} 
                alt="ChristmasNW" 
                className="h-full w-auto"
              />
            </div>
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
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="tel:4252150935" className="hover:text-primary transition-colors">(425) 215-0935</a></li>
              <li><a href="mailto:christmaslightsnw@gmail.com" className="hover:text-primary transition-colors">christmaslightsnw@gmail.com</a></li>
              <li>Kenmore, WA</li>
              <li className="pt-2 text-foreground font-semibold">Available 24/7 During Season</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Christmas Light Installers Northwest. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>Licensed, Bonded & Insured</span>
              <span>Greater Seattle Area</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
