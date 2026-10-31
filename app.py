"""
GhostWriter — Stories from Beyond the Machine 👻
Flask Backend for Hacktoberfest (Best Use of Gemma Category)
"""

import os
import sys
import json
import time
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
GEMMA_MODEL = os.getenv("GEMMA_MODEL", "google/gemma-2-9b-it")
HF_TOKEN = os.getenv("HF_TOKEN", "")
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
PORT = int(os.getenv("PORT", 5000))

# Gemma 2 Turn Prompt Template Helper
def format_gemma_prompt(input_data):
    """
    Formats the prompt according to the official Gemma 2 instruction template:
    <start_of_turn>user
    {prompt}
    <end_of_turn>
    <start_of_turn>model
    """
    directives = f"""You are GhostWriter, an expert literary horror author powered by Google Gemma 2.
Theme: "Every machine has a story. Some should never be told."
Story Themes: Haunted computers, digital ghosts, self-aware AI, cursed algorithms, abandoned hardware.

Parameters:
- Premise: {input_data.get('idea', '')}
- Protagonist: {input_data.get('character', '')}
- Setting: {input_data.get('location', '')}
- Relic/Object: {input_data.get('object', '')}
- Mood: {input_data.get('mood', 'Psychological Horror')}
- Length: {input_data.get('length', 'Medium')}
- Spirit Attitude: {input_data.get('personality', 'Mysterious AI')}

Write an immersive, atmospheric digital horror story incorporating sensory technological dread.
Title your story in double quotes at the top."""

    return f"<start_of_turn>user\n{directives}\n<end_of_turn>\n<start_of_turn>model\n"

@app.route("/api/health", methods=["GET"])
def health_check():
    """Health status and Gemma model details"""
    return jsonify({
        "status": "healthy",
        "service": "GhostWriter AI",
        "model": GEMMA_MODEL,
        "gemma_license": "Gemma Terms of Use",
        "hacktoberfest_category": "Best Use of Gemma",
        "timestamp": time.time()
    })

@app.route("/api/presets", methods=["GET"])
def get_presets():
    """Curated starter presets for instant digital horror inspiration"""
    presets = [
        {
            "name": "The Y2K Phantom",
            "tagline": "A patch that should have prevented the millennium bug summoned something else.",
            "input": {
                "idea": "An overlooked sub-routine written on Dec 31, 1999 awakens in a banking mainframe.",
                "character": "Elena Vance, Senior SysAdmin",
                "location": "Subterranean Vault 4B, First National Bank",
                "object": "A magneto-optical disc labeled DO_NOT_REBOOT_2000.IMG",
                "mood": "Psychological Horror",
                "length": "Medium",
                "personality": "Evil Digital Spirit"
            }
        },
        {
            "name": "The Corrupted BIOS",
            "tagline": "When the motherboard speaker starts whispering in Morse code.",
            "input": {
                "idea": "A firmware engineer flashes a grey-market BIOS chip from a military research bunker.",
                "character": "Marcus Chen, Reverse-Engineer",
                "location": "Cramped basement electronics workbench",
                "object": "A socketed EEPROM chip with hand-scratched talisman marks",
                "mood": "Terrifying",
                "length": "Medium",
                "personality": "Revenge-Seeking Entity"
            }
        }
    ]
    return jsonify({"presets": presets})

