import React, { useState } from 'react';
import { X, Globe, Copy, Check, Download, Terminal, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';
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

  const gitCommands = `# 1. Initialize git and commit files
git init
git add .
git commit -m "Add Sunita Patil academic portfolio website"

# 2. Add your GitHub repository (replace with your GitHub username)
# If repo name is <username>.github.io, it will be hosted at https://<username>.github.io/
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git

# 3. Push to GitHub
git push -u origin main`;

  const githubActionsYaml = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  // Function to download a ready-to-run static HTML file
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
    a.download = 'sunita-patil-portfolio.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-indigo-900">
              <Globe className="w-5 h-5 text-indigo-700" />
              <h3 className="font-serif-display text-xl font-bold text-slate-900">
                Static Pages & GitHub Pages Deployment Guide
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              This portfolio is completely static and optimized to run directly on GitHub Pages with zero server dependencies.
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
          
          {/* Quick Action: Download Static Standalone HTML */}
          <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Download className="w-4 h-4 text-indigo-700" />
                Standalone Static HTML File
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Download an all-in-one HTML file containing your full portfolio that opens in any browser or can be directly committed as <code className="text-indigo-900 font-mono">index.html</code>.
              </p>
            </div>
            <button
              onClick={handleDownloadStaticHTML}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Static HTML</span>
            </button>
          </div>

          {/* Method 1: Standard GitHub Pages via Git */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-slate-700" />
              How to Publish on GitHub Pages in 3 Steps:
            </h4>
            
            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">1</span>
                <div>
                  <strong>Create a new GitHub Repository:</strong> Go to <a href="https://github.com/new" target="_blank" rel="noreferrer" className="text-indigo-700 hover:underline">github.com/new</a> and create a repository named <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-indigo-900 font-bold">&lt;your-username&gt;.github.io</code> (or any repo name like <code className="font-mono">portfolio</code>).
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">2</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <strong>Push your code using Git terminal commands:</strong>
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
              </div>

              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center font-bold text-[11px] shrink-0">3</span>
                <div>
                  <strong>Turn on GitHub Pages:</strong> In your GitHub repository, click <strong>Settings</strong> → <strong>Pages</strong> → Under <em>Build and deployment Source</em>, select <strong>GitHub Actions</strong> (or Deploy from branch <code className="font-mono text-slate-800">gh-pages</code> / <code className="font-mono text-slate-800">main</code>).
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Actions Workflow file */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                Optional: Automated GitHub Actions Workflow (.github/workflows/deploy.yml)
              </h4>
              <button
                onClick={() => handleCopy(githubActionsYaml, 'yaml')}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                {copiedKey === 'yaml' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied YAML</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy YAML</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-3 bg-slate-900 text-slate-100 rounded-xl text-[11px] font-mono overflow-x-auto max-h-48 select-all">
              {githubActionsYaml}
            </pre>
          </div>

          {/* Passport Photo Guidance */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
            <h5 className="font-bold text-slate-900 mb-1">Using your uploaded photo on GitHub:</h5>
            <p>
              Your uploaded photo is already integrated into the portfolio design. If you wish to replace it at any time in the future, simply copy your photo file to <code className="font-mono text-indigo-900 bg-white px-1 py-0.5 rounded border border-slate-200">public/profile.jpg</code> and commit to GitHub!
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
