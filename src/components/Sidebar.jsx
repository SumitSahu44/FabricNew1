import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home as HomeIcon, Info, Mail, Package, Camera, Users, FileEdit,
  Calculator, Gavel, FileText, Briefcase, Bell, Layout,
  Star, Calendar, MapPin, Share2, MessageCircle, X
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuGroups = [
    {
      label: "Profile",
      items: [
        { name: 'Home', icon: <HomeIcon size={18} />, path: '/' },
        { name: 'About Us', icon: <Info size={18} />, path: '/about' },
        { name: 'Our Management', icon: <Users size={18} />, path: '/management' },
        { name: 'Textile Associates', icon: <MapPin size={18} />, path: '/associates' },
      ]
    },
    {
      label: "Products & Media",
      items: [
        { name: 'Product Page', icon: <Package size={18} />, path: '/products' },
        { name: 'Media Gallery', icon: <Layout size={18} />, path: '/media' },
      ]
    },
    {
      label: "Business",
      items: [
        { name: 'Trade Enquiry', icon: <FileEdit size={18} />, path: '/enquiry' },
        { name: 'e-Quotation', icon: <Calculator size={18} />, path: '/e-quotation' },
        { name: 'e-Auction', icon: <Gavel size={18} />, path: '/e-auction' },
        { name: 'Tenders & Contract', icon: <FileText size={18} />, path: '/tenders' },
      ]
    },
    {
      label: "Updates",
      items: [
        { name: 'Circular', icon: <Bell size={18} />, path: '/circulars' },
        { name: 'Blog', icon: <Briefcase size={18} />, path: '/blog' },
        { name: 'Customer Review', icon: <Star size={18} />, path: '/reviews' },
      ]
    },
    {
      label: "Contact",
      items: [
        { name: 'Contact Us', icon: <Mail size={18} />, path: '/enquiry' },
        { name: 'Visit Appointment', icon: <Calendar size={18} />, path: '/appointments' },
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-maroon-950/40 backdrop-blur-sm z-[100] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-100 flex flex-col z-[110] transition-transform duration-500 lg:translate-x-0 
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
        
        {/* Close button for mobile */}
        <button 
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-6 right-6 p-2 text-slate-400 hover:text-maroon-800"
        >
          <X size={24} />
        </button>

        {/* Branding Section */}
        <div className="p-8 border-b border-gray-50 flex-shrink-0">
          <h1 className="text-2xl font-black text-maroon-800 tracking-tighter uppercase leading-none">
            PAREKH <br />
            <span className="text-gray-300 italic font-medium">FABRICS</span>
          </h1>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Ahmedabad Textile Hub</p>
        </div>

        {/* Scrollable Navigation Area */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto no-scrollbar">
          {menuGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 px-4">
                {group.label}
              </p>
              {group.items.map((item) => (
                <NavLink
                  key={item.name + item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group
                    ${isActive
                      ? 'bg-maroon-800 text-white shadow-lg shadow-maroon-800/40 ring-1 ring-maroon-700'
                      : 'text-slate-600 hover:bg-maroon-50 hover:text-maroon-800'}`}
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-maroon-800'}>
                        {item.icon}
                      </span>
                      <span className={`text-[13px] font-bold tracking-tight ${isActive ? 'text-white' : ''}`}>
                        {item.name}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        {/* Career Section at Bottom */}
        <div className="p-4 border-t border-gray-50 flex-shrink-0">
          <NavLink to="/careers" onClick={() => setIsOpen(false)} className={({ isActive }) => `block rounded-2xl p-4 flex items-center justify-between group transition-all ${isActive ? 'bg-maroon-800 text-white shadow-lg shadow-maroon-800/40' : 'bg-gray-50 hover:bg-maroon-50'}`}>
            {({ isActive }) => (
              <>
                <div>
                  <p className={`text-[10px] font-bold uppercase ${isActive ? 'text-maroon-100' : 'text-gray-400'}`}>Careers</p>
                  <p className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-800'}`}>We're Hiring</p>
                </div>
                <div className={`p-2 rounded-xl shadow-sm transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-white group-hover:text-maroon-800'}`}>
                  <Share2 size={16} />
                </div>
              </>
            )}
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;