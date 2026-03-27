import React from 'react';
import Map from './Map';

export default function AssociatesMap() {

  return (
    <section className="border-t mb-50 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <span className="text-maroon-800 font-bold text-xs uppercase tracking-[0.3em]">
          Network
        </span>

        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
          Our Textile <br />
          <span className="text-maroon-800">Associates.</span>
        </h2>

        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          We are strategically connected across major textile hubs in India, ensuring seamless supply and sourcing.
        </p>

        {/* 👉 MAP SECTION (CENTERED & BIG) */}
        <div className="flex justify-center">

          <div className="w-full max-w-5xl h-[500px] md:h-[600px] lg:h-[700px] bg-white rounded-[40px]  border border-gray-100 p-4">

            <div className="w-full h-full">
              <Map />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}