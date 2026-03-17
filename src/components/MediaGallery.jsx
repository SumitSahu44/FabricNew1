export default function MediaGallery() {
  const videos = [
    "https://www.pexels.com/download/video/7677239/",
    "https://www.pexels.com/download/video/2528020/",
    "https://www.pexels.com/download/video/7677152/",
  ];

  return (
    <section className="py-12">
      <h3 className="text-xl font-black text-slate-800 mb-8 border-l-4 border-maroon-800 pl-4 uppercase tracking-tighter">
        Media & <span className="text-maroon-800">Press</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((src, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
          >
            {/* Video */}
            <video
              src={src}
              className="w-full h-full object-cover"
              controls
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all pointer-events-none">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-maroon-800 group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>

            {/* Text */}
            <p className="absolute bottom-4 left-6 text-white text-[10px] font-black uppercase tracking-widest">
              Industry Visit {index + 1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}