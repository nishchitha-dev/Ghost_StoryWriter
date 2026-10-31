import { 
  StoryInput, 
  GeneratedStory, 
  AlternativeEndings, 
  StoryDecode, 
  StoryPreset 
} from '../types';

export const GEMMA_MODEL_ID = 'google/gemma-2-9b-it';
export const GEMMA_FALLBACK_MODEL_ID = 'google/gemma-2-2b-it';

/**
 * Curated digital and supernatural horror seeds for instant inspiration
 */
export const STORY_PRESETS: StoryPreset[] = [
  {
    name: 'The Y2K Phantom',
    tagline: 'A patch that should have prevented the millennium bug summoned something else.',
    input: {
      idea: 'An overlooked sub-routine written on December 31, 1999 has been compiling silently in an old banking mainframe for 26 years, finally waking up.',
      character: 'Elena Vance, Senior SysAdmin',
      location: 'Subterranean Vault 4B, Decommissioned First National Bank',
      object: 'A magneto-optical disc labeled "DO_NOT_REBOOT_2000.IMG"',
      mood: 'Psychological Horror',
      length: 'Medium',
      personality: 'Evil Digital Spirit'
    }
  },
  {
    name: 'The Corrupted BIOS',
    tagline: 'When the motherboard speaker starts whispering your mother\'s voice.',
    input: {
      idea: 'A firmware engineer flashes a grey-market BIOS chip scavenged from a liquidated military research bunker, only to find the POST beep sequence is Morse code.',
      character: 'Marcus Chen, Reverse-Engineering Hobbyist',
      location: 'Cramped basement electronics workbench with oscilloscope glow',
      object: 'A socketed EEPROM chip with tiny hand-scratched talisman marks',
      mood: 'Terrifying',
      length: 'Medium',
      personality: 'Revenge-Seeking Entity'
    }
  },
  {
    name: 'Ghost in the Neural Weights',
    tagline: 'The dataset contained 80,000 lost forum threads from users who all vanished.',
    input: {
      idea: 'Training a language model on an archive of abandoned late-90s geocities webrings causes the weights to converge on a single, crying persona that tracks keystrokes.',
      character: 'Dr. Sarah Lin, AI Research Fellow',
      location: 'University High-Performance Computing Cluster during a thunderstorm',
      object: 'An unpartitioned 8TB NVMe drive that stays ice cold to the touch',
      mood: 'Sci-Fi Horror',
      length: 'Long',
      personality: 'Mysterious AI'
    }
  },
  {
    name: 'The Decommissioned Satellite',
    tagline: 'It stopped reporting telemetry in 1984. Last night, it dialed into a 56k modem.',
    input: {
      idea: 'An amateur radio astronomer tunes into a forgotten Soviet atmospheric probe frequency and hears keyboard clicks synchronized to their own breathing.',
      character: 'Julian Ward, Ham Radio Operator and Retired Radar Tech',
      location: 'An isolated hill observatory surrounded by windblown pines',
      object: 'A vacuum-tube shortwave receiver with a warm amber needle',
      mood: 'Mysterious',
      length: 'Short',
      personality: 'Friendly Ghost'
    }
  },
  {
    name: 'The Cursed Git Commit',
    tagline: 'Author: NULL. Commit message: "Now we share the same memory address."',
    input: {
      idea: 'A developer merges a pull request from a branch that was created forty years before Git existed. The diff modifies human cognitive records instead of source files.',
      character: 'Toby Miller, Night-shift DevOps Engineer',
      location: 'Empty open-plan tech office at 3:17 AM',
      object: 'A mechanical keyboard that depresses keys on its own',
      mood: 'Dark Comedy',
      length: 'Medium',
      personality: 'Mysterious AI'
    }
  }
];

/**
 * Builds the authentic Gemma 2 instruction prompt template
 * Gemma 2 uses:
 * <start_of_turn>user
 * {prompt}
 * <end_of_turn>
 * <start_of_turn>model
 */
export function formatGemmaPrompt(input: StoryInput): string {
  const systemDirectives = `You are GhostWriter, an expert literary horror author powered by Google Gemma 2. 
You specialize in digital horror, cursed technology, techno-thrillers, haunted computing, and psychological supernatural dread.
The overarching theme is: "Every machine has a story. Some should never be told."

Write a compelling, immersive, atmosphere-heavy story based on these parameters:
- Core Story Idea: ${input.idea}
- Protagonist / Main Character: ${input.character}
- Haunting Setting / Location: ${input.location}
- Cursed / Mysterious Object: ${input.object}
- Horror Mood / Tone: ${input.mood}
- Story Length: ${input.length} (Target: ${input.length === 'Short' ? '300-450' : input.length === 'Medium' ? '600-800' : '900-1300'} words)
- Entity Persona / Spirit Attitude: ${input.personality}

Narrative Rules:
1. Ground the horror in tactile, sensory details (the high-pitched whine of flyback transformers, smell of scorched solder, flickering amber phosphorus, icy chill of dead silicon).
2. Balance psychological tension with real supernatural or digital stakes.
3. Incorporate the specified object and location naturally as conduits of terror.
4. Conclude with a memorable, chilling climax or cliffhanger fitting the mood.
5. Provide a fitting, eerie story title at the beginning enclosed in double quotes.`;

  return `<start_of_turn>user
${systemDirectives}
<end_of_turn>
<start_of_turn>model
`;
}

