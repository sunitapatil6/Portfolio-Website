import React, { useState } from 'react';
import { X, Copy, Check, Quote } from 'lucide-react';
import { Publication } from '../data/portfolioData';

interface CitationModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const CitationModal: React.FC<CitationModalProps> = ({ publication, onClose }) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!publication) return null;

  const apaCitation = `Patil, S. R. (${publication.year}). ${publication.title}. ${publication.venue}.${publication.doi ? ` https://doi.org/${publication.doi}` : ''}`;
  
  const ieeeCitation = `S. R. Patil, "${publication.title}," ${publication.venue}, ${publication.year}${publication.doi ? `, doi: ${publication.doi}` : ''}.`;
  
  const bibtexKey = `patil${publication.year}${publication.title.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}`;
  const bibtexCitation = `@${publication.type === 'journal' ? 'article' : 'inproceedings'}{${bibtexKey},
  author    = {Patil, Sunita Ramesh},
  title     = {${publication.title}},
  ${publication.type === 'journal' ? 'journal' : 'booktitle'} = {${publication.venue}},
  year      = {${publication.year}}${publication.doi ? `,\n  doi       = {${publication.doi}}` : ''}${publication.url ? `,\n  url       = {${publication.url}}` : ''}
}`;

  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-xl border border-slate-200 relative my-8">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-indigo-900">
            <Quote className="w-5 h-5 text-indigo-700" />
            <h3 className="font-serif-display text-lg font-bold text-slate-900">
              Cite Publication
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-md cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Paper title */}
        <p className="mt-4 text-xs font-semibold text-slate-800 leading-snug">
          {publication.title}
        </p>
        <p className="text-[11px] text-slate-500 mt-1">
          {publication.venue} ({publication.year})
        </p>

        {/* Citation Formats */}
        <div className="mt-5 space-y-4">
          
          {/* IEEE */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-700">IEEE Format</span>
              <button
                onClick={() => copyToClipboard(ieeeCitation, 'ieee')}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                {copiedFormat === 'ieee' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono text-slate-700 select-all leading-relaxed bg-white p-2.5 rounded border border-slate-200/60">
              {ieeeCitation}
            </p>
          </div>

          {/* APA */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-700">APA 7th Edition</span>
              <button
                onClick={() => copyToClipboard(apaCitation, 'apa')}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                {copiedFormat === 'apa' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono text-slate-700 select-all leading-relaxed bg-white p-2.5 rounded border border-slate-200/60">
              {apaCitation}
            </p>
          </div>

          {/* BibTeX */}
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-700">BibTeX Format</span>
              <button
                onClick={() => copyToClipboard(bibtexCitation, 'bibtex')}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-indigo-700 hover:text-indigo-900 cursor-pointer"
              >
                {copiedFormat === 'bibtex' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-[11px] font-mono text-slate-700 select-all leading-relaxed bg-white p-2.5 rounded border border-slate-200/60 overflow-x-auto">
              {bibtexCitation}
            </pre>
          </div>

        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
