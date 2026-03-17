import React from 'react';
import { 
  Home, Info, Mail, Package, Camera, Users, FileEdit, 
  Calculator, Gavel, FileText, Briefcase, Bell, Layout, 
  Star, Calendar, Map, Share2, MessageCircle 
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  // Aapki requirements ke hisab se menu groups
  const menuGroups = [
    {
      label: "Main",
      items: [
        { name: 'Home', icon: <Home size={18} />, id: 'home' },
        { name: 'About Us', icon: <Info size={18} />, id: 'about' },
        { name: 'Contact Us', icon: <Mail size={18} />, id: 'enquiry' },
      ]
    },
    {
      label: "Products & Media",
      items: [
        { name: 'Products', icon: <Package size={18} />, id: 'products' },
        { name: 'Photo Gallery', icon: <Camera size={18} />, id: 'media' },
        { name: 'Media Gallery', icon: <Layout size={18} />, id: 'media' },
      ]
    },
    {
      label: "Business Tools",
      items: [
        { name: 'Trade Enquiry', icon: <FileEdit size={18} />, id: 'enquiry' },
        { name: 'e-Quotation', icon: <Calculator size={18} />, id: 'e-quotation' },
        { name: 'e-Auction', icon: <Gavel size={18} />, id: 'e-auction' },
        { name: 'Tenders', icon: <FileText size={18} />, id: 'tenders' },
      ]
    },
    {
      label: "Engagement",
      items: [
        { name: 'Circulars', icon: <Bell size={18} />, id: 'circulars' },
        { name: 'Blog', icon: <Briefcase size={18} />, id: 'blog' },
        { name: 'Reviews', icon: <Star size={18} />, id: 'reviews' },
        { name: 'Appointments', icon: <Calendar size={18} />, id: 'appointments' },
      ]
    }
  ];

  const handleNavClick = (name, id) => {
    setActiveTab(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-100 flex flex-col z-50">
      {/* Branding Section */}
      <div className="p-8 border-b border-gray-50">
        <h1 className="text-2xl font-black text-maroon-800 tracking-tighter uppercase leading-none">
          PAREKH <br />
          <span className="text-gray-300 italic font-medium">FABRICS</span>
        </h1>
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">Ahmedabad, GJ</p>
      </div>

      {/* Scrollable Navigation Area */}
      <nav className="flex-1 p-4 space-y-6 overflow-y-auto no-scrollbar">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 px-4">
              {group.label}
            </p>
            {group.items.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.name, item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group cursor-pointer
                  ${activeTab === item.name 
                    ? 'bg-maroon-800 text-white shadow-lg shadow-maroon-800/40 ring-1 ring-maroon-700' 
                    : 'text-slate-600 hover:bg-maroon-50 hover:text-maroon-800'}`}
              >
                <span className={activeTab === item.name ? 'text-white' : 'text-slate-400 group-hover:text-maroon-800'}>
                  {item.icon}
                </span>
                <span className={`text-sm font-bold tracking-tight ${activeTab === item.name ? 'text-white' : ''}`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Bottom Hiring Badge */}
      <div className="p-4 border-t border-gray-50">
        <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Careers</p>
            <p className="text-xs font-bold text-slate-800">We're Hiring</p>
          </div>
          <button 
            onClick={() => setActiveTab('Careers')}
            className="p-2 bg-white rounded-xl shadow-sm hover:text-maroon-800 transition-colors"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;