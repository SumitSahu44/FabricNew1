import React from 'react';
import { Newspaper, ArrowRight, Bookmark } from 'lucide-react';

const TextileBlog = () => {
    const posts = [
        { id: 1, tag: "Market Trends", date: "Oct 12, 2025", title: "The Rise of Sustainable Giza Cotton in European Markets", desc: "How eco-friendly dyeing processes are changing the export landscape for Ahmedabad exporters." },
        { id: 2, tag: "Tech Innovation", date: "Nov 05, 2025", title: "Next-Gen Weaving: Integrating IoT into Spinning Mills", desc: "Automated quality checks and real-time thread strength monitoring are now a reality at Parekh Fabrics." },
    ];

    return (
        <div id="blog" className="py-16">
            <div className="flex items-center gap-4 mb-4">
                <span className="h-[1px] w-12 bg-maroon-800"></span>
                <p className="text-[10px] font-black text-maroon-800 uppercase tracking-[0.3em]">Knowledge Hub</p>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter uppercase">Industry <span className="text-maroon-800 italic font-medium">Insights.</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                        <div className="aspect-[16/9] bg-slate-100 rounded-[40px] mb-8 overflow-hidden relative">
                             <img 
                                src={`https://plus.unsplash.com/premium_photo-1674048385298-4313764a25f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D`} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                alt="Blog Thumbnail"
                             />
                             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-xl">
                                <Bookmark size={18} className="text-slate-800" />
                             </div>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-maroon-800 text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{post.tag}</span>
                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{post.date}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-maroon-800 transition-colors leading-tight">{post.title}</h3>
                        <p className="text-slate-500 mb-6 font-medium leading-relaxed">{post.desc}</p>
                        <div className="flex items-center gap-2 text-maroon-800 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                            Read Full Article
                            <ArrowRight size={16} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextileBlog;
