import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-white rounded-t-[60px] p-16 relative overflow-hidden">
      <div className="grid lg:grid-cols-3 gap-16 relative z-10">
        <div>
          <h2 className="text-3xl font-black mb-6 italic tracking-tighter">PAREKH<span className="text-maroon-600">.</span></h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Manufacturers and global suppliers of high-grade cotton fabrics, committed to quality and sustainability in Ahmedabad since years.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-maroon-800 hover:border-maroon-800 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-maroon-600 mb-6">Explore</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">E-Auction</li>
              <li className="hover:text-white cursor-pointer transition-colors">Tenders</li>
              <li className="hover:text-white cursor-pointer transition-colors">Circulars</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-maroon-600 mb-6">Contact</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-center gap-2"><Phone size={14} className="text-maroon-600" /> +91-XXXXXXXXXX</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-maroon-600" /> info@parekhfabrics.com</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[32px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl h-48 border border-white/5">
          {/* Replace with actual Google Map Embed Link */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location"
          ></iframe>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        <p>Complete Mobile Responsive • SEO Friendly 2026</p>
        <p>Developed with ❤️ for Parekh Fabrics</p>
      </div>
    </footer>
  );
}