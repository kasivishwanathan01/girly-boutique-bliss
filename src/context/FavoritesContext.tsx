
import React, { createContext, useContext, useState, useEffect } from "react";
import { FavoriteItem } from "@/types";

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  favoriteCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('boutiqueFavorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem('boutiqueFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (productId: string) => {
    if (!isFavorite(productId)) {
      setFavorites(prev => [...prev, {
        productId,
        dateAdded: new Date().toISOString()
      }]);
    }
  };

  const removeFavorite = (productId: string) => {
    setFavorites(prev => prev.filter(item => item.productId !== productId));
  };

  const toggleFavorite = (productId: string) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  const isFavorite = (productId: string) => {
    return favorites.some(item => item.productId === productId);
  };

  const favoriteCount = favorites.length;

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    favoriteCount
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
