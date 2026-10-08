import React from 'react';
import { ArrowUp, Github, Mail, Globe, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenGitHubGuide: () => void;
  onOpenPrintCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubGuide, onOpenPrintCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif-display text-xl font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.formalName}
            </span>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Assistant Professor in Department of Computer Engineering, Dr. D. Y. Patil Institute of Technology (DYPIT), Pimpri, Pune. Specializing in AI, Deep Learning, Cognitive Computing, and Cyber Security.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Savitribai Phule Pune University (SPPU) Affiliated Institution
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-white transition-colors">Academic Profile</a>
              <a href="#patents" className="hover:text-white transition-colors">23 Patents</a>
              <a href="#publications" className="hover:text-white transition-colors">Publications (45+)</a>
              <a href="#book" className="hover:text-white transition-colors">Textbook & IPR</a>
              <a href="#experience" className="hover:text-white transition-colors">Career Timeline</a>
              <a href="#teaching" className="hover:text-white transition-colors">Courses Taught</a>
            </div>
          </div>

          {/* Static Export & Actions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              GitHub Pages & CV
            </h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenGitHubGuide}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer text-left"
              >
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>GitHub Pages Export Guide</span>
              </button>

              <button
                onClick={onOpenPrintCV}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer text-left"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Printable Curriculum Vitae</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.formalName}. All rights reserved. Designed for static GitHub Pages hosting.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
