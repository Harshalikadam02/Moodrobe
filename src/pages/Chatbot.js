import React, { useState } from 'https://esm.sh/react@18';
import { useNavigate } from 'https://esm.sh/react-router-dom@6';
import { planOutfit } from '../ai/agent.js';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();

  async function sendMessage(e) {
    e.preventDefault();
    if (!input) return;
    const userMsg = { sender: 'user', text: input };
    setMessages(m => [...m, userMsg]);
    const reply = await planOutfit(input, apiKey);
    const aiMsg = { sender: 'ai', text: reply || "I'm having a fashion crisis!" };
    setMessages(m => [...m, aiMsg]);
    setInput('');
  }

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-4">
      <div className="max-w-md w-full bg-white rounded shadow flex flex-col p-4">
        <div className="text-center mb-4">
          <img src="https://placekitten.com/80/80" alt="avatar" className="w-20 h-20 rounded-full mx-auto" />
          <p className="mt-2 text-pink-600">Hey, I’m Harshali – your closet BFF! Tell me about your mood and event, and I’ll suggest an outfit.</p>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-xs p-2 rounded ${m.sender === 'ai' ? 'bg-pink-200 text-left self-start' : 'bg-purple-200 text-right self-end'}`}>{m.text}</div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex mb-2">
          <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 border border-pink-300 p-2 rounded-l" placeholder="Your mood & event" />
          <button className="bg-pink-500 text-white px-4 rounded-r">Send</button>
        </form>
        <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="OpenAI API Key" className="text-xs w-full border border-pink-300 p-1 rounded mb-4" />
        <div className="flex justify-between text-sm">
          <button onClick={() => navigate('/wardrobe')} className="text-pink-600 underline">Let’s Match It in Your Virtual Wardrobe</button>
          <a href="https://www.hm.com" target="_blank" className="text-pink-600 underline" rel="noreferrer">Shop Online</a>
        </div>
      </div>
    </div>
  );
}
