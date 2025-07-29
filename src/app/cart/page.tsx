'use client';

import { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';
import AmbientBackground from '../../components/AmbientBackground';

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  category: string;
  rarity: 'common' | 'rare' | 'exotic';
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Monstera Deliciosa 'Thai Constellation'",
    price: 299.99,
    originalPrice: 399.99,
    image: "/images/monstera_thai_constellation.jpg",
    quantity: 1,
    category: "Rare",
    rarity: "exotic"
  },
  {
    id: 2,
    name: "Philodendron Pink Princess",
    price: 189.99,
    originalPrice: 249.99,
    image: "/images/philodendron-pink-princess.jpg",
    quantity: 2,
    category: "Rare",
    rarity: "exotic"
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 89.99,
    image: "/images/fiddle-leaf-fig.jpg",
    quantity: 1,
    category: "Indoor",
    rarity: "common"
  }
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = items.reduce((sum, item) => {
    const itemDiscount = (item.originalPrice || item.price) - item.price;
    return sum + (itemDiscount * item.quantity);
  }, 0);
  const shipping = subtotal > 200 ? 0 : 15.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center space-x-4 mb-4">
              <button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <h1 className="text-4xl font-bold text-white drop-shadow-2xl">Shopping Cart</h1>
            </div>
            <p className="text-emerald-100 drop-shadow-lg text-lg">Review your items and proceed to checkout</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Cart Items ({items.length})</h2>
                
                {items.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="text-6xl mb-4">🛒</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Your cart is empty</h3>
                    <p className="text-emerald-100 mb-6">Add some beautiful plants to get started</p>
                    <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          {/* Image */}
                          <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Item Details */}
                          <div className="flex-1">
                            <h3 className="font-bold text-white mb-2">{item.name}</h3>
                            <p className="text-emerald-200 text-sm mb-2">{item.category}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-white">${item.price}</span>
                                {item.originalPrice && (
                                  <span className="text-gray-400 line-through">${item.originalPrice}</span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-white font-semibold min-w-[2rem] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 bg-red-500/20 backdrop-blur-sm rounded-lg text-red-300 hover:bg-red-500/30 transition-all duration-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-emerald-100">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-300">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-100">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-emerald-100">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-emerald-400/30">
                  <div className="flex items-center space-x-3 mb-2">
                    <Truck className="h-5 w-5 text-emerald-300" />
                    <span className="text-emerald-100 font-semibold">Free Shipping</span>
                  </div>
                  <p className="text-emerald-200 text-sm">Orders over $200 ship free</p>
                </div>

                {/* Security Info */}
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-blue-400/30">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="h-5 w-5 text-blue-300" />
                    <span className="text-blue-100 font-semibold">Secure Checkout</span>
                  </div>
                  <p className="text-blue-200 text-sm">Your payment is protected</p>
                </div>

                {/* Checkout Button */}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 px-6 rounded-xl font-bold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-emerald-500/25">
                  <CreditCard className="h-5 w-5" />
                  <span>Proceed to Checkout</span>
                </button>

                {/* Continue Shopping */}
                <button className="w-full mt-4 border-2 border-emerald-400/50 text-emerald-100 py-3 px-6 rounded-xl font-semibold hover:bg-emerald-600/20 transition-all duration-300">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 