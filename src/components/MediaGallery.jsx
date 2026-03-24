import React from 'react';

export default function MediaGallery() {
  const videos = [
    "https://www.pexels.com/download/video/7677239/",
    "https://www.pexels.com/download/video/2528020/",
    "https://www.pexels.com/download/video/7677152/",
  ];

  return (
    <div className="space-y-20 py-12">
      {/* 1. Video Gallery Section - Only Media & Press as requested */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <span className="h-[2px] w-12 bg-maroon-800"></span>
           <h3 className="text-xl font-black text-slate-800 uppercase tracking-tighter">
             Media <span className="text-maroon-800">& Press Videos</span>
           </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((src, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer shadow-2xl bg-slate-100 border-4 border-white active:scale-95 transition-all"
            >
              <video
                src={src}
                className="w-full h-full object-cover"
                controls
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all pointer-events-none group-data-[playing=true]:hidden">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-maroon-800 group-hover:scale-110 transition-transform shadow-2xl">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-current border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
              <p className="absolute bottom-6 left-8 text-white text-[10px] font-black uppercase tracking-widest pointer-events-none drop-shadow-lg drop-shadow-black">
                Press Coverage {index + 1}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Informational Press Banner */}
      <div className="bg-maroon-800 rounded-[48px] p-12 text-white relative overflow-hidden">
         <div className="relative z-10 max-w-2xl">
            <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Leading the <span className="text-maroon-200">Textile Conversation.</span></h4>
            <p className="text-maroon-100/80 text-sm font-medium leading-relaxed">
              Parekh Fabrics is frequently featured in industry journals and news segments for our contribution to the Ahmedabad textile vertical. Follow our journey in the world of high-quality cotton manufacturing.
            </p>
         </div>
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}