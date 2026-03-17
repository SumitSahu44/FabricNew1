import React from 'react';

const products = [
  { id: 1, name: 'Raw Organic Cotton', category: 'Raw Material', img: 'https://plus.unsplash.com/premium_photo-1723563578392-d38fed807512?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmF3JTIwT3JnYW5pYyUyMGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 2, name: 'Denim Twill Fabric', category: 'Finished Goods', img: 'https://images.unsplash.com/photo-1611331347660-9a4e98549588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVuaW0lMjBUd2lsbCUyMEZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 3, name: 'Cotton Yarn Spools', category: 'Industrial', img: 'https://plus.unsplash.com/premium_photo-1675799745857-d94e32a43849?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q290dG9uJTIwWWFybiUyMFNwb29sc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, name: 'Printed Cotton', category: 'Designer', img: 'https://images.unsplash.com/photo-1752568583323-92145f90e6a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJpbnRlZCUyMENvdHRvbnxlbnwwfHwwfHx8MA%3D%3D' },
];

export default function ProductGrid() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-maroon-800 tracking-tight">Cotton & its Products</h2>
          <p className="text-gray-400 text-sm font-medium mt-1 uppercase tracking-widest">Our Featured Collection</p>
        </div>
        <button className="text-maroon-800 font-bold text-sm border-b-2 border-maroon-800 pb-1 hover:text-maroon-600 hover:border-maroon-600 transition-all">
          Explore All Products →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div className="relative h-80 rounded-[32px] overflow-hidden mb-4 shadow-lg">
              <img 
                src={p.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={p.name}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-maroon-900/40 transition-colors" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-maroon-800 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-tighter shadow-xl">
                  Quick View
                </button>
              </div>
            </div>
            <p className="text-[10px] font-black text-maroon-600 uppercase tracking-widest mb-1">{p.category}</p>
            <h4 className="text-lg font-bold text-slate-800 tracking-tight">{p.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}