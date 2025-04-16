
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import StarRating from "@/components/products/StarRating";
import { Product } from "@/types";

export default function WishlistPage() {
  const { favorites, removeFavorite, favoriteCount } = useFavorites();
  const { addItem, isInCart } = useCart();
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const products = favorites.map(fav => {
      const product = getProductById(fav.productId);
      return product;
    }).filter(Boolean) as Product[];
    
    setWishlistProducts(products);
  }, [favorites]);
  
  const handleRemove = (productId: string) => {
    removeFavorite(productId);
  };
  
  const handleAddToCart = (productId: string) => {
    addItem(productId);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          Your Wishlist
        </h1>
        
        {favoriteCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Heart size={48} className="text-boutique-200 mb-4" />
            <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Save your favorite items to keep track of products you love.
            </p>
            <Button asChild className="bg-boutique-600 hover:bg-boutique-700">
              <Link to="/shop">Explore Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistProducts.map(product => (
              <div
                key={product.id}
                className="flex flex-col rounded-lg border border-cream-200 bg-white overflow-hidden"
              >
                <Link to={`/product/${product.id}`} className="group relative">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemove(product.id);
                    }}
                  >
                    <Trash2 size={16} className="text-boutique-500" />
                  </Button>
                </Link>
                
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-medium line-clamp-1 mb-1">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <StarRating rating={product.rating} size="sm" />
                    <span className="ml-1 text-xs text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="font-medium">
                      ₹{(product.discountPrice || product.price).toLocaleString()}
                    </span>
                    {product.discountPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-auto">
                    <Button
                      className="w-full bg-boutique-600 hover:bg-boutique-700"
                      onClick={() => handleAddToCart(product.id)}
                    >
                      <ShoppingBag size={16} className="mr-2" />
                      {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