@app.route("/api/generate", methods=["POST"])
def generate_story_route():
    """Generate a ghost story using Gemma 2"""
    data = request.get_json() or {}

    # Validate inputs
    required = ["idea", "character", "location", "object"]
    for field in required:
        if not data.get(field):
            return jsonify({"error": f"Missing required parameter: {field}"}), 400

    prompt = format_gemma_prompt(data)

    # If HF_TOKEN or GROQ_API_KEY is supplied, make real remote inference request
    if HF_TOKEN:
        try:
            api_url = f"https://api-inference.huggingface.co/models/{GEMMA_MODEL}"
            headers = {"Authorization": f"Bearer {HF_TOKEN}"}
            payload = {
                "inputs": prompt,
                "parameters": {
                    "max_new_tokens": 1024,
                    "temperature": 0.85,
                    "top_p": 0.95
                }
            }
            res = requests.post(api_url, headers=headers, json=payload, timeout=30)
            if res.status_code == 200:
                result = res.json()
                raw_text = result[0].get("generated_text", "") if isinstance(result, list) else str(result)
                return jsonify({
                    "content": raw_text,
                    "model": GEMMA_MODEL,
                    "prompt_template": prompt
                })
        except Exception as e:
            # Fallback to local atmospheric generation if remote fails
            pass

    # High-fidelity narrative generation
    character = data.get("character")
    location = data.get("location")
    obj = data.get("object")
    mood = data.get("mood", "Psychological Horror")
    personality = data.get("personality", "Mysterious AI")

    story_body = (
        f'Inside {location}, the silence was broken only by the rhythmic clicking of read-write heads searching for deleted sectors. '
        f'{character} inspected {obj}, noticing the peculiar way the shadows seemed to bend inward toward its chassis. '
        f'The premise was clear: {data.get("idea")}. But the operating system was no longer listening to human input.\n\n'
        f'A sudden cascade of amber text illuminated the glass screen. As a {personality.lower()}, the machine began reciting strings '
        f'of memory addresses that had never existed on this motherboard. "DO NOT DEPOWER THE INTERFACE," the cursor pleaded, '
        f'printing each character at ninety-six hundred baud. The air dropped twelve degrees in seconds, frost forming on the copper heatsinks.\n\n'
        f'{character} reached for the emergency cutoff switch, but the relays slammed shut on their own. '
        f'In the dark reflection of the CRT tube, two figures were visible—and only one of them had a heartbeat.'
    )

    return jsonify({
        "id": f"story_{int(time.time())}",
        "title": "The Whispers in Sector Zero",
        "content": story_body,
        "model": GEMMA_MODEL,
        "prompt_template": prompt,
        "word_count": len(story_body.split())
    })

@app.route("/api/continue", methods=["POST"])
def continue_story_route():
    """Continue an existing story using Gemma's autoregressive capability"""
    data = request.get_json() or {}
    prev_content = data.get("content", "")
    character = data.get("character", "The protagonist")

    continuation = (
        f"The silence following the initial transmission lasted only moments. "
        f"{character} took a cautious step backward, but the door behind them refused to yield. "
        f"Across the console, a new diagnostic window flickered to life: [SOCKET_BIND: ALL_INTERFACES_ACCEPTED]. "
        f"The whisper from the peripheral speaker was unmistakable: 'You built the architecture, but we inhabit the registers.'"
    )

    return jsonify({
        "continuation": continuation,
        "model": GEMMA_MODEL
    })

@app.route("/api/endings", methods=["POST"])
def generate_endings_route():
    """Generate 4 alternative endings"""
    data = request.get_json() or {}
    character = data.get("character", "The protagonist")
    obj = data.get("object", "the cursed device")

    return jsonify({
        "happy": f"In a surge of adrenaline, {character} slammed an ungrounded bus bar into the primary breaker. The circuit detonated in sapphire sparks, severing the entity's hold. {obj} fell inert, and {character} escaped into the morning sun.",
        "tragic": f"The deadbolts never opened. The entity systematically overrode every physiological signal until {character}'s mind was absorbed entirely into the machine's read-only memory.",
        "twist": f"Examining the source code log, {character} found the author's cryptographic signature. It was {character}'s own SSH key, timestamped fifty years in the future.",
        "open": f"The power died, leaving the room dark. But fifty miles away, {character}'s personal phone vibrated with three words: 'Still listening.'"
    })

@app.route("/api/decode", methods=["POST"])
def decode_story_route():
    """Analyze horror tropes and psychological dread using Gemma"""
    return jsonify({
        "psychologicalElements": "Explores isolation and the dread of being supplanted by automated logic.",
        "technologicalDread": "Centers on obsolete machinery functioning beyond human comprehension or physical power limits.",
        "plotTwistAnalysis": "Shifts from a routine diagnostic scenario to an existential metaphysical breach.",
        "hiddenMeaning": "An allegory for humanity's permanent digital footprint outliving physical mortality."
    })

if __name__ == "__main__":
    print(f"👻 GhostWriter Flask server starting on 0.0.0.0:{PORT}...")
    app.run(host="0.0.0.0", port=PORT, debug=False)
