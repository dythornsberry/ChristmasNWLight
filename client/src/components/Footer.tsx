import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Mail, Youtube } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Link } from "wouter";
import logo from '@assets/Christmas-NW3000px-1536x803-1 (1)_1761493054119.png';

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer id="contact" className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" onClick={handleLinkClick} className="hover:text-primary transition-colors">Christmas Lighting</Link></li>
              <li><Link href="/year-round-services" onClick={handleLinkClick} className="hover:text-primary transition-colors" data-testid="footer-link-year-round">Year-Round Services</Link></li>
              <li><Link href="/product-guide" onClick={handleLinkClick} className="hover:text-primary transition-colors">Product Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" onClick={handleLinkClick} className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#testimonials" onClick={handleLinkClick} className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/service-areas" onClick={handleLinkClick} className="hover:text-primary transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/gallery" onClick={handleLinkClick} className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/blog" onClick={handleLinkClick} className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/investment-guide" onClick={handleLinkClick} className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/faq" onClick={handleLinkClick} className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" onClick={handleLinkClick} className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground text-base mb-4">
              <li><a href="tel:4252150935" className="hover:text-primary transition-colors">(425) 215-0935</a></li>
              <li><a href="mailto:christmaslightsnw@gmail.com" className="hover:text-primary transition-colors">christmaslightsnw@gmail.com</a></li>
              <li>Kenmore, WA</li>
            </ul>
            <div className="flex gap-2">
              <a 
                href="https://www.facebook.com/ChristmasNW" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Button 
                  size="icon" 
                  variant="ghost"
                  data-testid="button-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://www.instagram.com/christmasnw/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Button 
                  size="icon" 
                  variant="ghost"
                  data-testid="button-instagram"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://youtube.com/@christmasnw?si=N5gu7fRN9vyEFMUd" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
              >
                <Button 
                  size="icon" 
                  variant="ghost"
                  data-testid="button-youtube"
                >
                  <Youtube className="w-4 h-4" />
                </Button>
              </a>
              <a 
                href="https://share.google/lxhOxXmbPwABIqdNa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Google Business Profile"
              >
                <Button 
                  size="icon" 
                  variant="ghost"
                  data-testid="button-google"
                >
                  <SiGoogle className="w-4 h-4" />
                </Button>
              </a>
            </div>
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
