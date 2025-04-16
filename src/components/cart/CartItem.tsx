
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const product = getProductById(item.productId);
  
  if (!product) return null;
  
  const { name, images, price, discountPrice } = product;
  const displayPrice = discountPrice || price;
  const total = displayPrice * item.quantity;
  
  return (
    <div className="flex gap-4 py-4 border-b border-cream-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={images[0]}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3>{name}</h3>
          <p className="ml-4">₹{total.toLocaleString()}</p>
        </div>
        
        {(item.color || item.size) && (
          <div className="mt-1 text-sm text-muted-foreground">
            {item.color && <span className="mr-2">Color: {item.color}</span>}
            {item.size && <span>Size: {item.size}</span>}
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-muted-foreground hover:text-foreground"
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none text-muted-foreground hover:text-foreground"
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive"
            onClick={() => removeItem(item.productId)}
          >
            <Trash2 size={16} className="mr-1" /> Remove
          </Button>
        </div>
      </div>
    </div>
  );
}
