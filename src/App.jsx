import React, { useState } from 'react';

// Sabhi components jo humne pehle banaye unka integration
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import ProductGrid from './components/ProductGrid';
import AssociatesMap from './components/AssociatesMap';
import Management from './components/Management';
import EnquiryForm from './components/EnquiryForm';
import Reviews from './components/Reviews';
import MediaGallery from './components/MediaGallery';
import Careers from './components/Careers';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileNav from './components/MobileNav';

// Business Components
import EQuotation from './components/EQuotation';
import EAuction from './components/EAuction';
import Tenders from './components/Tenders';
import TextileBlog from './components/TextileBlog';
import AppointmentForm from './components/AppointmentForm';

function App() {
  // State management
  const [activeTab, setActiveTab] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#FCFBF9] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden">
      
      {/* 1. Sidebar - Desktop Only (Hidden on mobile) */}
      <div className="hidden lg:block">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* 2. Mobile Navigation Overlay & Toggle */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* 3. Main Content Wrapper */}
      {/* ml-0 on mobile, ml-72 on desktop to make room for sidebar */}
      <main className="transition-all duration-300 lg:ml-72 p-4 md:p-8">
        
        {/* Top Header Utility - Search and CTA */}
        <header className="flex justify-between items-center mb-8 px-2 md:px-0">
          <div className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span className="text-maroon-800 border-b border-maroon-800 pb-1">Manufacturing</span>
            <span className="hover:text-maroon-800 cursor-pointer">Exporting</span>
            <span className="hover:text-maroon-800 cursor-pointer">Quality Check</span>
          </div>
          
          <div className="flex items-center gap-3 ml-auto lg:ml-0">
             <div className="hidden sm:block relative">
                <input 
                  type="text" 
                  placeholder="Search Tenders..." 
                  className="bg-white border border-gray-100 px-4 py-2 rounded-xl text-xs focus:ring-2 focus:ring-maroon-800/20 outline-none w-48 transition-all"
                />
             </div>
             <button className="bg-maroon-800 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-maroon-800/20 active:scale-95 transition-all">
                e-Quotation
             </button>
          </div>
        </header>

        {/* Sections Stack - Yahan saare components sequence mein hain */}
        <div className="space-y-16">
          
          <section id="home">
            <Hero />
          </section>

          <section id="circulars">
            <NoticeBoard />
          </section>

          <section id="about">
            <Management />
          </section>

          <section id="products">
            <ProductGrid />
          </section>

          <section id="e-auction" className="pt-8">
            <EAuction />
          </section>

          <section id="tenders">
            <Tenders />
          </section>

          <section id="e-quotation" className="pt-8">
            <EQuotation />
          </section>

          <section id="associates">
            <AssociatesMap />
          </section>

          <section id="enquiry">
            <EnquiryForm />
          </section>

          <section id="appointments" className="pt-8">
            <AppointmentForm />
          </section>

          <section id="reviews">
            <Reviews />
          </section>

          <section id="blog">
             <TextileBlog />
          </section>

          <section id="media">
            <MediaGallery />
          </section>

          <section id="careers">
            <Careers />
          </section>

        </div>

        {/* Footer with Google Map integration */}
        <Footer />
      </main>

      {/* 4. Global Floating Support Elements */}
      <FloatingActions />

      {/* Custom Styles for Smooth Scrolling and Custom Scrollbar */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::selection {
          background-color: #630D16;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default App;