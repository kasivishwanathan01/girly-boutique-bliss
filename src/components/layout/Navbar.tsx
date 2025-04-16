
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  User 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Sarees", path: "/category/sarees" },
  { name: "Jewelry", path: "/category/jewelry" },
  { name: "Dupattas", path: "/category/dupattas" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { favoriteCount } = useFavorites();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-boutique-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
          
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-heading font-bold text-boutique-700">
                Bliss
                <span className="text-boutique-500">Boutique</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-primary"
            >
              <Search size={20} />
            </Button>
            
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Wishlist"
                className="text-foreground hover:text-primary relative"
              >
                <Heart size={20} />
                {favoriteCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-boutique-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {favoriteCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/cart">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Cart"
                className="text-foreground hover:text-primary relative"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-boutique-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/account">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Account"
                className="text-foreground hover:text-primary"
              >
                <User size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-white border-b border-boutique-100">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full p-4 bg-white border-b border-boutique-100 shadow-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 p-2 border border-boutique-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-boutique-300"
            />
            <Button className="rounded-l-none bg-boutique-500 hover:bg-boutique-600">
              <Search size={16} className="mr-2" /> Search
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
