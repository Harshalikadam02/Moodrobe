import { retrieveOutfits } from './rag.js';
import { getCompletion } from './chatService.js';

export async function planOutfit(userText, apiKey) {
  const contextItems = retrieveOutfits(userText);
  const context = contextItems.length ? `Context outfit pieces: ${contextItems.join(', ')}.` : '';
  const prompt = `${userText}. ${context} Suggest a Gen-Z styled outfit in a friendly tone.`;
  return await getCompletion(prompt, apiKey);
}
