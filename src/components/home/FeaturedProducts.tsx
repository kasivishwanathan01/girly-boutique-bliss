
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(getFeaturedProducts());
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Featured Collections
            </h2>
            <p className="text-muted-foreground mt-2">
              Our carefully curated selection of premium ethnic wear and accessories
            </p>
          </div>
          <Link 
            to="/shop" 
            className="group inline-flex items-center text-boutique-600 hover:text-boutique-700 transition-colors font-medium"
          >
            View All Products
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} columns={3} />
      </div>
    </section>
  );
}
