
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Layout from "@/components/layout/Layout";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/sonner";
import { 
  CreditCard, 
  IndianRupee, 
  Check, 
  ArrowLeft,
  Phone
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Pincode must be 6 digits"),
  paymentMethod: z.enum(["card", "upi", "cod"])
});

type CheckoutFormValues = z.infer<typeof formSchema>;

export default function CheckoutPage() {
  const { items, itemCount, clearCart, subtotal } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Redirect to cart if cart is empty
    if (itemCount === 0) {
      navigate("/cart");
    }
  }, [itemCount, navigate]);
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "card"
    }
  });
  
  const onSubmit = async (data: CheckoutFormValues) => {
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle different payment methods
      if (data.paymentMethod === "card") {
        // In a real app, you would redirect to a payment gateway here
        // For demo purposes, we'll just simulate success
        handlePaymentSuccess();
      } else if (data.paymentMethod === "upi") {
        // In a real app, you would redirect to UPI payment page
        // For demo purposes, we'll just simulate success
        handlePaymentSuccess();
      } else {
        // COD - just process the order
        handlePaymentSuccess();
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      toast.error("Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handlePaymentSuccess = () => {
    // Clear the cart
    clearCart();
    
    // Show success toast
    toast.success("Order placed successfully!", {
      description: "Thank you for shopping with Deepam Boutique!",
      duration: 5000,
    });
    
    // Redirect to success page
    navigate("/checkout/success");
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="mb-6">
          <h1 className="font-heading text-2xl md:text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground mt-1">
            Complete your purchase at Deepam Boutique
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div className="md:col-span-2">
            <div className="rounded-lg border border-cream-200 bg-white p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="First name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Street address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <FormControl>
                            <Input placeholder="State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pincode</FormLabel>
                          <FormControl>
                            <Input placeholder="Pincode" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="border-t border-cream-200 pt-6">
                    <h3 className="font-heading text-lg font-medium mb-4">Payment Method</h3>
                    
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-3"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="card" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex items-center">
                                  <CreditCard className="mr-2 h-5 w-5 text-boutique-500" />
                                  Credit/Debit Card
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="upi" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex items-center">
                                  <IndianRupee className="mr-2 h-5 w-5 text-boutique-500" />
                                  UPI Payment
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="cod" />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer flex items-center">
                                  <Phone className="mr-2 h-5 w-5 text-boutique-500" />
                                  Cash on Delivery
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex items-center"
                      asChild
                    >
                      <Link to="/cart">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Return to Cart
                      </Link>
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-boutique-600 hover:bg-boutique-700 flex items-center"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Complete Order
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </Layout>
  );
}
