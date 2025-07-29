'use client';

import { useState } from 'react';
import { Heart, Trash2, ShoppingCart, ArrowLeft, Share2 } from 'lucide-react';
import PlantCard from '../../components/PlantCard';
import AmbientBackground from '../../components/AmbientBackground';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rarity: 'common' | 'rare' | 'exotic';
  rating: number;
  reviews: number;
  addedDate: string;
}

const wishlistItems: WishlistItem[] = [
  {
    id: 1,
    name: "Monstera Deliciosa 'Thai Constellation'",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/monstera_thai_constellation.jpg",
    category: "Rare",
    rarity: "exotic",
    rating: 4.9,
    reviews: 127,
    addedDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Philodendron Pink Princess",
    price: 189.99,
    originalPrice: 249.99,
    image: "/images/philodendron-pink-princess.jpg",
    category: "Rare",
    rarity: "exotic",
    rating: 4.8,
    reviews: 89,
    addedDate: "2024-01-10"
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 89.99,
    image: "/images/fiddle-leaf-fig.jpg",
    category: "Indoor",
    rarity: "common",
    rating: 4.7,
    reviews: 234,
    addedDate: "2024-01-05"
  },
  {
    id: 4,
    name: "String of Pearls",
    price: 24.99,
    image: "/images/string-of-pearls.jpg",
    category: "Succulents",
    rarity: "common",
    rating: 4.6,
    reviews: 156,
    addedDate: "2024-01-01"
  }
];

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(wishlistItems);
  const [sortBy, setSortBy] = useState('date-added');

  const handleRemoveFromWishlist = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleAddToCart = (item: WishlistItem) => {
    console.log('Added to cart:', item.name);
    // TODO: Add to cart functionality
  };

  const handleMoveAllToCart = () => {
    console.log('Moving all items to cart');
    // TODO: Add all items to cart functionality
  };

  const sortedItems = [...items].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'date-added':
      default:
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
    }
  });

  const totalValue = items.reduce((sum, item) => sum + item.price, 0);
  const totalSavings = items.reduce((sum, item) => {
    const savings = (item.originalPrice || item.price) - item.price;
    return sum + savings;
  }, 0);

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-4 mb-4">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-emerald-300" />
                <h1 className="text-4xl font-bold text-white drop-shadow-2xl">My Wishlist</h1>
              </div>
            </div>
            <p className="text-emerald-100 drop-shadow-lg text-lg">Save your favorite plants for later</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-xl rounded-2xl p-6 border border-emerald-400/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <Heart className="h-6 w-6 text-emerald-300" />
                <span className="text-2xl font-bold text-white">{items.length}</span>
              </div>
              <p className="text-emerald-100">Items in Wishlist</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-400/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl font-bold text-white">${totalValue.toFixed(2)}</span>
              </div>
              <p className="text-blue-100">Total Value</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30 shadow-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl font-bold text-white">${totalSavings.toFixed(2)}</span>
              </div>
              <p className="text-green-100">Potential Savings</p>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-emerald-100">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                >
                  <option value="date-added" className="bg-gray-800 text-white">Date Added</option>
                  <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                  <option value="name" className="bg-gray-800 text-white">Name A-Z</option>
                  <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleMoveAllToCart}
                  className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Move All to Cart</span>
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Wishlist Items */}
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">💚</div>
              <h3 className="text-2xl font-bold text-white mb-2">Your wishlist is empty</h3>
              <p className="text-emerald-100 mb-6">Start adding plants you love to your wishlist</p>
              <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
                Browse Plants
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedItems.map((item) => (
                <div key={item.id} className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105">
                  {/* Image Container */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <div className="aspect-square relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="absolute top-3 right-3 p-2 bg-red-500/20 backdrop-blur-sm rounded-full text-red-300 hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    
                    {/* Added Date */}
                    <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                      {new Date(item.addedDate).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-bold text-white text-lg drop-shadow-lg line-clamp-2">
                      {item.name}
                    </h3>
                    
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-gray-400 line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-emerald-200 text-sm font-medium">
                      {item.category}
                    </div>
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 