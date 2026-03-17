import React, { useState } from 'react';
import { Calculator, Send, CheckCircle } from 'lucide-react';

const EQuotation = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-[48px] p-12 text-center shadow-maroon border border-maroon-50 animate-in fade-in zoom-in duration-500">
                <div className="bg-maroon-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-maroon-800" size={40} />
                </div>
                <h2 className="text-3xl font-black text-maroon-800 mb-4">Quotation Request Sent!</h2>
                <p className="text-slate-500 max-w-md mx-auto">Our sales team will analyze your requirements and get back to you with a competitive price within 24 hours.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 bg-maroon-800 text-white px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all"
                >
                    New Quotation
                </button>
            </div>
        );
    }

    return (
        <div id="e-quotation" className="bg-white rounded-[48px] p-8 md:p-12 shadow-maroon border border-maroon-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Calculator className="text-maroon-800" size={24} />
                        <h2 className="text-3xl font-black text-maroon-800 uppercase tracking-tighter">e-Quotation</h2>
                    </div>
                    <p className="text-slate-400 text-sm font-medium italic">Get instant bulk pricing for your textile requirements</p>
                </div>
                <div className="bg-maroon-50 px-4 py-2 rounded-xl border border-maroon-100">
                    <p className="text-[10px] font-black text-maroon-800 uppercase tracking-widest">Global Export Rates Applied</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Fabric Type *</label>
                    <select required className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all appearance-none">
                        <option value="">Select Fabric</option>
                        <option>Long-staple Cotton</option>
                        <option>Giza Cotton</option>
                        <option>Pima Cotton</option>
                        <option>Organic Canvas</option>
                        <option>Mulberry Silk</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Quantity (Meters/Tons) *</label>
                    <input required type="number" placeholder="Enter quantity" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all" />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Specifications (GSM, Width, Color) *</label>
                    <textarea required rows="3" placeholder="e.g. 180 GSM, 60-inch width, bleached white..." className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all resize-none"></textarea>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Organization Name *</label>
                    <input required type="text" placeholder="Your Company" className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Delivery Timeline *</label>
                    <select required className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all appearance-none">
                        <option value="">Select Timeline</option>
                        <option>Immediate (Urgent)</option>
                        <option>Within 15 Days</option>
                        <option>Within 1 Month</option>
                        <option>Quarterly Contract</option>
                    </select>
                </div>

                <div className="md:col-span-2 flex justify-end mt-4">
                    <button type="submit" className="flex items-center gap-3 bg-maroon-800 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-maroon-800/20 hover:scale-105 active:scale-95 transition-all group">
                        Get Best Quote
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EQuotation;
