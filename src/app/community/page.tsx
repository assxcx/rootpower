'use client';

import { useState } from 'react';
import { ArrowLeft, Users, MessageCircle, Heart, Star, Share2, Camera, BookOpen, Calendar, Leaf } from 'lucide-react';
import Header from '../../components/Header';
import AmbientBackground from '../../components/AmbientBackground';

interface CommunityPost {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  category: 'care' | 'showcase' | 'question' | 'tips';
  timestamp: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "/images/avatars/sarah.jpg",
    title: "My Monstera Thai Constellation Journey",
    content: "Just wanted to share the progress of my Thai Constellation! It's been 6 months and the variegation is getting more pronounced. Any tips for encouraging more white patches?",
    likes: 127,
    comments: 23,
    category: 'showcase',
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    author: "Marcus Rodriguez",
    avatar: "/images/avatars/marcus.jpg",
    title: "Succulent Propagation Guide",
    content: "Here's my step-by-step guide for propagating Echeverias. The key is patience and proper soil mix. Anyone else having success with leaf propagation?",
    likes: 89,
    comments: 15,
    category: 'tips',
    timestamp: "1 day ago"
  },
  {
    id: 3,
    author: "Emma Thompson",
    avatar: "/images/avatars/emma.jpg",
    title: "Help with Pink Princess",
    content: "My Philodendron Pink Princess is losing its pink variegation. I've moved it to brighter light but no improvement. Any suggestions?",
    likes: 45,
    comments: 31,
    category: 'question',
    timestamp: "3 days ago"
  },
  {
    id: 4,
    author: "David Kim",
    avatar: "/images/avatars/david.jpg",
    title: "Watering Schedule for Rare Plants",
    content: "I've developed a system that works great for my rare plant collection. Weekly deep watering with misting in between. What's your routine?",
    likes: 156,
    comments: 42,
    category: 'care',
    timestamp: "1 week ago"
  }
];

const events = [
  {
    title: "Plant Care Workshop",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    attendees: 45,
    type: "virtual"
  },
  {
    title: "Succulent Swap Meet",
    date: "March 22, 2024",
    time: "1:00 PM EST",
    attendees: 23,
    type: "virtual"
  },
  {
    title: "Rare Plant Showcase",
    date: "April 5, 2024",
    time: "3:00 PM EST",
    attendees: 67,
    type: "virtual"
  }
];

export default function Community() {
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'showcase':
        return 'from-emerald-500 to-green-600';
      case 'tips':
        return 'from-green-500 to-cyan-600';
      case 'question':
        return 'from-emerald-500 to-blue-600';
      case 'care':
        return 'from-green-500 to-emerald-600';
      default:
        return 'from-emerald-500 to-green-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'showcase':
        return Camera;
      case 'tips':
        return BookOpen;
      case 'question':
        return MessageCircle;
      case 'care':
        return Heart;
      default:
        return Users;
    }
  };

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
                <Users className="h-4 w-4 mr-2 text-emerald-300" />
                Plant Community
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Plant Community
              </h1>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                Connect with fellow plant enthusiasts, share your plant journey, 
                and learn from the community. From rare specimens to stunning succulents, 
                we're all here to grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 backdrop-blur-sm text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center border border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Discussion
                </button>
                <button className="border-2 border-emerald-400/50 text-emerald-100 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600/20 transition-all duration-300 backdrop-blur-sm hover:scale-105 shadow-xl">
                  <Camera className="mr-3 h-6 w-6" />
                  Share Photos
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-2">2,847</div>
                  <div className="text-emerald-200 font-semibold">Members</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-2">1,234</div>
                  <div className="text-emerald-200 font-semibold">Discussions</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-2">5,678</div>
                  <div className="text-emerald-200 font-semibold">Photos Shared</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-3xl font-bold text-white mb-2">156</div>
                  <div className="text-emerald-200 font-semibold">Events</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-16">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">Recent Discussions</h2>
                <p className="text-emerald-100 drop-shadow-lg text-lg">Join the conversation</p>
              </div>
              <button className="text-emerald-300 hover:text-emerald-200 font-semibold flex items-center drop-shadow-lg text-lg hover:scale-105 transition-transform">
                View All
                <ArrowLeft className="ml-3 h-5 w-5 rotate-180" />
              </button>
            </div>
            
            <div className="space-y-6">
              {communityPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <div key={post.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <h3 className="text-xl font-bold text-white">{post.title}</h3>
                          <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-semibold rounded-full`}>
                            <CategoryIcon className="h-3 w-3 inline mr-1" />
                            {post.category}
                          </div>
                        </div>
                        <p className="text-emerald-200 mb-4 leading-relaxed">{post.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6 text-emerald-300 text-sm">
                            <span>by {post.author}</span>
                            <span>{post.timestamp}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Upcoming Events</h2>
              <p className="text-emerald-100 drop-shadow-lg text-lg">Join our virtual plant gatherings</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      <p className="text-emerald-300 text-sm">{event.type}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-emerald-200 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30">
                    Join Event
                  </button>
                </div>
              ))}
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