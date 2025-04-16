
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "@/types";
import { getProductById } from "@/data/products";

interface CartContextType {
  items: CartItem[];
  addItem: (productId: string, quantity?: number, color?: string, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('boutiqueCart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('boutiqueCart', JSON.stringify(items));
  }, [items]);

  const addItem = (productId: string, quantity = 1, color?: string, size?: string) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.productId === productId);
      
      if (existingItemIndex > -1) {
        // Update existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          color: color || updatedItems[existingItemIndex].color,
          size: size || updatedItems[existingItemIndex].size
        };
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, { productId, quantity, color, size }];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(prevItems => prevItems.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.productId === productId);
  };

  // Calculate total item count
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (!product) return total;
    const price = product.discountPrice || product.price;
    return total + (price * item.quantity);
  }, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    isInCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
