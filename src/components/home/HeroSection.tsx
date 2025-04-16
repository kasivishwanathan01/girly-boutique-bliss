
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-boutique-100/50 to-cream-100/50 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-lavender-100/30 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-boutique-100/30 blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-20">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Discover Timeless <span className="text-boutique-600">Indian</span> Elegance 
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Exquisite ethnic fashion curated for the modern woman. Shop our collection of handcrafted sarees, jewelry, and accessories.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-boutique-600 hover:bg-boutique-700">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-boutique-200 hover:bg-boutique-100 hover:text-boutique-700">
              <Link to="/category/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <svg className="mr-2 h-4 w-4 text-boutique-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Free shipping on orders over ₹999</span>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 h-4 w-4 text-boutique-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span>Easy 30-day returns</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden md:flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-boutique-100/50 blur-xl"></div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl border-8 border-white shadow-xl transform rotate-3">
            <img
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974&auto=format&fit=crop"
              alt="Elegant woman in traditional Indian saree"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 aspect-square w-48 overflow-hidden rounded-xl border-8 border-white shadow-xl transform -rotate-6">
            <img
              src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=1974&auto=format&fit=crop"
              alt="Traditional Indian jewelry"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
