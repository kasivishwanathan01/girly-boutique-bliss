
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBag } from "lucide-react";

export default function SuccessPage() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Your order has been placed successfully at Deepam Boutique. We've sent a confirmation email with all the details.
          </p>
          
          <div className="bg-white border border-cream-200 rounded-lg p-6 mb-8">
            <h2 className="font-medium text-xl mb-4">What's Next?</h2>
            <ul className="space-y-3 text-left">
              <li className="flex">
                <span className="bg-boutique-100 text-boutique-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                <span>You will receive an order confirmation email with details of your purchase.</span>
              </li>
              <li className="flex">
                <span className="bg-boutique-100 text-boutique-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                <span>Our team will process your order and arrange for shipping.</span>
              </li>
              <li className="flex">
                <span className="bg-boutique-100 text-boutique-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                <span>You'll receive shipping updates via email and SMS.</span>
              </li>
              <li className="flex">
                <span className="bg-boutique-100 text-boutique-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                <span>Your beautiful items from Deepam Boutique will be delivered to your doorstep!</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-boutique-600 hover:bg-boutique-700">
              <Link to="/shop">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
