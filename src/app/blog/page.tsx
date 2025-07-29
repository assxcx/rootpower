'use client';

import { useState } from 'react';
import { ArrowLeft, BookOpen, Heart, Share2, MessageCircle, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Header from '../../components/Header';
import AmbientBackground from '../../components/AmbientBackground';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: 'care' | 'rare-plants' | 'succulents' | 'tips' | 'guides';
  tags: string[];
  likes: number;
  comments: number;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Complete Guide to Monstera Care",
    excerpt: "Everything you need to know about caring for Monstera plants, from watering to propagation.",
    content: "Monstera plants are beloved for their distinctive leaves and relatively easy care requirements...",
    author: "Dr. Sarah Chen",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: 'care',
    tags: ['monstera', 'care', 'indoor-plants'],
    likes: 234,
    comments: 45,
    image: "/images/blog/monstera-care.jpg"
  },
  {
    id: 2,
    title: "Rare Plant Collecting: A Beginner's Guide",
    excerpt: "Start your journey into the world of rare and exotic plants with these essential tips.",
    content: "Rare plant collecting has become increasingly popular among plant enthusiasts...",
    author: "Marcus Rodriguez",
    date: "March 8, 2024",
    readTime: "12 min read",
    category: 'rare-plants',
    tags: ['rare-plants', 'collecting', 'beginner'],
    likes: 189,
    comments: 32,
    image: "/images/blog/rare-plants-guide.jpg"
  },
  {
    id: 3,
    title: "Succulent Propagation: Step-by-Step Guide",
    excerpt: "Learn how to propagate your favorite succulents and expand your collection.",
    content: "Succulent propagation is one of the most rewarding aspects of succulent care...",
    author: "Emma Thompson",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: 'succulents',
    tags: ['succulents', 'propagation', 'care'],
    likes: 156,
    comments: 28,
    image: "/images/blog/succulent-propagation.jpg"
  },
  {
    id: 4,
    title: "Top 10 Rare Plants for 2024",
    excerpt: "Discover the most sought-after rare plants that are trending this year.",
    content: "The rare plant market continues to evolve with new varieties gaining popularity...",
    author: "David Kim",
    date: "March 3, 2024",
    readTime: "10 min read",
    category: 'rare-plants',
    tags: ['rare-plants', 'trending', '2024'],
    likes: 312,
    comments: 67,
    image: "/images/blog/top-rare-plants.jpg"
  },
  {
    id: 5,
    title: "Watering Techniques for Different Plant Types",
    excerpt: "Master the art of watering with techniques tailored to specific plant categories.",
    content: "Proper watering is the foundation of successful plant care...",
    author: "Dr. Sarah Chen",
    date: "March 1, 2024",
    readTime: "7 min read",
    category: 'care',
    tags: ['watering', 'care', 'techniques'],
    likes: 198,
    comments: 41,
    image: "/images/blog/watering-techniques.jpg"
  },
  {
    id: 6,
    title: "Echeveria Care: The Complete Guide",
    excerpt: "Everything you need to know about growing and caring for Echeveria succulents.",
    content: "Echeverias are among the most popular succulents for good reason...",
    author: "Emma Thompson",
    date: "February 28, 2024",
    readTime: "9 min read",
    category: 'succulents',
    tags: ['echeveria', 'succulents', 'care'],
    likes: 145,
    comments: 23,
    image: "/images/blog/echeveria-care.jpg"
  }
];

const categories = [
  { name: "All Posts", value: "all", count: 156 },
  { name: "Care Guides", value: "care", count: 45 },
  { name: "Rare Plants", value: "rare-plants", count: 38 },
  { name: "Succulents", value: "succulents", count: 42 },
  { name: "Tips & Tricks", value: "tips", count: 31 }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      case 'care':
        return 'from-emerald-500 to-green-600';
      case 'rare-plants':
        return 'from-emerald-500 to-purple-600';
      case 'succulents':
        return 'from-green-500 to-cyan-600';
      case 'tips':
        return 'from-emerald-500 to-blue-600';
      default:
        return 'from-emerald-500 to-green-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'care':
        return Leaf;
      case 'rare-plants':
        return Sparkles;
      case 'succulents':
        return Leaf;
      case 'tips':
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
                <BookOpen className="h-4 w-4 mr-2 text-emerald-300" />
                Plant Blog
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
                Plant Blog
              </h1>
              <p className="text-xl text-emerald-100 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
                Expert insights, care guides, and tips for plant enthusiasts. 
                From rare specimens to stunning succulents, discover everything you need to know.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-xl'
                      : 'bg-white/10 backdrop-blur-sm text-emerald-200 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(blogPosts[0].category)} text-white text-sm font-semibold rounded-full`}>
                      {blogPosts[0].category.replace('-', ' ')}
                    </div>
                    <span className="text-emerald-300 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">{blogPosts[0].title}</h2>
                  <p className="text-emerald-200 text-lg mb-8 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-emerald-300">
                      <span>by {blogPosts[0].author}</span>
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{blogPosts[0].likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{blogPosts[0].comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/30 to-green-600/30 backdrop-blur-xl rounded-2xl p-8 h-64 flex items-center justify-center border border-emerald-400/30 shadow-2xl">
                  <BookOpen className="h-32 w-32 text-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                return (
                  <article key={post.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(post.category)} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <CategoryIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-semibold rounded-full`}>
                          {post.category.replace('-', ' ')}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">{post.title}</h3>
                    <p className="text-emerald-200 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-emerald-300 text-sm">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="text-emerald-300 text-sm">{post.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                      <button className="text-emerald-300 hover:text-emerald-200 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-xl rounded-3xl p-16 border border-emerald-400/30 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Stay Updated</h2>
              <p className="text-emerald-100 mb-10 text-xl drop-shadow-lg max-w-3xl mx-auto">
                Get the latest plant care tips and rare plant updates delivered to your inbox
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