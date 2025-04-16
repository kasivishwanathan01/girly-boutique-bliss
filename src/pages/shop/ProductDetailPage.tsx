
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Share2, 
  ArrowLeft,
  MessageSquare,
  Truck,
  ShieldCheck
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { getProductById, getProductReviews, getRelatedProducts } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import StarRating from "@/components/products/StarRating";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { addItem, isInCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  
  const product = id ? getProductById(id) : null;
  const reviews = id ? getProductReviews(id) : [];
  const relatedProducts = product ? getRelatedProducts(product, 4) : [];
  
  // Scroll to top on component mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Set default color and size when product changes
  useEffect(() => {
    if (product) {
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [product]);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 md:px-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product.id, quantity, selectedColor, selectedSize);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="mb-6">
          <Link 
            to="/shop" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Shop
          </Link>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-cream-200 bg-white">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`aspect-square h-20 flex-shrink-0 overflow-hidden rounded border-2 ${
                      selectedImage === index
                        ? "border-boutique-500"
                        : "border-cream-200"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-2 flex items-center">
                <StarRating rating={product.rating} showText size="md" />
                <span className="ml-2 text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </span>
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-xl">
                <span className="font-semibold">
                  ₹{(product.discountPrice || product.price).toLocaleString()}
                </span>
                {product.discountPrice && (
                  <span className="text-muted-foreground line-through">
                    ₹{product.price.toLocaleString()}
                  </span>
                )}
                {product.discountPrice && (
                  <span className="rounded-full bg-boutique-100 px-2 py-0.5 text-xs font-medium text-boutique-700">
                    {Math.round((1 - product.discountPrice / product.price) * 100)}% Off
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`px-3 py-1 rounded-full border ${
                        selectedColor === color
                          ? "border-boutique-500 bg-boutique-50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 rounded-md flex items-center justify-center border ${
                        selectedSize === size
                          ? "border-boutique-500 bg-boutique-50 text-boutique-700"
                          : "border-gray-200"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row">
              <div className="flex items-center border border-gray-200 rounded w-32">
                <button
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) {
                      setQuantity(val);
                    }
                  }}
                  className="w-12 text-center border-0 focus:ring-0"
                />
                <button
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <Button
                className="flex-1 bg-boutique-600 hover:bg-boutique-700"
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} className="mr-2" />
                {isInCart(product.id) ? "Update Cart" : "Add to Cart"}
              </Button>
              
              <Button
                variant="outline"
                className={isFavorite(product.id) ? "bg-cream-100" : ""}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart
                  size={18}
                  className={isFavorite(product.id) ? "fill-boutique-500 text-boutique-500" : ""}
                />
              </Button>
              
              <Button variant="outline" className="hidden sm:flex">
                <Share2 size={18} />
              </Button>
            </div>
            
            {/* Product Meta */}
            <div className="border-t border-cream-200 pt-6 space-y-4">
              <div className="flex items-center">
                <Truck size={18} className="text-boutique-600 mr-2" />
                <span>Free shipping on orders over ₹999</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck size={18} className="text-boutique-600 mr-2" />
                <span>Secure payment & authentic products guaranteed</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-semibold mb-6 flex items-center">
            <MessageSquare size={24} className="mr-2" /> Customer Reviews
          </h2>
          
          {reviews.length === 0 ? (
            <div className="bg-white rounded-lg border border-cream-200 p-6 text-center">
              <p className="text-muted-foreground">No reviews yet. Be the first to review this product!</p>
              <Button className="mt-4 bg-boutique-600 hover:bg-boutique-700">
                Write a Review
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white rounded-lg border border-cream-200 p-6"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{review.username}</h3>
                      <div className="flex items-center mt-1">
                        <StarRating rating={review.rating} size="sm" />
                        <span className="ml-2 text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <button className="text-xs text-boutique-600 hover:underline">
                      Helpful ({review.helpful})
                    </button>
                  </div>
                  <p className="mt-4 text-muted-foreground">{review.comment}</p>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Button className="bg-boutique-600 hover:bg-boutique-700">
                  View All Reviews
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold mb-6">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </div>
        )}
      </div>
    </Layout>
  );
}
