import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

// Principal Layout Components
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Content Components
import Hero from './components/Hero';
import About from './components/About';
import Management from './components/Management';
import ProductGrid from './components/ProductGrid';
import MediaGallery from './components/MediaGallery';
import AssociatesMap from './components/AssociatesMap';
import EQuotation from './components/EQuotation';
import EAuction from './components/EAuction';
import Tenders from './components/Tenders';
import NoticeBoard from './components/NoticeBoard';
import TextileBlog from './components/TextileBlog';
import Reviews from './components/Reviews';
import AppointmentForm from './components/AppointmentForm';
import EnquiryForm from './components/EnquiryForm';
import Careers from './components/Careers';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsSidebarOpen(false); // Close sidebar on route change for mobile
  }, [location.pathname]);

  return (
    <div className="bg-[#FCFBF9] min-h-screen font-sans antialiased text-slate-900 overflow-x-hidden flex selection:bg-maroon-800 selection:text-white">

      {/* 1. Unified Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* 2. Main Viewport */}
      <main className="flex-1 transition-all duration-300 lg:pl-72 p-4 md:p-8 min-h-screen flex flex-col w-full">

        {/* Modern Header - Responsive Layout */}
        <header className="flex justify-between items-center mb-12 py-4 px-2 md:px-0">
          <div className="hidden max-lg:flex items-center gap-2 md:gap-4 flex-1">
            {/* Logo - Hidden on large screens, visible on mobile */}
            <Link to="/" className="active:scale-95 transition-transform flex-shrink-0">
              <img
                src="/Parekh  Fabrics.png"
                alt="Parekh Fabrics"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Middle: e-Quotation button (Mobile centered, Desktop right) */}
          <div className="hidden md:flex flex-1 flex justify-center lg:justify-end lg:pl-6">
            <Link
              to="/e-quotation"
              className="group relative px-3 py-1.5 md:px-5 md:py-2.5 bg-slate-900 text-white rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-maroon-800 transition-all duration-500 overflow-hidden active:scale-95 block whitespace-nowrap"
            >
              <span className="relative z-10">e-Quotation</span>
              <div className="absolute inset-0 bg-maroon-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Right: Mobile Menu Toggle - Only visible on small screens */}
          <div className="flex-1 hidden max-lg:flex justify-end">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-maroon-800 active:scale-95 transition-all"
            >
              <Menu size={20} />
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 max-w-[1400px]">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/products" element={<ProductGrid />} />
            <Route path="/gallery" element={<MediaGallery />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/e-quotation" element={<EQuotation />} />
            <Route path="/e-auction" element={<EAuction />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/circulars" element={<NoticeBoard />} />
            <Route path="/blog" element={<TextileBlog />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/appointments" element={<AppointmentForm />} />
            <Route path="/associates" element={<AssociatesMap />} />
            <Route path="/enquiry" element={<EnquiryForm />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </div>

        <Footer />
      </main>

      <FloatingActions />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default App;