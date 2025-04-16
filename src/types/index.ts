
// Type definitions for Boutique Store

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface Review {
  id: string;
  productId: string;
  rating: number;
  username: string;
  date: string;
  comment: string;
  helpful: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
}

export interface FavoriteItem {
  productId: string;
  dateAdded: string;
}
