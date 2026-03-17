import React, { useState } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import FabricChatbot from './FabricChatbot';

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        {/* Google Map Trigger */}
        <button className="bg-white p-4 rounded-full shadow-2xl text-slate-800 hover:text-maroon-800 transition-all group relative">
          <MapPin size={24} />
          <span className="absolute right-full mr-4 bg-slate-800 text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
            Ahmedabad Office
          </span>
        </button>

        {/* Floating Chat Bot Trigger */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`bg-[#25D366] p-4 rounded-full shadow-2xl text-white hover:scale-110 transition-all ${!isChatOpen ? 'animate-bounce' : ''}`}
        >
          <MessageCircle size={24} fill={isChatOpen ? "white" : "currentColor"} />
        </button>
      </div>

      <FabricChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}