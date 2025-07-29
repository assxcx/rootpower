'use client';

import { useState } from 'react';
import { Filter, Grid, List, Search, Star, Heart, ShoppingCart } from 'lucide-react';
import PlantCard from '../../components/PlantCard';
import AmbientBackground from '../../components/AmbientBackground';

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

const allPlants: Plant[] = [
  {
    id: 1,
    name: "Monstera Deliciosa 'Thai Constellation'",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/monstera_thai_constellation.jpg",
    category: "Rare",
    rarity: "exotic",
    rating: 4.9,
    reviews: 127
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
    reviews: 89
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 89.99,
    image: "/images/fiddle-leaf-fig.jpg",
    category: "Indoor",
    rarity: "common",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 4,
    name: "String of Pearls",
    price: 24.99,
    image: "/images/string-of-pearls.jpg",
    category: "Succulents",
    rarity: "common",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 5,
    name: "Monstera Albo Borsigiana",
    price: 450.00,
    image: "/images/monstera_thai_constellation.jpg",
    category: "Rare",
    rarity: "exotic",
    rating: 4.9,
    reviews: 203
  },
  {
    id: 6,
    name: "Philodendron White Wizard",
    price: 350.00,
    image: "/images/philodendron-pink-princess.jpg",
    category: "Rare",
    rarity: "exotic",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 7,
    name: "Snake Plant",
    price: 45.99,
    image: "/images/fiddle-leaf-fig.jpg",
    category: "Indoor",
    rarity: "common",
    rating: 4.5,
    reviews: 342
  },
  {
    id: 8,
    name: "Aloe Vera",
    price: 19.99,
    image: "/images/string-of-pearls.jpg",
    category: "Succulents",
    rarity: "common",
    rating: 4.4,
    reviews: 189
  }
];

const categories = ["All", "Rare", "Indoor", "Outdoor", "Succulents", "Tropical", "Bonsai"];
const rarities = ["All", "Common", "Rare", "Exotic"];
const priceRanges = ["All", "Under $50", "$50-$100", "$100-$200", "$200+"];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPlants = allPlants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesRarity = selectedRarity === 'All' || plant.rarity === selectedRarity.toLowerCase();
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      switch (selectedPriceRange) {
        case 'Under $50':
          matchesPrice = plant.price < 50;
          break;
        case '$50-$100':
          matchesPrice = plant.price >= 50 && plant.price <= 100;
          break;
        case '$100-$200':
          matchesPrice = plant.price >= 100 && plant.price <= 200;
          break;
        case '$200+':
          matchesPrice = plant.price >= 200;
          break;
      }
    }

    return matchesSearch && matchesCategory && matchesRarity && matchesPrice;
  });

  const sortedPlants = [...filteredPlants].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAddToCart = (plant: Plant) => {
    console.log('Added to cart:', plant.name);
  };

  const handleAddToWishlist = (plant: Plant) => {
    console.log('Added to wishlist:', plant.name);
  };

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">Shop Plants</h1>
            <p className="text-emerald-100 drop-shadow-lg text-lg">Discover our curated collection of premium plants</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters and Search */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 mb-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-800 text-white">
                    {category}
                  </option>
                ))}
              </select>

              {/* Rarity Filter */}
              <select
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity} className="bg-gray-800 text-white">
                    {rarity}
                  </option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range} className="bg-gray-800 text-white">
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort and View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-emerald-100">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              >
                <option value="featured" className="bg-gray-800 text-white">Featured</option>
                <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                <option value="name" className="bg-gray-800 text-white">Name A-Z</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-emerald-100">
              Showing {sortedPlants.length} of {allPlants.length} plants
            </p>
          </div>

          {/* Plants Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedPlants.map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedPlants.map((plant) => (
                <div key={plant.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="flex items-center space-x-6">
                    <div className="w-32 h-32 relative rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{plant.name}</h3>
                      <div className="flex items-center space-x-4 mb-3">
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
                        <span className="text-emerald-200 text-sm">({plant.reviews} reviews)</span>
                      </div>
                      <p className="text-emerald-200 mb-3">{plant.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-white">${plant.price}</span>
                          {plant.originalPrice && (
                            <span className="text-gray-400 line-through">${plant.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleAddToWishlist(plant)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:text-emerald-300 hover:bg-white/30 transition-all duration-300"
                          >
                            <Heart className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleAddToCart(plant)}
                            className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center space-x-2"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {sortedPlants.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold text-white mb-2">No plants found</h3>
              <p className="text-emerald-100">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
