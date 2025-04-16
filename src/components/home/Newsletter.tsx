
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your newsletter service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-boutique-100/70 to-lavender-100/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Subscribe to receive updates on new arrivals, special offers, and styling tips for your ethnic fashion journey
          </p>
          
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-boutique-200 focus:border-boutique-500 focus:ring-boutique-500"
            />
            <Button 
              type="submit" 
              className="bg-boutique-600 hover:bg-boutique-700 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
          
          {isSubmitted && (
            <p className="text-boutique-600 mt-2 font-medium">
              Thanks for subscribing!
            </p>
          )}
          
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
}
