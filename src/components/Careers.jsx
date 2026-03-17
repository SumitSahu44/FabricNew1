const jobs = [
  { role: "Production Manager", loc: "Ahmedabad, GJ", type: "Full Time" },
  { role: "Textile Designer", loc: "Surat, GJ", type: "Full Time" }
];

export default function Careers() {
  return (
    <section className="py-12 bg-maroon-50/30 rounded-[48px] p-12 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Join Our <span className="text-maroon-800">Legacy.</span></h2>
        <p className="text-gray-500 text-sm font-medium">Build the future of sustainable textiles with us.</p>
      </div>
      <div className="space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl flex justify-between items-center hover:border-maroon-800 border border-transparent transition-all cursor-pointer shadow-sm">
            <div>
              <h4 className="font-bold text-slate-800">{job.role}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{job.loc} • {job.type}</p>
            </div>
            <button className="bg-maroon-800/10 text-maroon-800 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-maroon-800 hover:text-white transition-all">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}