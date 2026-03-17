import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Rajesh Mehta", company: "Global Textiles Ltd.", text: "The quality of cotton fabrics from Parekh Fabrics is unmatched. Their supply chain reliability is top-notch." },
  { name: "Sita Sharma", company: "Ethic Wear Co.", text: "Best e-auction experience. Very transparent and professional management. Highly recommended for bulk orders." }
];

export default function Reviews() {
  return (
    <section className="py-16">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Customer <span className="text-maroon-800">Reviews</span></h2>
        <div className="h-[2px] flex-1 bg-gray-100"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-50 relative group hover:shadow-xl transition-all">
            <Quote className="absolute top-8 right-8 text-maroon-50" size={60} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-maroon-800 text-maroon-800" />)}
            </div>
            <p className="text-gray-600 italic mb-6 leading-relaxed">"{rev.text}"</p>
            <h4 className="font-black text-slate-800 uppercase text-sm tracking-widest">{rev.name}</h4>
            <p className="text-[10px] font-bold text-maroon-800 mt-1 uppercase tracking-widest">{rev.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}