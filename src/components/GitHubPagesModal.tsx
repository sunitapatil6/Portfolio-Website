import React, { useState } from 'react';
import { X, Globe, Copy, Check, Download, Terminal, FolderGit2, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface GitHubPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubPagesModal: React.FC<GitHubPagesModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const gitCommands = `# 1. Add and commit all files including the new GitHub workflow and dist
git add .
git commit -m "Fix GitHub Pages blank screen with relative paths and workflow"

# 2. Push to your GitHub repository
git push origin main`;

  const handleDownloadStaticHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${PORTFOLIO_DATA.personal.formalName} | Academic & Research Portfolio</title>
  <meta name="description" content="${PORTFOLIO_DATA.personal.bioSummary}">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 antialiased">
  <div class="max-w-5xl mx-auto px-6 py-12">
    <header class="border-b border-slate-200 pb-8 mb-8">
      <div class="text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-2">Department of Computer Engineering · DYPIT Pimpri Pune</div>
      <h1 class="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-3">${PORTFOLIO_DATA.personal.formalName}</h1>
      <p class="text-lg text-slate-700 font-medium mb-4">${PORTFOLIO_DATA.personal.title}</p>
      <p class="text-sm text-slate-600 max-w-3xl leading-relaxed">${PORTFOLIO_DATA.personal.bioSummary}</p>
      <div class="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
        <span>Email: <strong>${PORTFOLIO_DATA.personal.primaryEmail}</strong></span>
        <span>·</span>
        <span>Phone: <strong>${PORTFOLIO_DATA.personal.phoneNumbers.join(', ')}</strong></span>
        <span>·</span>
        <span>Address: ${PORTFOLIO_DATA.personal.address}</span>
      </div>
    </header>

    <section class="mb-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Intellectual Property (23 Published Patents)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${PORTFOLIO_DATA.patents.map(p => `
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <div class="text-xs text-indigo-900 font-semibold mb-1">${p.category} · App #${p.appNumber}</div>
            <div class="font-bold text-slate-900 text-sm mb-1">${p.title}</div>
            <div class="text-xs text-slate-600 mb-2">${p.summary || ''}</div>
            <div class="text-[11px] text-slate-400">Published: ${p.publicationDate}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="mb-12">
      <h2 class="font-serif text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">Selected Research Publications</h2>
      <div class="space-y-3">
        ${PORTFOLIO_DATA.publications.slice(0, 15).map(pub => `
          <div class="bg-white p-4 rounded-xl border border-slate-200">
            <div class="text-xs text-indigo-900 font-medium mb-1">${pub.type === 'journal' ? 'Journal' : 'Conference'} · ${pub.year} ${pub.indexing ? '· ' + pub.indexing.join(' · ') : ''}</div>
            <div class="font-bold text-slate-900 text-sm">${pub.title}</div>
            <div class="text-xs text-slate-600 mt-1">${pub.venue}</div>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-indigo-900">
              <Globe className="w-5 h-5 text-indigo-700" />
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Fixing Blank Screen & GitHub Pages Setup
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Why your site was blank on GitHub and how to fix it in 2 simple steps.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-md cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6">
          
          {/* Solution 1: The #1 Reason for Blank Screen */}
          <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-950">
                  Why your page looked blank on GitHub:
                </h4>
                <div className="text-xs text-amber-900 mt-1 space-y-1.5">
                  <p>
                    <strong>Reason 1 (Fixed!):</strong> Vite was looking for files at the root domain (<code className="bg-white px-1 py-0.5 rounded text-slate-800">/assets/</code>) instead of your GitHub repository subfolder (<code className="bg-white px-1 py-0.5 rounded text-slate-800">./assets/</code>). I have now updated <code className="font-mono bg-white px-1 py-0.5 rounded">vite.config.ts</code> with <code className="font-bold text-emerald-800">base: './'</code> so all links are relative and work everywhere!
                  </p>
                  <p>
                    <strong>Reason 2 (Action needed in GitHub):</strong> GitHub Pages must be configured to use <strong>GitHub Actions</strong> instead of trying to run raw unbuilt TypeScript files directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Fix in GitHub in 1 Minute */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              How to Fix Your GitHub Pages Settings:
            </h4>

            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                <div>
                  <strong>Open your GitHub Repository:</strong> Go to your repo on <a href="https://github.com" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">GitHub.com</a>.
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                <div>
                  Click on <strong>Settings</strong> (top tab) → on the left sidebar, click <strong>Pages</strong>.
                </div>
              </div>

              <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                <div>
                  Under <strong>Build and deployment &gt; Source</strong>, click the dropdown and select:
                  <div className="mt-1 font-bold text-emerald-900 text-sm">
                    ✨ GitHub Actions
                  </div>
                  <div className="text-emerald-800 text-[11px] mt-0.5">
                    (Do NOT choose "Deploy from a branch"). Because we added <code className="font-mono bg-white px-1 rounded">.github/workflows/deploy.yml</code>, GitHub Actions will now automatically build and publish your site with zero blank screens!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Push changes command */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800">
                Push the latest fixes to GitHub:
              </span>
              <button
                onClick={() => handleCopy(gitCommands, 'git')}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                {copiedKey === 'git' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Commands</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-2.5 bg-slate-900 text-slate-100 rounded text-[11px] font-mono overflow-x-auto select-all">
              {gitCommands}
            </pre>
          </div>

          {/* Alternative: Instant Standalone Single File index.html */}
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-700" />
                Quickest Alternative: Standalone single-file index.html
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                If you prefer not to use build tools, download this all-in-one <code className="font-mono text-indigo-900">index.html</code> file. You can simply upload it directly to your GitHub repository and it will render immediately!
              </p>
            </div>
            <button
              onClick={handleDownloadStaticHTML}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download index.html</span>
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
