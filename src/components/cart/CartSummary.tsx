
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { subtotal, itemCount } = useCart();
  
  // Calculate shipping cost (free shipping over ₹999)
  const shippingCost = subtotal >= 999 ? 0 : 99;
  
  // Calculate tax (assuming 12% GST)
  const tax = subtotal * 0.12;
  
  // Calculate total
  const total = subtotal + shippingCost + tax;
  
  return (
    <div className="rounded-lg border border-cream-200 bg-white p-6">
      <h2 className="font-heading text-lg font-medium mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Shipping</span>
          {shippingCost === 0 ? (
            <span className="text-boutique-600">Free</span>
          ) : (
            <span>₹{shippingCost}</span>
          )}
        </div>
        
        <div className="flex justify-between text-base">
          <span className="text-muted-foreground">Tax (12% GST)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-cream-200 pt-3 mt-3">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex flex-col gap-3">
        <Button 
          asChild 
          className="w-full bg-boutique-600 hover:bg-boutique-700"
        >
          <Link to="/checkout">
            Proceed to Checkout
          </Link>
        </Button>
        
        <Button 
          asChild 
          variant="outline" 
          className="w-full"
        >
          <Link to="/shop">
            Continue Shopping
          </Link>
        </Button>
      </div>
      
      <div className="mt-6">
        <h3 className="font-medium mb-2">We Accept</h3>
        <div className="flex gap-2">
          <div className="h-8 w-12 rounded bg-gray-200"></div>
          <div className="h-8 w-12 rounded bg-gray-200"></div>
          <div className="h-8 w-12 rounded bg-gray-200"></div>
          <div className="h-8 w-12 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
