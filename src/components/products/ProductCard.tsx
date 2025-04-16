
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  const {
    id,
    name,
    price,
    discountPrice,
    images,
    rating,
    reviewCount,
    isNew,
    isFeatured
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(id);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(id);
  };

  const displayPrice = discountPrice || price;
  const hasDiscount = discountPrice && discountPrice < price;

  return (
    <Link 
      to={`/product/${id}`} 
      className="group relative flex flex-col overflow-hidden rounded-md border border-border bg-card transition-all hover:shadow-md"
    >
      {/* Product badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        {isNew && (
          <span className="rounded-full bg-lavender-500 px-2 py-0.5 text-xs font-medium text-white">
            New
          </span>
        )}
        {isFeatured && (
          <span className="rounded-full bg-cream-500 px-2 py-0.5 text-xs font-medium text-foreground">
            Featured
          </span>
        )}
        {hasDiscount && (
          <span className="rounded-full bg-boutique-500 px-2 py-0.5 text-xs font-medium text-white">
            {Math.round((1 - discountPrice / price) * 100)}% Off
          </span>
        )}
      </div>
      
      {/* Favorite button */}
      <button
        className="absolute top-2 right-2 z-10 p-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
        onClick={handleToggleFavorite}
        aria-label={isFavorite(id) ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart 
          size={18} 
          className={isFavorite(id) ? "fill-boutique-500 text-boutique-500" : "text-gray-500"} 
        />
      </button>
      
      {/* Product image */}
      <div className="aspect-square overflow-hidden bg-cream-50">
        <img
          src={images[0]}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Product content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-base font-medium line-clamp-1">{name}</h3>
        
        <div className="mt-1 flex items-center">
          <StarRating rating={rating} size="sm" />
          <span className="ml-1 text-xs text-muted-foreground">
            ({reviewCount})
          </span>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="font-medium text-lg">₹{displayPrice.toLocaleString()}</span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{price.toLocaleString()}
                </span>
              )}
            </div>
            
            <Button 
              size="sm" 
              variant={isInCart(id) ? "secondary" : "outline"}
              className={isInCart(id) ? "bg-lavender-100 text-lavender-800" : "border-boutique-300 hover:bg-boutique-100 hover:text-boutique-800"}
              onClick={handleAddToCart}
            >
              {isInCart(id) ? "Added" : "Add"}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
