import React, { useState } from 'react';
import { MessageCircle, MapPin, Send } from 'lucide-react';
import FabricChatbot from './FabricChatbot';
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        {/* Google Map Link */}


        {/* WhatsApp Link */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-4 rounded-full shadow-2xl text-white hover:scale-110 transition-all group relative flex items-center justify-center"
        >
          {/* <Send size={24} className="rotate-[-45deg] relative left-[2px]" /> */}
          <FaWhatsapp size={24} color="white" className=" relative left-[2px]" />
          <span className="absolute right-full mr-4 bg-[#25D366] text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
            WhatsApp Us
          </span>
        </a>

        {/* Floating Chat Bot Trigger */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`bg-maroon-800 p-4 rounded-full shadow-2xl text-white hover:scale-110 transition-all ${!isChatOpen ? 'animate-bounce' : ''} flex items-center justify-center`}
        >
          <MessageCircle size={24} fill={isChatOpen ? "white" : "none"} />
        </button>
      </div>

      <FabricChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}