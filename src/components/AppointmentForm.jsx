import React, { useState } from 'react';
import { Calendar, Users, Clock, Send, ShieldCheck } from 'lucide-react';

const AppointmentForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-slate-50 rounded-[48px] p-12 text-center border-2 border-dashed border-maroon-200 animate-in fade-in duration-500">
                <CheckCircle className="text-maroon-800 mx-auto mb-6" size={48} />
                <h2 className="text-2xl font-black text-slate-900">Schedule Confirmed</h2>
                <p className="text-slate-500 mt-2">A calendar invite has been sent to your email.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-maroon-800 font-black uppercase text-[10px] tracking-widest border-b border-maroon-800 pb-1">Book Another Slot</button>
            </div>
        );
    }

    return (
        <div id="appointments" className="bg-white rounded-[48px] overflow-hidden border border-slate-100 shadow-xl flex flex-col md:flex-row shadow-maroon/5">
            <div className="bg-maroon-800 md:w-1/3 p-10 text-white flex flex-col justify-between">
                <div>
                    <Calendar className="mb-6 opacity-30" size={48} />
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">Book a <br />Visit</h2>
                    <p className="text-maroon-100/70 text-sm font-medium leading-relaxed">Schedule a plant visit, quality check session, or corporate meeting with our export directors.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={18} className="text-maroon-300" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">ISO 9001:2015 Certified</span>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 p-8 md:p-12 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visitor Name *</label>
                        <input required type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-xs font-bold focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address *</label>
                        <input required type="email" placeholder="email@company.com" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-xs font-bold focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visit Purpose *</label>
                        <select required className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-xs font-bold focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all appearance-none">
                            <option value="">Choose Purpose</option>
                            <option>Plant Tour / Manufacturing Inspection</option>
                            <option>Quality Assurance Check</option>
                            <option>Strategic Business Meeting</option>
                            <option>Order Collection / Sampling</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Preferred Date *</label>
                        <input required type="date" className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-xs font-bold focus:ring-2 focus:ring-maroon-800/20 outline-none transition-all" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Number of Visitors *</label>
                    <div className="flex gap-4">
                        {[1, 2, 3, '4+'].map((num) => (
                            <button key={num} type="button" className="flex-1 bg-slate-50 py-3 rounded-xl text-xs font-bold hover:bg-maroon-50 hover:text-maroon-800 transition-all border border-transparent hover:border-maroon-100">{num}</button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-maroon-800 transition-all active:scale-95">
                        Confirm Appointment
                        <Send size={16} />
                    </button>
                    <p className="text-center text-[8px] text-slate-400 font-medium mt-4 uppercase tracking-widest">Confirmation will be sent via Email & SMS</p>
                </div>
            </form>
        </div>
    );
};

// Simple icon import fix for the success state
const CheckCircle = ({ size, className }) => (
    <div className={className}>
        <div className={`w-${size/4} h-${size/4} bg-maroon-800 rounded-full flex items-center justify-center`}>
            <Users size={size/2} className="text-white" />
        </div>
    </div>
);

export default AppointmentForm;
