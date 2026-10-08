import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, ShieldCheck, Calendar, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Patent } from '../data/portfolioData';

export const PatentsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedAppId, setCopiedAppId] = useState<string | null>(null);

  const categories = [
    'All',
    'Healthcare & AI',
    'Vision & Biometrics',
    'Cybersecurity & Systems',
    'IoT & Smart Tech',
    'Robotics & Assistive',
  ];

  const handleCopyAppNumber = (appNo: string) => {
    navigator.clipboard.writeText(appNo);
    setCopiedAppId(appNo);
    setTimeout(() => setCopiedAppId(null), 2000);
  };

  const filteredPatents = useMemo(() => {
    return PORTFOLIO_DATA.patents.filter((patent) => {
      const matchesCategory =
        selectedCategory === 'All' || patent.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        patent.title.toLowerCase().includes(q) ||
        patent.appNumber.toLowerCase().includes(q) ||
        (patent.summary && patent.summary.toLowerCase().includes(q)) ||
        patent.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="patents" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
              Intellectual Property Portfolio
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Published Patents ({PORTFOLIO_DATA.patents.length})
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              23 officially published patents filed with the Indian Patent Office, demonstrating applied research in AI diagnostics, assistive technologies, biometric security, and smart networks.
            </p>
          </div>

          {/* Quick patent stat badge */}
          <div className="shrink-0 flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-medium text-slate-500">Patent Office Status</div>
              <div className="text-sm font-bold text-slate-900">23 Published In Official Journal</div>
            </div>
          </div>
        </div>

        {/* Controls: Category Filter & Live Search */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Interactive Category Tabs (Buttons, no pills) */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? PORTFOLIO_DATA.patents.length
                    : PORTFOLIO_DATA.patents.filter((p) => p.category === cat).length;
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-indigo-900 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search patent title, application #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:bg-white text-slate-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Patents Grid */}
        {filteredPatents.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <Filter className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No matching patents found</h3>
            <p className="text-xs text-slate-500 mt-1">Try adjusting your keyword or selecting a different category filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPatents.map((patent) => (
              <div
                key={patent.id}
                className="bg-white rounded-xl p-5 border border-slate-200/90 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Metadata Header: Category and Serial Index (No pill enclosures) */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span className="font-medium text-indigo-900">{patent.category}</span>
                    <span className="font-mono tabular-nums text-slate-400">#{patent.id.toString().padStart(2, '0')}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-base font-bold text-slate-900 leading-snug mb-3 min-h-12">
                    {patent.title}
                  </h3>

                  {/* Summary */}
                  {patent.summary && (
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {patent.summary}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {/* Application Number with Copy trigger */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">App No:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-medium text-slate-800 tabular-nums">
                        {patent.appNumber}
                      </span>
                      <button
                        onClick={() => handleCopyAppNumber(patent.appNumber)}
                        className="p-1 text-slate-400 hover:text-indigo-700 rounded transition-colors cursor-pointer"
                        title="Copy Application Number"
                      >
                        {copiedAppId === patent.appNumber ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Dates Row */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Filed: <strong className="font-normal text-slate-700">{patent.filingDate}</strong></span>
                    <span>Published: <strong className="font-normal text-emerald-700">{patent.publicationDate}</strong></span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Footer note on patent filing records */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Source: Official Patent Office Journal (Govt. of India, Controller General of Patents, Designs & Trade Marks) · All application numbers verified.
        </div>

      </div>
    </section>
  );
};
