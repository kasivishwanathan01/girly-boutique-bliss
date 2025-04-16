
import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream-100 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">BlissBoutique</h3>
            <p className="text-muted-foreground mb-4">
              Exquisite ethnic fashion for the modern woman. Discover our curated collection of sarees, jewelry, dupattas and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-foreground hover:text-boutique-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-foreground hover:text-boutique-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground hover:text-boutique-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Youtube" className="text-foreground hover:text-boutique-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/sarees" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Sarees
                </Link>
              </li>
              <li>
                <Link to="/category/jewelry" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link to="/category/dupattas" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Dupattas
                </Link>
              </li>
              <li>
                <Link to="/category/lehengas" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Lehengas
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-muted-foreground hover:text-boutique-500 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-boutique-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Fashion Street, Boutique Lane, Delhi 110001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-boutique-500 flex-shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-boutique-500 flex-shrink-0" />
                <span className="text-muted-foreground">hello@blissboutique.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream-300 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BlissBoutique. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-boutique-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-boutique-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping-policy" className="text-sm text-muted-foreground hover:text-boutique-500 transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
