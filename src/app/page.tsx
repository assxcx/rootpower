'use client';

import { useState } from 'react';
import { ArrowRight, Leaf, Sparkles, Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import FeaturedSection from '../components/FeaturedSection';
import CareTips from '../components/CareTips';
import StatsSection from '../components/StatsSection';
import AmbientBackground from '../components/AmbientBackground';

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

const featuredPlants: Plant[] = [
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
    name: "String of Pearls",
    price: 24.99,
    image: "/images/string-of-pearls.jpg",
    category: "Succulents",
    rarity: "common",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 89.99,
    image: "/images/fiddle-leaf-fig.jpg",
    category: "Indoor",
    rarity: "common",
    rating: 4.7,
    reviews: 234
  }
];

const categories = [
  { name: "Rare Plants", icon: Sparkles, count: 85, color: "from-emerald-500 to-green-600", href: "/shop?category=Rare" },
  { name: "Succulents", icon: Leaf, count: 120, color: "from-green-500 to-cyan-600", href: "/shop?category=Succulents" },
  { name: "Indoor Plants", icon: Leaf, count: 95, color: "from-green-500 to-emerald-600", href: "/shop?category=Indoor" },
  { name: "Tropical", icon: Leaf, count: 45, color: "from-emerald-500 to-blue-600", href: "/shop?category=Tropical" },
  { name: "Outdoor Plants", icon: Leaf, count: 67, color: "from-emerald-500 to-teal-600", href: "/shop?category=Outdoor" },
  { name: "Bonsai", icon: Leaf, count: 28, color: "from-green-500 to-indigo-600", href: "/shop?category=Bonsai" }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  // Separate plants by category
  const rarePlants = featuredPlants.filter(plant => plant.category === 'Rare');
  const succulents = featuredPlants.filter(plant => plant.category === 'Succulents');

  const handleAddToCart = (plant: Plant) => {
    console.log('Added to cart:', plant.name);
    // TODO: Implement cart functionality
  };

  const handleAddToWishlist = (plant: Plant) => {
    console.log('Added to wishlist:', plant.name);
    // TODO: Implement wishlist functionality
  };

  const handleCartClick = () => {
    console.log('Cart clicked');
    window.location.href = '/cart';
  };

  const handleWishlistClick = () => {
    console.log('Wishlist clicked');
    window.location.href = '/wishlist';
  };

  const handleSignInClick = () => {
    console.log('Sign in clicked');
    window.location.href = '/auth/login';
  };

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10">
        <Header 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCartClick={handleCartClick}
          onWishlistClick={handleWishlistClick}
          onSignInClick={handleSignInClick}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative z-20">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md text-emerald-100 rounded-full text-sm font-medium mb-8 border border-emerald-400/30 shadow-lg">
                  <Sparkles className="h-4 w-4 mr-2 text-emerald-300" />
                  Premium Plant Collection
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                  Discover Rare & Beautiful
                  <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent"> Plants</span>
                </h1>
                <p className="text-xl text-emerald-100 mb-10 leading-relaxed drop-shadow-lg max-w-2xl">
                  Your trusted source for premium plants and botanical treasures. 
                  From exotic rare specimens to stunning succulents, we bring nature's beauty to your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="/shop" className="bg-gradient-to-r from-emerald-600 to-green-600 backdrop-blur-sm text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105">
                    Shop Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                  <a href="/about" className="border-2 border-emerald-400/50 text-emerald-100 px-10 py-5 rounded-xl text-lg font-semibold hover:bg-emerald-600/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 shadow-xl">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-500/30 to-green-600/30 backdrop-blur-xl rounded-3xl p-12 h-96 flex items-center justify-center border border-emerald-400/30 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
                  <div className="text-white text-center relative z-10">
                    <Leaf className="h-32 w-32 mx-auto mb-6 drop-shadow-2xl text-emerald-300" />
                    <p className="text-2xl font-bold mb-2">Premium Plants</p>
                    <p className="text-emerald-200 text-lg">Curated Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Shop by Category</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">Find the perfect plants for your space</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {categories.map((category) => (
                <a key={category.name} href={category.href} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 text-center hover:from-white/20 hover:to-white/10 transition-all duration-500 group-hover:scale-110 border border-white/20 shadow-2xl hover:shadow-emerald-500/20">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <category.icon className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="font-bold text-white mb-2 drop-shadow-lg text-lg">{category.name}</h3>
                    <p className="text-emerald-200 text-sm">{category.count} plants</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Plants */}
        <FeaturedSection 
          rarePlants={rarePlants}
          succulents={succulents}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        {/* Care Tips */}
        <CareTips />

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-xl rounded-3xl p-16 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Join the Plant Community</h2>
              <p className="text-emerald-100 mb-10 text-xl drop-shadow-lg max-w-3xl mx-auto">
                Get exclusive access to rare plants and expert care tips
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-8 py-4 rounded-xl border-0 focus:ring-2 focus:ring-emerald-400/50 text-gray-900 bg-white/90 backdrop-blur-sm text-lg shadow-xl"
                />
                <button className="bg-white/90 backdrop-blur-sm text-emerald-600 px-10 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-xl text-white py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold">RootPower</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Your trusted source for premium plants and botanical treasures.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Shop</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="/shop" className="hover:text-emerald-300 transition-colors">All Plants</a></li>
                  <li><a href="/shop?category=Rare" className="hover:text-emerald-300 transition-colors">Rare Plants</a></li>
                  <li><a href="/shop?category=Indoor" className="hover:text-emerald-300 transition-colors">Indoor Plants</a></li>
                  <li><a href="/shop?category=Outdoor" className="hover:text-emerald-300 transition-colors">Outdoor Plants</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Support</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="/care" className="hover:text-emerald-300 transition-colors">Plant Care</a></li>
                  <li><a href="/shipping" className="hover:text-emerald-300 transition-colors">Shipping Info</a></li>
                  <li><a href="/returns" className="hover:text-emerald-300 transition-colors">Returns</a></li>
                  <li><a href="/contact" className="hover:text-emerald-300 transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-6">Company</h3>
                <ul className="space-y-4 text-gray-300">
                  <li><a href="/about" className="hover:text-emerald-300 transition-colors">About Us</a></li>
                  <li><a href="/blog" className="hover:text-emerald-300 transition-colors">Blog</a></li>
                  <li><a href="/careers" className="hover:text-emerald-300 transition-colors">Careers</a></li>
                  <li><a href="/privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 RootPower. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
