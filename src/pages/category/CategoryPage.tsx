
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

// Map category IDs to display names and banner images
const categoryDetails: Record<string, { title: string; description: string; image: string }> = {
  sarees: {
    title: "Sarees",
    description: "Exquisite collection of traditional and contemporary sarees for every occasion",
    image: "https://images.unsplash.com/photo-1610189000878-72ff65ab9b53?q=80&w=1974&auto=format&fit=crop"
  },
  jewelry: {
    title: "Jewelry",
    description: "Handcrafted jewelry pieces to complement your ethnic ensemble",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1974&auto=format&fit=crop"
  },
  dupattas: {
    title: "Dupattas",
    description: "Beautiful dupattas in various fabrics, colors, and designs",
    image: "https://images.unsplash.com/photo-1636910059178-7a69e4689ea4?q=80&w=1974&auto=format&fit=crop"
  },
  lehengas: {
    title: "Lehengas",
    description: "Stunning lehengas for weddings and special occasions",
    image: "https://images.unsplash.com/photo-1610189001353-89a30b2b7cdc?q=80&w=1974&auto=format&fit=crop"
  },
  kurtis: {
    title: "Kurtis",
    description: "Elegant and comfortable kurtis for everyday wear and special events",
    image: "https://images.unsplash.com/photo-1567520656624-5fa91b23741e?q=80&w=1974&auto=format&fit=crop"
  },
  accessories: {
    title: "Accessories",
    description: "Complete your look with our exclusive range of accessories",
    image: "https://images.unsplash.com/photo-1621871287904-f8083366d55a?q=80&w=1974&auto=format&fit=crop"
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "Discover our latest collections and fresh additions",
    image: "https://images.unsplash.com/photo-1573051758046-9a27c95b7fd2?q=80&w=1974&auto=format&fit=crop"
  }
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (category) {
      // For new-arrivals, filter products with isNew flag
      if (category === "new-arrivals") {
        import("@/data/products").then(module => {
          setProducts(module.products.filter(p => p.isNew));
        });
      } else {
        setProducts(getProductsByCategory(category));
      }
    }
    
    // Scroll to top when category changes
    window.scrollTo(0, 0);
  }, [category]);
  
  if (!category || !categoryDetails[category]) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 md:px-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p className="mb-6">
            The category you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <a href="/shop">Browse All Products</a>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const { title, description, image } = categoryDetails[category];
  
  return (
    <Layout>
      <div className="relative h-64 md:h-80">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="px-4">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              {title}
            </h1>
            <p className="text-white/90 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:px-6">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              We're working on adding products to this category. Check back soon!
            </p>
            <Button asChild>
              <a href="/shop">Browse All Products</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products in {title}
              </p>
            </div>
            
            <ProductGrid products={products} columns={3} />
          </>
        )}
      </div>
    </Layout>
  );
}
