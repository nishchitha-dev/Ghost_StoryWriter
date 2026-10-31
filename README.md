# 👻 GhostWriter — Stories from Beyond the Machine

> *"Every machine has a story. Some should never be told."*

**GhostWriter** is an AI-powered supernatural and digital horror story generator built for the **Hacktoberfest Challenge**, competing in the **Best Use of Gemma** category.

---

## 🎃 Project Overview

GhostWriter bridges the gap between retro computing nostalgia and modern generative intelligence. Users supply their own characters, cursed hardware relics, haunted locations, and mysterious premises, and Google's open-weight **Gemma 2** weaves them into chilling, atmospheric horror literature.

Story themes focus on:
- **Haunted Computers & Cursed BIOS Chips**
- **Digital Ghosts in Abandoned Usenet Forums**
- **Self-Aware Algorithms with Uncanny Agendas**
- **Decommissioned Satellites & Subterranean Mainframes**
- **The Terror of Ineradicable Memory**

---

## 🏆 Hacktoberfest: Best Use of Gemma

GhostWriter specifically utilizes **Google Gemma 2 (`google/gemma-2-9b-it`)**, Google’s cutting-edge open-weight model family.

### Why Gemma 2 is Essential to GhostWriter:
1. **Sliding-Window + Global Attention:** Alternates local (4096-token) and global attention to sustain eerie, subtle thematic foreshadowing without context decay or memory bottlenecks.
2. **Grouped-Query Attention (GQA):** Radically speeds up autoregressive generation, making instant story branching ("Alternative Endings") and scene chaining ("Continue the Nightmare") responsive.
3. **256k Vocabulary:** Effortlessly pairs specialized vintage computing terminology (EEPROM, CRT phosphors, RS-232, bus bars) with rich literary prose.
4. **Open-Weight Sovereignty:** Unlike rigid corporate APIs that aggressively sanitize fictional suspense, Gemma’s open weights allow authentic horror literature while preventing real-world harm.

---

## 🔮 Architecture

```
+---------------+      HTTP POST       +----------------------+
|               |  ----------------->  |                      |
|  User Inputs  |                      |  Flask / Web API     |
|  (Web Client) |  <-----------------  |                      |
+---------------+       JSON Story     +----------+-----------+
                                                  |
                                                  | Formats Gemma 2
                                                  | Instruction Tokens
                                                  v
                                       +----------------------+
                                       | <start_of_turn>user  |
                                       | {Story Directives}   |
                                       | <end_of_turn>        |
                                       | <start_of_turn>model |
                                       +----------+-----------+
                                                  |
                                                  | Autoregressive Sampling
                                                  v
                                       +----------------------+
                                       | Google Gemma 2 Core  |
                                       | (google/gemma-2-9b)  |
                                       +----------------------+
```

### Exact Gemma 2 Instruction Template:
```
<start_of_turn>user
You are GhostWriter, an expert literary horror author powered by Google Gemma 2.
Theme: "Every machine has a story. Some should never be told."

Parameters:
- Premise: {idea}
- Protagonist: {character}
- Setting: {location}
- Relic/Object: {object}
- Mood: {mood}
- Length: {length}
- Spirit Attitude: {personality}

Write an immersive digital horror story with tactile sensory dread.
<end_of_turn>
<start_of_turn>model
```

---

## ⚡ Key Features

- **Summon Ghost Story:** Enter custom character, setting, object, mood, and spirit persona.
- **5 One-Click Presets:** Instant classic techno-horror scenarios (Y2K Phantom, Corrupted BIOS, etc.).
- **Continue the Nightmare:** Autoregressively extend an existing story into deeper peril.
- **Alternative Endings Matrix:** Branch any story into 4 distinct resolutions:
  - *Happy Ending* (Miraculous survival & escape)
  - *Tragic Ending* (Absorbed into machine memory)
  - *Unexpected Twist* (Mind-bending temporal or identity paradox)
  - *Open Ending* (Lingering, unresolved digital dread)
- **Decode the Nightmare:** Gemma breaks down the story's psychological elements, technological dread, plot twists, and hidden symbolic meaning.
- **Atmospheric Soundscape:** Built-in Web Audio API eerie synthesizer drone + Web Speech spooky voice narrator.
- **Exporting:** Instant Markdown export and clipboard copying.

---

## 🚀 Quickstart & Local Setup

### 1. Python Flask Backend
```bash
# Clone the repository
git clone https://github.com/your-username/ghostwriter.git
cd ghostwriter

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run server (binds to 0.0.0.0:5000)
python3 app.py
```

### 2. Modern Web Frontend
```bash
# Install node dependencies
npm install

# Start development server
npm run dev
```

---

## ☁️ Render Deployment Guide

The repository includes a ready-to-use `render.yaml` Blueprint file.

1. Push this repository to GitHub.
2. Sign in to [Render.com](https://render.com).
3. Click **New +** ➔ **Blueprint**.
4. Select your repository. Render will automatically read `render.yaml`, set up the Python 3.11 environment, and execute:
   ```bash
   gunicorn app:app --bind 0.0.0.0:$PORT
   ```
5. Your service is live with free automatic SSL!

---

## 🛠️ API Reference

- `POST /api/generate` — Generate full story using Gemma parameters.
- `POST /api/continue` — Extend story with an autoregressive chapter.
- `POST /api/endings` — Generate Happy, Tragic, Twist, and Open resolutions.
- `POST /api/decode` — Analyze narrative tropes and psychological depth.
- `GET /api/health` — Service health and model identification.
- `GET /api/presets` — Curated inspiration scenarios.

---

## 📄 License & Model Usage

- **Software Code:** MIT License (see [LICENSE](LICENSE)).
- **Model Weights:** Subject to Google [Gemma Terms of Use](https://ai.google.dev/gemma/terms).
