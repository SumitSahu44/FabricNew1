import React from 'react';

export default function EnquiryForm() {
  return (
    <section className="bg-maroon-800 rounded-[48px] p-12 text-white my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
      
      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-4xl font-black mb-6">Start a Trade <br />Conversation.</h2>
          <p className="text-maroon-100 opacity-80 mb-8 max-w-sm">
            Fill out the form for bulk orders, customized fabric specifications, or export inquiries.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center font-bold">1</div>
              <p className="text-sm font-medium italic underline underline-offset-4 cursor-pointer hover:text-white transition-colors">Download Product Catalogue</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] shadow-2xl">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-800 text-sm focus:ring-2 focus:ring-maroon-800 transition-all outline-none" />
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-800 text-sm focus:ring-2 focus:ring-maroon-800 transition-all outline-none" />
            </div>
            <select className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-400 text-sm focus:ring-2 focus:ring-maroon-800 transition-all outline-none">
              <option>Interested In: Cotton Fabrics</option>
              <option>Interested In: e-Auction</option>
              <option>Interested In: Tenders</option>
            </select>
            <textarea placeholder="Your Message..." rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-5 py-4 text-gray-800 text-sm focus:ring-2 focus:ring-maroon-800 transition-all outline-none" />
            <button className="w-full bg-maroon-800 text-white font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-maroon-800/40 hover:bg-maroon-900 transition-all">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}