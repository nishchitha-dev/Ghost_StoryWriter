import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoryGenerator } from './components/StoryGenerator';
import { StoryViewer } from './components/StoryViewer';
import { Features } from './components/Features';
import { GemmaArchitecture } from './components/GemmaArchitecture';
import { DeployModal } from './components/DeployModal';
import { Footer } from './components/Footer';
import { StoryInput, GeneratedStory } from './types';
import { generateStory } from './services/gemmaEngine';
import { AlertCircle } from 'lucide-react';

export default function App() {
  const [currentStory, setCurrentStory] = useState<GeneratedStory | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState<boolean>(false);

  const generatorRef = useRef<HTMLDivElement>(null);
  const storyViewerRef = useRef<HTMLDivElement>(null);

  const scrollToGenerator = () => {
    const el = document.getElementById('generator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGemma = () => {
    const el = document.getElementById('inside-machine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGenerateStory = async (input: StoryInput) => {
    setIsGenerating(true);
    setErrorMessage(null);
    try {
      const story = await generateStory(input);
      setCurrentStory(story);

      // Scroll to viewer smoothly
      setTimeout(() => {
        storyViewerRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'The neural connection to Gemma was interrupted. Please try again.';
      setErrorMessage(msg);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleResetStory = () => {
    setCurrentStory(null);
    scrollToGenerator();
  };

  return (
    <div className="min-h-screen bg-[#05040a] text-slate-100 selection:bg-purple-600 selection:text-white flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <Navbar 
          onScrollToGenerator={scrollToGenerator} 
          onOpenDeployModal={() => setIsDeployModalOpen(true)} 
        />

        {/* Hero Section */}
        <Hero 
          onScrollToGenerator={scrollToGenerator}
          onScrollToGemma={scrollToGemma}
        />

        {/* Global Error Banner */}
        {errorMessage && (
          <div className="max-w-4xl mx-auto px-4 my-4">
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/80 text-rose-200 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <div>{errorMessage}</div>
            </div>
          </div>
        )}

        {/* Story Viewer (if a story has been summoned) */}
        {currentStory && (
          <div ref={storyViewerRef}>
            <StoryViewer 
              story={currentStory} 
              onReset={handleResetStory} 
            />
          </div>
        )}

        {/* Generator Form */}
        <div ref={generatorRef}>
          <StoryGenerator 
            onGenerate={handleGenerateStory}
            isGenerating={isGenerating}
          />
        </div>

        {/* Features Bento Grid */}
        <Features />

        {/* Inside the Ghost Machine / Architecture */}
        <GemmaArchitecture />
      </div>

      {/* Footer */}
      <Footer 
        onScrollToGenerator={scrollToGenerator}
        onOpenDeployModal={() => setIsDeployModalOpen(true)}
      />

      {/* Deploy & GitHub Modal */}
      <DeployModal 
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
