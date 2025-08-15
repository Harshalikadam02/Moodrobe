# Moodrobe- Genz Fashion Assistant

Moodrobe is a Gen‑Z inspired virtual fashion assistant. It uses pink and lavender aesthetics and integrates simple AI features:

- **LLM Chatbot** – talk with “Harshali” powered by the OpenAI API.
- **RAG Module** – quick retrieval of sample outfit pieces based on mood keywords.
- **Agentic Planner** – combines retrieval + LLM to suggest outfits.
- **Virtual Wardrobe** – upload tops and bottoms and mix & match looks in a mini game.

## Running
The project is a static React app using CDN modules.

1. Serve the root folder with any static server (for example: `npx serve .`).
2. Open `http://localhost:3000` in the browser.
3. On the chatbot page, paste your OpenAI API key to enable responses.

## Development Notes
- Tailwind CSS is loaded via CDN.
- Code is split into pages: `Home`, `Chatbot`, and `Wardrobe`.
- Outfit combinations are stored in memory; you can extend the RAG dataset or connect real APIs.
