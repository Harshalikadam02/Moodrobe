import React from 'https://esm.sh/react@18';
import { Link } from 'https://esm.sh/react-router-dom@6';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-purple-200 text-center p-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Moodrobe – Your Virtual Fashion BFF</h1>
      <div className="space-y-2 text-purple-800 max-w-md mb-6 text-left">
        <p>1. <strong>Share Your Mood:</strong> Tell our Gen-Z chatbot how you're feeling today, and we'll match your vibe with perfect outfits.</p>
        <p>2. <strong>AI Magic:</strong> Our algorithm analyzes trends, weather, and your preferences to suggest looks.</p>
        <p>3. <strong>Virtual Try-on Wardrobe:</strong> Turn heads with outfit matching in a dreamy wardrobe game.</p>
        <p>4. <strong>Shop Online:</strong> Missing something? Buy trending pieces online.</p>
      </div>
      <div className="mt-4 space-x-4">
        <Link to="/chat" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-400 transition">Let’s Style You</Link>
        <Link to="/wardrobe" className="bg-white text-pink-600 px-4 py-2 rounded border border-pink-300 hover:bg-pink-50 transition">Set up Your Virtual Wardrobe</Link>
      </div>
    </div>
  );
}
