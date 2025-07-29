'use client';

import { Sparkles, Leaf, ArrowRight } from 'lucide-react';
import PlantCard from './PlantCard';

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

interface FeaturedSectionProps {
  rarePlants: Plant[];
  succulents: Plant[];
  onAddToCart: (plant: Plant) => void;
  onAddToWishlist: (plant: Plant) => void;
}

export default function FeaturedSection({ rarePlants, succulents, onAddToCart, onAddToWishlist }: FeaturedSectionProps) {
  return (
    <div className="space-y-20">
      {/* Rare Plants Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-2xl">Rare & Exotic Plants</h2>
                <p className="text-emerald-100 drop-shadow-lg text-lg">Handpicked specimens for collectors</p>
              </div>
            </div>
            <a href="/shop?category=Rare" className="text-emerald-300 hover:text-emerald-200 font-semibold flex items-center drop-shadow-lg text-lg hover:scale-105 transition-transform">
              View All Rare Plants
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rarePlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Succulents Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-2xl">Stunning Succulents</h2>
                <p className="text-emerald-100 drop-shadow-lg text-lg">Perfect for every space</p>
              </div>
            </div>
            <a href="/shop?category=Succulents" className="text-emerald-300 hover:text-emerald-200 font-semibold flex items-center drop-shadow-lg text-lg hover:scale-105 transition-transform">
              View All Succulents
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {succulents.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 