'use client';

import { useState } from 'react';
import { ArrowLeft, Droplets, Sun, Thermometer, Leaf, Sparkles, BookOpen, Video, Users, MessageCircle } from 'lucide-react';
import Header from '../../components/Header';
import AmbientBackground from '../../components/AmbientBackground';

interface CareGuide {
  icon: any;
  title: string;
  description: string;
  tips: string[];
  category: 'rare' | 'succulents' | 'general';
}

const careGuides: CareGuide[] = [
  {
    icon: Droplets,
    title: "Watering Guide",
    description: "Master the art of proper watering for different plant types",
    tips: [
      "Check soil moisture before watering - stick your finger 1-2 inches into the soil",
      "Rare plants prefer consistently moist soil, never soggy",
      "Succulents need to dry out completely between waterings",
      "Use room temperature water to avoid shocking roots",
      "Water in the morning to allow excess moisture to evaporate"
    ],
    category: 'general'
  },
  {
    icon: Sun,
    title: "Light Requirements",
    description: "Understanding light needs for optimal plant health",
    tips: [
      "Bright indirect light is ideal for most rare plants",
      "Succulents thrive in direct sunlight for 6+ hours daily",
      "East-facing windows provide gentle morning light",
      "Rotate plants regularly for even growth",
      "Use sheer curtains to filter intense afternoon sun"
    ],
    category: 'general'
  },
  {
    icon: Thermometer,
    title: "Temperature & Humidity",
    description: "Creating the perfect environment for your plants",
    tips: [
      "Rare plants prefer 65-80°F (18-27°C) with 60-80% humidity",
      "Succulents thrive in 60-80°F (15-27°C) with good air circulation",
      "Use humidifiers or pebble trays for humidity-loving plants",
      "Avoid placing plants near heating vents or air conditioners",
      "Group plants together to create microclimates"
    ],
    category: 'general'
  },
  {
    icon: Sparkles,
    title: "Rare Plant Care",
    description: "Specialized care for exotic and rare specimens",
    tips: [
      "Use well-draining, aerated soil mixes",
      "Fertilize monthly during growing season with balanced fertilizer",
      "Maintain high humidity with humidifiers or terrariums",
      "Prune regularly to encourage bushier growth",
      "Repot every 1-2 years with fresh soil"
    ],
    category: 'rare'
  },
  {
    icon: Leaf,
    title: "Succulent Care",
    description: "Essential tips for thriving succulents",
    tips: [
      "Use cactus/succulent soil with excellent drainage",
      "Water deeply but infrequently - let soil dry completely",
      "Provide bright, direct sunlight for best results",
      "Avoid overwatering - succulents are drought-tolerant",
      "Propagate easily from leaves or cuttings"
    ],
    category: 'succulents'
  }
];

const troubleshooting = [
  {
    problem: "Yellow leaves",
    cause: "Overwatering or nutrient deficiency",
    solution: "Check soil moisture and reduce watering frequency"
  },
  {
    problem: "Brown leaf tips",
    cause: "Low humidity or salt buildup",
    solution: "Increase humidity and flush soil occasionally"
  },
  {
    problem: "Leggy growth",
    cause: "Insufficient light",
    solution: "Move to brighter location or add grow lights"
  },
  {
    problem: "Root rot",
    cause: "Overwatering and poor drainage",
    solution: "Repot with fresh soil and improve drainage"
  },
  {
    problem: "Pest infestation",
    cause: "Poor air circulation or overwatering",
    solution: "Isolate plant, treat with neem oil, improve conditions"
  }
];

export default function Care() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = () => {
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

  const generalGuides = careGuides.filter(guide => guide.category === 'general');
  const rareGuides = careGuides.filter(guide => guide.category === 'rare');
  const succulentGuides = careGuides.filter(guide => guide.category === 'succulents');

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10">
        <Header 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onCartClick={handleAddToCart}
          onWishlistClick={handleWishlistClick}
          onSignInClick={handleSignInClick}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <a href="/" className="inline-flex items-center text-emerald-300 hover:text-emerald-200 mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </a>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md text-emerald-100 rounded-full text-sm font-medium mb-8 border border-emerald-400/30 shadow-lg">
                <BookOpen className="h-4 w-4 mr-2 text-emerald-300" />
                Plant Care Guide
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Plant Care
              </h1>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                Expert tips and comprehensive guides to help your plants thrive. 
                From rare specimens to stunning succulents, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* General Care Guides */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Essential Care Guides</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">Master the basics of plant care</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {generalGuides.map((guide, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <guide.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{guide.title}</h3>
                  <p className="text-emerald-200 mb-6 leading-relaxed">{guide.description}</p>
                  <ul className="space-y-3">
                    {guide.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-emerald-200 text-sm leading-relaxed flex items-start">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Care */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Rare Plants Care */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-xl">Rare Plant Care</h3>
                </div>
                <div className="space-y-6">
                  {rareGuides.map((guide, index) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <guide.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{guide.title}</h4>
                          <p className="text-emerald-200 mb-4 leading-relaxed">{guide.description}</p>
                          <ul className="space-y-2">
                            {guide.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-emerald-200 text-sm leading-relaxed flex items-start">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Succulents Care */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-xl">Succulent Care</h3>
                </div>
                <div className="space-y-6">
                  {succulentGuides.map((guide, index) => (
                    <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <guide.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{guide.title}</h4>
                          <p className="text-emerald-200 mb-4 leading-relaxed">{guide.description}</p>
                          <ul className="space-y-2">
                            {guide.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-emerald-200 text-sm leading-relaxed flex items-start">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Troubleshooting Guide</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">Common problems and solutions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {troubleshooting.map((issue, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white mb-4">{issue.problem}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm">Cause:</span>
                      <p className="text-emerald-200 text-sm mt-1">{issue.cause}</p>
                    </div>
                    <div>
                      <span className="text-emerald-300 font-semibold text-sm">Solution:</span>
                      <p className="text-emerald-200 text-sm mt-1">{issue.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-xl rounded-3xl p-16 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Need More Help?</h2>
              <p className="text-emerald-100 mb-10 text-xl drop-shadow-lg max-w-3xl mx-auto">
                Connect with our plant experts and community for personalized advice
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <a href="/community" className="bg-white/90 backdrop-blur-sm text-emerald-600 px-8 py-6 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  Join Community
                </a>
                <a href="/blog" className="bg-white/90 backdrop-blur-sm text-emerald-600 px-8 py-6 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  <BookOpen className="h-8 w-8 mx-auto mb-3" />
                  Read Blog
                </a>
                <a href="/contact" className="bg-white/90 backdrop-blur-sm text-emerald-600 px-8 py-6 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                  Contact Support
                </a>
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
                  <li><a href="/shop?category=Succulents" className="hover:text-emerald-300 transition-colors">Succulents</a></li>
                  <li><a href="/shop?category=Indoor" className="hover:text-emerald-300 transition-colors">Indoor Plants</a></li>
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