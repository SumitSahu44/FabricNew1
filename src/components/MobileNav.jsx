import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function MobileNav({ isOpen, setIsOpen, activeTab, setActiveTab }) {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'e-Quotation', id: 'e-quotation' },
    { name: 'e-Auction', id: 'e-auction' },
    { name: 'Tenders', id: 'tenders' },
    { name: 'Contact', id: 'enquiry' },
  ];

  const handleNavClick = (name, id) => {
    setActiveTab(name);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Toggle Button - Fixed and always visible */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-[1001] bg-white border-2 border-maroon-800 text-maroon-800 p-3 rounded-2xl shadow-2xl active:scale-90 transition-all"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile Menu Overlay - Improved Contrast & Z-Index */}
      {isOpen && (
        <div className="fixed inset-0 bg-maroon-950/98 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center space-y-10 text-white transition-all animate-in fade-in zoom-in duration-300">
          <div className="absolute top-10 left-10 opacity-20">
             <h1 className="text-4xl font-black rotate-[-15deg]">PAREKH</h1>
          </div>
          
          {navItems.map((item) => (
            <button 
              key={item.name}
              onClick={() => handleNavClick(item.name, item.id)}
              className={`text-3xl font-black tracking-[0.2em] uppercase transition-all cursor-pointer 
                ${activeTab === item.name 
                  ? 'text-white border-b-4 border-white pb-2' 
                  : 'text-maroon-200/50 hover:text-white'}`}
            >
              {item.name}
            </button>
          ))}

          <div className="mt-12 text-center px-10">
             <p className="text-[10px] font-black uppercase tracking-widest text-maroon-400">Ahmedabad Textile Market</p>
             <p className="text-[10px] font-medium text-maroon-400 mt-2">Established Quality Excellence</p>
          </div>
        </div>
      )}
    </div>
  );
}