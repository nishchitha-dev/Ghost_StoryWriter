export type StoryMood = 
  | 'Mysterious' 
  | 'Terrifying' 
  | 'Psychological Horror' 
  | 'Supernatural' 
  | 'Sci-Fi Horror' 
  | 'Dark Comedy';

export type StoryLength = 'Short' | 'Medium' | 'Long';

export type StoryPersonality = 
  | 'Friendly Ghost' 
  | 'Evil Digital Spirit' 
  | 'Mysterious AI' 
  | 'Revenge-Seeking Entity';

export interface StoryInput {
  idea: string;
  character: string;
  location: string;
  object: string;
  mood: StoryMood;
  length: StoryLength;
  personality: StoryPersonality;
}

export interface GeneratedStory {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  wordCount: number;
  input: StoryInput;
  gemmaPromptTemplate: string;
  model: string;
}

export interface AlternativeEndings {
  happy: string;
  tragic: string;
  twist: string;
  open: string;
}

export interface StoryDecode {
  psychologicalElements: string;
  technologicalDread: string;
  plotTwistAnalysis: string;
  hiddenMeaning: string;
  gemmaTokenNotes: string;
}

export interface StoryPreset {
  name: string;
  tagline: string;
  input: StoryInput;
}
