
import { Product, Review } from "@/types";

// Mock product data for our boutique store
export const products: Product[] = [
  {
    id: "p1",
    name: "Floral Embroidered Silk Saree",
    description: "Elegant silk saree with intricate floral embroidery along the borders. This traditional piece features vibrant colors and a rich texture that drapes beautifully for special occasions.",
    price: 3999,
    discountPrice: 3499,
    images: [
      "https://images.unsplash.com/photo-1602424976535-c579688ebcd8?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620381537741-43134cee704e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611404456669-a7a22c3d38e2?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Sarees",
    tags: ["silk", "embroidered", "traditional", "wedding"],
    inStock: true,
    rating: 4.8,
    reviewCount: 36,
    isFeatured: true,
    colors: ["Red", "Blue", "Green", "Pink"],
    sizes: ["Free Size"]
  },
  {
    id: "p2",
    name: "Handcrafted Pearl Necklace Set",
    description: "Exquisite handcrafted pearl necklace set with matching earrings. The delicate pearl arrangement is complemented with gold-plated embellishments for a timeless look.",
    price: 2599,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Jewelry",
    tags: ["pearl", "necklace", "gold-plated", "wedding"],
    inStock: true,
    rating: 4.9,
    reviewCount: 42,
    isFeatured: true
  },
  {
    id: "p3",
    name: "Designer Georgette Dupatta",
    description: "Light and airy georgette dupatta with beautiful block printing. This versatile piece can be paired with various outfits to create elegant ethnic looks.",
    price: 999,
    discountPrice: 799,
    images: [
      "https://images.unsplash.com/photo-1605518290745-46a9026b5f0c?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604421986131-2ec828cf1290?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Dupattas",
    tags: ["georgette", "printed", "lightweight", "casual"],
    inStock: true,
    rating: 4.6,
    reviewCount: 28,
    isNew: true,
    colors: ["Yellow", "Pink", "Blue", "Green"]
  },
  {
    id: "p4",
    name: "Kundan Statement Earrings",
    description: "Elegant Kundan statement earrings crafted with precision. These eye-catching pieces feature traditional Kundan work with a modern design twist.",
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1630019852942-7a3592058eb8?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591210244853-171bad4a7f7a?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Jewelry",
    tags: ["kundan", "earrings", "statement", "festive"],
    inStock: true,
    rating: 4.7,
    reviewCount: 19,
    isNew: true
  },
  {
    id: "p5",
    name: "Banarasi Silk Lehenga",
    description: "Luxurious Banarasi silk lehenga with intricate zari work throughout. This stunning ensemble includes a matching choli and dupatta for a complete festive look.",
    price: 8999,
    discountPrice: 7599,
    images: [
      "https://images.unsplash.com/photo-1610189000878-72ff65ab9b53?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622949707087-81818d239992?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Lehengas",
    tags: ["banarasi", "silk", "bridal", "festive"],
    inStock: true,
    rating: 4.9,
    reviewCount: 24,
    isFeatured: true,
    colors: ["Maroon", "Royal Blue", "Dark Green", "Purple"],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "p6",
    name: "Handmade Silver Anklets",
    description: "Traditional handmade silver anklets with intricate detailing and tiny bells. These anklets add a touch of elegance with a subtle jingling sound when walking.",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1621870687304-ee0bc2c46e6e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1649261191606-cb2496e97eee?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Jewelry",
    tags: ["silver", "anklets", "traditional", "handmade"],
    inStock: true,
    rating: 4.8,
    reviewCount: 31
  },
  {
    id: "p7",
    name: "Embellished Clutch Purse",
    description: "Elegant clutch purse embellished with beads and sequins in intricate patterns. Perfect for weddings and festive occasions to complement your ethnic wear.",
    price: 1899,
    discountPrice: 1599,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Accessories",
    tags: ["clutch", "embellished", "festive", "wedding"],
    inStock: true,
    rating: 4.5,
    reviewCount: 16,
    colors: ["Gold", "Silver", "Black", "Rose Gold"]
  },
  {
    id: "p8",
    name: "Cotton Kurti with Embroidery",
    description: "Comfortable cotton kurti featuring delicate hand embroidery. This versatile piece can be styled in multiple ways for everyday elegance.",
    price: 1299,
    discountPrice: 999,
    images: [
      "https://images.unsplash.com/photo-1567520656624-5fa91b23741e?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589426030095-7d72893210d2?q=80&w=1974&auto=format&fit=crop"
    ],
    category: "Kurtis",
    tags: ["cotton", "embroidered", "casual", "daily wear"],
    inStock: true,
    rating: 4.6,
    reviewCount: 38,
    isNew: true,
    colors: ["White", "Blue", "Yellow", "Pink"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"]
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "p1",
    rating: 5,
    username: "Priya S.",
    date: "2023-09-15",
    comment: "Absolutely gorgeous saree! The embroidery detail is incredible and the fabric feels luxurious. Received so many compliments when I wore it for my sister's wedding.",
    helpful: 12
  },
  {
    id: "r2",
    productId: "p1",
    rating: 4,
    username: "Meera K.",
    date: "2023-10-02",
    comment: "Beautiful saree with vibrant colors that didn't fade even after dry cleaning. The only reason for 4 stars is that the delivery took longer than expected.",
    helpful: 8
  },
  {
    id: "r3",
    productId: "p2",
    rating: 5,
    username: "Anjali R.",
    date: "2023-11-14",
    comment: "The pearl necklace set is exquisite! The quality is exceptional, and it looks much more expensive than it actually was. Perfect for my engagement ceremony.",
    helpful: 15
  },
  {
    id: "r4",
    productId: "p3",
    rating: 5,
    username: "Divya T.",
    date: "2023-08-30",
    comment: "The dupatta is so versatile and the block printing is done beautifully. The fabric is perfect for all seasons and drapes so well.",
    helpful: 7
  },
  {
    id: "r5",
    productId: "p4",
    rating: 4,
    username: "Neha G.",
    date: "2023-12-05",
    comment: "These earrings are stunning and not too heavy despite their size. They really elevate any outfit. Only giving 4 stars because one of the stones was slightly loose, but I was able to fix it easily.",
    helpful: 9
  }
];

// Helper functions for product filtering and sorting
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductReviews = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getRelatedProducts = (product: Product, limit = 4): Product[] => {
  // Find products in the same category but exclude the current product
  const categoryProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  );
  
  // If not enough products in the same category, find products with similar tags
  let related = [...categoryProducts];
  if (related.length < limit) {
    const tagProducts = products.filter(
      p => p.id !== product.id && 
          p.category !== product.category &&
          p.tags.some(tag => product.tags.includes(tag))
    );
    related = [...related, ...tagProducts];
  }
  
  return related.slice(0, limit);
};
