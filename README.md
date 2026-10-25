# 🎥 TubeMind AI - YouTube Transcript Chatbot

An AI-powered YouTube Transcript Chatbot built with **Next.js**, **LangChain**, **ChromaDB Cloud**, **Groq**, and **Voxell Forge embeddings**. Paste a YouTube video URL, index its transcript, and ask natural language questions about the video.

---

## 🚀 Features

-  Index any YouTube video transcript
-  Chat with the video using AI
-  Semantic search using vector embeddings
-  Fast retrieval with ChromaDB
-  Groq LLM for response generation
-  Timestamp references for answers
-  Modern responsive UI with Tailwind CSS
-  One Chroma collection per video (No mixed results)

---

## 🖼 Demo

### Index Video

- Paste a YouTube URL
- Fetch transcript
- Split into chunks
- Generate embeddings
- Store in ChromaDB

### Ask Questions

Example:

```
What is this video about?

Who is speaking?

Summarize the video.

What are the main points?

Explain this topic in simple language.
```

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Backend

- Next.js Route Handlers
- LangChain
- ChromaDB

## AI

- Groq
- Voxell Forge Turbo embeddings (1024 dimensions)

## Vector Database

- ChromaDB (Docker)

---

# 📂 Project Structure

```
app/
│
├── api/
│   ├── chat/
│   └── index/
│
├── page.tsx
│
components/
│
├── chat/
│├── Chat.tsx
│├── ChatInput.tsx
│├── ChatWindow.tsx
│├── ChatMessage.tsx
│├── Markdown.tsx
│└── Timestamp.tsx
│
├── index/
│└── VideoInput.tsx
│
hooks/
│└── useChat.ts
│
lib/
│
├── chat/
├── chroma/
├── config/
├── embeddings/
├── indexing/
├── llm/
├── retrieval/
├── transcript/
├── youtube/
└── utils/
│
scripts/
│
├── test-chat.ts
├── test-index.ts
├── test-retriever.ts
├── debug-db.ts
└── test-embeddings.ts
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/tubemind-ai.git

cd tubemind-ai
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env.local` in the project root and fill in the values from the linked services. Never commit API keys.

```env
VOXELL_API_KEY=your_voxell_forge_api_key
GROQ_API_KEY=your_groq_api_key
SEARCHAPI_KEY=your_searchapi_key
CHROMA_HOST=your_chroma_host
CHROMA_API_KEY=your_chroma_api_key
CHROMA_TENANT=your_chroma_tenant
CHROMA_DATABASE=your_chroma_database
```

The app uses [Voxell Forge](https://voxell.ai/docs/#forge) Turbo to create both transcript and query embeddings, [SearchAPI](https://www.searchapi.io/) to fetch YouTube transcripts, [Groq](https://console.groq.com/) for chat completions, and [Chroma Cloud](https://www.trychroma.com/) to store vectors.

### Vercel

Add the same variables in **Project Settings → Environment Variables** for the Production environment, then redeploy. Keep the keys private; do not put them in client-side code or commit them to the repository.

After switching from another embedding provider, index each video again. The app stores Voxell vectors in separate Chroma collections, and existing vectors from a different model cannot be used for Voxell similarity search.

---

# Run Project

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Workflow

```
Paste YouTube URL
        │
        ▼
Fetch Transcript
        │
        ▼
Merge Transcript
        │
        ▼
Create LangChain Documents
        │
        ▼
Split Documents
        │
        ▼
Generate Embeddings
        │
        ▼
Store in ChromaDB
        │
        ▼
User asks Question
        │
        ▼
Generate Query Embedding
        │
        ▼
Retrieve Similar Chunks
        │
        ▼
Send Context to Groq
        │
        ▼
Generate Answer
```

---

# Example

## Input

```
What is this video about?
```

## Output

```
This video explains the fundamentals of JavaScript promises,
their syntax, and real-world use cases...
```

---

# Scripts

Test Embeddings

```bash
npx tsx scripts/test-embeddings.ts
```

Test Indexing

```bash
npx tsx scripts/test-index.ts
```

Test Retriever

```bash
npx tsx scripts/test-retriever.ts
```

Debug ChromaDB

```bash
npx tsx scripts/debug-db.ts
```

Test Chat

```bash
npx tsx scripts/test-chat.ts
```

---

# API Endpoints

## Index Video

```
POST /api/index
```

Body

```json
{
  "videoUrl": "https://youtube.com/watch?v=..."
}
```

---

## Chat

```
POST /api/chat
```

Body

```json
{
  "question": "What is this video about?",
  "videoUrl": "https://youtube.com/watch?v=..."
}
```

---

# Architecture

```
                Next.js UI
                    │
                    ▼
            API Route (/index)
                    │
                    ▼
        YouTube Transcript Fetcher
                    │
                    ▼
        LangChain Text Splitter
                    │
                    ▼
      Voxell Forge Embeddings
                    │
                    ▼
              ChromaDB
                    ▲
                    │
      Retriever (Similarity Search)
                    │
                    ▼
               Groq LLM
                    │
                    ▼
             Final Response
```

---

# Future Improvements

- ✅ Streaming AI responses
- ✅ Conversation history
- ✅ Multiple videos in one workspace
- ✅ Hybrid Search (BM25 + Vector Search)
- ✅ Reranking
- ✅ Authentication
- ✅ Save indexed videos
- ✅ Chat history persistence
- ✅ Multi-language support
- ✅ Citation highlighting
- ✅ Deploy with Docker

---

# Learning Outcomes

This project demonstrates:

- Retrieval-Augmented Generation (RAG)
- LangChain Pipelines
- Vector Databases
- Embedding Models
- Semantic Search
- Prompt Engineering
- AI Chat Applications
- Next.js API Routes
- Full Stack TypeScript Development

---

# Author

**Krishna Kumar**

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

# License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!