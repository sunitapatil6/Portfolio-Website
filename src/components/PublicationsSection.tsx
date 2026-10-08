import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Quote, Award, BookOpen, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, Publication } from '../data/portfolioData';

interface PublicationsSectionProps {
  onSelectCitation: (publication: Publication) => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onSelectCitation }) => {
  const [filterType, setFilterType] = useState<'all' | 'journal' | 'conference' | 'highlight'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPublications = useMemo(() => {
    return PORTFOLIO_DATA.publications.filter((pub) => {
      const matchesFilter =
        filterType === 'all' ||
        (filterType === 'highlight' ? pub.highlight : pub.type === filterType);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pub.title.toLowerCase().includes(q) ||
        pub.venue.toLowerCase().includes(q) ||
        pub.year.toString().includes(q) ||
        (pub.indexing && pub.indexing.some((idx) => idx.toLowerCase().includes(q)));

      return matchesFilter && matchesSearch;
    });
  }, [filterType, searchQuery]);

  const journalCount = PORTFOLIO_DATA.publications.filter((p) => p.type === 'journal').length;
  const confCount = PORTFOLIO_DATA.publications.filter((p) => p.type === 'conference').length;
  const highlightCount = PORTFOLIO_DATA.publications.filter((p) => p.highlight).length;

  return (
    <section id="publications" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
              Research & Scholarly Output
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Publications & Conference Proceedings ({PORTFOLIO_DATA.publications.length})
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Spanning high-impact Elsevier Q1 journals (MethodsX), IEEE international proceedings, Scopus, Web of Science, and UGC care indexed literature in deep neural models and cognitive healthcare.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <span>Google Scholar Profile</span>
            </a>
          </div>
        </div>

        {/* Filter controls */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Segmented Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filterType === 'all'
                    ? 'bg-indigo-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                All Papers ({PORTFOLIO_DATA.publications.length})
              </button>
              
              <button
                onClick={() => setFilterType('journal')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filterType === 'journal'
                    ? 'bg-indigo-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                Journals ({journalCount})
              </button>

              <button
                onClick={() => setFilterType('conference')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filterType === 'conference'
                    ? 'bg-indigo-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                Conferences ({confCount})
              </button>

              <button
                onClick={() => setFilterType('highlight')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filterType === 'highlight'
                    ? 'bg-indigo-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                ★ Highlights & Q1 ({highlightCount})
              </button>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search publication title, DOI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-700 text-slate-900"
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

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-12 text-center">
            <Filter className="w-8 h-8 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No publications found</h3>
            <p className="text-xs text-slate-500 mt-1">Try another keyword or filter criteria.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPublications.map((pub, idx) => (
              <div
                key={pub.id}
                className={`p-5 rounded-xl border transition-all ${
                  pub.highlight
                    ? 'bg-indigo-50/20 border-indigo-200/80 hover:border-indigo-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    
                    {/* Unboxed Metadata (Zero pill discipline) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-indigo-900 capitalize">
                        {pub.type === 'journal' ? 'Journal Article' : 'Conference Proceeding'}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums text-slate-700 font-medium">{pub.year}</span>
                      
                      {pub.indexing && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-600 font-medium">
                            {pub.indexing.join(' · ')}
                          </span>
                        </>
                      )}

                      {pub.highlight && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-amber-700 font-semibold flex items-center gap-1">
                            <Award className="w-3.5 h-3.5" />
                            Featured Research
                          </span>
                        </>
                      )}
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Venue & Authors */}
                    <div className="text-xs sm:text-sm text-slate-700 font-medium mt-1.5">
                      <span className="text-slate-500">Author:</span> Sunita Ramesh Patil <span className="text-slate-400">·</span> <em className="text-slate-800">{pub.venue}</em>
                    </div>

                    {pub.details && (
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {pub.details}
                      </p>
                    )}

                    {/* DOI reference */}
                    {pub.doi && (
                      <div className="text-xs font-mono text-slate-500 mt-2">
                        DOI: <span className="text-slate-700">{pub.doi}</span>
                      </div>
                    )}
                  </div>

                  {/* Actions: Cite & Direct URL */}
                  <div className="flex items-center md:flex-col gap-2 shrink-0 md:pt-1">
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-indigo-900 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors"
                      >
                        <span>View Document</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectCitation(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                      title="Generate APA / IEEE / BibTeX"
                    >
                      <Quote className="w-3 h-3 text-slate-500" />
                      <span>Cite</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
