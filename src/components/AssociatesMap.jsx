import React from 'react';
import { MapPin } from 'lucide-react';

export default function AssociatesMap() {
  return (
    <section className="py-20 border-t border-gray-100">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-maroon-800 font-bold text-xs uppercase tracking-[0.3em]">Network</span>
          <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6">Our Textile <br /><span className="text-maroon-800">Associates.</span></h2>
          <p className="text-gray-500 mb-8 max-w-md">
            We are strategically connected across India, ensuring seamless supply of cotton fabrics from Ahmedabad to every major industrial hub.
          </p>
          <div className="space-y-4">
            {['Gujarat (HO)', 'Maharashtra', 'Tamil Nadu', 'West Bengal'].map((state) => (
              <div key={state} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-50 hover:border-maroon-100 transition-colors">
                <MapPin size={18} className="text-maroon-800" />
                <span className="font-bold text-slate-700">{state}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Placeholder for India Map SVG */}
        <div className="bg-maroon-50/50 rounded-[48px] h-[500px] flex items-center justify-center relative overflow-hidden border border-maroon-100/50">
           <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none text-[200px] font-black italic">INDIA</div>
           <div className="relative p-10 bg-white shadow-2xl rounded-3xl border border-maroon-800/20 text-center">
              <MapPin size={48} className="text-maroon-800 mx-auto mb-4 animate-bounce" />
              <p className="text-sm font-black text-maroon-800 uppercase tracking-widest">Headquarters</p>
              <p className="text-2xl font-bold text-slate-800">Ahmedabad, GJ</p>
           </div>
        </div>
      </div>
    </section>
  );
}