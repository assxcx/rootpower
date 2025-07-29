'use client';

import { useState } from 'react';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import Link from 'next/link';
import Header from '../../../components/Header';
import AmbientBackground from '../../../components/AmbientBackground';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    // TODO: Implement actual login logic
  };

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-md mx-auto">
            <Link href="/" className="inline-flex items-center text-emerald-300 hover:text-emerald-200 mb-8 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-emerald-200">Sign in to your account</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-200 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-300" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-emerald-200 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-300" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-12 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-transparent"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-300 hover:text-emerald-200"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-400/50" />
                    <span className="ml-2 text-sm text-emerald-200">Remember me</span>
                  </label>
                  <Link href="/auth/forgot-password" className="text-sm text-emerald-300 hover:text-emerald-200">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-emerald-200">
                  Don&apos;t have an account?{' '}
                  <Link href="/auth/register" className="text-emerald-300 hover:text-emerald-200 font-semibold">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
