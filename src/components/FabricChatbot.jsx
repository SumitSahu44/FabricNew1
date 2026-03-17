import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, Loader2 } from 'lucide-react';

const FabricChatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Parekh Fabrics. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const responses = {
    'cotton': "We specialize in Long-staple Cotton, Giza Cotton, and Organic Cotton fabrics. Our GSM ranges from 120 to 300.",
    'silk': "Our silk collection includes Mulberry, Tussar, and Muga silk, perfect for premium ethnic wear.",
    'tender': "You can find our latest tenders in the 'Notice Board' section or contact our sales team directly.",
    'contact': "You can reach us at info@parekhfabrics.com or visit our Ahmedabad office.",
    'price': "Pricing depends on the fabric type and quantity. For a bulk quotation, please use the 'e-Quotation' button in the header.",
    'default': "That's interesting! For more specific details about our textile manufacturing, please ask about cotton, silk, tenders, or pricing."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate "Live" response
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let botText = responses.default;

      if (lowerInput.includes('cotton')) botText = responses.cotton;
      else if (lowerInput.includes('silk')) botText = responses.silk;
      else if (lowerInput.includes('tender')) botText = responses.tender;
      else if (lowerInput.includes('contact')) botText = responses.contact;
      else if (lowerInput.includes('price')) botText = responses.price;

      const botMessage = { id: Date.now() + 1, text: botText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-8 w-[350px] max-h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col z-[100] overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-maroon-800 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl">
            <Bot size={20} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest">Fabric Assistant</p>
            <p className="text-[10px] text-maroon-100 opacity-80">Online | Live Support</p>
          </div>
        </div>
        <button onClick={onClose} className="hover:rotate-90 transition-transform">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 no-scrollbar min-h-[300px]">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium shadow-sm 
              ${m.sender === 'user' 
                ? 'bg-maroon-800 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 rounded-tl-none border border-gray-100'}`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-2">
              <Loader2 size={14} className="animate-spin text-maroon-800" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask something..."
          className="flex-1 bg-slate-50 border-none outline-none px-4 py-2 rounded-xl text-xs focus:ring-1 focus:ring-maroon-800/20"
        />
        <button 
          onClick={handleSend}
          className="bg-maroon-800 text-white p-2 rounded-xl hover:scale-105 active:scale-95 transition-all"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default FabricChatbot;
