const outfits = [
  { mood: 'happy', items: ['bright floral dress', 'denim shorts'] },
  { mood: 'sad', items: ['cozy oversized sweater', 'soft joggers'] },
  { mood: 'excited', items: ['sparkly top', 'leather skirt'] },
  { mood: 'chill', items: ['graphic tee', 'baggy jeans'] }
];

export function retrieveOutfits(text) {
  const lower = text.toLowerCase();
  for (const o of outfits) {
    if (lower.includes(o.mood)) {
      return o.items;
    }
  }
  return [];
}
