import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[600px] sm:h-[550px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl group transition-all duration-1000">

      {/* 1. Background Image Layer */}
      <img
        src="https://images.unsplash.com/photo-1770196035129-0a0affd4a519?w=1000&auto=format&fit=crop&q=80"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] scale-100 group-hover:scale-110"
        alt="Cotton Industry Production"
      />

      {/* 2. Premium Maroon Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-maroon-900/95 via-maroon-900/60 to-transparent" />

      {/* 3. Glassmorphism Top Right Badge - Hide on very small screens or reposition */}
      <div className="hidden sm:flex absolute top-6 right-6 md:top-8 md:right-8 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full items-center gap-3 shadow-xl z-20">
        <div className="h-2 w-2 bg-[#E2E8CE] rounded-full animate-pulse"></div>
        <p className="text-[9px] font-black text-white uppercase tracking-widest">Global Export Ready</p>
      </div>

      {/* 4. Content Area */}
      <div className="relative h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-20 text-white max-w-3xl z-10">

        {/* Subtle Pre-heading */}
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <span className="h-[2px] w-8 md:w-12 bg-white/30"></span>
          <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-maroon-100/90">
            Established Ahmedabad
          </h3>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] md:leading-[1.0] mb-6 md:mb-8 tracking-tighter">
          Premium <br />Cotton <span className="text-[#E2E8CE] italic font-medium">Fabrics.</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-maroon-50/80 text-base md:text-xl font-medium mb-8 md:mb-12 max-w-lg leading-relaxed">
          The hub of textile innovation. Manufacturing and supplying high-grade cotton products across India and globally. Engineering excellence in every thread.
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">

          {/* Primary CTA */}
          <Link 
            to="/products"
            className="flex items-center justify-center gap-3 bg-white text-maroon-800 px-8 md:px-9 py-3.5 md:py-4 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.1em] shadow-xl hover:shadow-2xl hover:bg-maroon-50 transition-all duration-300 transform active:scale-95 group/btn"
          >
            <ShoppingBag size={16} className="text-maroon-800 transition-transform group-hover/btn:scale-110" />
            Explore Products
          </Link>

          {/* Secondary CTA */}
          <Link 
            to="/e-auction"
            className="flex items-center justify-center gap-3 border-2 border-white/20 bg-transparent backdrop-blur-md text-white px-8 md:px-9 py-3.5 md:py-4 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-[0.1em] hover:bg-white/10 transition-all duration-300 group/btn2"
          >
            View Live Auction
            <ArrowRight size={16} className="text-maroon-100 transition-transform group-hover/btn2:translate-x-1.5" />
          </Link>

        </div>
      </div>

    </section>
  );
};

export default Hero;