// StarRating.tsx
import React from "react";
import { IoStar } from "react-icons/io5";

type StarRatingProps = {
  rating: number; // Rating from 0 to 5
};

const StarRating = ({ rating }: StarRatingProps) => {
  // Helper function to determine the style of each star
  const getStarStyle = (index: number) => {
    return index < rating ? "text-yellow-400" : "text-gray-300";
  };

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <IoStar className={`text-xl ${getStarStyle(index)}`} size={20} />
      ))}
    </div>
  );
};

export default StarRating;