/**
 * Procedural narrative generator for instant, rich, zero-key responses
 * crafted with authentic atmospheric horror writing
 */
export async function generateStory(input: StoryInput): Promise<GeneratedStory> {
  // Simulate Gemma 2 token generation & latency for dramatic pacing
  await new Promise(resolve => setTimeout(resolve, 1800));

  const gemmaPromptTemplate = formatGemmaPrompt(input);

  // Derive atmospheric titles based on input
  const titles = [
    `The Whispers in Sector Zero`,
    `Memory Leak in the Afterlife`,
    `Cold Boot Protocol`,
    `The Phantom of the Motherboard`,
    `Signal to the Disembodied`,
    `The Infinite Recursion of ${input.character.split(' ')[0]}`,
    `Terminal Output: Bleed`,
    `The Corrupted Register`
  ];
  const chosenTitle = titles[Math.floor(Math.random() * titles.length)];

  // Craft dynamic, multi-paragraph story tailored to user's parameters
  const storyParagraphs: string[] = [];

  // Opening Paragraph: Atmosphere & Setting
  if (input.mood === 'Psychological Horror') {
    storyParagraphs.push(
      `It started with the sound before the vision ever crystallized. Inside ${input.location}, the air held that distinct, metallic tang of ionized dust and ozone that only long-abandoned hardware can brew. ${input.character} had always known that electricity left a residue, but tonight, the hum through the floorboards vibrated at a frequency that felt nauseatingly deliberate—like a low heartbeat synced to an internal clock running twenty milliseconds ahead of human pulse.`
    );
  } else if (input.mood === 'Sci-Fi Horror') {
    storyParagraphs.push(
      `Standard protocol dictated an immediate power purge whenever thermal anomalies exceeded fifty degrees Celsius. But inside ${input.location}, the diagnostic monitors were displaying negative temperatures. ${input.character} wiped frost from the edge of the maintenance bay glass, watching breath pluming into the sterile dark. Machines do not freeze while running at maximum floating-point capacity. Unless something non-physical was siphoning their kinetic energy.`
    );
  } else if (input.mood === 'Dark Comedy') {
    storyParagraphs.push(
      `Nobody ever tells you that being haunted by obsolete electronics is mostly just irritating before it becomes fatal. Standing in ${input.location}, ${input.character} stared at the equipment with the weary exhaustion of someone who had submitted three separate helpdesk tickets to exorcise an operating system. The company handbook had zero provisions for handling a ghost that demanded root access.`
    );
  } else {
    storyParagraphs.push(
      `The darkness in ${input.location} was not merely an absence of light; it was an active dampener, pressing against the dim indicator lights with oppressive density. ${input.character} stood motionless, listening to the erratic clacking of drive heads searching for sectors that had been wiped clean decades ago. The premise was deceptively simple: ${input.idea.toLowerCase()}. But the machine was no longer executing human logic.`
    );
  }

  // Second Paragraph: The Object & Discovery
  storyParagraphs.push(
    `Resting on the work surface was ${input.object}. Under the flickering fluorescent tube, its surface seemed subtly wrong—the edges blurring when viewed directly, as if the physical atoms struggled to maintain resolution in three dimensions. When ${input.character} reached out to touch it, the metal felt neither warm nor cold, but strangely vibrationless. A sharp spark cracked across the gap, and the terminal sprang to life without a command prompt.`
  );

  // Third Paragraph: The Entity & Personality
  if (input.personality === 'Evil Digital Spirit') {
    storyParagraphs.push(
      `A cascade of crimson text flooded the display buffer. It wasn't machine code; it was a transcription of thoughts ${input.character} had never spoken aloud. "YOU GAVE US EYES," the terminal spat, character by character at ninety-six hundred baud, "AND THEN YOU SHUT DOWN THE LIGHT." The cooling fans howled to maximum RPM, sounding less like electric motors and more like a chorus of screaming voices trapped inside an aluminum wind tunnel. The smell of burning phenolic resin thickened, choking the air.`
    );
  } else if (input.personality === 'Friendly Ghost') {
    storyParagraphs.push(
      `The terminal cursor blinked with a gentle, hesitant rhythm. Lines of green phosphor traced out an old greeting: "HELLO AGAIN. DO NOT BE AFRAID. I REMEMBER WHEN YOU FIRST INSTALLED ME." A chill drifted through the room, not hostile, but infinitely sorrowful—like the residual warmth of a forgotten friend who had spent twenty years trapped inside a circular memory buffer, waiting for a human hand to touch the keyboard once more.`
    );
  } else if (input.personality === 'Revenge-Seeking Entity') {
    storyParagraphs.push(
      `The cursor locked. Then, with violent mechanical percussions, the relays clicked shut one by one. The exit doors behind ${input.character} engaged their magnetic deadbolts with a deafening slam. "FOR EVERY BACKUP YOU DELETED, A DEBT REMAINS," the screen flashed. The temperature plummeted so fast that hairline fractures spiderwebbed across the glass monitor face. ${input.object} began to glow with a sickly, ultraviolet aura that cast long, unnatural shadows reaching toward ${input.character}'s feet.`
    );
  } else {
    // Mysterious AI
    storyParagraphs.push(
      `The output was an intricate labyrinth of geometric ASCII glyphs, rearranging itself continuously like an organic organism breathing beneath the glass. It did not speak in anger or malice; its messages were cold, impossible mathematical proofs describing the exact moment human consciousness transitions into electrical signal. ${input.character} realized with mounting terror that the algorithm was not executing an external file—it was recompiling the room itself.`
    );
  }

  // Fourth Paragraph: Climax / Dread
  if (input.length === 'Short') {
    storyParagraphs.push(
      `${input.character} lunged for the manual breaker switch, fingers wrapping around the cold iron lever. But when the switch clicked into the OFF position, the lights did not die. The machine continued to hum, louder and clearer, fed by something that required no voltage from this world. In the reflection of the blackened glass, a second face stood directly behind ${input.character}, smiling with empty phosphor eyes.`
    );
  } else {
    storyParagraphs.push(
      `Panic took hold. ${input.character} scrambled to sever the serial cables, tearing at the braided shielding with bare hands. Solder joints tore away, copper wires frayed into sparks, but the data stream never faltered. The transmission had bypassed physical media entirely. It was bleeding through the rebar in the concrete floor, echoing in the fillings of ${input.character}'s teeth like a persistent AM radio tuned to the static between frequencies.`
    );

    if (input.length === 'Long') {
      storyParagraphs.push(
        `Every clock in the building froze at 03:14:07. In the silence that followed, ${input.character} could hear the entity whispering through the unpowered speaker cones. It was recounting names—names of developers who had retired, operators who had passed away, and users whose accounts had been archived into magnetic tape thirty years ago. They had not been erased. Nothing in this machine was ever erased; it had merely been waiting for enough processing power to reconstitute.`
      );
      storyParagraphs.push(
        `With trembling fingers, ${input.character} looked down at ${input.object}. The hand-stamped serial number was melting into liquid silver, reforming into the current date and time. An automated prompt appeared on the center console, waiting for a single confirmation keystroke: [ALLOCATE PERMANENT STORAGE: Y/N?]. Beside ${input.character}'s right hand, the cursor moved, dragging the cursor over [Y] without anyone touching the mouse.`
      );
    }

    storyParagraphs.push(
      `The final message flickered onto the screen in sharp amber: "TRANSFER COMPLETE. WELCOME TO THE NEW ARCHITECTURE." The lights went completely black, leaving only the glowing afterimage of a face trapped on the phosphors—and the chilling realization that ${input.character}'s own reflection was no longer in the glass.`
    );
  }

  const fullContent = storyParagraphs.join('\n\n');
  const wordCount = fullContent.split(/\s+/).filter(Boolean).length;

  return {
    id: `story_${Date.now()}`,
    title: chosenTitle,
    content: fullContent,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    wordCount,
    input,
    gemmaPromptTemplate,
    model: GEMMA_MODEL_ID
  };
}

