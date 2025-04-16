
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, itemCount } = useCart();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          Your Shopping Bag
        </h1>

        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBag size={48} className="text-boutique-200 mb-4" />
            <h2 className="text-xl font-medium mb-2">Your bag is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Looks like you haven't added anything to your bag yet. Explore our collections and find something you'll love!
            </p>
            <Button asChild className="bg-boutique-600 hover:bg-boutique-700">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <div className="md:col-span-2">
              <div className="rounded-lg border border-cream-200 bg-white p-6">
                <div className="flex justify-between items-center pb-4 border-b border-cream-200">
                  <h2 className="font-heading text-lg font-medium">
                    Items ({itemCount})
                  </h2>
                  <Button 
                    asChild 
                    variant="link" 
                    className="text-boutique-600 hover:text-boutique-800"
                  >
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>
                </div>
                
                <div className="divide-y divide-cream-200">
                  {items.map((item) => (
                    <CartItem key={item.productId} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
