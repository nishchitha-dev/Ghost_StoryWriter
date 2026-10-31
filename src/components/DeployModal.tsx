import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  Check, 
  Copy, 
  Server, 
  Github, 
  ExternalLink,
  ShieldCheck,
  FileCode
} from 'lucide-react';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const renderBlueprintCode = `services:
  - type: web
    name: ghostwriter-gemma-ai
    env: python
    region: oregon
    plan: free
    buildCommand: "pip install -r requirements.txt"
    startCommand: "gunicorn app:app --bind 0.0.0.0:$PORT"
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.8
      - key: FLASK_ENV
        value: production
      - key: GEMMA_MODEL
        value: google/gemma-2-9b-it`;

  const bashInstallCode = `# 1. Clone repository
git clone https://github.com/your-username/ghostwriter.git
cd ghostwriter

# 2. Set up Python virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# 3. Install Flask & Gemma dependencies
pip install -r requirements.txt

# 4. Start local Flask backend (Binds to 0.0.0.0:5000)
python3 app.py`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="max-w-3xl w-full bg-[#0a0816] border border-purple-500/40 rounded-2xl p-6 sm:p-8 card-glow-purple shadow-2xl relative my-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-950/80 pb-4">
          <div className="flex items-center gap-2.5">
            <Server className="w-5 h-5 text-orange-400" />
            <div>
              <h3 className="text-lg font-bold text-white font-display">Render & GitHub Deployment Guide</h3>
              <p className="text-xs text-slate-400">Ready for Hacktoberfest submission</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview banner */}
        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs sm:text-sm text-purple-200/90 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>100% Turnkey Deployment:</strong> All required files (<code className="text-orange-300">app.py</code>, <code className="text-orange-300">requirements.txt</code>, <code className="text-orange-300">render.yaml</code>, <code className="text-orange-300">README.md</code>, <code className="text-orange-300">LICENSE</code>) are created in the project root. The Flask server automatically adapts to Render’s dynamic <code className="text-orange-300">$PORT</code> variable.
          </div>
        </div>

        {/* Step-by-Step Render instructions */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-300 text-xs flex items-center justify-center font-mono-code">1</span>
            <span>Deploy to Render in 3 Steps</span>
          </h4>
          
          <ol className="list-decimal list-inside text-xs sm:text-sm text-slate-300 space-y-2 pl-2">
            <li>
              Push this repository to your GitHub account: <code className="text-purple-300">git push origin main</code>
            </li>
            <li>
              Log into <a href="https://render.com" target="_blank" rel="noreferrer" className="text-orange-400 underline hover:text-orange-300 inline-flex items-center gap-1">Render.com <ExternalLink className="w-3 h-3" /></a> and click <strong>New +</strong> → <strong>Blueprint</strong>.
            </li>
            <li>
              Select your GitHub repository. Render will automatically detect <code className="text-purple-300">render.yaml</code>, install all dependencies, and deploy the service to a live HTTPS URL!
            </li>
          </ol>
        </div>

        {/* Code Snippet: render.yaml */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span className="flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-purple-400" />
              <span>render.yaml (Blueprint Specification)</span>
            </span>
            <button
              onClick={() => handleCopy(renderBlueprintCode, 'render')}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
            >
              {copiedSection === 'render' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'render' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-3.5 rounded-xl bg-black/90 border border-slate-800 text-xs font-mono-code text-slate-300 overflow-x-auto">
            {renderBlueprintCode}
          </pre>
        </div>

        {/* Code Snippet: Local Run */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-orange-400" />
              <span>Local Quickstart (Python Flask Backend)</span>
            </span>
            <button
              onClick={() => handleCopy(bashInstallCode, 'bash')}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors"
            >
              {copiedSection === 'bash' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'bash' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="p-3.5 rounded-xl bg-black/90 border border-slate-800 text-xs font-mono-code text-slate-300 overflow-x-auto">
            {bashInstallCode}
          </pre>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-purple-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono-code">MIT Licensed · Open Source</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};
