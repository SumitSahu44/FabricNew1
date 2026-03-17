import React from 'react';

const leaders = [
  { name: 'H.C. Parekh', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300' },
  { name: 'A.K. Parekh', role: 'Executive Director', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300' },
];

export default function Management() {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-black text-slate-900 mb-12 uppercase tracking-tighter">Our <span className="text-maroon-800">Leadership</span></h2>
      <div className="flex justify-center gap-12">
        {leaders.map((leader) => (
          <div key={leader.name} className="group text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6 mx-auto group-hover:border-maroon-800 transition-all duration-500">
              <img src={leader.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0" alt={leader.name} />
            </div>
            <h4 className="text-xl font-bold text-slate-800">{leader.name}</h4>
            <p className="text-xs font-bold text-maroon-800 uppercase tracking-widest mt-1">{leader.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}