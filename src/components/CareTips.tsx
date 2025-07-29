'use client';

import { Droplets, Sun, Thermometer, Leaf, Sparkles } from 'lucide-react';

interface CareTip {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  category: 'rare' | 'succulents' | 'general';
}

const careTips: CareTip[] = [
  {
    icon: Droplets,
    title: "Watering Wisdom",
    description: "Rare plants need consistent moisture, while succulents prefer to dry out between waterings. Always check soil moisture before watering.",
    category: 'general'
  },
  {
    icon: Sun,
    title: "Light Requirements",
    description: "Most rare plants thrive in bright, indirect light. Succulents love direct sunlight but can adapt to bright indirect light.",
    category: 'general'
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Keep rare plants in 65-80°F (18-27°C) with high humidity. Succulents prefer 60-80°F (15-27°C) with good air circulation.",
    category: 'general'
  },
  {
    icon: Leaf,
    title: "Rare Plant Care",
    description: "Use well-draining soil, maintain humidity with pebble trays or humidifiers, and fertilize monthly during growing season.",
    category: 'rare'
  },
  {
    icon: Sparkles,
    title: "Succulent Success",
    description: "Use cactus soil, water deeply but infrequently, and ensure excellent drainage. Most succulents are drought-tolerant.",
    category: 'succulents'
  }
];

export default function CareTips() {
  const generalTips = careTips.filter(tip => tip.category === 'general');
  const rareTips = careTips.filter(tip => tip.category === 'rare');
  const succulentTips = careTips.filter(tip => tip.category === 'succulents');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Plant Care Tips</h2>
          <p className="text-emerald-100 drop-shadow-lg text-lg">Expert advice for thriving plants</p>
        </div>

        {/* General Care Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 drop-shadow-xl text-center">Essential Care</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {generalTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <tip.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{tip.title}</h4>
                <p className="text-emerald-200 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Care */}
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
              {rareTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <tip.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{tip.title}</h4>
                      <p className="text-emerald-200 leading-relaxed">{tip.description}</p>
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
              {succulentTips.map((tip, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <tip.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{tip.title}</h4>
                      <p className="text-emerald-200 leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/care" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 hover:scale-105 border border-emerald-500/30">
            <Leaf className="mr-3 h-5 w-5" />
            Learn More Care Tips
          </a>
        </div>
      </div>
    </section>
  );
} 