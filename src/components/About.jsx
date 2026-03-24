import React from 'react';
import { Target, Award, ShieldCheck, Factory } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Excellence', value: '25+', icon: <Award className="text-maroon-800" /> },
    { label: 'Happy Clients', value: '1000+', icon: <Target className="text-maroon-800" /> },
    { label: 'Quality Standards', value: 'ISO 9001', icon: <ShieldCheck className="text-maroon-800" /> },
    { label: 'Production Capacity', value: '1M+ Mtr', icon: <Factory className="text-maroon-800" /> },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* 1. Brand Story */}
      <section className="relative rounded-[48px] overflow-hidden bg-white p-12 shadow-sm border border-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
            A Legacy of <br /><span className="text-maroon-800 italic font-medium">Fine Textiles.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
            Founded in the heart of Ahmedabad, Parekh Fabrics has been a cornerstone of the Indian textile industry for over two decades. We specialize in the manufacturing and supply of high-grade cotton fabrics, catering to global fashion houses and industrial giants alike.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Our commitment to quality, sustainability, and technological innovation has allowed us to grow from a small weaving unit to a vertically integrated textile powerhouse. We believe in "Quality in Every Thread."
          </p>
        </div>
        
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-maroon-50/30 -skew-x-12 transform origin-top-right pointer-events-none"></div>
      </section>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-maroon hover:border-maroon-100 transition-all text-center group">
            <div className="w-12 h-12 bg-maroon-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h4>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 3. Core Values */}
      <section className="grid md:grid-cols-2 gap-12 items-center px-4">
        <div>
          <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Mission & <span className="text-maroon-800">Vision</span></h3>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-50 shadow-sm hover:translate-x-2 transition-transform">
              <div className="w-2 h-12 bg-maroon-800 rounded-full flex-shrink-0"></div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-2">The Mission</h5>
                <p className="text-sm text-slate-500 leading-relaxed">To provide the highest quality cotton fabrics through sustainable manufacturing practices and ethical sourcing.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-white rounded-3xl border border-gray-50 shadow-sm hover:translate-x-2 transition-transform">
              <div className="w-2 h-12 bg-maroon-100 rounded-full flex-shrink-0"></div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase text-xs tracking-widest mb-2">The Vision</h5>
                <p className="text-sm text-slate-500 leading-relaxed">To become the global leader in textile innovation, setting benchmarks for quality and reliability.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[40px] overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=60" 
            alt="Fabric Manufacturing"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