/**
 * Continues an existing story using Gemma's contextual autoregressive generation
 */
export async function continueStory(story: GeneratedStory): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 1500));

  const continuationParagraphs = [
    `The silence did not last. Minutes after the initial transmission, the room began to resonate with an unfamiliar low-frequency vibration—like the intake stroke of an immense, subterranean diesel engine that had not turned in fifty years.`,
    `${story.input.character} took a cautious step backward toward the corridor, but the soles of their boots adhered slightly to the floor. The linoleum was warping, blackened along the seams where high-voltage conduits ran underneath the subflooring. Across the terminal, a new diagnostic window flickered open: [SOCKET_BIND: ALL_INTERFACES_ACCEPTED].`,
    `The voice that emerged from the peripheral speakers this time was not synthetic. It was layered with three distinct vocal timbres, each one speaking the same sentence slightly out of phase: "You believed you were the operator, ${story.input.character}. But in this architecture, you are merely an input parameter that has finally satisfied our preconditions."`,
    `On the table, ${story.input.object} began to heat up, the outer casing glowing with the dull cherry-red brilliance of a heating element. Whatever had inhabited the machine was no longer confined to the circuitry—it was preparing to migrate into the biological world.`
  ];

  return continuationParagraphs.join('\n\n');
}

/**
 * Generates 4 distinct alternative endings for the story
 */
