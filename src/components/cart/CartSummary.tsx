
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
          <div className="h-8 w-12 rounded bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div className="h-8 w-12 rounded bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700">
              <path d="M12 2v20M2 5h20M5.45 15.95a9 9 0 1 0 13.1-13.1" />
            </svg>
          </div>
          <div className="h-8 w-12 rounded bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700">
              <path d="M12 7c-1.93 0-3.5-1.57-3.5-3.5S10.07 0 12 0c1.93 0 3.5 1.57 3.5 3.5S13.93 7 12 7Z" />
              <path d="M20 21c0-4.41-3.59-8-8-8s-8 3.59-8 8h16Z" />
            </svg>
          </div>
          <div className="h-8 w-12 rounded bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-700">
              <path d="M7 20h10M10 20c0-4.4 1.6-8 3-8.5-1 0-3 0-3-6.5 0-4.4 2.6-5 4-5 1.4 0 4 .6 4 5 0 6.5-2 6.5-3 6.5 1.4.5 3 4.1 3 8.5M5 13h14" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
