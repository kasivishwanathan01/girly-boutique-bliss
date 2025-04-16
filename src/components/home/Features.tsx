
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Heart 
} from "lucide-react";

const features = [
  {
    icon: <Truck className="h-10 w-10 text-boutique-600" />,
    title: "Free Shipping",
    description: "Free shipping on all orders over ₹999 across India"
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-boutique-600" />,
    title: "Secure Payments",
    description: "We use secure payment gateways for all transactions"
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-boutique-600" />,
    title: "Easy Returns",
    description: "Simple 30-day return policy for all products"
  },
  {
    icon: <Heart className="h-10 w-10 text-boutique-600" />,
    title: "Handpicked Quality",
    description: "Each product is carefully selected for premium quality"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white border-t border-cream-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-cream-50 transition-colors"
            >
              <div className="mb-4 rounded-full bg-boutique-100/40 p-3">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