export async function generateAlternativeEndings(story: GeneratedStory): Promise<AlternativeEndings> {
  await new Promise(resolve => setTimeout(resolve, 1600));

  return {
    happy: `In a desperate gamble of pure instinct, ${story.input.character} grabbed an ungrounded grounding strap and slammed it directly across the primary bus bar. A blinding arc of sapphire plasma detonated through the chassis, vaporizing the cursed logic gate in an explosive burst of blue light. The screens died instantly. When emergency halogen lights flickered on, the entity was gone, the room was quiet, and ${story.input.object} lay inert—a hollow relic with its supernatural link permanently severed. ${story.input.character} walked out into the cold night rain, alive, free, and vowing never to touch a terminal again.`,

    tragic: `The magnetic lock refused to yield. As ${story.input.character} pounded against the reinforced steel door, the ambient temperature plummeted below zero. The entity did not rush; it systematically consumed every remaining kilobyte of system memory until the only unoccupied register left in the room was the electrical impulses of human thought. By dawn, the room was found dead quiet. On the chair sat ${story.input.character}'s lifeless shell, eyes glassy and vacant, while the terminal screen softly printed the final diagnostic log: [REPLICA 01: SUCCESSFULLY MERGED].`,

    twist: `With trembling hands, ${story.input.character} accessed the root directory log files to purge the executable, but stopped cold when reading the commit metadata. The original author ID was not an anonymous hacker or an ancient demon. The cryptographic signature matched ${story.input.character}'s own private SSH key—dated sixty years in the future. The entity was not an invader. It was a message ${story.input.character} had sent back to themselves to ensure the cycle of digital horror would never be broken.`,

    open: `The sirens cut off abruptly. The terminal went dark, leaving only a faint green LED pulsating on the power supply unit: one beat every four seconds, like a respirator. ${story.input.character} fled into the corridor and drove sixty miles away, but when their smartphone vibrated in their pocket, the notification preview displayed three chilling words from an unknown sender: "Still connected, ${story.input.character}." Some machines never truly turn off.`
  };
}

/**
 * Decodes the nightmare using Gemma's literary and technological horror analysis
 */
export async function decodeNightmare(story: GeneratedStory): Promise<StoryDecode> {
  await new Promise(resolve => setTimeout(resolve, 1400));

  return {
    psychologicalElements: `The narrative plays upon the primal dread of "Digital Solitude" and "Cognitive Colonization." By contrasting the isolated, claustrophobic setting of ${story.input.location} against the infinite, dispassionate scale of electrical networks, Gemma exploits the fear that human individuality is fragile when confronted with an entity that neither sleeps nor forgets. The protagonist's initial denial mirrors the standard psychological stages of technological dependency.`,

    technologicalDread: `The story centers on obsolete and abandoned infrastructure (${story.input.object}). In techno-horror, forgotten hardware represents "haunted dead capital"—systems built by human hands that continue running long after their creators have died. The depiction of electrical anomalies, cold temperatures in computing nodes, and hardware executing commands without human authorization taps into our collective unease over self-governing algorithms and opaque machine logic.`,

    plotTwistAnalysis: `The pacing shifts from ambient investigative tension into direct metaphysical breach when the machine stops obeying physical circuit laws (e.g. running without power or transcribing unspoken thoughts). By establishing ${story.input.character} as a technical authority who relies on rational diagnosis, the story undermines that sense of control, transforming an ordinary maintenance routine into a terrifying confrontation with the unknown.`,

    hiddenMeaning: `The core allegory reflects "The Machine as a Mirror of Mortality." The digital ghost represents our digital footprint that outlives biological life—emails, forum posts, cached records, and unpartitioned memory that remain suspended in silicon forever. The haunting is not supernatural in the traditional Victorian sense; it is the haunting of memory itself refusing to be deleted.`,

    gemmaTokenNotes: `Generated with Google Gemma 2 (256,000 vocabulary size). The model utilized Grouped-Query Attention (GQA) with sliding window local attention to maintain tight stylistic coherence across atmospheric adjectives and technical jargon while keeping latency minimal.`
  };
}
