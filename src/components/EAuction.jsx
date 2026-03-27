import React from 'react';
import { Gavel, Clock, ArrowUpRight } from 'lucide-react';

const EAuction = () => {
    const auctions = [
        { id: 1, item: "Premium Organic Cotton (Bale)", qty: "50 Tons", currentBid: "₹2,45,000", time: "02:14:10", status: "Live" },
        { id: 2, item: "Giza Cotton Yarn 60s", qty: "10 Tons", currentBid: "₹1,80,000", time: "05:45:00", status: "Live" },
        { id: 3, item: "Raw Tussar Silk", qty: "500 Kg", currentBid: "₹12,40,000", time: "12:20:00", status: "Upcoming" },
    ];

    return (
        <div id="e-auction" className="bg-slate-900 rounded-[48px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-maroon-800/20 blur-[120px] rounded-full -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <Gavel className="text-maroon-400" size={24} />
                            <h2 className="text-3xl font-black uppercase tracking-tighter"><span className="lowercase">e</span>-Auction</h2>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Live bidding for bulk textile raw materials</p>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-500/30">5 Items Active</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {auctions.map((auc) => (
                        <div key={auc.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[32px] hover:border-maroon-500/50 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-lg ${auc.status === 'Live' ? 'bg-maroon-800 text-white' : 'bg-slate-700 text-slate-400'}`}>
                                    {auc.status}
                                </span>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Clock size={14} />
                                    <span className="text-xs font-mono">{auc.time}</span>
                                </div>
                            </div>
                            
                            <h4 className="text-lg font-black mb-1 group-hover:text-maroon-400 transition-colors">{auc.item}</h4>
                            <p className="text-xs text-slate-500 mb-6 font-bold uppercase tracking-widest">Quantity: {auc.qty}</p>
                            
                            <div className="bg-black/20 p-4 rounded-2xl mb-6">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Current Highest Bid</p>
                                <p className="text-xl font-black text-maroon-400">{auc.currentBid}</p>
                            </div>

                            <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-maroon-800 hover:text-white transition-all">
                                Place Bid
                                <ArrowUpRight size={14} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Are you a registered vendor?</p>
                    <button className="text-maroon-400 border-b border-maroon-800 pb-1 text-xs font-black uppercase tracking-widest hover:text-white transition-all">Download Bidding Guidelines</button>
                </div>
            </div>
        </div>
    );
};

export default EAuction;
