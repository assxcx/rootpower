'use client';

import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Leaf, Check } from 'lucide-react';
import AmbientBackground from '../../../components/AmbientBackground';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptNewsletter, setAcceptNewsletter] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', formData);
    // TODO: Implement registration functionality
  };

  const isPasswordValid = formData.password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(formData.password);
  const hasLowerCase = /[a-z]/.test(formData.password);
  const hasNumber = /\d/.test(formData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const passwordsMatch = formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-lg">
          {/* Back Button */}
          <button className="mb-8 p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300">
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Register Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">RootPower</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-2xl">Create Account</h1>
              <p className="text-emerald-100 drop-shadow-lg">Join our plant community</p>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-emerald-100 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-emerald-100 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-emerald-100 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-emerald-100 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {/* Password Requirements */}
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Check className={`h-4 w-4 ${isPasswordValid ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${isPasswordValid ? 'text-green-300' : 'text-gray-400'}`}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className={`h-4 w-4 ${hasUpperCase ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${hasUpperCase ? 'text-green-300' : 'text-gray-400'}`}>
                      One uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className={`h-4 w-4 ${hasLowerCase ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${hasLowerCase ? 'text-green-300' : 'text-gray-400'}`}>
                      One lowercase letter
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className={`h-4 w-4 ${hasNumber ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${hasNumber ? 'text-green-300' : 'text-gray-400'}`}>
                      One number
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className={`h-4 w-4 ${hasSpecialChar ? 'text-green-400' : 'text-gray-400'}`} />
                    <span className={`text-sm ${hasSpecialChar ? 'text-green-300' : 'text-gray-400'}`}>
                      One special character
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-emerald-100 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formData.confirmPassword 
                        ? passwordsMatch 
                          ? 'border-green-400/50 focus:ring-green-400/50' 
                          : 'border-red-400/50 focus:ring-red-400/50'
                        : 'border-white/20 focus:ring-emerald-400/50 focus:border-emerald-400/50'
                    }`}
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="mt-2 text-sm text-red-300">Passwords do not match</p>
                )}
              </div>

              {/* Terms and Newsletter */}
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-400/50"
                    required
                  />
                  <span className="text-sm text-emerald-100">
                    I agree to the{' '}
                    <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-emerald-300 hover:text-emerald-200 underline">
                      Privacy Policy
                    </a>
                  </span>
                </label>
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={acceptNewsletter}
                    onChange={(e) => setAcceptNewsletter(e.target.checked)}
                    className="w-4 h-4 mt-1 text-emerald-600 bg-white/10 border-white/20 rounded focus:ring-emerald-400/50"
                  />
                  <span className="text-sm text-emerald-100">
                    I want to receive updates about new plants and exclusive offers
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-white/10 to-white/5 text-emerald-100">Or sign up with</span>
              </div>
            </div>

            {/* Social Register */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                <span className="font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <span className="font-medium">Facebook</span>
              </button>
            </div>

            {/* Sign In Link */}
            <div className="text-center mt-8">
              <p className="text-emerald-100">
                Already have an account?{' '}
                <a href="/auth/login" className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 