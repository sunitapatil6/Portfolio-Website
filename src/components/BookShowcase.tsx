import React from 'react';
import { BookOpen, ShieldCheck, CheckCircle2, Bookmark, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BOOK_COVER_URL } from '../assets/images';

export const BookShowcase: React.FC = () => {
  return (
    <section id="book" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Book Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Book Cover Visual (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 sm:w-64 aspect-3/4 rounded-xl shadow-lg overflow-hidden border border-slate-200 bg-slate-900 relative group">
                <img
                  src={BOOK_COVER_URL}
                  alt={`Book cover of ${PORTFOLIO_DATA.book.title} by ${PORTFOLIO_DATA.personal.name}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="h-full flex flex-col justify-between p-6 bg-slate-900 text-white">
                          <div class="text-xs text-indigo-300">SPPU Course 2019 Pattern</div>
                          <div>
                            <div class="text-xl font-bold font-serif-display">${PORTFOLIO_DATA.book.title}</div>
                            <div class="text-xs text-slate-300 mt-2">${PORTFOLIO_DATA.personal.name}</div>
                          </div>
                          <div class="text-[11px] text-slate-400">Technical Publication</div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>

            {/* Book Curriculum & Metadata (8 cols) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
                <Bookmark className="w-4 h-4 text-indigo-700" />
                <span>Published Academic Textbook</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
                {PORTFOLIO_DATA.book.title}
              </h2>

              <p className="text-sm font-medium text-indigo-900 mb-4">
                {PORTFOLIO_DATA.book.courseSpecification} · Savitribai Phule Pune University
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {PORTFOLIO_DATA.book.description}
              </p>

              {/* Publication Specs Strip (Unboxed metadata with separators) */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pb-6 mb-6 border-b border-slate-100">
                <div>
                  <span className="text-slate-400">Publisher:</span>{' '}
                  <strong className="text-slate-900 font-semibold">{PORTFOLIO_DATA.book.publisher}</strong>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div>
                  <span className="text-slate-400">ISBN:</span>{' '}
                  <span className="font-mono text-slate-900 font-semibold tabular-nums">{PORTFOLIO_DATA.book.isbn}</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div>
                  <span className="text-slate-400">Release:</span>{' '}
                  <span className="text-slate-900 font-medium">{PORTFOLIO_DATA.book.publicationDate}</span>
                </div>
              </div>

              {/* Core Syllabus Modules */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Core Engineering Modules Covered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {PORTFOLIO_DATA.book.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Govt Registered Copyrights Section */}
        <div>
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-1">
              Government Intellectual Property Registrations
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-slate-900 tracking-tight">
              Registered Copyrights ({PORTFOLIO_DATA.copyrights.length})
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Protected literary works and computer algorithmic implementations registered with the Copyright Office, Government of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.copyrights.map((copy, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="text-indigo-900 font-semibold">{copy.category}</span>
                    <span className="font-mono tabular-nums text-slate-600">{copy.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                    {copy.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  <div className="text-xs flex items-center justify-between">
                    <span className="text-slate-500">Diary / Reg No:</span>
                    <span className="font-mono text-slate-800 font-semibold">{copy.regNumber}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {copy.govtBody}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
