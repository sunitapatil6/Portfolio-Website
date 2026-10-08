import React, { useState } from 'react';
import { Download, Menu, X, Globe, FileText, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenGitHubGuide: () => void;
  onOpenPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGitHubGuide, onOpenPrintCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Patents (23)', href: '#patents' },
    { label: 'Publications', href: '#publications' },
    { label: 'Book & IPR', href: '#book' },
    { label: 'Experience', href: '#experience' },
    { label: 'Teaching & FDP', href: '#teaching' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text wordmark */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-900 transition-colors">
              {PORTFOLIO_DATA.personal.formalName}
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-normal hidden sm:block">
              Asst. Professor · Dept. of Computer Engineering, DYPIT
            </span>
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGitHubGuide}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              title="GitHub Pages static deployment guide & export"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>GitHub Pages</span>
            </button>

            <button
              onClick={onOpenPrintCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              title="View and download complete printable Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-200" />
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPrintCV}
              className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <Globe className="w-4 h-4 text-indigo-600" />
              GitHub Pages Export
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-indigo-900 rounded-lg"
            >
              <Download className="w-4 h-4" />
              Download / Print Resume (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
