'use client';

import { Users, Award, Truck, Heart, Star, Globe, Sparkles, Leaf } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: "15,000+",
    label: "Happy Customers",
    description: "Plant enthusiasts worldwide",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: Award,
    value: "500+",
    label: "Plant Species",
    description: "Curated collection",
    color: "from-green-500 to-cyan-600"
  },
  {
    icon: Truck,
    value: "99.8%",
    label: "Safe Delivery",
    description: "Plants arrive healthy",
    color: "from-emerald-500 to-blue-600"
  },
  {
    icon: Heart,
    value: "4.9/5",
    label: "Customer Rating",
    description: "Based on 10K+ reviews",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Star,
    value: "200+",
    label: "Rare Plants",
    description: "Exotic specimens",
    color: "from-emerald-500 to-purple-600"
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries Served",
    description: "Global reach",
    color: "from-green-500 to-teal-600"
  }
];

const achievements = [
  {
    icon: Sparkles,
    title: "Rare Plant Specialist",
    description: "Largest collection of exotic plants in the region",
    year: "2024"
  },
  {
    icon: Leaf,
    title: "Succulent Excellence",
    description: "Awarded for outstanding succulent variety and quality",
    year: "2023"
  },
  {
    icon: Award,
    title: "Customer Service",
    description: "Recognized for exceptional plant care support",
    year: "2023"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-2xl">Why Choose RootPower?</h2>
          <p className="text-emerald-100 drop-shadow-lg text-lg">Trusted by plant lovers worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-emerald-200 font-semibold mb-1">{stat.label}</div>
                <div className="text-emerald-300 text-sm">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl">Our Achievements</h3>
          <p className="text-emerald-100 drop-shadow-lg text-lg">Recognition for excellence in plant care</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-emerald-300 font-semibold">{achievement.year}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{achievement.title}</h4>
              <p className="text-emerald-200 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-xl rounded-3xl p-12 border border-emerald-400/30 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-2xl">Join Our Plant Community</h3>
            <p className="text-emerald-100 mb-8 text-xl drop-shadow-lg max-w-3xl mx-auto">
              Connect with fellow plant enthusiasts, share care tips, and discover new species
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/community" className="bg-white/90 backdrop-blur-sm text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl hover:scale-105">
                Join Community
              </a>
              <a href="/blog" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 