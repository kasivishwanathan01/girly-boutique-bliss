
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { products, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { 
  Filter, 
  ChevronDown, 
  SortAsc, 
  SortDesc 
} from "lucide-react";
import { Product } from "@/types";

const categories = [
  { id: "all", name: "All Products" },
  { id: "sarees", name: "Sarees" },
  { id: "jewelry", name: "Jewelry" },
  { id: "dupattas", name: "Dupattas" },
  { id: "lehengas", name: "Lehengas" },
  { id: "kurtis", name: "Kurtis" },
  { id: "accessories", name: "Accessories" }
];

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "newest", name: "Newest Arrivals" },
  { id: "priceAsc", name: "Price: Low to High" },
  { id: "priceDesc", name: "Price: High to Low" },
  { id: "bestSelling", name: "Best Selling" },
  { id: "topRated", name: "Top Rated" }
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const sortParam = searchParams.get("sort") || "featured";
  
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    // Get products by category
    let filteredProducts = categoryParam === "all"
      ? [...products]
      : getProductsByCategory(categoryParam);
    
    // Sort products
    switch (sortParam) {
      case "newest":
        filteredProducts = filteredProducts.filter(p => p.isNew).concat(
          filteredProducts.filter(p => !p.isNew)
        );
        break;
      case "priceAsc":
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceA - priceB;
        });
        break;
      case "priceDesc":
        filteredProducts.sort((a, b) => {
          const priceA = a.discountPrice || a.price;
          const priceB = b.discountPrice || b.price;
          return priceB - priceA;
        });
        break;
      case "topRated":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "bestSelling":
        filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "featured":
      default:
        filteredProducts = filteredProducts.filter(p => p.isFeatured).concat(
          filteredProducts.filter(p => !p.isFeatured)
        );
        break;
    }
    
    setDisplayProducts(filteredProducts);
    
    // Scroll to top when filters change
    window.scrollTo(0, 0);
  }, [categoryParam, sortParam]);
  
  const handleCategoryChange = (categoryId: string) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("category", categoryId);
      return params;
    });
  };
  
  const handleSortChange = (sortId: string) => {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("sort", sortId);
      return params;
    });
  };
  
  return (
    <Layout>
      <div className="bg-cream-50 py-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our thoughtfully curated pieces that blend traditional craftsmanship with
            contemporary designs for the modern woman.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          {/* Mobile Filter Button */}
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden"
          >
            <Filter size={16} className="mr-2" />
            Filters
            <ChevronDown
              size={16}
              className={`ml-2 transition-transform ${
                isFilterOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
          
          {/* Desktop Category Filters */}
          <div className="hidden md:flex items-center space-x-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={categoryParam === category.id ? "default" : "outline"}
                size="sm"
                className={categoryParam === category.id 
                  ? "bg-boutique-600 hover:bg-boutique-700" 
                  : ""}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Sort Dropdown */}
          <div className="relative inline-block">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <select
                value={sortParam}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-white border border-cream-200 rounded-md py-1 px-3 text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-boutique-300"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                {sortParam.includes("Desc") ? (
                  <SortDesc size={14} />
                ) : (
                  <SortAsc size={14} />
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Category Filters */}
        {isFilterOpen && (
          <div className="md:hidden grid grid-cols-2 gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={categoryParam === category.id ? "default" : "outline"}
                size="sm"
                className={categoryParam === category.id 
                  ? "bg-boutique-600 hover:bg-boutique-700" 
                  : ""}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        )}
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {displayProducts.length} products
          </p>
        </div>
        
        {/* Product Grid */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              Try changing your filters to see more products
            </p>
            <Button
              onClick={() => {
                setSearchParams(new URLSearchParams({
                  category: "all",
                  sort: "featured"
                }));
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <ProductGrid products={displayProducts} columns={3} />
        )}
      </div>
    </Layout>
  );
}
