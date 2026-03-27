import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const items = [
  { title: 'New Cotton Harvest Auction 2026', tag: 'e-Auction', date: 'March 20, 2026' },
  { title: 'Annual Maintenance Contract - Spinning Unit', tag: 'Tender', date: 'March 18, 2026' },
  { title: 'Safety Guidelines for Factory Workers', tag: 'Circular', date: 'March 15, 2026' },
];

export default function NoticeBoard() {
  return (
    <section className="py-12 bg-white rounded-[40px] shadow-sm border border-gray-100 px-8">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-xl font-black text-slate-800 uppercase tracking-tighter">Latest Notices & <span className="text-maroon-800">Live Tenders</span></h3>
        <button className="text-xs font-bold uppercase text-maroon-800 tracking-widest hover:underline">View All Notifications</button>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-6 bg-gray-50/50 rounded-2xl hover:bg-maroon-50 transition-colors group">
            <div className="flex items-center gap-6">
              <span className="px-3 py-1 bg-white border border-maroon-800/20 text-maroon-800 text-[10px] font-bold rounded-lg uppercase tracking-widest">
                {item.tag.toLowerCase().startsWith('e-') ? <><span className="lowercase">e</span>-{item.tag.substring(2)}</> : item.tag}
              </span>
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-maroon-800 transition-colors">{item.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">{item.date}</p>
              </div>
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Download size={18} className="text-gray-400 hover:text-maroon-800 cursor-pointer" />
              <ExternalLink size={18} className="text-gray-400 hover:text-maroon-800 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}