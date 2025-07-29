'use client';

import { Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

interface Plant {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rarity: 'common' | 'rare' | 'exotic';
  rating: number;
  reviews: number;
}

interface PlantCardProps {
  plant: Plant;
  onAddToCart: (plant: Plant) => void;
  onAddToWishlist: (plant: Plant) => void;
}

const plantImages: { [key: string]: string } = {
  // Only plants with actual images
  'monstera_thai_constellation': '/images/monstera_thai_constellation.jpg',
  'philodendron-pink-princess': '/images/philodendron-pink-princess.jpg',
  'string-of-pearls': '/images/string-of-pearls.jpg',
  'fiddle-leaf-fig': '/images/fiddle-leaf-fig.jpg'
};

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'exotic':
      return 'from-purple-500 to-pink-500';
    case 'rare':
      return 'from-emerald-500 to-green-500';
    default:
      return 'from-blue-500 to-cyan-500';
  }
};

const getRarityText = (rarity: string) => {
  switch (rarity) {
    case 'exotic':
      return 'Exotic';
    case 'rare':
      return 'Rare';
    default:
      return 'Common';
  }
};

export default function PlantCard({ plant, onAddToCart, onAddToWishlist }: PlantCardProps) {
  const imageKey = plant.image.split('/').pop()?.split('.')[0] || '';
  const imageSrc = plantImages[imageKey] || plant.image;
  
  // Fallback to a default image if the mapped image doesn't exist
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/images/monstera-leaf.jpg'; // Fallback to existing image
  };

  return (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
      {/* Image Container */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <div className="aspect-square relative">
          <Image
            src={imageSrc}
            alt={plant.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={handleImageError}
          />
        </div>
        
        {/* Rarity Badge */}
        <div className={`absolute top-3 left-3 bg-gradient-to-r ${getRarityColor(plant.rarity)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
          {getRarityText(plant.rarity)}
        </div>
        
        {/* Wishlist Button */}
        <button
          onClick={() => onAddToWishlist(plant)}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-emerald-300 hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-5 w-5" />
        </button>
        
        {/* Discount Badge */}
        {plant.originalPrice && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {Math.round(((plant.originalPrice - plant.price) / plant.originalPrice) * 100)}% OFF
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Title and Rating */}
        <div>
          <h3 className="font-bold text-white text-lg mb-2 drop-shadow-lg line-clamp-2">
            {plant.name}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(plant.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-emerald-200 text-sm">
              ({plant.reviews})
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-white drop-shadow-lg">
            ${plant.price}
          </span>
          {plant.originalPrice && (
            <span className="text-gray-400 line-through">
              ${plant.originalPrice}
            </span>
          )}
        </div>

        {/* Category */}
        <div className="text-emerald-200 text-sm font-medium">
          {plant.category}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(plant)}
          className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
} 