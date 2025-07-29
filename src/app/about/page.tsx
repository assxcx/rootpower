'use client';

import { useState } from 'react';
import { ArrowLeft, Leaf, Sparkles, Heart, Shield, Truck, Users, Award, Globe, Flower } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import AmbientBackground from '../../components/AmbientBackground';

export default function About() {
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

  const stats = [
    { icon: Flower, label: "Plant Species", value: "500+", description: "Curated collection" },
    { icon: Users, label: "Happy Customers", value: "10K+", description: "Trusted community" },
    { icon: Award, label: "Years Experience", value: "15+", description: "Expert knowledge" },
    { icon: Globe, label: "Countries Served", value: "25+", description: "Global reach" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Plant Care First",
      description: "Every plant is carefully nurtured and inspected before reaching your home. We provide detailed care guides and ongoing support."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "All our plants come with a 30-day health guarantee. We ensure only the healthiest specimens reach our customers."
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Specialized packaging and expedited shipping ensure your plants arrive in perfect condition, ready to thrive."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Botanical Director",
      expertise: "Rare Plant Specialist",
      image: "/images/team/sarah-chen.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Succulent Expert",
      expertise: "Desert Plant Curator",
      image: "/images/team/marcus-rodriguez.jpg"
    },
    {
      name: "Emma Thompson",
      role: "Plant Care Specialist",
      expertise: "Care & Maintenance",
      image: "/images/team/emma-thompson.jpg"
    }
  ];

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
              <Link href="/" className="inline-flex items-center text-emerald-300 hover:text-emerald-200 mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md text-emerald-100 rounded-full text-sm font-medium mb-8 border border-emerald-400/30 shadow-lg">
                <Sparkles className="h-4 w-4 mr-2 text-emerald-300" />
                About RootPower
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Our Story
              </h1>
                              <p className="text-xl text-emerald-100 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                  RootPower was born from a deep passion for plants and a mission to bring the world&apos;s most beautiful 
                  specimens to plant enthusiasts everywhere. We specialize in both rare, exotic plants and stunning succulents, 
                  offering something special for every collector and beginner alike.
                </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-emerald-200 font-semibold mb-1">{stat.label}</div>
                    <div className="text-emerald-300 text-sm">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-2xl">Our Mission</h2>
                <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
                  We believe that every home deserves the beauty and tranquility that plants bring. Our mission is to 
                  connect plant lovers with exceptional specimens, whether you&apos;re seeking the rarest of rare plants or 
                  the most stunning succulents to brighten your space.
                </p>
                <p className="text-lg text-emerald-100 mb-6 leading-relaxed">
                  From exotic Monstera varieties to perfectly formed Echeverias, we curate our collection with care, 
                  ensuring each plant meets our high standards for health, beauty, and uniqueness.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-emerald-300" />
                    <span className="text-emerald-200">Rare Plants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-emerald-300" />
                    <span className="text-emerald-200">Succulents</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/30 to-green-600/30 backdrop-blur-xl rounded-3xl p-12 h-96 flex items-center justify-center border border-emerald-400/30 shadow-2xl">
                <div className="text-white text-center">
                  <Leaf className="h-32 w-32 mx-auto mb-6 drop-shadow-2xl text-emerald-300" />
                  <p className="text-2xl font-bold mb-2">Quality & Care</p>
                  <p className="text-emerald-200 text-lg">Our Promise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Our Values</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">What drives us to deliver excellence</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-emerald-200 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Meet Our Team</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">The experts behind RootPower</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl text-center hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-emerald-200 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-xl rounded-3xl p-16 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Ready to Start Your Plant Journey?</h2>
              <p className="text-emerald-100 mb-10 text-xl drop-shadow-lg max-w-3xl mx-auto">
                Explore our collection of rare plants and stunning succulents
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/shop" className="bg-white/90 backdrop-blur-sm text-emerald-600 px-10 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                  Shop Now
                </a>
                <a href="/shop?category=Rare" className="border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Rare Plants
                </a>
                <a href="/shop?category=Succulents" className="border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Succulents
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