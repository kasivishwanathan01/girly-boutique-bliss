
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function StarRating({ 
  rating, 
  size = "md", 
  showText = false,
  className 
}: StarRatingProps) {
  // Determine star sizes based on the size prop
  const starSizes = {
    sm: 14,
    md: 18,
    lg: 22
  };
  
  const starSize = starSizes[size];
  
  // Calculate the number of full and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex">
        {/* Render full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`star-${i}`}
            size={starSize}
            className="fill-cream-600 text-cream-600"
          />
        ))}
        
        {/* Render half star if needed */}
        {hasHalfStar && (
          <StarHalf
            size={starSize}
            className="fill-cream-600 text-cream-600"
          />
        )}
        
        {/* Render empty stars */}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <Star
            key={`empty-star-${i}`}
            size={starSize}
            className="text-cream-300"
          />
        ))}
      </div>
      
      {showText && (
        <span className="ml-1 text-sm text-muted-foreground">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
