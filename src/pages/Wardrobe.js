import React, { useState } from 'https://esm.sh/react@18';

export default function Wardrobe() {
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  function handleUpload(e, type) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    if (type === 'top') setTops(t => [...t, url]);
    else setBottoms(b => [...b, url]);
  }

  function saveLook() {
    if (selectedTop && selectedBottom) {
      alert('Look saved!');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-200 flex flex-col items-center p-4">
      <h2 className="text-2xl text-pink-700 mb-4">Virtual Wardrobe</h2>
      <div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center overflow-hidden mb-4">
        {selectedTop && <img src={selectedTop} className="absolute top-0 w-32" />}
        {selectedBottom && <img src={selectedBottom} className="absolute bottom-0 w-32" />}
        {!selectedTop && !selectedBottom && <span className="text-pink-400">Your Avatar</span>}
      </div>
      <div className="w-full">
        <div className="mb-2">Tops:</div>
        <div className="flex overflow-x-auto space-x-2 mb-4">
          {tops.map((src, i) => (
            <img key={i} src={src} onClick={() => setSelectedTop(src)} className="w-24 h-24 object-cover rounded border-2 border-transparent hover:border-pink-500 cursor-pointer" />
          ))}
        </div>
        <div className="mb-2">Bottoms:</div>
        <div className="flex overflow-x-auto space-x-2 mb-4">
          {bottoms.map((src, i) => (
            <img key={i} src={src} onClick={() => setSelectedBottom(src)} className="w-24 h-24 object-cover rounded border-2 border-transparent hover:border-pink-500 cursor-pointer" />
          ))}
        </div>
      </div>
      <div className="space-x-2 mb-4">
        <button onClick={saveLook} className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-400">Save This Look</button>
        <button onClick={() => { setSelectedTop(null); setSelectedBottom(null); }} className="bg-white text-pink-600 border border-pink-300 px-3 py-1 rounded hover:bg-pink-50">Try Another Look</button>
      </div>
      <div className="flex space-x-4">
        <label className="text-sm text-pink-700 cursor-pointer">
          Add Another Top to Wardrobe
          <input type="file" accept="image/*" className="hidden" onChange={e => handleUpload(e, 'top')} />
        </label>
        <label className="text-sm text-pink-700 cursor-pointer">
          Add Another Bottom to Wardrobe
          <input type="file" accept="image/*" className="hidden" onChange={e => handleUpload(e, 'bottom')} />
        </label>
      </div>
    </div>
  );
}
