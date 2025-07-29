'use client';

import { Search, Heart, ShoppingCart, User, Menu } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onSignInClick: () => void;
}

export default function Header({ 
  searchQuery, 
  onSearchChange, 
  onCartClick, 
  onWishlistClick, 
  onSignInClick 
}: HeaderProps) {
  return (
    <header className="relative z-20 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold text-white drop-shadow-lg">RootPower</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for plants..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <button
              onClick={onWishlistClick}
              className="relative p-3 text-white hover:text-emerald-300 transition-colors duration-300 hover:scale-110"
            >
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-3 text-white hover:text-emerald-300 transition-colors duration-300 hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Sign In */}
            <button
              onClick={onSignInClick}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30"
            >
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden p-3 text-white hover:text-emerald-300 transition-colors duration-300">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for plants..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
} 