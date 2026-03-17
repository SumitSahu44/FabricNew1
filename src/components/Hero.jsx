import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[550px] md:h-[600px] rounded-[48px] overflow-hidden shadow-2xl group transition-all duration-1000">

      {/* 1. Background Image Layer */}
      {/* Hum ek high-quality cotton/fabric manufacturing photo use karenge.
          Aap ye image URL replace kar sakte hain: */}
      <img
        src="https://images.unsplash.com/photo-1770196035129-0a0affd4a519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhYnJpYyUyMGluZHVzdHJ5fGVufDB8fDB8fHww"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] scale-100 group-hover:scale-110"
        alt="Cotton Industry Production"
      />

      {/* 2. Premium Maroon Gradient Overlay */}
      {/* Ye overlay text ko readable banata hai aur maroon theme ko integrate karta hai. */}
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/95 via-maroon-900/50 to-transparent" />

      {/* 3. Glassmorphism Top Right Badge */}
      <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
        <div className="h-2.5 w-2.5 bg-[#E2E8CE] rounded-full animate-pulse"></div>
        <p className="text-[10px] font-black text-white uppercase tracking-widest">Global Export Ready</p>
      </div>

      {/* 4. Content Area */}
      <div className="relative h-full flex flex-col justify-center px-12 md:px-16 lg:px-20 text-white max-w-3xl z-10">

        {/* Subtle Pre-heading */}
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[2px] w-12 bg-white/30"></span>
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-maroon-100/90">
            Established Ahmedabad
          </h3>
        </div>

        {/* Main Headings - Using Satoshi or Inter font (Bold weight) */}
        <h1 className="text-5xl md:text-7xl font-black leading-[1.0] mb-8 tracking-tighter">
          Premium <br />Cotton <span className="text-[#E2E8CE] italic font-medium">Fabrics.</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-maroon-50/80 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed">
          The hub of textile innovation. Manufacturing and supplying high-grade cotton products across India and globally. Engineering excellence in every thread.
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-5">

          {/* Primary CTA with Icon */}
          <button className="flex items-center justify-center gap-3 bg-white text-maroon-800 px-9 py-4 rounded-3xl font-black text-xs uppercase tracking-[0.1em] shadow-xl hover:shadow-2xl hover:bg-maroon-50 transition-all duration-300 transform active:scale-95 group/btn">
            <ShoppingBag size={16} className="text-maroon-800 transition-transform group-hover/btn:scale-110" />
            Explore Products
          </button>

          {/* Secondary CTA (Glass Button) */}
          <button className="flex items-center justify-center gap-3 border-2 border-white/20 bg-transparent backdrop-blur-md text-white px-9 py-4 rounded-3xl font-black text-xs uppercase tracking-[0.1em] hover:bg-white/10 transition-all duration-300 group/btn2">
            View Live Auction
            <ArrowRight size={16} className="text-maroon-100 transition-transform group-hover/btn2:translate-x-1.5" />
          </button>

        </div>
      </div>

    </section>
  );
};

export default Hero;