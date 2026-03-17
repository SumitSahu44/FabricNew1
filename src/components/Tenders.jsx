import React from 'react';
import { FileText, Download, Briefcase, Calendar } from 'lucide-react';

const Tenders = () => {
    const tenderList = [
        { id: "T-2026/001", title: "Supply of 500 MT Raw Cotton (S-6)", deadline: "Mar 30, 2026", type: "Procurement", value: "High" },
        { id: "C-2026/042", title: "Maintenance Contract for Spinning Unit - II", deadline: "Apr 05, 2026", type: "Maintenance", value: "Medium" },
        { id: "T-2026/015", title: "Global Tender: Specialized Weaving Machinery", deadline: "Apr 20, 2026", type: "Machinery", value: "International" },
    ];

    return (
        <div id="tenders" className="py-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="text-maroon-800" size={28} />
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Tenders & Contracts</h2>
                    </div>
                    <p className="text-slate-500 max-w-lg leading-relaxed font-medium">Participate in our transparent procurement process. We invite globally recognized vendors for strategic partnerships.</p>
                </div>
                <button className="bg-maroon-800 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-maroon-800/10 hover:scale-105 transition-all">
                    Register as Vendor
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {tenderList.map((tender) => (
                    <div key={tender.id} className="bg-white border border-slate-100 p-6 rounded-[32px] hover:shadow-xl hover:shadow-maroon-800/5 transition-all flex flex-col md:flex-row items-center justify-between group">
                        <div className="flex items-center gap-6 mb-4 md:mb-0 w-full md:w-auto">
                            <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-maroon-50 transition-colors">
                                <Briefcase className="text-slate-400 group-hover:text-maroon-800" size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="text-[10px] font-black text-maroon-800 uppercase tracking-widest">{tender.id}</span>
                                    <span className="bg-slate-100 text-slate-500 px-2 py-0.5 rounded text-[8px] font-black uppercase">{tender.type}</span>
                                </div>
                                <h3 className="text-lg font-black text-slate-800">{tender.title}</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-10 w-full md:w-auto justify-between md:justify-end">
                            <div className="text-right">
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1 leading-none">Closing Date</p>
                                <div className="flex items-center gap-2 text-maroon-800">
                                    <Calendar size={14} />
                                    <span className="text-sm font-black tracking-tight">{tender.deadline}</span>
                                </div>
                            </div>
                            <button className="bg-slate-950 text-white p-4 rounded-2xl hover:bg-maroon-800 transition-all">
                                <Download size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 bg-maroon-50/50 rounded-[32px] p-6 border border-maroon-100 flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm font-bold text-maroon-900 flex-1 text-center sm:text-left">Missed a deadline? View our archive of completed contracts and tender results.</p>
                <button className="text-[10px] font-black text-maroon-800 uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">View Results Archive →</button>
            </div>
        </div>
    );
};

export default Tenders;
